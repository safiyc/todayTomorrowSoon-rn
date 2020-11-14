// using swipe screen to navigate to today/tomorrow/soon
import React, { useState } from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import TodayScreen from '../screens/TodayScreen';
import TomorrowScreen from '../screens/TomorrowScreen';
import SoonScreen from '../screens/SoonScreen';

const TodayRoute = () => (
  <TodayScreen />
);

const TomorrowRoute = () => (
  <TomorrowScreen />
);

const SoonRoute = () => (
  <SoonScreen />
);

const initialLayout = { width: Dimensions.get('window').width };

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'black', height: 3 }}
    style={{ backgroundColor: 'grey', height: 50 }}
  />
);

export default function SwipeNavigation() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'today', title: 'Today' },
    { key: 'tomorrow', title: 'Tomorrow' },
    { key: 'soon', title: 'Soon' }
  ]);

  const renderScene = SceneMap({
    today: TodayRoute,
    tomorrow: TomorrowRoute,
    soon: SoonRoute
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
      style={styles.container}
    // tabBarPosition='bottom'
    />
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'yellow'
  }
})