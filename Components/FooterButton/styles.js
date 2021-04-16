//Import librairies
import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

//Create styles object
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#DDD',
        alignItems:'center',
    },
    enabledButton: {
        backgroundColor:'#00C255',
        position:'absolute',
        width:'92%',
        height:'84%',
        bottom:'8%',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    disabledButton: {
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        bottom:20,
        right: 15,
        width: normalize(55, 'width'),
        height: normalize(50, 'height'),
        borderRadius:35,
        backgroundColor:'#CCC',
    },
    text: {
        color:'white',
        fontSize:14,
        fontWeight:"bold",
    }
})

//Export styles object
export { styles };