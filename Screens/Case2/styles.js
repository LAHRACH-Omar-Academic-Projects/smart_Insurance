//Import used functions from librairies
import { StyleSheet } from 'react-native';

//Create styles object
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    question: {
        height: 80,
        paddingLeft: 20,
        paddingTop: 10,
        backgroundColor: 'rgba(0,80,200,0.8)',
        marginTop: 35,
        elevation: 10
    },
    title: {
        fontSize: 20,
        color: 'white'
    },
    firstChoice: {
        padding: 50,
        marginTop: 40,
        elevation: 10,
        backgroundColor: 'white',
        width: 400,
        height: 250,
        marginLeft: 5,
        borderRadius: 10,
        borderColor: '#0054AF',
        borderStyle: 'solid',
        borderRadius: 10,
        borderTopWidth: 5,
        borderLeftWidth: 10,
    },
    secondChoice: {
        padding: 50,
        paddingLeft: 100,
        marginTop: 5,
        elevation: 10,
        backgroundColor: 'white',
        width: 410,
        height: 250,
        borderRadius: 10,
        marginLeft: 15,
        borderColor: '#0054AF',
        borderStyle: 'solid',
        borderRadius: 10,
        borderTopWidth: 5,
        borderLeftWidth: 10,
    },
    enabled: {
        opacity: 1,
    },
    disabled: {
        opacity: 0.3,
    },
    thirdChoice: {
        padding: 50,
        paddingLeft: 100,
        marginTop: 5,
        elevation: 10,
        backgroundColor: 'white',
        width: 410,
        height: 250,
        borderRadius: 10,
        marginLeft: 5,
        borderColor: '#0054AF',
        borderStyle: 'solid',
        borderRadius: 10,
        borderTopWidth: 5,
        borderLeftWidth: 10,
    },
    vh: {
        width: 240,
        height: 100,
        marginTop: 25
    },
    box1: {
        position: 'absolute',
        right: '20%',
        top: '5%'
    },
    box2: {
        position: 'absolute',
        right: '5%',
        top: '5%'
    },
    box3: {
        position: 'absolute',
        left: '10%',
        top: '5%'
    },
    boxBorder: {
        width: 100,
        height: 100
    },
    boxText: {
        position: 'absolute',
        right: '40%',
        top: '20%',
        color: 'white',
        fontSize: 25
    },
    description1: {
        width: 250,
        height: 60,
        paddingLeft: 10,
        paddingTop: 5,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'rgba(0,178,75,0.8)',
        elevation: 5
    },
    description2: {
        width: 250,
        height: 60,
        paddingLeft: 10,
        paddingTop: 5,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'rgba(255,0,0,0.8)',
        elevation: 5
    },
    description3: {
        width: 180,
        height: 80,
        marginTop: 80,
        paddingLeft: 10,
        paddingTop: 15,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'rgba(100,100,0,0.8)',
        elevation: 5
    },
    desc: {
        color: 'white'
    },
    fourthChoice: {
        padding: 50,
        paddingLeft: 100,
        marginTop: 5,
        elevation: 10,
        backgroundColor: 'white',
        width: 410,
        height: 250,
        borderRadius: 10,
        marginLeft: 15,
        marginBottom: 20,
        borderColor: '#0054AF',
        borderStyle: 'solid',
        borderRadius: 10,
        borderTopWidth: 5,
        borderLeftWidth: 10,
    },
    sketch: {
        position: 'absolute',
        width: '50%',
        height: '87%',
        top: '55%',
        left: '50%'
    },
    saveIcon1: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 20,
        right: 15,
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'green',
    },
    saveIcon2: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 20,
        right: 15,
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'red',
    }
})

//Export styles object
export { styles };