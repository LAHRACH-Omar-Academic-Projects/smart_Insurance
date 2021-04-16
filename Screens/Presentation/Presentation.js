//Import used functions from librairies
import React from 'react';
import { Button } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import { Actions } from 'react-native-router-flux';
//Import styles
import { styles } from './styles';
//Import icones
import StartIcon from 'react-native-vector-icons/FontAwesome';
import FileIcon from 'react-native-vector-icons/FontAwesome5';
import TowPhonesIcon from 'react-native-vector-icons/Entypo';
import PhoneIcon from 'react-native-vector-icons/Ionicons';

//Presentation: the main component
export default Presentation = () => {
    //Redirection functions
    function goToSignIn() {
        Actions.signIn();
    }
    //Presentation: view (interface)
    return (
        <Onboarding
            titleStyles={styles.title}
            subTitleStyles={styles.subtitle}
            
            showDone={false}
            onSkip={() => goToSignIn()}
            pages={[
                {
                    title: 'CONSTAT MAROC',
                    subtitle: "Une application performante, élégante et simple\n Conçue pour les assurés Morocains",
                    backgroundColor: '#7777FF',
                    image: (
                        <FileIcon name='file-alt' size={200} color='white' />
                    ),
                },
                {
                    title: "Remplir un constat est plus simple maintenant",
                    subtitle: "-Interface érgonomique\n-Remplissage en quelques étapes simples\n-Aide à chaque étape",
                    backgroundColor: '#5555DD',
                    image: (
                        <FileIcon name='file-signature' size={200} color='white' />
                    ),
                },
                {
                    title: 'Remplissage du constat sur deux smartphones',
                    subtitle: "L'application offre aux conducteurs la possibilité de remplir leur constats sur deux smartphones sans avoir besoin d'appeler un constateur",
                    backgroundColor: '#3333BB',
                    image: (
                        <TowPhonesIcon name='tablet-mobile-combo' size={200} color='white' />
                    ),
                },
                {
                    title: 'Remplissage du constat avec un seul smartphone',
                    subtitle: "L'appliction offre au constateur la possibilité de remplir le constat sur son smartphone directement",
                    backgroundColor: '#5555DD',
                    image: (
                        <PhoneIcon name='ios-phone-portrait' size={240} color='white' />
                    ),
                },
                {
                    title: "Qu'attendez-vous !",
                    backgroundColor: '#7777FF',
                    subtitle: (
                        <Button
                            title="Commencer"
                            onPress={() => goToSignIn()}
                            color="#F25"
                        />
                    ),
                    image: (
                        <StartIcon name="rocket" size={200} color="white" />
                    ),
                },
            ]}
        />
    )
}