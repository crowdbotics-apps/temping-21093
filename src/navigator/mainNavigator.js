import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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
