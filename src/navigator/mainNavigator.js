import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList126848Navigator from '../features/NotificationList126848/navigator';
import Settings126847Navigator from '../features/Settings126847/navigator';
import Settings126839Navigator from '../features/Settings126839/navigator';
import UserProfile126837Navigator from '../features/UserProfile126837/navigator';
import UserProfile126815Navigator from '../features/UserProfile126815/navigator';
import Maps126795Navigator from '../features/Maps126795/navigator';
import Settings126772Navigator from '../features/Settings126772/navigator';
import Settings126754Navigator from '../features/Settings126754/navigator';
import NotificationList126753Navigator from '../features/NotificationList126753/navigator';
import Maps126751Navigator from '../features/Maps126751/navigator';
import Maps126725Navigator from '../features/Maps126725/navigator';
import Add-Item126724Navigator from '../features/Add-Item126724/navigator';
import Maps126720Navigator from '../features/Maps126720/navigator';
import UserProfile126716Navigator from '../features/UserProfile126716/navigator';
import Maps126657Navigator from '../features/Maps126657/navigator';
import Add-Item126656Navigator from '../features/Add-Item126656/navigator';
import Maps126652Navigator from '../features/Maps126652/navigator';
import UserProfile126648Navigator from '../features/UserProfile126648/navigator';
import Settings126611Navigator from '../features/Settings126611/navigator';
import Settings126594Navigator from '../features/Settings126594/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList126848: { screen: NotificationList126848Navigator },
Settings126847: { screen: Settings126847Navigator },
Settings126839: { screen: Settings126839Navigator },
UserProfile126837: { screen: UserProfile126837Navigator },
UserProfile126815: { screen: UserProfile126815Navigator },
Maps126795: { screen: Maps126795Navigator },
Settings126772: { screen: Settings126772Navigator },
Settings126754: { screen: Settings126754Navigator },
NotificationList126753: { screen: NotificationList126753Navigator },
Maps126751: { screen: Maps126751Navigator },
Maps126725: { screen: Maps126725Navigator },
Add-Item126724: { screen: Add-Item126724Navigator },
Maps126720: { screen: Maps126720Navigator },
UserProfile126716: { screen: UserProfile126716Navigator },
Maps126657: { screen: Maps126657Navigator },
Add-Item126656: { screen: Add-Item126656Navigator },
Maps126652: { screen: Maps126652Navigator },
UserProfile126648: { screen: UserProfile126648Navigator },
Settings126611: { screen: Settings126611Navigator },
Settings126594: { screen: Settings126594Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
