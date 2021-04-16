//Import librairies
import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Modal, { ModalContent, SlideAnimation, ModalTitle, ModalFooter, ModalButton } from 'react-native-modals';
import { Actions } from 'react-native-router-flux';
//Import icones
import Close from 'react-native-vector-icons/AntDesign';
//Import styles
import { styles } from './styles';

//Main component
export default CloseButton = () => {
    const [visible, setVisible] = useState(false);
    return (
        <View>
            <Modal
                visible={visible}
                modalTitle={<ModalTitle title="Quitter le constat?" />}
                onTouchOutside={() => {
                    setVisible(false);
                }}
                modalAnimation={
                     new SlideAnimation({
                        slidFrom: 'bottom',
                        useNativeDriver: true
                    })
                }
                swipeDirection={['up', 'down', 'left', 'right']} // can be string or an array
                swipeThreshold={100} // default 100
                onSwipeOut={(event) => {
                    setVisible(false)
                }}
                footer={
                    <ModalFooter>
                        <ModalButton
                            style={styles.modalButton}
                            text="NON"
                            textStyle={styles.buttonText}
                            onPress={() => setVisible(false)}
                        />
                        <ModalButton
                            style={styles.modalButton}
                            text="OUI"
                            textStyle={styles.buttonText}
                            onPress={() => { setVisible(false); Actions.home() }}
                        />
                    </ModalFooter>
                }
            >
                <ModalContent>
                    <View style={styles.modelContent}>
                        <Text style={styles.text}>Tous les chargements seront sauvegardés.</Text>
                    </View>
                </ModalContent>
            </Modal>
            <TouchableOpacity onPress={() => setVisible(true) } style={styles.closeButton}>
                <Close name='close' color='white' size={20} />
            </TouchableOpacity>
        </View>
    )
}