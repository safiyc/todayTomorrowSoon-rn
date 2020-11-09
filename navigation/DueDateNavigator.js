// using tabs to navigate due dates
// import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createAppContainer } from 'react-navigation';

// import AllTasksScreen from '../screens/AllTasksScreen';
// import TodayScreen from '../screens/TodayScreen';
// import TomorrowScreen from '../screens/TomorrowScreen';
// import SoonScreen from '../screens/SoonScreen';

// const DueDateNavigator = createStackNavigator({
// AllTasks: AllTasksScreen,
// Today: {
//   screen: TodayScreen,
//   navigationOptions: {
//     headerTitle: 'Today'
//   }
// },
// Tomorrow: TomorrowScreen,
// Soon: SoonScreen,
// TaskDetail: TaskDetailScreen
// });

// const TabNavigator = createBottomTabNavigator({
// AllTasks: AllTasksScreen,  // remove this tab once side menu is made
//   Today: TodayScreen,
//   Tomorrow: TomorrowScreen,
//   Soon: SoonScreen
// });

// export default createAppContainer(TabNavigator);




// using swipe screen to navigate to today/tomorrow/soon
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import TodayScreen from '../screens/TodayScreen';
import TomorrowScreen from '../screens/TomorrowScreen';
import SoonScreen from '../screens/SoonScreen';

const TodayRoute = () => (
  <TodayScreen />
);

const TomorrowRoute = () => (
  <TomorrowScreen />
)

const SoonRoute = () => (
  <SoonScreen />
)

const initialLayout = { width: Dimensions.get('window').width };

// const renderTabBar = props => {
//   <TabBar
//     {...props}
//     indicatorStyle={{ backgroundColor: 'black' }}
//     style={{ backgroundColor: 'pink' }}
//   >
//     <Text>Test Header</Text>
//   </TabBar>
// }

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
    // renderTabBar={props => <TabBar {...props} />}
    // renderTabBar={renderTabBar}
    />
  );
}