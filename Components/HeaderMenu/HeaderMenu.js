//Import used functions from librairies
import * as React from 'react';
import { View, Text } from 'react-native';
import normalize from 'react-native-normalize';
//Import styles
import { styles } from './styles';
//Import icones
import UserIcon from 'react-native-vector-icons/Entypo';

//HeaderMenu: the main component
export default HeaderMenu = () => {
    //HeaderMenu: view (interface)
    return (
        <View style={styles.header}>
            <View style={styles.userImage}>
                <UserIcon name='user' color='white' size={normalize(40)}/>
            </View>
            <Text style={styles.userName}>Constat Maroc</Text>
        </View>
    )
}
