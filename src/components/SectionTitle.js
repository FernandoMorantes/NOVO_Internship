import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function SectionTitle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group}>
        <Text style={styles.holaCamila}>Hola, Camila</Text>
        <View style={styles.rect2}>
          <Icon name="ios-notifications-outline" style={styles.icon}></Icon>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingRight: 24,
    paddingLeft: 24,
    marginTop: 54,
    marginBottom: 10
  },
  group: {
    height: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1
  },
  holaCamila: {
    fontFamily: "open-sans-600",
    color: "rgba(88,80,107,1)",
    fontSize: 18,
    alignSelf: "flex-start"
  },
  rect2: {
    alignItems: "flex-end",
    alignSelf: "flex-start"
  },
  icon: {
    color: "rgba(84,209,237,1)",
    fontSize: 24,
    width: 15,
    height: 26
  }
});

export default SectionTitle;
