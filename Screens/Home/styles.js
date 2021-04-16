//Import used functions from librairies
import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

//Create styles object
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#00CC6A',
    },
    headerText: {
        color: 'white',
    },
    container: {
        flex: 1,
        position: 'absolute',
        height: '80%',
        width: '100%',
        top: '12%'
    },
    fileIcon: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    iconContainer: {
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100,
        backgroundColor:'rgba(0,255,45,0.1)',
        width: 200,
        height: 200
    },
    text1: {
        marginTop:20,
        color:'#888',
        fontSize:18,
        textAlign:'center'
    },
    text2: {
        color:'#888',
        fontSize:18,
        textAlign:'center'
    },
    addIcon: {
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        bottom:normalize(-25, 'height'),
        right: normalize(20, 'height'),
        width: normalize(55, 'width'),
        height: normalize(50, 'height'),
        borderRadius:35,
        backgroundColor:'#00CC6A',
    }
})

//Export styles object
export { styles };