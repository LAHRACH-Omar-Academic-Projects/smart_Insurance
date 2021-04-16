//Import used functions from librairies
import { StyleSheet } from 'react-native';

//Create styles object
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#00CC6A',
    },
    headerText: {
        color: 'white',
        marginLeft:-50
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
        backgroundColor:'rgba(0,50,200,0.1)',
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
})

//Export styles object
export { styles };