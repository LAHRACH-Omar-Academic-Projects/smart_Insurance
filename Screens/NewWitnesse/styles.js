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
    form: {
        flex:11,
        marginVertical:20
    },
    inputContainer: {
        backgroundColor:'white',
        width:normalize(350, 'width'),
        borderRadius:5,
        marginHorizontal:15,
        marginVertical:5,
        elevation:1,
        zIndex:1,
        borderColor:'#00FF55',
        borderWidth:1,
    }
})

//Export styles object
export { styles };