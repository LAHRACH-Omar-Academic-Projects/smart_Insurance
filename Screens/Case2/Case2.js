import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native'
import { Actions } from 'react-native-router-flux';
//Import styles
import { styles } from './styles';
import SaveIcon from 'react-native-vector-icons/AntDesign';
import firebase from '../../database/firebaseDb';
import Loader from '../../Components/Loader'

export default Case2 = (props) => {
    const [isChoice1Disabled, setIsChoice1Disabled] = useState(props.isChoice1Disabled)
    const [isChoice2Disabled, setIsChoice2Disabled] = useState(props.isChoice2Disabled)
    const [isChoice3Disabled, setIsChoice3Disabled] = useState(props.isChoice3Disabled)
    const [isChoice4Disabled, setIsChoice4Disabled] = useState(props.isChoice4Disabled)
    const [isLoading, setIsLoading] = useState(false)
    const [isEnabled, setIsEnabled] = useState(isChoice1Disabled && isChoice2Disabled && isChoice3Disabled && isChoice4Disabled)

    const goToCase2Choice1Step1 = () => {
        Actions.case2Choice1Step1({
            isChoice1Disabled: isChoice1Disabled,
            isChoice2Disabled: isChoice2Disabled,
            isChoice3Disabled: isChoice3Disabled,
            isChoice4Disabled: isChoice4Disabled
        })
    }
    const goToCase2Choice2Step1 = () => {
        Actions.case2Choice2Step1({
            isChoice1Disabled: isChoice1Disabled,
            isChoice2Disabled: isChoice2Disabled,
            isChoice3Disabled: isChoice3Disabled,
            isChoice4Disabled: isChoice4Disabled
        })
    }
    const goToCase2Choice3Step1 = () => {
        Actions.case2Choice3Step1({
            isChoice1Disabled: isChoice1Disabled,
            isChoice2Disabled: isChoice2Disabled,
            isChoice3Disabled: isChoice3Disabled,
            isChoice4Disabled: isChoice4Disabled
        })
    }
    const goToCase2Choice4 = () => {
        Actions.case2Choice4({
            isChoice1Disabled: isChoice1Disabled,
            isChoice2Disabled: isChoice2Disabled,
            isChoice3Disabled: isChoice3Disabled,
            isChoice4Disabled: isChoice4Disabled
        })
    }
    const goToHome = () => {
        Actions.home()
    }

    const save = () => {
        const dbRef = firebase.firestore().collection('constat');
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = dd + '-' + mm + '-' + yyyy;

        var id = firebase.auth().currentUser.uid + "_" + today

        dbRef.doc(id).set({
            uid: firebase.auth().currentUser.uid,
            date: today,
            isDeleted: false
        });
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            goToHome();
        }, 1500)
    }

    return (
        <View style={styles.container}>
            <Loader
                loading={isLoading} />
            <ScrollView>
                <View style={styles.question}>
                    <Text style={styles.title}>Veuillez choisir par quelle partie vous voulez commencez</Text>
                </View>
                <TouchableOpacity onPress={goToCase2Choice1Step1} style={isChoice1Disabled ? styles.disabled : styles.enabled} disabled={isChoice1Disabled}>
                    <View style={styles.firstChoice}>
                        <Image style={styles.vh} source={require('../../images/vha.png')}></Image>
                        <View style={styles.box1}>
                            <Image source={require('../../images/a.png')} style={styles.boxBorder}></Image>
                            <Text style={styles.boxText}>A</Text>
                        </View>
                        <View style={styles.description1}>
                            <Text style={styles.desc}>Cliquez sur cette véhicule si vous voulez commencez par A</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToCase2Choice2Step1} style={isChoice2Disabled ? styles.disabled : styles.enabled} disabled={isChoice2Disabled}>
                    <View style={styles.secondChoice}>
                        <Image style={styles.vh} source={require('../../images/vhb.png')}></Image>
                        <View style={styles.box2}>
                            <Image source={require('../../images/b.png')} style={styles.boxBorder}></Image>
                            <Text style={styles.boxText}>B</Text>
                        </View>
                        <View style={styles.description2}>
                            <Text style={styles.desc}>Cliquez sur cette véhicule si vous voulez commencez par B</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToCase2Choice3Step1} style={isChoice3Disabled ? styles.disabled : styles.enabled} disabled={isChoice3Disabled}>
                    <View style={styles.thirdChoice}>
                        <View style={styles.box3}>
                            <Image source={require('../../images/b.png')} style={styles.boxBorder}></Image>
                            <Text style={styles.boxText}>B</Text>
                        </View>
                        <View style={styles.box1}>
                            <Image source={require('../../images/a.png')} style={styles.boxBorder}></Image>
                            <Text style={styles.boxText}>A</Text>
                        </View>
                        <View style={styles.description3}>
                            <Text style={styles.desc}>Cliquez ici si vous voulez entamer la partie commune entre A et B</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToCase2Choice4} style={isChoice4Disabled ? styles.disabled : styles.enabled} disabled={isChoice4Disabled}>
                    <View style={styles.fourthChoice}>
                        <View style={styles.box3}>
                            <Image source={require('../../images/b.png')} style={styles.boxBorder}></Image>
                            <Text style={styles.boxText}>B</Text>
                        </View>
                        <View style={styles.box1}>
                            <Image source={require('../../images/a.png')} style={styles.boxBorder}></Image>
                            <Text style={styles.boxText}>A</Text>
                        </View>
                        <Image source={require('../../images/sketch.png')} style={styles.sketch}></Image>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            {isEnabled &&
                (<View style={styles.saveIcon1}>
                    <TouchableOpacity onPress={save}>
                        <SaveIcon name='save' color='white' size={40} />
                    </TouchableOpacity>
                </View>)
            }
            {!isEnabled &&
                (<View style={styles.saveIcon2}>
                    <TouchableOpacity onPress={()=>alert('Vous devez terminer toutes les parties avant de sauvegarder!')}>
                        <SaveIcon name='save' color='white' size={40} />
                    </TouchableOpacity>
                </View>)
            }
        </View>
    )
}


