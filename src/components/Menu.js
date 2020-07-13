import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Center } from "@builderx/utils";

function Menu(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.options_container}>
        <View style={styles.options}>
          <View style={styles.home_btn}>
            <Center horizontal>
              <Text style={styles.inicio}>Inicio</Text>
            </Center>
            <Image
              source={require("../assets/images/home_24px.png")}
              resizeMode="contain"
              style={styles.home_icon}
            ></Image>
          </View>
          <View style={styles.history_btn}>
            <Text style={styles.historial}>Historial</Text>
            <Image
              source={require("../assets/images/format_list_bulleted_24px1.png")}
              resizeMode="contain"
              style={styles.history_icon}
            ></Image>
          </View>
          <Text style={styles.invest}>Ahorrar</Text>
          <View style={styles.profile_btn}>
            <Center horizontal>
              <Text style={styles.miPerfil}>Mi perfil</Text>
            </Center>
            <Image
              source={require("../assets/images/account_circle_24px.png")}
              resizeMode="cover"
              style={styles.profile_icon}
            ></Image>
          </View>
          <View style={styles.more}>
            <Center horizontal>
              <Text style={styles.mas}>Más</Text>
            </Center>
            <Image
              source={require("../assets/images/more_horiz_24px.png")}
              resizeMode="contain"
              style={styles.more_icon}
            ></Image>
          </View>
        </View>
      </View>
      <View style={styles.invest_btn_container}>
        <Image
          source={require("../assets/images/invest.png")}
          resizeMode="contain"
          style={styles.invest_btn}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  options_container: {
    top: 26,
    height: 60,
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 16,
    shadowColor: "rgba(49,63,68,0.75)",
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 6,
    shadowOffset: {
      width: 0,
      height: 0
    }
  },
  options: {
    top: 9,
    height: 41,
    position: "absolute",
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around"
  },
  home_btn: {
    width: 37,
    height: 41,
    backgroundColor: "rgba(255,255,255,1)"
  },
  inicio: {
    top: 27,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "rgba(72,185,230,1)",
    fontSize: 10,
    textAlign: "center"
  },
  home_icon: {
    top: 4,
    left: 8,
    width: 20,
    height: 17,
    position: "absolute"
  },
  history_btn: {
    width: 37,
    height: 41,
    backgroundColor: "rgba(255,255,255,1)"
  },
  historial: {
    top: 27,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "rgba(169,157,198,1)",
    fontSize: 10,
    textAlign: "center"
  },
  history_icon: {
    top: 3,
    left: 11,
    width: 18,
    height: 15,
    position: "absolute"
  },
  invest: {
    fontFamily: "open-sans-regular",
    color: "rgba(169,157,198,1)",
    fontSize: 10,
    textAlign: "center",
    height: 14,
    width: 37
  },
  profile_btn: {
    width: 37,
    height: 41,
    backgroundColor: "rgba(255,255,255,1)"
  },
  miPerfil: {
    top: 27,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "rgba(169,157,198,1)",
    fontSize: 10,
    textAlign: "center"
  },
  profile_icon: {
    top: 1,
    left: 8,
    width: 20,
    height: 20,
    position: "absolute"
  },
  more: {
    width: 37,
    height: 41,
    backgroundColor: "rgba(255,255,255,1)"
  },
  mas: {
    top: 27,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "rgba(169,157,198,1)",
    fontSize: 10,
    textAlign: "center"
  },
  more_icon: {
    top: 11,
    left: "28.11%",
    width: 16,
    height: 4,
    position: "absolute"
  },
  invest_btn_container: {
    left: 0,
    height: 60,
    position: "absolute",
    right: 0,
    bottom: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 16
  },
  invest_btn: {
    width: 55,
    height: 55
  }
});

export default Menu;
