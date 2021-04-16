//Import librairies
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import call from 'react-native-phone-call';
import { Actions } from 'react-native-router-flux';
//Import components
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import ToggleButton from '../../Components/ToggleButton/ToggleButton';
import FooterButton from '../../Components/FooterButton/FooterButton';
//Import styles
import { styles } from './styles';

//Main component
export default Wounded = () => {
    //Toggle button state
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    //Redirection functions
    const goToWitnessesPage = () => {
        Actions.witnesses();
    }
    //Call args
    const args = {
        number: '112', // String value with the number to call
        prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
    }
    //Call function
    function Call() {
        call(args).catch(console.error)
    }
    return (
        <View style={styles.container}>
            <ProgressBar level={0.2} />
            <ToggleButton text={'Y a-t-il des blessés?'} isEnabled={isEnabled} toggleSwitch={toggleSwitch}/>
            <View style={styles.contactContainer}>
                <Image
                    style={styles.image}
                    source={isEnabled
                        ? require('../../images/ActiveAmbulance.png')
                        : require('../../images/DeactiveAmbulance.png')
                    }>
                </Image>
                <TouchableOpacity style={isEnabled? styles.enabledButton: styles.disabledButton} disabled={!isEnabled} onPress={() => Call()}>
                    <Text style={isEnabled? styles.enabledText: styles.disabledText}>APPELER LE 112</Text>
                </TouchableOpacity>
                <Text>112 est le numéro d'urgence marocain</Text>
            </View>
            <FooterButton goTo={goToWitnessesPage} text={'SUIVANT'} isEnabled={true}/>
        </View>
    )
}