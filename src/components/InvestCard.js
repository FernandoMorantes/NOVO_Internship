import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, Image } from "react-native";
import Gradient from "react-native-css-gradient";

function InvestCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Gradient
          gradient = {`linear-gradient(180deg, rgba(44, 82, 216, 0) 0%, rgba(44, 82, 216, 0.4) 100%)`}
          style={styles.invest_card}>
            <Text style={styles.eresEstratega}>Eres{"\n"}Estratega</Text>
            <Text style={styles.tuSaldo}>Tu saldo</Text>
            <Text style={styles.invest_value}>$1.570.000</Text>
      </Gradient>
      <Image
        source={require("../assets/images/camila.png")}
        resizeMode="contain"
        style={styles.camila_img}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  invest_card: {
    height: 230,
    alignSelf: "stretch",
    marginRight: 24,
    marginLeft: 24,
    marginBottom: 20,
    borderRadius: 20,
    marginTop: 30,
    justifyContent: "flex-start",
    overflow: "hidden",
    backgroundColor: "#54D1ED"
  },
  invest_card_imageStyle: {},
  eresEstratega: {
    fontFamily: "open-sans-600",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginLeft: 25,
    marginTop: 30
  },
  tuSaldo: {
    fontFamily: "open-sans-600",
    color: "rgba(255,255,255,1)",
    marginTop: 65,
    marginLeft: 20
  },
  invest_value: {
    fontFamily: "open-sans-600",
    color: "rgba(255,255,255,1)",
    fontSize: 36,
    marginLeft: 20
  },
  camila_img: {
    top: 0,
    right: 34,
    width: 170,
    height: 180,
    position: "absolute"
  }
});

export default InvestCard;
