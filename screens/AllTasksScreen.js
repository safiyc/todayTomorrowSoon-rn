import React from 'react';
import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

import TASKS from '../data/dummy-data';

const renderGridItem = (itemData) => {
  return (
    // <TouchableOpacity
    //   onPress={() => {
    //     props.navigation.navigate({ routeName: 'TaskDetail'});
    //   }}
    // >
      <View style={styles.gridItem}><Text>{itemData.item.title}</Text></View>  // item is a react-native property
    // </TouchableOpacity>
  );
}

const AllTasksScreen = props => {
  return (
    // <View style={styles.screen}>
    //   <Text style={styles.text}>All Tasks Screen</Text>
    //   <Button title='Go to Today' onPress={() => {
    //     props.navigation.navigate({
    //       routeName: 'Today'
    //     })
    //   }} />
    //   <Button title='Go to Tomorrow' onPress={() => {
    //     props.navigation.navigate({
    //       routeName: 'Tomorrow'
    //     })
    //   }} />
    //   <Button title='Go to Soon' onPress={() => {
    //     props.navigation.navigate({
    //       routeName: 'Soon'
    //     })
    //   }} />

      <FlatList data={TASKS} renderItem={renderGridItem} numColumns={3} />
    // </View>
  );
};

const styles = StyleSheet.create({
  // screen: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // text: {
  //   fontFamily: 'gaegu',
  //   fontSize: 36
  // },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 50
  }
});

export default AllTasksScreen;