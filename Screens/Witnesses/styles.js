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
    listContainer: {
        flex:8
    },
    text: {
        marginHorizontal: 15,
        marginVertical:20,
        color: 'rgba(0,150,255,0.8)',
        fontSize:20
    },
    listItem: {
        width:normalize(400, 'width'),
        height:normalize(65, 'height'),
        flexDirection:'row',
        paddingVertical:40,
        paddingHorizontal:10,
        alignItems:'center',   
        marginVertical:1,
    },
    iconContainer: {
        justifyContent:'center',
        alignItems:'center',
        width: normalize(50, 'width'),
        height: normalize(50, 'height'),
        backgroundColor: '#CCC',
        borderRadius: normalize(100),
    },
    textContainer: {
        justifyContent:'space-between'
    },
    text1: {
        fontSize:20,
        marginHorizontal:10
    },
    text2: {
        color:'#999',
        fontSize:15,
        marginHorizontal:10
    },
    rightIconContainer: {
        backgroundColor:'rgba(255,0,0,0.7)',
        width: normalize(100),
        height: normalize(75),
        justifyContent:'center',
        alignItems:'center',
    },
    leftIconContainer: {
        backgroundColor:'rgba(0,100,200,0.7)',
        width: normalize(100),
        height: normalize(75),
        justifyContent:'center',
        alignItems:'center',
    },
    buttonContainer: {
        flex:2
    },
    enabledButton: {
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        bottom:20,
        right: 15,
        width: normalize(55, 'width'),
        height: normalize(50, 'height'),
        borderRadius:35,
        backgroundColor:'#00C255',
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
    }
})

//Export styles object
export { styles };