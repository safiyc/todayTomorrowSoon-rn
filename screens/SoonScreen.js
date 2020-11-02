import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import TASKS from '../data/dummy-data';

const renderGridItem = (itemData) => {
  return (
    <View style={styles.gridItem}><Text>{itemData.item.title}</Text></View>
  );
}

const SoonScreen = props => {
  const soonTasks = TASKS.filter(task => task.due === 'Soon');
  // console.log(soonTasks);
  
  return (
    <FlatList data={soonTasks} renderItem={renderGridItem} numColumns={1} />
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 50
  }
});

export default SoonScreen;