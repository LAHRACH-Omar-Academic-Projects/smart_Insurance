//Import used functions from librairies
import * as React from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Left, Body, Button, Title } from 'native-base';
//Import styles
import { styles } from './styles';
//Import icones
import MenuIcon from 'react-native-vector-icons/Ionicons';
//Import icones
import HelpIcon from 'react-native-vector-icons/Entypo';

//Help: the main component
export default Help = ({ navigation }) => {
    //Help: view (interface)
    return (
        <Container>
            <Header style={styles.header}>
                <Left>
                    <Button transparent>
                        <MenuIcon name='md-menu' color='white' size={25} onPress={() => navigation.openDrawer()} />
                    </Button>
                </Left>
                <Body>
                    <Title style={styles.headerText}>Aide</Title>
                </Body>
            </Header>
            <View style={styles.fileIcon}>
                <View style={styles.iconContainer}>
                    <HelpIcon name='help' color='rgba(0,100,255,0.5)' size={80} />
                </View>
                <View>
                    <Text style={styles.text1}>Bienvenue, votre Application est prête.</Text>
                    <Text style={styles.text2}>Essayez d'ajouter un constat.</Text>
                </View>
            </View>
        </Container>
    );
}