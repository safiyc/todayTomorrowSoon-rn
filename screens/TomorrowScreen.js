import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import TASKS from '../data/dummy-data';

const renderGridItem = (itemData) => {
  return (
    <View style={styles.gridItem}><Text>{itemData.item.title}</Text></View>
  );
}

const TomorrowScreen = props => {
  const tomorrowTasks = TASKS.filter(task => task.due === 'Tomorrow');
  // console.log(tomorrowTasks);
  
  return (
    <FlatList data={tomorrowTasks} renderItem={renderGridItem} numColumns={1} />
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 50
  }
});

export default TomorrowScreen;