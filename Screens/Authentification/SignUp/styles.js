//Import used fonctions from librairies
import { StyleSheet } from 'react-native';

//Create styles object
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#66F',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    icon: {
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    form: {
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    userIcon: {
        backgroundColor:'white',
        width: 155,
        height: 155,
        borderRadius: 100,
        marginVertical:20,
        justifyContent:'center',
        alignItems:'center',
    },
    inputView: {
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:5,
        marginVertical:5
    },
    iconContainer: {
        width:35,
        height:35,
        marginTop:10,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        width: 250,
        height: 45,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#FFF",
        color: "#333",
        backgroundColor: "#FFF",
    },
    buttonView: {
        height: 40,
        marginTop: 10,
        backgroundColor: "#2AE",
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 5,
    },
    button: {
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText: {
         color: '#fff',
         marginHorizontal:15,
         fontSize:16,
         fontWeight:'bold'
    }
});

//Export styles object
export { styles };