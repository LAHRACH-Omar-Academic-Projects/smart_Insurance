//Import librairies
import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SwipeableFlatList } from 'react-native-swipeable-flat-list';
import normalize from 'react-native-normalize';
import { Actions } from 'react-native-router-flux';
import Loader from '../../Components/Loader';
//Import firebase database
import firebase from '../../database/firebaseDb';
//Import components
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import ToggleButton from '../../Components/ToggleButton/ToggleButton';
import FooterButton from '../../Components/FooterButton/FooterButton';
//Import styles
import { styles } from './styles';
//Import icones
import AddIcon from 'react-native-vector-icons/MaterialIcons';
import WitnessesIcon from 'react-native-vector-icons/Entypo';
import DeleteIcon from 'react-native-vector-icons/FontAwesome';
import EditIcon from 'react-native-vector-icons/FontAwesome5';

//Main component
export default Witnesses = (props) => {
    //Loader state
    const [isLoading, setIsLoading] = useState(false);
    //Data state
    const [data, setData] = useState([]);
    //Toggle button state
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    //Database reference
    //Get userId
    const getUserId = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = dd + '-' + mm + '-' + yyyy;
        var id = firebase.auth().currentUser.uid + "_" + today;
        return id;
    }
    const dbRef = firebase.firestore().collection('Témoin').doc(getUserId()).collection('les témoins');
    //Get Wintnesses data from firebase/firestore
    const getData = () => {
        const newData = [];
        dbRef.get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    newData.push({ key: doc.id, fullName: doc.data().Prénome + " " + doc.data().Nom, phone: doc.data().Téléphone })
                });
                setData(newData);
            })
            .catch((err) => {
                console.log('Error getting documents', err);
            });
    }
    const delWitnesse = (item) => {
        setIsLoading(true)
        dbRef.doc(item.key.toString()).delete();
        setTimeout(() => {
            setIsLoading(false)
            getData();
        }, 1500);
    }
    const updateWitnesse = (item) => {
        goToNewWitnessePage(item.key.toString());
    }
    useEffect(() => {
        if (props.addMore)
            toggleSwitch()
        getData()
    }, []);
    //Redirection functions
    const goToDamagePage = () => {
        Actions.damage();
    }
    const goToNewWitnessePage = (param) => {
        Actions.newWitnesse({ keyName: data.length, updatedKey: param });
    }
    return (
        <View style={styles.container}>
            <Loader loading={isLoading} />
            <ProgressBar level={0.4} />
            <ToggleButton text={'Y a-t-il des témoins?'} isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
            <View style={styles.listContainer}>
                <View>
                    {data.length == 0
                    ? <Text style={styles.text}>Aucun témoin</Text>
                    : <Text style={styles.text}>Vous avez les témoins suivants :</Text>
                    }
                    <SwipeableFlatList
                        data={data}
                        keyExtractor={(item) => `${item.key}`}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => console.log('pressed TouchableOpacity')}
                                style={styles.listItem}>
                                <View style={styles.iconContainer}>
                                    <WitnessesIcon name='user' color='#F45' size={normalize(35)} />
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.text1}>{item.fullName}</Text>
                                    <Text style={styles.text2}>{item.phone}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        renderLeft={({ item }) => (
                            <TouchableOpacity style={styles.rightIconContainer} onPress={() => delWitnesse(item)}>
                                <DeleteIcon name='trash' color='white' size={normalize(35)} />
                            </TouchableOpacity>
                        )}
                        renderRight={({ item }) => (
                            <TouchableOpacity style={styles.leftIconContainer} onPress={() => updateWitnesse(item)}>
                                <EditIcon name='user-edit' color='white' size={normalize(25)} />
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={isEnabled ? styles.enabledButton : styles.disabledButton} disabled={!isEnabled} onPress={() => goToNewWitnessePage('')}>
                    <AddIcon name='add' color='white' size={25} />
                </TouchableOpacity>
            </View>
            <FooterButton goTo={goToDamagePage} text={'SUIVANT'} isEnabled={true} />
        </View>
    );
}


