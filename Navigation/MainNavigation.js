//Import used functions from librairies
import * as React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { MenuProvider } from 'react-native-popup-menu';
//Import screens
import SignIn from '../Screens/Authentification/SignIn/SignIn';
import SignUp from '../Screens/Authentification/SignUp/SignUp';
import StartPage from '../Screens/StartPage/StartPage';
import Presentation from '../Screens/Presentation/Presentation';
import Home from '../Screens/Home/Home';
import Trash from '../Screens/Trash/Trash';
import Help from '../Screens/Help/Help';
import Common from '../Screens/Common/Common';
import Wounded from '../Screens/Wounded/Wounded';
import Witnesses from '../Screens/Witnesses/Witnesses';
import NewWitnesse from '../Screens/NewWitnesse/NewWitnesse';
import Damage from '../Screens/Damage/Damage';
import DateTime from '../Screens/DateTime/DateTime';
import GLocation from '../Screens/GLocation/GLocation';
import Cases from '../Screens/Cases/Cases';
import Case2 from '../Screens/Case2/Case2';
import Case2Choice1Step1 from '../Screens/Case2Choice1Step1/Case2Choice1Step1';
import Case2Choice1Step2 from '../Screens/Case2Choice1Step2/Case2Choice1Step2';
import Case2Choice1Step3 from '../Screens/Case2Choice1Step3/Case2Choice1Step3';
import Case2Choice1Step4 from '../Screens/Case2Choice1Step4/Case2Choice1Step4';
import Case2Choice1Step5 from '../Screens/Case2Choice1Step5/Case2Choice1Step5';
import Case2Choice2Step1 from '../Screens/Case2Choice2Step1/Case2Choice2Step1';
import Case2Choice2Step2 from '../Screens/Case2Choice2Step2/Case2Choice2Step2';
import Case2Choice2Step3 from '../Screens/Case2Choice2Step3/Case2Choice2Step3';
import Case2Choice2Step4 from '../Screens/Case2Choice2Step4/Case2Choice2Step4';
import Case2Choice2Step5 from '../Screens/Case2Choice2Step5/Case2Choice2Step5';
import Case2Choice3Step1 from '../Screens/Case2Choice3Step1/Case2Choice3Step1';
import Case2Choice3Step2 from '../Screens/Case2Choice3Step2/Case2Choice3Step2';
import Case2Choice3Step3 from '../Screens/Case2Choice3Step3/Case2Choice3Step3';
import Case2Choice3Step4 from '../Screens/Case2Choice3Step4/Case2Choice3Step4';
import Case2Choice3Step5 from '../Screens/Case2Choice3Step5/Case2Choice3Step5';
import Case2Choice3Step6 from '../Screens/Case2Choice3Step6/Case2Choice3Step6';
import Case2Choice4 from '../Screens/Case2Choice4/Case2Choice4'
//Import components
import DropDownMenu from '../Components/DropDownMenu/DropDownMenu';
import HeaderMenu from '../Components/HeaderMenu/HeaderMenu';
import CloseButton from '../Components/CloseButton/CloseButton';
//Import icones
import ReportIcon from 'react-native-vector-icons/FontAwesome';
import HelpIcon from 'react-native-vector-icons/MaterialIcons';
import TrashIcon from 'react-native-vector-icons/MaterialIcons';

