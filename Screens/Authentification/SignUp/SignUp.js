//Import used fonctions from librairies
import React, { useState } from 'react';
import { Text, View, Animated, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import AnimatedForm from 'react-native-animated-form';
import { Actions } from 'react-native-router-flux';
//Import firebase database
import firebase from '../../../database/firebaseDb';
//Import styles
import { styles } from './styles';
//Import icones
import UserIcon from 'react-native-vector-icons/Entypo';
import SaveIcon from 'react-native-vector-icons/Entypo';
import EmailIcon from 'react-native-vector-icons/Ionicons';
import PasswordIcon from 'react-native-vector-icons/FontAwesome';
import Loader from '../../../Components/Loader'

//SingUp: the main component
export default SignUp = () => {
    //State of user inputs
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    //Redirection functions
    function goToHome() {
        Actions.home();
    }
    //signUp function
    function signUp(email, password) {
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                setIsLoading(true);
                setTimeout(() => {
                    setIsLoading(false);
                    goToHome();
                }, 1500);
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('Il existe déjà un compte avec l\'adresse e-mail indiquée');
                }
                if (email !== '' && error.code === 'auth/invalid-email') {
                    alert('L\'adresse e-mail n\'est pas valide');
                }
                if (error.code === 'auth/operation-not-allowed') {
                    alert('Si les comptes de email / mot de passe ne sont pas activés. Activez les comptes de email / mot de passe dans la console Firebase, sous l\'onglet Auth');
                }
                if (password !== '' && error.code === 'auth/weak-password') {
                    alert('Le mot de passe n\'est pas assez fort');
                }
                if (email === '' || password === '') {
                    alert('Veuillez remplir tous les champs svp!');
                }
                if (password !== confirmedPassword) {
                    alert('Ce mote de passe que vous avez saisie ne correspond pas au mot de passe précédent')
                }
            });

    }
    //SignUp view (interface)
    return (
        <View style={styles.container}>
            <Loader
                loading={isLoading} />
            <ImageBackground source={require('../../../assets/bg3.png')} style={styles.image}>
                <View style={styles.icon}>
                    <View style={styles.userIcon}>
                        <UserIcon name='add-user' color='#66F' size={100} />
                    </View>
                </View>
                <View style={styles.form}>
                    <ScrollView>
                        <AnimatedForm delay={200} distance={5}>
                            <Animated.View style={styles.inputView}>
                                <TextInput placeholder='User name' underlineColorAndroid='transparent' style={styles.text} onChangeText={(value) => setUserName(value)} />
                                <View style={styles.iconContainer}>
                                    <UserIcon name='user' color='#66F' size={25} />
                                </View>
                            </Animated.View>
                            <Animated.View style={styles.inputView}>
                                <TextInput placeholder='Email' underlineColorAndroid='transparent' style={styles.text} onChangeText={(value) => setEmail(value)} />
                                <View style={styles.iconContainer}>
                                    <EmailIcon name='md-mail' color='#66F' size={25} />
                                </View>
                            </Animated.View>
                            <Animated.View style={styles.inputView}>
                                <TextInput secureTextEntry={true} placeholder='Password' underlineColorAndroid='transparent' style={styles.text} onChangeText={(value) => setPassword(value)} />
                                <View style={styles.iconContainer}>
                                    <PasswordIcon name='unlock' color='#66F' size={25} />
                                </View>
                            </Animated.View>
                            <Animated.View style={styles.inputView}>
                                <TextInput secureTextEntry={true} placeholder='Confirm password' underlineColorAndroid='transparent' style={styles.text} onChangeText={(value) => setConfirmedPassword(value)} />
                                <View style={styles.iconContainer}>
                                    <PasswordIcon name='lock' color='#66F' size={25} />
                                </View>
                            </Animated.View>
                            <Animated.View style={styles.buttonView}>
                                <TouchableOpacity style={styles.button} onPress={() => signUp(email, password)}>
                                    <SaveIcon name='save' color='white' size={18} />
                                    <Text style={styles.buttonText}>Valider</Text>
                                </TouchableOpacity>
                            </Animated.View>
                        </AnimatedForm>
                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    );
}
