import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import TASKS from '../data/dummy-data';

const renderGridItem = (itemData) => {
  return (
    <View style={styles.gridItem}><Text>{itemData.item.title}</Text></View>
  );
}

const TodayScreen = () => {
  const todayTasks = TASKS.filter(task => task.due === 'Today');
  // console.log(todayTasks);

  return (
    <FlatList data={todayTasks} renderItem={renderGridItem} numColumns={1} style={styles.todayList} />
  );
};

const styles = StyleSheet.create({
  todayList: {
    flex: 1,
    backgroundColor: 'salmon'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 50,
    backgroundColor: 'white'
  }
});

export default TodayScreen;