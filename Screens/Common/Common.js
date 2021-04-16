//Import librairies
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
//Import styles
import { styles } from './styles';

//Main component
export default Common = () => {
    //Redirection functions
    function goToWoundedPage() {
        Actions.wounded();
    }
    return(
        <View style={styles.container}>
            <View style={styles.shapeContainer}>
                <View style={styles.shape}>
                    <View style={styles.shape1}>
                        <Text style={styles.shapeText}>A</Text>
                    </View>
                    <View style={styles.shape2}>
                        <Text style={styles.shapeText}>B</Text>
                    </View>
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text1}>Partie commune</Text>
                <Text style={styles.text2}>Cette partie du constat sert à renseigner toutes les infomations relatives au lieu de l'accident, pertes, témoins.</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => goToWoundedPage()}>
                    <Text style={styles.nextButton}>SUIVANT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}