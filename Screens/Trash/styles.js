//Import used functions from librairies
import { StyleSheet } from 'react-native';

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
        backgroundColor:'#fceded',
        width: 200,
        height: 200
    },
    text1: {
        marginTop:20,
        color:'#888',
        fontSize:16,
        textAlign:'center'
    },
    text2: {
        color:'#888',
        fontSize:16,
        textAlign:'center'
    },
    addIcon: {
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        bottom:20,
        right: 15,
        width: 60,
        height: 60,
        borderRadius:35,
        backgroundColor:'#66E',
    }
})

//Export styles object
export { styles };