YellowBox.ignoreWarnings(['Setting a timer']);
//Import used fonctions from librairies
import React, { useState } from 'react';
import { Text, View, Animated, TextInput, TouchableOpacity, YellowBox, ImageBackground, ScrollView } from 'react-native';
import AnimatedForm from 'react-native-animated-form';
import { Actions } from 'react-native-router-flux';
//Import firebase database
import firebase from '../../../database/firebaseDb';
//Import styles
import { styles } from './styles';
//Import icones
import UserIcon from 'react-native-vector-icons/Entypo';
import SignInIcon from 'react-native-vector-icons/AntDesign';
import SignUpIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EmailIcon from 'react-native-vector-icons/Ionicons';
import PasswordIcon from 'react-native-vector-icons/FontAwesome';
import Loader from '../../../Components/Loader'
//SingIn: the main component
export default SignIn = () => {
    //State of user inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    //Redirection functions
    function goToHome() {
        Actions.home()
    }
    function goToSignUp() {
        Actions.signUp()
    }
    //signIn function
    function signIn(email, password) {
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                setIsLoading(true);
                setTimeout(() => {
                    setIsLoading(false);
                    goToHome();
                }, 1500);
            })
            .catch(error => {
                if (email !== '' && error.code === 'auth/invalid-email') {
                    alert('Cette adresse e-mail n\'est pas valide!');
                }
                if (error.code === 'auth/user-not-found') {
                    alert('Aucun utilisateur ne correspond à l\'e-mail donné');
                }
                if (error.code === 'auth/user-disabled') {
                    alert('L\'utilisateur correspondant à l\'e-mail donné a été désactivé');
                }
                if (password !== '' & error.code === 'auth/wrong-password') {
                    alert('Le mot de passe n\'est pas valide pour l\'e-mail donné ou le compte correspondant à l\'e-mail n\'a pas de mot de passe défini');
                }
                if (email === '' || password === '') {
                    alert('Veuillez remplir tous les champs svp!');
                }
            });

    }
    //SignIn view (interface)
    return (
        <View style={styles.container}>
            <Loader
                loading={isLoading} />
            <ImageBackground source={require('../../../assets/bg3.png')} style={styles.image}>
                <View style={styles.icon}>
                    <View style={styles.userIcon}>
                        <UserIcon name='user' color='#66F' size={100} />
                    </View>
                </View>
                <View style={styles.form}>
                    <ScrollView>
                        <AnimatedForm delay={200} distance={5}>
                            <Animated.View style={styles.inputView}>
                                <TextInput placeholder='Email' underlineColorAndroid='transparent' style={styles.text} onChangeText={(value) => setEmail(value)} />
                                <View style={styles.iconContainer}>
                                    <EmailIcon name='md-mail' color='#66F' size={25} />
                                </View>
                            </Animated.View>
                            <Animated.View style={styles.inputView}>
                                <TextInput secureTextEntry={true} placeholder='Password' underlineColorAndroid='transparent' style={styles.text} onChangeText={(value) => setPassword(value)} />
                                <View style={styles.iconContainer}>
                                    <PasswordIcon name='lock' color='#66F' size={25} />
                                </View>
                            </Animated.View>
                            <Animated.View style={styles.signInButtonView}>
                                <TouchableOpacity style={styles.button} onPress={() => signIn(email, password)}>
                                    <SignInIcon name='login' color='white' size={18} />
                                    <Text style={styles.buttonText}>Se Connecter</Text>
                                </TouchableOpacity>
                            </Animated.View>
                            <Animated.View style={styles.signUpButtonView}>
                                <TouchableOpacity style={styles.button} onPress={() => goToSignUp()}>
                                    <SignUpIcon name='account-plus-outline' color='white' size={20} />
                                    <Text style={styles.buttonText}>Creér un nouveau compte</Text>
                                </TouchableOpacity>
                            </Animated.View>

                        </AnimatedForm>
                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    );
}
