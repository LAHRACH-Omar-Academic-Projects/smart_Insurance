//Import librairies
import React, { useState } from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import DateTimePicker from '@react-native-community/datetimepicker';
//Import firebase database
import firebase from '../../database/firebaseDb';
//Import components
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import FooterButton from '../../Components/FooterButton/FooterButton';
//Import styles
import { styles } from './styles';
//Import icones
import DateIcon from 'react-native-vector-icons/MaterialIcons';
import TimeIcon from 'react-native-vector-icons/Ionicons';

//Main component
export default DateTime = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [isDateSelected, setDateIsSelected] = useState(false);
    const [isTimeSelected, setTimeIsSelected] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
        setDateIsSelected(true);
    };

    const showTimepicker = () => {
        showMode('time');
        setTimeIsSelected(true);
    };
    //Get userId
    const getUserId = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = dd + '-' + mm + '-' + yyyy;
        var id = firebase.auth().currentUser.uid + "_" + today;
        return id;
    }
    //Store Date and Time
    const storeData = () => {
        firebase.firestore().collection('Date').doc(getUserId()).set({
            Date: date.toLocaleDateString(),
            Heure: date.toLocaleTimeString()
        });
    }
    //Redirection functions
    const goToGLocationPage = () => {
        storeData();
        Actions.gLocation();
    }
    return (
        <View style={styles.container}>
            <ProgressBar level={0.8} />
            <View style={styles.dateTimeContainer}>
                <View style={styles.dateView}>
                    <View style={styles.dateButtonView}>
                        <TouchableOpacity style={styles.dateButton} onPress={showDatepicker}>
                            <DateIcon name='date-range' color='white' size={20} />
                            <Text style={styles.dateText}>Date</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.showDateView}>
                        <View style={styles.iconContainer}>
                            {isDateSelected
                            ?<DateIcon name='date-range' color='rgba(0,150,255,0.8)' size={100} />
                            :<DateIcon name='date-range' color='#BBB' size={100} />
                            }
                        </View>
                        <View style={[styles.date, {backgroundColor: isDateSelected? 'rgba(0,150,255,0.8)':'white'}]}>
                            <Text style={styles.text, {color: isDateSelected? 'white':'#888'}}>Date:  {date.toLocaleDateString()}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.timeView}>
                    <View style={styles.timeButtonView}>
                        <TouchableOpacity style={styles.timeButton} onPress={showTimepicker}>
                            <TimeIcon name='ios-time' color='white' size={20} />
                            <Text style={styles.timeText}>Heure</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.showTimeView}>
                        <View style={styles.iconContainer}>
                            {isTimeSelected
                            ?<TimeIcon name='ios-time' color='rgba(255,150,0,0.8)' size={100} />
                            :<TimeIcon name='ios-time' color='#BBB' size={100} />
                            }
                        </View>
                        <View style={[styles.time, {backgroundColor: isTimeSelected? 'rgba(255,150,0,0.8)':'white'}]}>
                            <Text style={styles.text, {color: isTimeSelected? 'white':'#888'}}>Heure:  {date.toLocaleTimeString()}</Text>
                        </View>
                    </View>
                </View>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        style={{ backgroundColor:'red'}}
                        timeZoneOffsetInMinutes={0}
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        local='fr'
                    />
                )}
            </View>
            <FooterButton goTo={goToGLocationPage} text={'SUIVANT'} isEnabled={true} />
        </View>
    )
}