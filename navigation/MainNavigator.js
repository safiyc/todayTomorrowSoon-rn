import React from 'react';
// import { View, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Header from '../components/Header';
import MainScreen from '../screens/MainScreen';
import AboutScreen from '../screens/AboutScreen';

const MainStack = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: ({ navigation }) => {
      return {
        header: () => (
          <Header title="Main" hasBackButton={false} navigation={navigation} />
        )
      };
    }
  }
});

const AboutStack = createStackNavigator({
  About: {
    screen: AboutScreen,
    navigationOptions: ({ navigation }) => {
      return {
        header: () => (
          <Header title='About' hasBackButton={false} navigation={navigation} />
        )
      };
    }
  }
});

const AppStack = createDrawerNavigator({
  MainStackScreen: {
    screen: MainStack,
    navigationOptions: {
      // title of side menu link
      title: "Main",
      // disables swipe gesture to open/close side menu
      // instead, only hamburger icon open/close
      drawerLockMode: 'locked-closed'
    }
  },
  AboutStackScreen: {
    screen: AboutStack,
    navigationOptions: {
      title: "About",
      drawerLockMode: 'locked-closed'
    }
  }
});


export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack
    },
    {
      initialRouteName: "App"
    }
  )
);