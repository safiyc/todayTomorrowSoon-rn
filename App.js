// gesture-handler placed here per react-navigation-native doc
// to prevent crash in production version of app
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import * as Font from 'expo-font';
//  screen renders only after assets like font are loaded
import { AppLoading } from 'expo';
// AppNavigator => CreateAppContainer
import AppNavigator from "./navigation/MainNavigator";

import { enableScreens } from 'react-native-screens';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'gaegu': require('./assets/fonts/Gaegu-Regular.ttf'),
    'gaegu-bold': require('./assets/fonts/Gaegu-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
    );
  }

  return <AppNavigator />
}