import React from "react";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import ImageList from "../screens/ImageList";
import SettingsScreen from "../screens/SettingsScreen";
import { summer, spring, autumn, winter } from "../db/db";

const intialTab = 'Winter'

const TabNav =  createMaterialBottomTabNavigator({
    Winter: { screen: (props) => <ImageList season={winter} navigation={props.navigation}/>, navigationOptions: {tabBarColor: '#6DC0D5', tabBarLabel: "Winter" } },
    Spring: { screen: (props) => <ImageList season={spring} navigation={props.navigation}/>, navigationOptions: {tabBarColor: '#30416B', fontColor: "#fff" } },
    Summer: { screen: (props) => <ImageList season={summer} navigation={props.navigation} />, navigationOptions: {tabBarColor: '#F78E69' } },
    Autumn: { screen: (props) => <ImageList season={autumn} navigation={props.navigation} />, navigationOptions: {tabBarColor: '#FFC15E' } },
    Settings: { screen: (props) => <SettingsScreen navigation={props.navigation} />, navigationOptions: {tabBarColor: '#36382E' } }
  }, {
    initialRouteName: intialTab,
    activeColor: '#fff',
    inactiveColor: '#fff'
  });

export default TabNav;
