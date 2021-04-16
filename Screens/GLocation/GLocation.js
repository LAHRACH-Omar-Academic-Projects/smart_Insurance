//Import librairies
import React from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
//Import components
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import FooterButton from '../../Components/FooterButton/FooterButton';
//Import styles
import { styles } from './styles';

//Main component
export default GLocation = () => {
    //Redirection functions
    const goToCasesPage = () => {
        Actions.cases();
    }
    return (
        <View style={styles.container}>
            <ProgressBar level={1} />
            <View style={styles.mapContainer}>

            </View>
            <FooterButton goTo={goToCasesPage} text={'SUIVANT'} isEnabled={true} />
        </View>
    )
}