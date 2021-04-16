//Import used functions from librairies
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import Modal, { ModalContent, SlideAnimation, ModalTitle, ModalFooter, ModalButton } from 'react-native-modals';
import { Actions } from 'react-native-router-flux';
//Import styles
import { styles } from './styles';
//Import icones
import MoreIcon from 'react-native-vector-icons/Ionicons';
import HelpIcon from 'react-native-vector-icons/MaterialIcons';
import FileCancel from 'react-native-vector-icons/MaterialCommunityIcons';
import PartCancel from 'react-native-vector-icons/MaterialIcons';

//DropDownMenu: the main component
export default DropDownMenu = (props) => {
    const [visibleForHelp, setVisibleForHelp] = useState(false)
    const [visibleForPartCancel, setVisibleForPartCancel] = useState(false)
    const [visibleForReportCancel, setVisibleForReportCancel] = useState(false)
    if (props.component === 'cases') {
        return (
            <View>
                <Modal
                    visible={visibleForHelp}
                    modalTitle={<ModalTitle title="Aide sur modes de saisie" />}
                    onTouchOutside={() => {
                        setVisibleForHelp(false);
                    }}
                    modalAnimation={new SlideAnimation({
                        slideFrom: 'bottom',
                    })}
                    swipeDirection={['up', 'down', 'left', 'right']} // can be string or an array
                    swipeThreshold={100} // default 100
                    onSwipeOut={(event) => {
                        setVisibleForHelp(false)
                    }}
                    footer={
                        <ModalFooter>
                            <ModalButton
                                text="OK"
                                onPress={() => setVisibleForHelp(false)}
                            />
                        </ModalFooter>
                    }
                >
                    <ModalContent>
                        <View style={{ width: 300, height: 100, backgroundColor: 'white' }}>
                            <Text>{props.help}</Text>
                        </View>
                    </ModalContent>
                </Modal>
                <Menu>
                    <MenuTrigger>
                        <View style={styles.menuIcon}>
                            <MoreIcon name='md-more' color='white' size={25} />
                        </View>
                    </MenuTrigger>
                    <MenuOptions optionsContainerStyle={styles.menuOptionsContainer}>
                        <MenuOption onSelect={() => setVisibleForHelp(true)} value={2}>
                            <View style={styles.menuItem}>
                                <HelpIcon color='#02AFEF' name='help' size={25} />
                                <Text style={styles.menuTextItem}> Aide</Text>
                            </View>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            </View>
        )
    }
    else if (props.component === 'case2') {
        return (
            <View>
                <Modal
                    visible={visibleForHelp}
                    modalTitle={<ModalTitle title="Aide sur le choix des parties" />}
                    onTouchOutside={() => {
                        setVisibleForHelp(false);
                    }}
                    modalAnimation={new SlideAnimation({
                        slideFrom: 'bottom',
                    })}
                    swipeDirection={['up', 'down', 'left', 'right']} // can be string or an array
                    swipeThreshold={100} // default 100
                    onSwipeOut={(event) => {
                        setVisibleForHelp(false)
                    }}
                    footer={
                        <ModalFooter>
                            <ModalButton
                                text="OK"
                                onPress={() => setVisibleForHelp(false)}
                            />
                        </ModalFooter>
                    }
                >
                    <ModalContent>
                        <View style={{ width: 300, height: 100, backgroundColor: 'white' }}>
                            <Text>{props.help}</Text>
                        </View>
                    </ModalContent>
                </Modal>
                <Modal
                    visible={visibleForReportCancel}
                    modalTitle={<ModalTitle title="Annulation du constat" />}
                    onTouchOutside={() => {
                        setVisibleForReportCancel(false);
                    }}
                    modalAnimation={new SlideAnimation({
                        slideFrom: 'bottom',
                    })}
                    swipeDirection={['up', 'down', 'left', 'right']} // can be string or an array
                    swipeThreshold={100} // default 100
                    onSwipeOut={(event) => {
                        setVisibleForReportCancel(false)
                    }}
                    footer={
                        <ModalFooter>
                            <ModalButton
                                text="NON"
                                onPress={() => setVisibleForReportCancel(false)}
                            />
                            <ModalButton
                                text="OUI"
                                onPress={() => { Actions.home(); setVisibleForReportCancel(false) }}
                            />
                        </ModalFooter>
                    }
                >
                    <ModalContent>
                        <View style={{ width: 300, height: 100, backgroundColor: 'white' }}>
                            <Text>Voulez-vous vraiment annuler le constat ?</Text>
                        </View>
                    </ModalContent>
                </Modal>
                <Menu>
                    <MenuTrigger>
                        <View style={styles.menuIcon}>
                            <MoreIcon name='md-more' color='white' size={25} />
                        </View>
                    </MenuTrigger>
                    <MenuOptions optionsContainerStyle={styles.menuOptionsContainer}>
                        <MenuOption onSelect={() => setVisibleForHelp(true)} value={2}>
                            <View style={styles.menuItem}>
                                <HelpIcon color='#02AFEF' name='help' size={25} />
                                <Text style={styles.menuTextItem}> Aide</Text>
                            </View>
                        </MenuOption>
                        <MenuOption onSelect={() => setVisibleForReportCancel(true)} value={2}>
                            <View style={styles.menuItem}>
                                <FileCancel color='#66F' name='file-cancel' size={25} />
                                <Text style={styles.menuTextItem}> Annuler le constat</Text>
                            </View>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            </View>
        )
    }
    else if (props.component === 'part') {
        return (
            <View>
                <Modal
                    visible={visibleForHelp}
                    modalTitle={<ModalTitle title="Aide sur le remplissage" />}
                    onTouchOutside={() => {
                        setVisibleForHelp(false);
                    }}
                    modalAnimation={new SlideAnimation({
                        slideFrom: 'bottom',
                    })}
                    swipeDirection={['up', 'down', 'left', 'right']} // can be string or an array
                    swipeThreshold={100} // default 100
                    onSwipeOut={(event) => {
                        setVisibleForHelp(false)
                    }}
                    footer={
                        <ModalFooter>
                            <ModalButton
                                text="OK"
                                onPress={() => setVisibleForHelp(false)}
                            />
                        </ModalFooter>
                    }
                >
                    <ModalContent>
                        <View style={{ width: 300, height: 100, backgroundColor: 'white' }}>
                            <Text>{props.help}</Text>
                        </View>
                    </ModalContent>
                </Modal>
                <Modal
                    visible={visibleForPartCancel}
                    modalTitle={<ModalTitle title="Annulation de la partie" />}
                    onTouchOutside={() => {
                        setVisibleForPartCancel(false);
                    }}
                    modalAnimation={new SlideAnimation({
                        slideFrom: 'bottom',
                    })}
                    swipeDirection={['up', 'down', 'left', 'right']} // can be string or an array
                    swipeThreshold={100} // default 100
                    onSwipeOut={(event) => {
                        setVisibleForPartCancel(false)
                    }}
                    footer={
                        <ModalFooter>
                            <ModalButton
                                text="NON"
                                onPress={() => setVisibleForPartCancel(false)}
                            />
                            <ModalButton
                                text="OUI"
                                onPress={() => { Actions.case2(); setVisibleForPartCancel(false) }}
                            />
                        </ModalFooter>
                    }
                >
                    <ModalContent>
                        <View style={{ width: 300, height: 100, backgroundColor: 'white' }}>
                            <Text>tous ce que vous avez saisie va être supprimer,
                            Voulez-vous vraiment annuler la partie?
                            </Text>
                        </View>
                    </ModalContent>
                </Modal>
                <Modal
                    visible={visibleForReportCancel}
                    modalTitle={<ModalTitle title="Annulation du constat" />}
                    onTouchOutside={() => {
                        setVisibleForReportCancel(false);
                    }}
                    modalAnimation={new SlideAnimation({
                        slideFrom: 'bottom',
                    })}
                    swipeDirection={['up', 'down', 'left', 'right']} // can be string or an array
                    swipeThreshold={100} // default 100
                    onSwipeOut={(event) => {
                        setVisibleForReportCancel(false)
                    }}
                    footer={
                        <ModalFooter>
                            <ModalButton
                                text="NON"
                                onPress={() => setVisibleForReportCancel(false)}
                            />
                            <ModalButton
                                text="OUI"
                                onPress={() => { Actions.home(); setVisibleForReportCancel(false) }}
                            />
                        </ModalFooter>
                    }
                >
                    <ModalContent>
                        <View style={{ width: 300, height: 100, backgroundColor: 'white' }}>
                            <Text>Voulez-vous vraiment annuler le constat ?</Text>
                        </View>
                    </ModalContent>
                </Modal>
                <Menu>
                    <MenuTrigger>
                        <View style={styles.menuIcon}>
                            <MoreIcon name='md-more' color='white' size={25} />
                        </View>
                    </MenuTrigger>
                    <MenuOptions optionsContainerStyle={styles.menuOptionsContainer}>
                        <MenuOption onSelect={() => setVisibleForHelp(true)} value={2}>
                            <View style={styles.menuItem}>
                                <HelpIcon color='#02AFEF' name='help' size={25} />
                                <Text style={styles.menuTextItem}> Aide</Text>
                            </View>
                        </MenuOption>
                        <MenuOption onSelect={() => setVisibleForReportCancel(true)} value={2}>
                            <View style={styles.menuItem}>
                                <FileCancel color='#66F' name='file-cancel' size={25} />
                                <Text style={styles.menuTextItem}> Annuler le constat</Text>
                            </View>
                        </MenuOption>
                        <MenuOption onSelect={() => setVisibleForPartCancel(true)} value={2}>
                            <View style={styles.menuItem}>
                                <PartCancel color='red' name='cancel' size={25} />
                                <Text style={styles.menuTextItem}> Annuler la partie</Text>
                            </View>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            </View>
        )
    }
}