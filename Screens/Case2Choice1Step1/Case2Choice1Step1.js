import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { Sae } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import StepIndicator from 'react-native-step-indicator';
import firebase from '../../database/firebaseDb';
import SelectPicker from 'react-native-form-select-picker';
import { Actions } from 'react-native-router-flux';
import NextIcon from 'react-native-vector-icons/AntDesign';
import Loader from '../../Components/Loader'

const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: 'rgba(0,178,75,0.8)',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: 'rgba(0,178,75,0.8)',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: 'rgba(0,178,75,0.8)',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: 'rgba(0,178,75,0.8)',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: 'rgba(0,178,75,0.8)',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
}
export default class Case2Choice1Step1 extends React.Component {
    constructor(props) {
        super(props);
        this.dbRef = firebase.firestore().collection('vehiculeA');
        this.state = {
            currentPosition: 0,
            stepCount: 3,
            allant_vers: '',
            marque: '',
            num_immatriculation: '',
            type: '',
            venant_de: '',
            bgColor: 'rgb(227, 255, 241)',
            isLoading: false,
        };
    }
    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }
    goToCase2Choice1Step2 = () => {
        Actions.case2Choice1Step2({
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
            allant_vers: this.state.allant_vers,
            marque: this.state.marque,
            num_immatriculation: this.state.num_immatriculation,
            type: this.state.type,
            venant_de: this.state.venant_de,
        });
        setTimeout(() => {
            this.setState({
                isLoading: false,
            });
            this.goToCase2Choice1Step2();
        }, 1500);

    }
    render() {
        return (
            <View style={{ backgroundColor: 'rgb(227, 255, 241)', flex: 1 }}>
                <Loader
                    loading={this.state.isLoading} />
                <View style={{ backgroundColor: 'rgba(0,178,75,0)', height: 40, marginTop: 20 }}>
                    <StepIndicator
                        customStyles={customStyles}
                        currentPosition={this.state.currentPosition}
                        stepCount={this.state.stepCount}
                    />
                </View>
                <View style={styles.vha}>
                    <View style={styles.box}>
                        <Image source={require('../../images/a.png')} style={styles.boxImage}></Image>
                        <Text style={styles.boxText}>A</Text>
                    </View>
                    <Text style={styles.stepTitle}>Véhicule</Text>
                </View>
                <View style={{ flex: 4 }}>
                    <ScrollView>
                        <SelectPicker
                            onValueChange={(value) => {
                                this.setState({
                                    marque: value,
                                    bgColor: 'green'
                                })
                            }}
                            selected={this.state.marque}
                            placeholder="Marque"
                            placeholderStyle={{ color: 'rgba(0,178,75,0.8)', fontWeight: 'bold', fontSize: 18 }}
                            style={{
                                backgroundColor: 'rgba(0,178,75,0)', marginLeft: 15, height: 50, paddingLeft: 5, marginRight: 15,
                                fontSize: 18, fontWeight: 'bold', borderRadius: 5
                            }}
                            onSelectedStyle={{ color: '#555', fontWeight: '200', fontSize: 18 }}
                        >
                            <SelectPicker.Item label="Peugeot" value="Peugeot" />
                            <SelectPicker.Item label="Renault" value="Renault" />
                            <SelectPicker.Item label="Opel" value="Opel" />
                            <SelectPicker.Item label="Citroën" value="Citroën" />
                            <SelectPicker.Item label="Volkswagen" value="Volkswagen" />
                            <SelectPicker.Item label="Nissan" value="Nissan" />
                            <SelectPicker.Item label="Audi" value="Audi" />
                            <SelectPicker.Item label="Mercedes" value="Mercedes" />
                            <SelectPicker.Item label="Ford" value="Ford" />
                            <SelectPicker.Item label="BMW" value="Bmw" />
                            <SelectPicker.Item label="Toyota" value="Toyota" />
                            <SelectPicker.Item label="Dacia" value="Dacia" />
                        </SelectPicker>
                        <Text style={{ height: 0, borderBottomColor: this.state.bgColor, borderBottomWidth: 4, marginTop: 5, width: 400, marginLeft: 15 }} ></Text>
                        <Sae
                            label={'Type'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'green'}
                            style={{ marginLeft: 20, marginRight: 20 }}
                            inputPadding={16}
                            inputStyle={{ color: '#555' }}
                            labelHeight={24}
                            labelStyle={{ color: 'rgba(0,178,75,0.8)' }}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            value={this.state.type}
                            onChangeText={(val) => this.inputValueUpdate(val, 'type')}
                        />
                        <Sae
                            label={'N° d\'immatriculation'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'green'}
                            style={{ marginLeft: 20, marginRight: 20 }}
                            inputPadding={16}
                            inputStyle={{ color: '#555' }}
                            labelHeight={24}
                            labelStyle={{ color: 'rgba(0,178,75,0.8)' }}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            value={this.state.num_immatriculation}
                            onChangeText={(val) => this.inputValueUpdate(val, 'num_immatriculation')}
                        />
                        <Sae
                            label={'Venant de'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'green'}
                            style={{ marginLeft: 20, marginRight: 20 }}
                            inputPadding={16}
                            inputStyle={{ color: '#555' }}
                            labelHeight={24}
                            labelStyle={{ color: 'rgba(0,178,75,0.8)' }}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            value={this.state.venant_de}
                            onChangeText={(val) => this.inputValueUpdate(val, 'venant_de')}
                        />
                        <Sae
                            label={'Allant vers'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'green'}
                            style={{ marginLeft: 20, marginRight: 20, marginBottom: 85 }}
                            inputPadding={16}
                            inputStyle={{ color: '#555' }}
                            labelHeight={24}
                            labelStyle={{ color: 'rgba(0,178,75,0.8)' }}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            value={this.state.allant_vers}
                            onChangeText={(val) => this.inputValueUpdate(val, 'allant_vers')}
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
        color: 'green',
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