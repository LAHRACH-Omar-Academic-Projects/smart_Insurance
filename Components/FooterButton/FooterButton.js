//Import librairies
import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
//Import styles
import { styles } from './styles';

//Main component
export default FooterButton = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={props.isEnabled? styles.enabledButton: styles.disabledButton} disabled={!props.isEnabled} onPress={props.goTo}>
                <Text style={styles.text}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}