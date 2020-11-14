import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Button style={{ color: 'white', fontSize: 50 }} title='&#9776;' />
      <Text style={{ color: 'white', fontSize: 30, textAlign: 'center', flex: 1 }}>tinyBigTasks</Text>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: 'black',
    marginTop: 30,
    justifyContent: 'space-between'
  }
});

export default Header;