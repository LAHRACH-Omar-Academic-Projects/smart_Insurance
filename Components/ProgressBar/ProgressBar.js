//Import librairies
import * as React from 'react';
import { View } from 'react-native';
import normalize from 'react-native-normalize';
import * as Progress from 'react-native-progress';
//Import styles
import { styles } from './styles';

//Main component
export default ProgressBar = (props) => {
    return (
        <View style={styles.container}>
            <Progress.Bar progress={props.level} width={normalize(350, 'width')} color='#00C055' />
        </View>
    )
}