// import { createBottomTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import ImageList from "../screens/ImageList";
import SettingsScreen from "../screens/SettingsScreen";

// const TabNav = createBottomTabNavigator({
//       Seasons: ImageList,
//       Settings: SettingsScreen
// });

const TabNav =  createMaterialBottomTabNavigator({
    Seasons: { screen: ImageList },
    Settings: { screen: SettingsScreen }
  }, {
    initialRouteName: 'Seasons',
    activeColor: '#f0edf0',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  });

export default TabNav;
