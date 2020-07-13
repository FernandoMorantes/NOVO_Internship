import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function InvestSummary(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.frame1}>
        <Text style={styles.inversion}>Inversión</Text>
        <Text style={styles.invest_summary_val1}>$1.600.000</Text>
      </View>
      <View style={styles.invest_summary_divider}></View>
      <View style={styles.frame2}>
        <Text style={styles.rendimiento}>Rendimiento</Text>
        <Text style={styles.invest_summary_val2}>-$30.000</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    marginRight: 24,
    marginLeft: 24,
    marginBottom: 40,
    borderRadius: 20,
    paddingLeft: 0,
    paddingRight: 0,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  frame1: {
    height: 21,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    marginRight: 21,
    marginLeft: 21
  },
  inversion: {
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)",
    alignSelf: "flex-start"
  },
  invest_summary_val1: {
    fontFamily: "open-sans-600",
    color: "rgba(88,80,107,1)",
    alignSelf: "flex-start"
  },
  invest_summary_divider: {
    width: 292,
    height: 1,
    backgroundColor: "rgba(250,249,253,1)",
    marginTop: 10,
    marginBottom: 10
  },
  frame2: {
    height: 21,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    marginRight: 21,
    marginLeft: 21
  },
  rendimiento: {
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)",
    alignSelf: "flex-start"
  },
  invest_summary_val2: {
    fontFamily: "open-sans-600",
    color: "rgba(88,80,107,1)",
    alignSelf: "flex-start"
  }
});

export default InvestSummary;
