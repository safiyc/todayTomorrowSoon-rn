import React, { useState } from 'react';
// import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';  //  screen renders only after assets like font are loaded
import { enableScreens } from 'react-native-screens';

import DueDateNavigator from './navigation/DueDateNavigator';

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

  return <DueDateNavigator />;
}