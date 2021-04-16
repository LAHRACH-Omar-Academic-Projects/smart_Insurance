//Import used functions from librairies
import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, View } from 'native-base';
import normalize from 'react-native-normalize';
import { Actions } from 'react-native-router-flux';
import firebase from '../../database/firebaseDb';
import { ListItem } from 'react-native-elements';
import Loader from '../../Components/Loader';
//Import styles
import { styles } from './styles';
//Import icones
import MenuIcon from 'react-native-vector-icons/Ionicons';
import AddIcon from 'react-native-vector-icons/AntDesign';
import FileIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import File from 'react-native-vector-icons/FontAwesome';
import DeleteIcon from 'react-native-vector-icons/FontAwesome';

//Home: the main component
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.dbRef = firebase.firestore().collection('constat');
        this.state = {
            reportArr: [],
            isLoading: false,
        }
    }


    //Redirection functions
    goToCommonPage() {
        Actions.common();
    }


    getReports = () => {
        const arr = [];
        this.dbRef.where("uid", "==", firebase.auth().currentUser.uid).where("isDeleted", "==", false).get()
            .then((querySnapshot) => {
                querySnapshot.forEach(function (res) {
                    arr.push(res.data());
                });
                this.setState({
                    reportArr: arr,
                });
            });
    }

    delReport = (uid, date) => {
        this.setState({
            isLoading: true,
        });
        const id = uid + "_" + date;
        this.dbRef.doc(id).update(
            {
                isDeleted: true
            }
        )

        setTimeout(() => {
            this.setState({
                isLoading: false,
            });
            this.getReports();
        }, 1500);

    }

    componentDidMount() {
        this.getReports();
    }




    //Home: view (interface)
    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => { this.props.navigation.openDrawer() }}>
                            <MenuIcon name='md-menu' color='white' size={25} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.headerText}>Constat</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <View style={styles.container}>
                    <Loader
                        loading={this.state.isLoading} />

                    {

                        this.state.reportArr.length == 0 && (
                            <View style={styles.fileIcon}>
                                <View style={styles.iconContainer}>
                                    <FileIcon name='file-document-edit-outline' color='#00CC55' size={150} />
                                </View>
                                <View>
                                    <Text style={styles.text1}>Bienvenue, votre Application est prête.</Text>
                                    <Text style={styles.text2}>Essayez d'ajouter un constat.</Text>
                                </View>
                            </View>)
                    }
                    {
                        this.state.reportArr.length != 0 && (
                            this.state.reportArr.map((item, i) => {
                                return (
                                    <ListItem
                                        key={i}
                                        leftElement={<File name='file-text' color='#00EA65' size={normalize(45)}/>}
                                        rightElement={
                                            <TouchableOpacity onPress={() => this.delReport(item.uid, item.date)}>
                                                <DeleteIcon name='trash' color='rgba(255,0,0,0.8)' size={normalize(25)} />
                                            </TouchableOpacity>
                                        }


                                        bottomDivider
                                        title={`Date :${item.date} `}
                                        subtitle="Etat : en cours de traitement"

                                    />
                                );
                            })
                        )
                    }

                    <View style={styles.addIcon}>
                        <TouchableOpacity onPress={() => this.goToCommonPage()}>
                            <AddIcon name='addfile' color='white' size={30} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        );
    }
}
