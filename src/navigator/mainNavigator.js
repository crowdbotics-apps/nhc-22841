import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps176463Navigator from '../features/Maps176463/navigator';
import Additem176462Navigator from '../features/Additem176462/navigator';
import Maps176458Navigator from '../features/Maps176458/navigator';
import UserProfile176454Navigator from '../features/UserProfile176454/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps176463: { screen: Maps176463Navigator },
Additem176462: { screen: Additem176462Navigator },
Maps176458: { screen: Maps176458Navigator },
UserProfile176454: { screen: UserProfile176454Navigator },

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
