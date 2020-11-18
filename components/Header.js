// Header component
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ navigation, title }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={openMenu} style={styles.icons}>
        <Ionicons name="md-menu" size={28} color="white" />
      </TouchableOpacity>
      <View style={styles.headerTextContainer}>
        <View style={styles.headerTitle}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
        <View style={styles.brandTitle}>
          <Text style={styles.brandText}>tinyBigTasks</Text>
        </View>
      </View>
    </View>
  );
};

// need work on header styling
const styles = StyleSheet.create({
  header: {
    marginTop: 26,
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#000"
  },
  headerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center"
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
    color: "#fff"
  }, headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center"
  }, brandTitle: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center"
  },
  brandText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#333",
    letterSpacing: 1,
    color: "#fff"
  },
  icons: {
    position: "absolute",
    left: 16,
    top: 15
  }
});

export default Header;