//Home navigation
function HomeNaviagtion({ navigation }) {
  return (
    <Router>
        {/*Amicable report's scenes*/}
        <Scene key='root' navigationBarStyle={{ backgroundColor: '#00CC6A'}} headerTintColor="white">
          {/*Application start page and présentation*/}
          <Scene key='startPage' component={StartPage} hideNavBar={true} ></Scene>
          <Scene key='presentation' component={Presentation} hideNavBar={true}></Scene>
          {/*Authentification*/}
          <Scene key='signIn' initial={true} component={SignIn} hideNavBar={true}></Scene>
          <Scene key='signUp' component={SignUp} hideNavBar={true}></Scene>
          {/*Home page (Amicable report)*/}
          <Scene key='home' component={(props) => <Home {...props} navigation={navigation} />} hideNavBar={true}></Scene>
          {/*common parts's between drivers*/}
          <Scene key='common' drawer={true} component={Common} navigationBarStyle={{ backgroundColor: '#00EE6A', elevation:0, zindex:0 }} headerTintColor="white"></Scene>
          <Scene key='wounded' drawer={true} component={Wounded} title='Blessés' titleStyle={{ color: 'white' }} renderRightButton={(props) => <CloseButton {...props}/>}></Scene>
          <Scene key='witnesses' drawer={true} component={Witnesses} title='Témoins' titleStyle={{ color: 'white' }} renderRightButton={(props) => <CloseButton {...props}/>}></Scene>
          <Scene key='newWitnesse' drawer={true} component={NewWitnesse} title='Nouveau témoin' titleStyle={{ color: 'white' }} renderRightButton={(props) => <CloseButton {...props}/>}></Scene>
          <Scene key='damage' drawer={true} component={Damage} title='Dégats matériels' titleStyle={{ color: 'white' }} renderRightButton={(props) => <CloseButton {...props}/>}></Scene>
          <Scene key='dateTime'  drawer={true} component={DateTime} title='Date et heure' titleStyle={{ color: 'white' }} renderRightButton={(props) => <CloseButton {...props}/>}></Scene>
          <Scene key='gLocation' drawer={true} component={GLocation} title='Localisation' titleStyle={{ color: 'white' }} renderRightButton={(props) => <CloseButton {...props}/>}></Scene>
          {/*Amicable report cases*/}
          <Scene key='cases' component={Cases} hideNavBar={false} drawer={true} title='Saisie du constat' navigationBarStyle={{ backgroundColor: '#00C255', borderRadius:15, marginTop:10, width:'92%', marginHorizontal:'4%' }} headerTintColor="white" renderRightButton={(props) => <DropDownMenu {...props} help={'si chacun de vous a un téléphone vous pouvez choisir le premier cas, sinon vous devez choisir le deuxième cas'} component={'cases'} />}></Scene>
          <Scene key='case2' component={Case2} drawer={true} title='Choix de partie' renderRightButton={(props) => <DropDownMenu {...props} help={'ici vous avez le choix sur la partie que vous voulez commencer avec, l\'orsque vous terminer cette partie vous choisisez une autre partie j\'usquà vous satisfait tous les parties, enfin votre constat va être enregistrer dans la page constat'} component={'case2'} />}></Scene>
          {/*Amicable report case2 driver A*/}
          <Scene key='case2Choice1Step1' component={Case2Choice1Step1} title='Étape 1' renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape vous êtes sencé de remplir toutes les informations à propos du premier véhicule, cliquer sur le champs pour le remplir, et si vous terminez cliquez suivant pour enregistrer les données'} component={'part'} />}></Scene>
          <Scene key='case2Choice1Step2' component={Case2Choice1Step2} title='Étape 2' renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape vous êtes sencé de remplir toutes les informations à propos du premier assuré , cliquer sur le champs pour le remplir, et si vous terminez cliquez suivant pour enregistrer les données'} component={'part'} />}></Scene>
          <Scene key='case2Choice1Step3' component={Case2Choice1Step3} title='Étape 3' renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape vous êtes sencé de remplir toutes les informations à propos du premier conducteur , cliquer sur le champs pour le remplir, et si vous terminez cliquez suivant pour enregistrer les données'} component={'part'} />}></Scene>
          <Scene key='case2Choice1Step4' component={Case2Choice1Step4} title='Étape 4' renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape vous êtes sencé de prendre une image du premier véhicule, et si vous terminez cliquez suivant pour enregistrer l\'image'} component={'part'} />}></Scene>
          <Scene key='case2Choice1Step5' component={Case2Choice1Step5} title='Étape 5' renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape le premier conducteur est sencé de signé, et si vous terminez cliquez suivant pour enregistrer la signature'} component={'part'} />}></Scene>
          {/*Amicable report case2 driver B*/}
          <Scene key='case2Choice2Step1' component={Case2Choice2Step1} title='Étape 1' renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape vous êtes sencé de remplir toutes les informations à propos du deuxième véhicule, cliquer sur le champs pour le remplir, et si vous terminez cliquez suivant pour enregistrer les données'} component={'part'} />}></Scene>
          <Scene key='case2Choice2Step2' component={Case2Choice2Step2} title='Étape 2' renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape vous êtes sencé de remplir toutes les informations à propos du deuxième assuré , cliquer sur le champs pour le remplir, et si vous terminez cliquez suivant pour enregistrer les données'} component={'part'} />}></Scene>
          <Scene key='case2Choice2Step3' component={Case2Choice2Step3} title='Étape 3' renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape vous êtes sencé de remplir toutes les informations à propos du deuxième conducteur , cliquer sur le champs pour le remplir, et si vous terminez cliquez suivant pour enregistrer les données'} component={'part'} />}></Scene>
          <Scene key='case2Choice2Step4' component={Case2Choice2Step4} title='Étape 4' renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape vous êtes sencé de prendre une image du deuxième véhicule, et si vous terminez cliquez suivant pour enregistrer l\'image'} component={'part'} />}></Scene>
          <Scene key='case2Choice2Step5' component={Case2Choice2Step5} title='Étape 5' renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape le deuxième conducteur est sencé de signé, et si vous terminez cliquez suivant pour enregistrer la signature'} component={'part'} />}></Scene>
          {/*Amicable report case2 driver A&B checkbox*/}
          <Scene key='case2Choice3Step1' component={Case2Choice3Step1} title='Étape 1' renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape chaque conducteur doit cocher la case utile à propos de l\'accident, cliquer suivant si vous terminer l\'étape'} component={'part'} />}></Scene>
          <Scene key='case2Choice3Step2' component={Case2Choice3Step2} title='Étape 2' renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape chaque conducteur doit cocher la case utile à propos de l\'accident, cliquer suivant si vous terminer l\'étape'} component={'part'} />}></Scene>
          <Scene key='case2Choice3Step3' component={Case2Choice3Step3} title='Étape 3' renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape chaque conducteur doit cocher la case utile à propos de l\'accident, cliquer suivant si vous terminer l\'étape'} component={'part'} />}></Scene>
          <Scene key='case2Choice3Step4' component={Case2Choice3Step4} title='Étape 4' renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape chaque conducteur doit cocher la case utile à propos de l\'accident, cliquer suivant si vous terminer l\'étape'} component={'part'} />}></Scene>
          <Scene key='case2Choice3Step5' component={Case2Choice3Step5} title='Étape 5' renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape chaque conducteur doit cocher la case utile à propos de l\'accident, cliquer suivant si vous terminer l\'étape'} component={'part'} />}></Scene>
          <Scene key='case2Choice3Step6' component={Case2Choice3Step6} title='Étape 6' renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape chaque conducteur doit cocher la case utile à propos de l\'accident, cliquer suivant si vous terminer l\'étape'} component={'part'} />}></Scene>
          {/*Amicable report case2 sketch*/}
          <Scene key='case2Choice4' component={Case2Choice4} title='Croquis' renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape vous êtes sencé de remplir toutes les informations à propos du deuxième conducteur , cliquer sur le champs pour le remplir, et si vous terminez cliquez suivant pour enregistrer les données'} component={'part'} />}></Scene>
        </Scene>
    </Router>
  )
}
//Menu header component
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <HeaderMenu />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
//Drawer navigation 
const Drawer = createDrawerNavigator();
export default function MainNavigation() {
  return (
    <MenuProvider>
      <Drawer.Navigator
        drawerStyle={{ width: '80%' }}
        drawerContent={props => <CustomDrawerContent {...props} />}
        drawerContentOptions={{
          activeTintColor: '#00CC6A',
          inactiveTintColor: 'gray',
        }}
      >
        <Drawer.Screen
          name="home"
          component={HomeNaviagtion}
          options={{
            drawerLabel: 'Constat',
            drawerIcon: ({ color, size }) => <ReportIcon color={color} name='home' size={size}></ReportIcon>
          }}
        />
        <Drawer.Screen
          name="trash"
          component={
            (props) => <Trash {...props} reload={true}/>
          }
          options={{
            drawerLabel: 'Corbeille',
            drawerIcon: ({ color, size }) => <TrashIcon color={color} name='delete' size={size}></TrashIcon>
          }}
        />
        <Drawer.Screen
          name="help"
          component={Help}
          options={{
            drawerLabel: 'Aide',
            drawerIcon: ({ color, size }) => <HelpIcon color={color} name='help' size={size}></HelpIcon>
          }}
        />
      </Drawer.Navigator>
    </MenuProvider>
  );
}