import React, { PureComponent } from 'react';
import { View, AppRegistry, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Text } from 'react-native';
import firebase from '../../database/firebaseDb';
import { RNCamera } from 'react-native-camera';
import { Actions } from 'react-native-router-flux';
import Loader from '../../Components/Loader'
import NextIcon from 'react-native-vector-icons/AntDesign';


export default class Case2Choice1Step4 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  goToCase2Choice1Step5 = () => {
    Actions.case2Choice1Step5({
      isChoice1Disabled: this.props.isChoice1Disabled,
      isChoice2Disabled: this.props.isChoice2Disabled,
      isChoice3Disabled: this.props.isChoice3Disabled,
      isChoice4Disabled: this.props.isChoice4Disabled
    });
  }

  takePicture = async () => {
    if (this.camera) {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0');
      var yyyy = today.getFullYear();

      today = dd + '-' + mm + '-' + yyyy;
      var id = firebase.auth().currentUser.uid + "_" + today

      var options = { quality: 0.5, base64: true };
      var photo = await this.camera.takePictureAsync(options);
      this.uploadImage(photo.uri, "A_" + id);
      this.camera.pausePreview();
    }
  }

  uploadImage = async (uri, imageName) => {
    var response = await fetch(uri);
    var blob = await response.blob();
    var ref = firebase.storage().ref().child(imageName);
    return ref.put(blob);
  }

  next = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
      this.goToCase2Choice1Step5()
    }, 1500)
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Loader
          loading={this.state.isLoading} />
        <View style={styles.container}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.off}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            captureAudio={false}
            pauseAfterCapture={true}
          />
        <View style={styles.captureIcon}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} >
            <NextIcon name='camera' color='gray' size={40} />
          </TouchableOpacity>

        </View>
        </View>

        <View style={styles.nextIcon}>
          <TouchableWithoutFeedback onPress={() => this.next()}>
            <NextIcon name='right' color='white' size={25} />
          </TouchableWithoutFeedback>
        </View>

      </View>
    )
  }
}
const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom:50
  },
  capture: {
    flex: 0,
    backgroundColor: 'black',

    padding: 15,
    alignSelf: 'center',

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
  captureIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
    right: 15,
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: 'white',

    alignSelf: 'center',

  },
})

AppRegistry.registerComponent('App', () => Case2Choice1Step4);