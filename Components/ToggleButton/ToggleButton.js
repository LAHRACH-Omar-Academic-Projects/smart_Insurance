//Import librairies
import * as React from 'react';
import { View, Text, Switch } from 'react-native';
//Import styles
import { styles } from './styles';

//Main component
export default ToggleButton = (props) => {
    return (
        <View style={styles.toggleButtonContainer}>
            <Text style={styles.text}>{props.text}</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#00DD55" }}
                thumbColor={props.isEnabled ? "#00AA55" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={props.toggleSwitch}
                value={props.isEnabled}
            />
        </View>
    )
}