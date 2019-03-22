import React from "react";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import ImageList from "../screens/ImageList";
import SettingsScreen from "../screens/SettingsScreen";
import { summer, spring, autumn, winter } from "../db/db";
import { Icon } from 'react-native-elements'

const intialTab = 'Winter'

const TabNav =  createMaterialBottomTabNavigator({
    Winter: { screen: (props) => 
              <ImageList season={winter} navigation={props.navigation}/>, 
              navigationOptions: {
                tabBarColor: '#6DC0D5', 
                tabBarIcon: <Icon
                  name='photo-album'
                  color='#ffffff' />  
              }
            },
    Spring: { screen: (props) => 
              <ImageList season={spring} navigation={props.navigation}/>, 
              navigationOptions: {
                tabBarColor: '#30416B', 
                tabBarIcon: <Icon
                  name='photo-album'
                  color='#ffffff' />  
              } 
            },
    Summer: { screen: (props) => 
              <ImageList season={summer} navigation={props.navigation} />, 
              navigationOptions: {
                tabBarColor: '#F78E69',
                tabBarIcon: <Icon
                  name='photo-album'
                  color='#ffffff' /> 
              } 
            },
    Autumn: { screen: (props) => 
              <ImageList season={autumn} navigation={props.navigation} />, 
              navigationOptions: { 
                tabBarColor: '#FFC15E',
                tabBarIcon: <Icon
                  name='photo-album'
                  color='#ffffff' /> 
              } 
            },
    Settings: { screen: (props) => 
                <SettingsScreen navigation={props.navigation} />, 
                navigationOptions: {
                  tabBarColor: '#36382E',
                  tabBarIcon: <Icon
                    name='settings'
                    color='#ffffff' />  
                } 
              }
    }, {
        initialRouteName: intialTab,
        activeColor: '#ffffff',
        inactiveColor: '#ffffff'
    })

export default TabNav;
