import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function Menu(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.options_containerStack}>
        <View style={styles.options_container}>
          <View style={styles.options}>
            <View style={styles.home_btn}>
              <Image
                source={require("../assets/images/home_24px.png")}
                resizeMode="contain"
                style={styles.home_icon}
              ></Image>
              <Text style={styles.inicio}>Inicio</Text>
            </View>
            <View style={styles.history_btn}>
              <Image
                source={require("../assets/images/format_list_bulleted_24px1.png")}
                resizeMode="contain"
                style={styles.history_icon}
              ></Image>
              <Text style={styles.historial}>Historial</Text>
            </View>
            <Text style={styles.invest}>Ahorrar</Text>
            <View style={styles.profile_btn}>
              <Image
                source={require("../assets/images/account_circle_24px.png")}
                resizeMode="cover"
                style={styles.profile_icon}
              ></Image>
              <Text style={styles.miPerfil}>Mi perfil</Text>
            </View>
            <View style={styles.more}>
              <Image
                source={require("../assets/images/more_horiz_24px.png")}
                resizeMode="contain"
                style={styles.more_icon}
              ></Image>
              <Text style={styles.mas}>Más</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  options_container: {
    top: 30,
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
    },
    justifyContent: "center",
    overflow: "hidden"
  },
  options: {
    height: 37,
    flexDirection: "row",
    alignItems: "flex-end"
  },
  home_btn: {
    height: 41,
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 2
  },
  home_icon: {
    width: 20,
    height: 17
  },
  inicio: {
    fontFamily: "open-sans-regular",
    color: "rgba(72,185,230,1)",
    fontSize: 10,
    textAlign: "center",
    marginTop: 9
  },
  history_btn: {
    height: 41,
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingLeft: 2,
    paddingRight: 2
  },
  history_icon: {
    width: 18,
    height: 15
  },
  historial: {
    fontFamily: "open-sans-regular",
    color: "rgba(169,157,198,1)",
    fontSize: 10,
    textAlign: "center",
    marginTop: 8
  },
  invest: {
    fontFamily: "open-sans-regular",
    color: "rgba(169,157,198,1)",
    fontSize: 10,
    textAlign: "center",
    flex: 1,
    paddingLeft: 2,
    paddingRight: 2
  },
  profile_btn: {
    height: 41,
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingLeft: 2,
    paddingRight: 2
  },
  profile_icon: {
    width: 20,
    height: 20
  },
  miPerfil: {
    fontFamily: "open-sans-regular",
    color: "rgba(169,157,198,1)",
    fontSize: 10,
    textAlign: "center",
    marginTop: 5
  },
  more: {
    height: 41,
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingLeft: 2
  },
  more_icon: {
    width: 16,
    height: 4
  },
  mas: {
    fontFamily: "open-sans-regular",
    color: "rgba(169,157,198,1)",
    fontSize: 10,
    textAlign: "center",
    alignSelf: "center",
    marginTop: 13
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
  },
  options_containerStack: {
    height: 90,
    marginTop: -4
  }
});

export default Menu;
