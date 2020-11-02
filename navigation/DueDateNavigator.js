import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import AllTasksScreen from '../screens/AllTasksScreen';
import TodayScreen from '../screens/TodayScreen';
import TomorrowScreen from '../screens/TomorrowScreen';
import SoonScreen from '../screens/SoonScreen';

const DueDateNavigator = createStackNavigator({
  // AllTasks: AllTasksScreen,
  Today: {
    screen: TodayScreen,
    navigationOptions: {
      headerTitle: 'Today'
    }
  },
  Tomorrow: TomorrowScreen,
  Soon: SoonScreen,
  // TaskDetail: TaskDetailScreen
});

const TabNavigator = createBottomTabNavigator({
  // AllTasks: AllTasksScreen,  // remove this tab once side menu is made
  Today: TodayScreen,
  Tomorrow: TomorrowScreen,
  Soon: SoonScreen
});


export default createAppContainer(TabNavigator);