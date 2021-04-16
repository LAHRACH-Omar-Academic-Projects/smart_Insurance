//Import librairies
import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
//Import firebase database
import firebase from '../../database/firebaseDb';
//Import components
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import ToggleButton from '../../Components/ToggleButton/ToggleButton';
import FooterButton from '../../Components/FooterButton/FooterButton';
//Import styles
import { styles } from './styles';
//Import icones

//Main component
export default Damage = () => {
    //Toggle button state
    const [isEnabled, setIsEnabled] = useState(false);
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
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    }
    //Redirection functions
    const goToDateTimePage = () => {
        firebase.firestore().collection('Dégats').doc(getUserId()).set({
            dégâts: 'Dégâts matériels autres qu\'aux véhicule A et B',
            existe: isEnabled ? true : false
        });
        Actions.dateTime();
    }
    return (
        <View style={styles.container}>
            <ProgressBar level={0.6} />
            <View style={styles.toggleContainer}>
                <ToggleButton text={'Dégâts matériels autres qu\'aux véhicule A et B'} isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
            </View>
            <View style={styles.imageContainer}>
                <View style={styles.crashImage}>
                    {isEnabled
                        ? <Image style={styles.image} source={require('../../images/coloredCrash.png')} />
                        : <Image style={styles.image} source={require('../../images/uncoloredCrash.png')} />
                    }
                </View>
            </View>
            <FooterButton goTo={goToDateTimePage} text={'SUIVANT'} isEnabled={true} />
        </View>
    )
}