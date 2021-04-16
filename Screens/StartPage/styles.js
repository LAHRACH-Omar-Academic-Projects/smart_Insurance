//Import used functions from librairies
import { StyleSheet } from 'react-native';

//Create styles object
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#66F',
    },
    logoAndName: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:'25%'
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: "center"
    },
    appName: {
        flexDirection:'column',
        justifyContent:'center',
        height:150,
        marginLeft:20
    },
    part1: {
        color:'white',
        fontSize:26,
        fontWeight:'bold',
        textAlign:"center",
        textShadowColor: 'black', 
        textShadowOffset: { width: -1, height: 2 },
        textShadowRadius: 10
    },
    part2: {
        color:'#0F5',
        fontSize:40,
        fontWeight:'bold',
        textAlign:"center",
        textShadowColor: 'black', 
        textShadowOffset: { width: -1, height: 2 },
        textShadowRadius: 10
    },
    textAndButtons: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        width:220,
        color: "white",
        fontSize: 22,
        textAlign: "center",
        marginBottom:40,
        textShadowColor: 'black', 
        textShadowOffset: { width: -1, height: 2 },
        textShadowRadius: 10
    },
    buttons: {
        flexDirection:"row",
    },
    presentationButton: {
        backgroundColor:'#FFBA00',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:8,
        paddingHorizontal:8,
        borderRadius:3
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    homeButton: {
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#44F',
        paddingVertical:8,
        paddingHorizontal:8,
        borderRadius:3,
        marginLeft:40
    },
    buttonText: {
        color:'white',
        marginHorizontal:6
    }
});

//Export styles object
export { styles };