import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    menuIcon: {
        marginHorizontal:15, 
        marginVertical:5
    },
    menuOptionsContainer: {
        width:220,
        marginTop: 50, 
        borderRadius: 10
    },
    menuItem: {
         flexDirection: 'row', 
         height: 30 
    },
    menuTextItem: {
        color: '#555', 
        fontSize: 20, 
        marginLeft: 5, 
        marginTop: 1
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0,
    },
    header: {
        backgroundColor:'white',
        width:120,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    headerText: {
        position: 'absolute',
        marginLeft: 48,
        marginTop: 8,
        fontSize: 16,
        color:'#555'
    },
    modalView: {
        marginVertical:5,
        marginHorizontal: 20,
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    okButton: {
        backgroundColor: '#FC0',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    okButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 50,
        textAlign: "center",
        color:'#888',
        fontSize:20
    }
});

export { styles };