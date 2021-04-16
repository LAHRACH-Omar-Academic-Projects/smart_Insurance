//Import librairies
import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

//Create styles object
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#00EE6A',
        flex:1,
        justifyContent:'space-around',
    },
    shapeContainer: {
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    shape: {
        position:'absolute',
        width:'60%',
        height:'80%',
    },
    shape1: {
        backgroundColor:'#0C5',
        top: normalize(50, 'height'),
        left: normalize(100, 'width'),
        width: normalize(110),
        height: normalize(110),
        borderRadius: normalize(150),
        justifyContent:'center',
        alignItems:'center',
    },
    shape2: {
        backgroundColor:'#F44',
        bottom: normalize(0, 'height'),
        left: normalize(30, 'width'),
        width: normalize(110),
        height: normalize(110),
        borderRadius: normalize(150),
        justifyContent:'center',
        alignItems:'center',
    },
    shapeText: {
        color:'white',
        fontSize: normalize(35)
    },
    textContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text1: {
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        marginVertical:10
    },
    text2: {
        color:'white',
        fontSize:16,
        textAlign:'center',
        marginHorizontal:50
    },
    buttonContainer: {
        flex:1,
        alignItems:'center',
    },
    button: {
        backgroundColor:'#00C255',
        position:'absolute',
        width:'92%',
        height:'30%',
        bottom:'8%',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    nextButton: {
        color:'white',
        fontSize:14,
        fontWeight:"bold",
    }
})

//Export styles object
export { styles };