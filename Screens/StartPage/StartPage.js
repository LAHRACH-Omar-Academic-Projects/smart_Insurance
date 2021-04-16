//Import used functions from librairies
import React from "react";
import {ImageBackground, Image, Text, View, TouchableOpacity } from "react-native";
import { Actions } from 'react-native-router-flux';
//Import styles
import { styles } from './styles';
//Import icones
import HomeIcon from 'react-native-vector-icons/Octicons';
import PresentationIcon from 'react-native-vector-icons/AntDesign';

//StartPage: the main component
export default StartPage = () => {
    //Redirection functions
    function goToSignIn() {
        Actions.signIn();
    }
    function goToPresentation() {
        Actions.presentation();
    }
    //StartPage view (interface)
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bg3.png')} style={styles.image}>
            <View style={styles.logoAndName}>
                <Image style={styles.logo} source={require('../../assets/icon.png')} />
                <View style={styles.appName}>
                    <Text style={styles.part1}>CONSTAT</Text>
                    <Text style={styles.part2}>MAROC</Text>
                </View>
            </View>
            <View style={styles.textAndButtons}>
                <Text style={styles.text}>Votre compagnon en cas d'accident</Text>
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={() => goToPresentation()} style={styles.presentationButton}>
                        <PresentationIcon name='playcircleo' color='white' size={20} />
                        <Text style={styles.buttonText}>DÉCOUVRIR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => goToSignIn()} style={styles.homeButton}>
                        <HomeIcon name='home' color='white' size={20} />
                        <Text style={styles.buttonText}>COMMENCER</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ImageBackground>
        </View>
    )
}
