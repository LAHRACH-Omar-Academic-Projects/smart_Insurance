//Import librairies
import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { Kohana } from 'react-native-textinput-effects';
import { Actions } from 'react-native-router-flux';
import Loader from '../../Components/Loader';
//Import firebase database
import firebase from '../../database/firebaseDb';
//Import components
import FooterButton from '../../Components/FooterButton/FooterButton';
//Import styles
import { styles } from './styles';
//Import icones
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

//Main component
export default NewWitnesses = (props) => {
    //Loader state
    const [isLoading, setIsLoading] = useState(false);
    //Database reference
    const dbRef = firebase.firestore().collection('Témoin');
    //Input state
    const [firstName, setFirstName] = useState('');
    const [lastName, setLasttName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [postalCode, setPostalCode] = useState('');
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
    //Get Wintnesses data from firebase/firestore
    const getData = (updatedKey) => {
        dbRef.doc(getUserId()).collection('les témoins').doc(updatedKey).get()
            .then((res) => {
                const witnesse = res.data();
                console.log(witnesse)
                setFirstName(witnesse.Prénome);
                setLasttName(witnesse.Nom);
                setStreet(witnesse.Rue);
                setCity(witnesse.Ville);
                setPhone(witnesse.Téléphone);
                setPostalCode(witnesse.CodePostal);
                setMail(witnesse.Email);
            })
            .catch((err) => {
                console.log('Error getting documents', err);
            });
    }
    useEffect(() => {
        if (props.updatedKey !== '') {
            getData(props.updatedKey)
        }
    }, []);
    //Redirection functions
    const goToWitnessePage = () => {
        setIsLoading(true);
        if (props.updatedKey == '') {
            const keyName = props.keyName == undefined ? '0' : props.keyName.toString();
            dbRef.doc(getUserId()).collection('les témoins').doc(keyName).set({
                Prénome: firstName,
                Nom: lastName,
                Rue: street,
                Ville: city,
                Téléphone: phone,
                Email: mail,
                CodePostal: postalCode
            });
        }
        if (props.updatedKey !== '') {
            dbRef.doc(getUserId()).collection('les témoins').doc(props.updatedKey).set({
                Prénome: firstName,
                Nom: lastName,
                Rue: street,
                Ville: city,
                Téléphone: phone,
                Email: mail,
                CodePostal: postalCode
            });
        }
        setTimeout(() => {
            setIsLoading(false);
            Actions.witnesses({addMore: true});
        }, 1500);
    }
    return (
        <View style={styles.container}>
            <Loader loading={isLoading} />
            <View style={styles.form}>
                <ScrollView>
                    <Kohana
                        style={styles.inputContainer}
                        label={'Prénom'}
                        iconClass={EntypoIcon}
                        iconName={'user'}
                        iconColor={'#00AA55'}
                        inputPadding={15}
                        labelStyle={{ color: '#888', fontWeight: "normal" }}
                        inputStyle={{ color: '#555' }}
                        labelContainerStyle={{ paddingLeft: 20 }}
                        onChangeText={(value) => setFirstName(value)}
                        value={firstName}
                        useNativeDriver
                    />
                    <Kohana
                        style={styles.inputContainer}
                        label={'Nom'}
                        iconClass={EntypoIcon}
                        iconName={'user'}
                        iconColor={'#00AA55'}
                        inputPadding={15}
                        labelStyle={{ color: '#888', fontWeight: "normal" }}
                        inputStyle={{ color: '#555' }}
                        labelContainerStyle={{ paddingLeft: 20 }}
                        onChangeText={(value) => setLasttName(value)}
                        value={lastName}
                        useNativeDriver
                    />
                    <Kohana
                        style={styles.inputContainer}
                        label={'Rue(Facultatif)'}
                        iconClass={MaterialCommunityIcons}
                        iconName={'highway'}
                        iconColor={'#00AA55'}
                        inputPadding={15}
                        labelStyle={{ color: '#888', fontWeight: "normal" }}
                        inputStyle={{ color: '#555' }}
                        labelContainerStyle={{ paddingLeft: 20 }}
                        onChangeText={(value) => setStreet(value)}
                        value={street}
                        useNativeDriver
                    />
                    <Kohana
                        style={styles.inputContainer}
                        label={'Ville(Facultatif)'}
                        iconClass={MaterialCommunityIcons}
                        iconName={'city'}
                        iconColor={'#00AA55'}
                        inputPadding={15}
                        labelStyle={{ color: '#888', fontWeight: "normal" }}
                        inputStyle={{ color: '#555' }}
                        labelContainerStyle={{ paddingLeft: 20 }}
                        onChangeText={(value) => setCity(value)}
                        value={city}
                        useNativeDriver
                    />
                    <Kohana
                        style={styles.inputContainer}
                        label={'Téléphone(Facultatif)'}
                        iconClass={IonIcon}
                        iconName={'md-call'}
                        iconColor={'#00AA55'}
                        inputPadding={15}
                        labelStyle={{ color: '#888', fontWeight: "normal" }}
                        inputStyle={{ color: '#555' }}
                        labelContainerStyle={{ paddingLeft: 20 }}
                        onChangeText={(value) => setPhone(value)}
                        value={phone}
                        useNativeDriver
                    />
                    <Kohana
                        style={styles.inputContainer}
                        label={'Email(Facultatif)'}
                        iconClass={MaterialCommunityIcons}
                        iconName={'email'}
                        iconColor={'#00AA55'}
                        inputPadding={15}
                        labelStyle={{ color: '#888', fontWeight: "normal" }}
                        inputStyle={{ color: '#555' }}
                        labelContainerStyle={{ paddingLeft: 20 }}
                        onChangeText={(value) => setMail(value)}
                        value={mail}
                        useNativeDriver
                    />
                    <Kohana
                        style={styles.inputContainer}
                        label={'Code postal(Facultatif)'}
                        iconClass={AntDesign}
                        iconName={'codesquare'}
                        iconColor={'#00AA55'}
                        inputPadding={15}
                        labelStyle={{ color: '#888', fontWeight: "normal" }}
                        inputStyle={{ color: '#555' }}
                        labelContainerStyle={{ paddingLeft: 20 }}
                        onChangeText={(value) => setPostalCode(value)}
                        value={postalCode}
                        useNativeDriver
                    />
                </ScrollView>
            </View>
            <View style={styles.container}>
                <FooterButton goTo={goToWitnessePage} text={'ENREGISTRER'} isEnabled={true} />
            </View>
        </View>
    )
}