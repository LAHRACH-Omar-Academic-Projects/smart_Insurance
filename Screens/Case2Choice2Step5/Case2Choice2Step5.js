import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
} from 'react-native';

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
import firebase from '../../database/firebaseDb';
import { Actions } from 'react-native-router-flux';
import Loader from '../../Components/Loader'

export default class Case2Choice2Step5 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }

    goToCase2 = () => {
        Actions.case2({
            isChoice1Disabled: this.props.isChoice2Disabled,
            isChoice2Disabled: true,
            isChoice3Disabled: this.props.isChoice3Disabled,
            isChoice4Disabled: this.props.isChoice3Disabled
        })
    }


    saveCanvas = async (uri) => {
        this.setState({ isLoading: true });
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = dd + '-' + mm + '-' + yyyy;
        var id = firebase.auth().currentUser.uid + "_" + today;

        let imgUri = uri;
        const uploadUri = "file://" + imgUri;

        this.uploadImage(uploadUri, "signatureB_" + id);
        setTimeout(() => {
            this.setState({
                isLoading: false,
            });
            this.goToCase2();
        }, 1500)
    }


    uploadImage = async (uri, imageName) => {
        var response = await fetch(uri);
        var blob = await response.blob();
        var ref = firebase.storage().ref().child(imageName);
        return ref.put(blob);
    }


    render() {
        return (
            <View style={styles.container}>
                <Loader
                    loading={this.state.isLoading} />
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <RNSketchCanvas
                        containerStyle={{ backgroundColor: 'transparent', flex: 1 }}
                        canvasStyle={{ backgroundColor: 'transparent', flex: 1 }}
                        strokeColor={'black'}
                        strokeWidth={2}
                        undoComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Undo</Text></View>}
                        clearComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Clear</Text></View>}
                        eraseComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Eraser</Text></View>}

                        saveComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Save</Text></View>}
                        savePreference={() => {
                            return {
                                folder: 'RNSketchCanvas',
                                filename: String(Math.ceil(Math.random() * 100000000)),
                                transparent: false,
                                imageType: 'jpeg'
                            }
                        }}
                        onSketchSaved={(success, filePath) => { this.saveCanvas(filePath) }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF',
    },
    strokeColorButton: {
        marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
    },
    strokeWidthButton: {
        marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
        justifyContent: 'center', alignItems: 'center', backgroundColor: '#39579A'
    },
    functionButton: {
        marginHorizontal: 2.5, marginVertical: 8, height: 30, width: 60,
        backgroundColor: '#39579A', justifyContent: 'center', alignItems: 'center', borderRadius: 5,
    }
});

AppRegistry.registerComponent('Case2Choice2Step5', () => Case2Choice2Step5);