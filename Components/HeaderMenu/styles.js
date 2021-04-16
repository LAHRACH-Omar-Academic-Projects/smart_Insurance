//Import used functions from librairies
import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

//Create styles object
const styles = StyleSheet.create({
    header: {
      backgroundColor: '#00CC6A',
      height: normalize(135, 'height'),
      marginTop:normalize(-2, 'height'),
    },
    userImage: {
      backgroundColor:'rgba(200,255,200,0.5)',
      width:normalize(66, 'width'),
      height:normalize(62, 'height'),
      borderRadius:normalize(100),
      justifyContent:'center',
      alignItems:'center',
      marginTop:normalize(35),
      marginLeft:normalize(18),
    },
    userName: {
      color: 'white', 
      fontSize: 20,
      marginLeft: normalize(18),
      marginTop: normalize(10),
    }
})

//Export styles object
export { styles };