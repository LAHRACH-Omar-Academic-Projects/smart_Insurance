//Import librairies
import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

//Create styles object
const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex:1,
        justifyContent:'space-around',
    },
    contactContainer: {
        width:'95%',
        marginHorizontal:'2.5%',
        flex:10,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    text: {
        marginHorizontal:'3%',
        fontSize:normalize(16)
    },
    image: {
        width:normalize(160, 'width'),
        height:normalize(150, 'height'),
    },
    buttonContainer: {
        alignItems:'center',
    },
    enabledButton: {
        backgroundColor:'#00C255',
        width:'60%',
        height:'10%',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        opacity: 1,
    },
    disabledButton: {
        backgroundColor:'#CCC',
        width:'60%',
        height:'10%',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        opacity: 1,
    },
    enabledText: {
        color:'white',
        fontSize:14,
        fontWeight:"bold",
    },
    disabledText: {
        color:'white',
        fontSize:14,
        fontWeight:"bold",
    }
})

//Export styles object
export { styles };