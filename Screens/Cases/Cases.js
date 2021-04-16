//Import librairies
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RadioButton } from 'react-native-paper';
//Import components
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import FooterButton from '../../Components/FooterButton/FooterButton';
//Import styles
import { styles } from './styles';
//Import icones
import TabletMobileIcone from 'react-native-vector-icons/Entypo';
import PhoneIcon from 'react-native-vector-icons/MaterialIcons';

//Main component
export default Cases = () => {
    //Radio button state
    const [checked, setChecked] = useState('first')
    //Redirection functions
    const goToCase2Page = () => {
        Actions.case2();
    }
    return (
        <View style={styles.container}>
            <ProgressBar level={0.6} />
            <View style={styles.checked}>
                <Text style={styles.checkText}>Premier cas</Text>
                <RadioButton
                    uncheckedColor='white'
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                />
                <Text style={styles.checkText}>Deuxième cas</Text>
                <RadioButton
                    uncheckedColor='white'
                    value="second"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('second')}
                />
            </View>
            <View style={[styles.case1, {borderWidth: checked == 'first'? 3:0}]}>
                <View style={styles.caseIconContainer}>
                    <PhoneIcon name='phone-iphone' color= {checked == 'first'? '#FC2':'#DDD'} size={checked == 'first'? 185: 165} />
                </View>
                <View style={styles.view}>
                    <View style={[styles.title1, {backgroundColor : checked == 'first'? '#FC2': '#EEE'}]}>
                        <Text style={[styles.text, {color: checked === 'first'? 'white': '#AAA'}]}>Premier cas</Text>
                    </View>
                    <View style={[styles.caseTextContainer, {backgroundColor : checked == 'first'? '#FC2': '#EEE'}]}>
                        <Text style={[styles.description, {color: checked === 'first'? 'white': '#AAA'}]}>Remplire Vous Même Votre Constat (Avec 2 Smartphones)</Text>
                    </View>
                </View>
            </View>
            <View style={styles.casesContainer}>
                <View style={[styles.case2, {borderWidth: checked == 'second'? 3:0}]}>
                    <View style={styles.caseIconContainer}>
                        <TabletMobileIcone name='tablet-mobile-combo' color= {checked == 'second'? '#F45':'#DDD'} size={checked == 'second'? 180: 150} />
                    </View>
                    <View style={styles.view}>
                        <View style={[styles.title2, {backgroundColor : checked == 'second'? '#F45':'#EEE'}]}>
                            <Text style={[styles.text, {color: checked == 'second'? 'white': '#AAA'}]}>Deuxième cas</Text>
                        </View>
                        <View style={[styles.caseTextContainer, {backgroundColor : checked == 'second'? '#F45':'#EEE'}]}>
                            <Text style={[styles.description, {color: checked == 'second'? 'white': '#AAA'}]}>Remplir Le Constat Par Un Constateur (Avec Un Seul Smartphone)</Text>
                        </View>
                    </View>
                </View>
            </View>
            <FooterButton goTo={checked == 'first'? goToCase2Page : alert('Cette option n\'est pas disponible actuellement')} text={'SUIVANT'} isEnabled={true} />
        </View>
    )
}
