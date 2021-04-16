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
    dateTimeContainer: {
        flex: 10,
        justifyContent:'space-around'
    },
    dateView: {
        backgroundColor:'white',
        width:normalize(350, 'width'),
        height:normalize(200, 'height'),
        marginHorizontal:15,
        borderRadius:3,
        flexDirection:'row',
        justifyContent:'space-between',
        elevation:5,
        zIndex:5
    },
    timeView: {
        backgroundColor:'white',
        width:normalize(350, 'width'),
        height:normalize(200, 'height'),
        marginHorizontal:15,
        borderRadius:3,
        flexDirection:'row',
        justifyContent:'space-between',
        elevation:5,
        zIndex:5
    },
    dateButtonView: {
        width:normalize(100, 'width'),
        height:normalize(150, 'height'),
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:15,
        marginVertical:30,
        borderRadius:3,
    },
    timeButtonView: {
        width:normalize(100, 'width'),
        height:normalize(150, 'height'),
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:15,
        marginVertical:30,
        borderRadius:3,
    },
    showDateView: {
        backgroundColor:'#EEE',
        width:normalize(200, 'width'),
        height:normalize(180, 'height'),
        justifyContent:'center',
        marginHorizontal:15,
        marginVertical:12,
        borderRadius:3,
        justifyContent:'space-around'
    },
    showTimeView: {
        backgroundColor:'#EEE',
        width:normalize(200, 'width'),
        height:normalize(180, 'height'),
        justifyContent:'center',
        marginHorizontal:15,
        marginVertical:12,
        borderRadius:3,
        justifyContent:'space-around'
    },
    dateButton: {
        backgroundColor:'rgba(0,150,255,0.8)',
        width:normalize(80, 'width'),
        height:normalize(35, 'height'),
        borderRadius:normalize(5),
        justifyContent:'space-around',
        flexDirection:'row',
        alignItems: 'center',
    },
    timeButton: {
        backgroundColor:'rgba(255,150,0,0.8)',
        width:normalize(80, 'width'),
        height:normalize(35, 'height'),
        borderRadius:normalize(5),
        justifyContent:'space-around',
        flexDirection:'row',
        alignItems: 'center',
    },
    date: {
        width:normalize(150, 'width'),
        height:normalize(50, 'height'),
        marginVertical:10,
        marginHorizontal:30,
        borderRadius:normalize(4),
        borderColor:'rgba(0,150,255,0.8)',
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center'
    },
    time: {
        width:normalize(150, 'width'),
        height:normalize(50, 'height'),
        marginVertical:10,
        marginHorizontal:30,
        borderRadius:normalize(4),
        borderColor:'rgba(255,150,0,0.8)',
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center'
    },
    dateText: {
        color:'white',
        fontWeight:'bold',
        fontSize:20,
    },
    timeText: {
        color:'white',
        fontWeight:'bold',
        fontSize:20,
    },
    iconContainer: {
        alignItems:'center',
    },
    text: {
        fontSize:18
    }
})

//Export styles object
export { styles };