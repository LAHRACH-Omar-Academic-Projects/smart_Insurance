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
    toggleContainer: {
        flex: 2,
        justifyContent:'flex-start'
    },
    crashImage: {
        backgroundColor: '#EEE',
        justifyContent:'center',
        borderRadius:normalize(100),
        alignItems:'center',
        width:normalize(200, 'width'),
        height:normalize(180, 'height')
    },
    imageContainer: {
        flex:8,
        justifyContent:'flex-start',
        alignItems:'center',
    },
    image: {
        width:normalize(160, 'width'),
        height:normalize(150, 'height')
    }
})

//Export styles object
export { styles };