import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';  //  screen renders only after assets like font are loaded
import { enableScreens } from 'react-native-screens';

import Header from './screens/Header';
import SwipeNavigation from './navigation/SwipeNavigation';

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

  // return <DueDateNavigator />;
  // return <SwipeNavigation />;
  return (
    <>
      <Header />
      <SwipeNavigation />
    </>
  )
}