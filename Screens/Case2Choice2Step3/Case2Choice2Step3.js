import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { Sae } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import StepIndicator from 'react-native-step-indicator';
import firebase from '../../database/firebaseDb';
import { Actions } from 'react-native-router-flux';
import NextIcon from 'react-native-vector-icons/AntDesign';
import Loader from '../../Components/Loader'

const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: 'rgba(255,0,0,0.8)',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: 'rgba(255,0,0,0.8)',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: 'rgba(255,0,0,0.8)',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: 'rgba(255,0,0,0.8)',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: 'rgba(255,0,0,0.8)',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelSize: 13,
}
export default class Case2Choice1Step3 extends React.Component {
    constructor(props) {
        super(props);
        this.dbRef = firebase.firestore().collection('conducteurB');
        this.state = {
            currentPosition: 2,
            stepCount: 3,
            nom: '',
            prenom: '',
            adresse: '',
            num_permis: '',
            categorie: '',
            delivre_le: '',
            par_prefecture: '',
            valable_au: '',
            isLoading: false,
        };

    }
    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }
    goToCase2Choice2Step4 = () => {
        Actions.case2Choice2Step4({
            isChoice1Disabled: this.props.isChoice1Disabled,
            isChoice2Disabled: this.props.isChoice2Disabled,
            isChoice3Disabled: this.props.isChoice3Disabled,
            isChoice4Disabled: this.props.isChoice4Disabled
        });
    }
    storeData = () => {

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = dd + '-' + mm + '-' + yyyy;
        var id = firebase.auth().currentUser.uid + "_" + today

        this.setState({
            isLoading: true,
        });
        this.dbRef.doc(id).set({
            nom: this.state.nom,
            prenom: this.state.prenom,
            adresse: this.state.adresse,
            num_permis: this.state.num_permis,
            categorie: this.state.categorie,
            delivre_le: this.state.delivre_le,
            par_prefecture: this.state.par_prefecture,
            valable_au: this.state.valable_au,
        });
        setTimeout(() => {
            this.setState({
                isLoading: false,
            });
            this.goToCase2Choice2Step4()
        }, 1500);
    }
    render() {
        return (
            <View style={{ backgroundColor: 'rgb(255, 242, 242)', flex: 1 }}>
                <Loader
                    loading={this.state.isLoading} />
                <View style={{ backgroundColor: 'rgba(255,0,0,0)', height: 40, marginTop: 20 }}>
                    <StepIndicator
                        customStyles={customStyles}
                        currentPosition={this.state.currentPosition}
                        stepCount={this.state.stepCount}
                    />
                </View>
                <View style={styles.vha}>
                    <View style={styles.box}>
                        <Image source={require('../../images/b.png')} style={styles.boxImage}></Image>
                        <Text style={styles.boxText}>B</Text>
                    </View>
                    <Text style={styles.stepTitle}>Conducteur</Text>
                </View>
                <View style={{ flex: 4 }}>
                    <ScrollView>
                        <Sae
                            label={'Nom (en majuscule)'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'red'}
                            style={{ marginLeft: 20, marginRight: 20 }}
                            inputPadding={16}
                            inputStyle={{ color: '#555' }}
                            labelHeight={24}
                            labelStyle={{ color: 'rgba(255,0,0,0.8)' }}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCorrect={false}
                            value={this.state.nom}
                            autoCapitalize="characters"
                            onChangeText={(val) => this.inputValueUpdate(val, 'nom')}
                        />
                        <Sae
                            label={'Prénom'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'red'}
                            style={{ marginLeft: 20, marginRight: 20 }}
                            inputPadding={16}
                            inputStyle={{ color: '#555' }}
                            labelHeight={24}
                            labelStyle={{ color: 'rgba(255,0,0,0.8)' }}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCorrect={false}
                            value={this.state.prenom}
                            onChangeText={(val) => this.inputValueUpdate(val, 'prenom')}
                        />
                        <Sae
                            label={'Adresse'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'red'}
                            style={{ marginLeft: 20, marginRight: 20 }}
                            inputPadding={16}
                            inputStyle={{ color: '#555' }}
                            labelHeight={24}
                            labelStyle={{ color: 'rgba(255,0,0,0.8)' }}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCorrect={false}
                            value={this.state.adresse}
                            onChangeText={(val) => this.inputValueUpdate(val, 'adresse')}
                        />
                        <Sae
                            label={'Permis de conduite N°'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'red'}
                            style={{ marginLeft: 20, marginRight: 20 }}
                            inputPadding={16}
                            inputStyle={{ color: '#555' }}
                            labelHeight={24}
                            labelStyle={{ color: 'rgba(255,0,0,0.8)' }}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCorrect={false}
                            value={this.state.num_permis}
                            onChangeText={(val) => this.inputValueUpdate(val, 'num_permis')}
                        />
                        <Sae
                            label={'Catégorie'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'red'}
                            style={{ marginLeft: 20, marginRight: 20 }}
                            inputPadding={16}
                            inputStyle={{ color: '#555' }}
                            labelHeight={24}
                            labelStyle={{ color: 'rgba(255,0,0,0.8)' }}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCorrect={false}
                            value={this.state.categorie}
                            onChangeText={(val) => this.inputValueUpdate(val, 'categorie')}
                        />
                        <Sae
                            label={'Délivré le'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'red'}
                            style={{ marginLeft: 20, marginRight: 20 }}
                            inputPadding={16}
                            inputStyle={{ color: '#555' }}
                            labelHeight={24}
                            labelStyle={{ color: 'rgba(255,0,0,0.8)' }}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCorrect={false}
                            value={this.state.delivre_le}
                            onChangeText={(val) => this.inputValueUpdate(val, 'delivre_le')}
                        />
                        <Sae
                            label={'par la préfecture'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'red'}
                            style={{ marginLeft: 20, marginRight: 20 }}
                            inputPadding={16}
                            inputStyle={{ color: '#555' }}
                            labelHeight={24}
                            labelStyle={{ color: 'rgba(255,0,0,0.8)' }}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCorrect={false}
                            value={this.state.par_prefecture}
                            onChangeText={(val) => this.inputValueUpdate(val, 'par_prefecture')}
                        />
                        <Sae
                            label={'Valable jusqu\'au'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'red'}
                            style={{ marginLeft: 20, marginRight: 20,marginBottom:85  }}
                            inputPadding={16}
                            inputStyle={{ color: '#555' }}
                            labelHeight={24}
                            labelStyle={{ color: 'rgba(255,0,0,0.8)' }}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCorrect={false}
                            value={this.state.valable_au}
                            onChangeText={(val) => this.inputValueUpdate(val, 'valable_au')}
                        />
                    </ScrollView>
                </View>
                <View style={styles.nextIcon}>
                    <TouchableWithoutFeedback onPress={() => this.storeData()}>
                        <NextIcon name='right' color='white' size={25} />
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    vha: {
        flex: 1,
        marginBottom: 15
    },
    box: {
        position: 'absolute',
        left: '5%',
        top: '30%'
    },
    boxImage: {
        width: 50,
        height: 50
    },
    boxText: {
        position: 'absolute',
        left: '30%',
        top: '0%',
        color: 'white',
        fontSize: 25
    },
    stepTitle: {
        fontSize: 25,
        color: 'red',
        position: 'absolute',
        top: '35%',
        left: '20%'
    },
    nextBox: {
        marginTop: 50,
        marginBottom: 50
    },
    nextImage: {
        width: 35,
        height: 35,
        marginLeft: 245,
    },
    nextText: {
        fontSize: 25,
        position: 'absolute',
        right: '10%',
        top: '0%',
        color: '#0054AF'
    },
    nextIcon: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 20,
        right: 15,
        width: 60,
        height: 60,
        borderRadius: 35,
        backgroundColor: '#0054AF',
    },
})