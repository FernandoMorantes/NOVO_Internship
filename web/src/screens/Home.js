import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Center } from "@builderx/utils";
import Svg, { Ellipse } from "react-native-svg";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.mainContent_contentContainerStyle}
        >
          <View style={styles.title1}>
            <View style={styles.titleContainer1}>
              <Text style={styles.holaCamila}>Hola, Camila</Text>
              <Image
                source={require("../assets/images/notifications_24px.png")}
                resizeMode="contain"
                style={styles.ic_notifications}
              ></Image>
            </View>
          </View>
          <View style={styles.valueCard1}>
            <Text style={styles.eresEstratega1}>Eres{"\n"}estratega</Text>
            <Text style={styles.tuSaldo1}>Tu saldo</Text>
            <Text style={styles.loremIpsum1}>$1.500.000</Text>
          </View>
          <View style={styles.investSummary}>
            <View style={styles.frame1}>
              <Text style={styles.inversion1}>Inversión</Text>
              <Text style={styles.value2}>$1.600.000</Text>
            </View>
            <View style={styles.divider1}></View>
            <View style={styles.frame2}>
              <Text style={styles.rendimiento}>Rendimiento</Text>
              <Text style={styles.value3}>-$30.000</Text>
            </View>
          </View>
          <View style={styles.title2}>
            <View style={styles.titleContainer2}>
              <Text style={styles.tusMetas}>Tus metas</Text>
              <Image
                source={require("../assets/images/add_circle_outline_24px.png")}
                resizeMode="contain"
                style={styles.ic_add_circle}
              ></Image>
            </View>
          </View>
          <Image
            source={require("../assets/images/IMG3.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </ScrollView>
      </View>
      <View style={styles.menu}>
        <View style={styles.containerBottom}>
          <View style={styles.rect1}>
            <Center horizontal>
              <Svg viewBox="0 0 55 54.63" style={styles.ellipse}>
                <Ellipse
                  strokeWidth={5}
                  fill="rgba(74,144,226,1)"
                  cx={28}
                  cy={27}
                  rx={25}
                  ry={25}
                ></Ellipse>
              </Svg>
            </Center>
            <EntypoIcon name="plus" style={styles.ic_add}></EntypoIcon>
          </View>
        </View>
        <Center horizontal>
          <Image
            source={require("../assets/images/container1.png")}
            resizeMode="cover"
            style={styles.navbarContainer}
          ></Image>
        </Center>
        <View style={styles.options}>
          <View style={styles.rect2}>
            <Center horizontal>
              <Text style={styles.inicio}>Inicio</Text>
            </Center>
            <EntypoIcon name="home" style={styles.ic_home}></EntypoIcon>
          </View>
          <View style={styles.history}>
            <Center horizontal>
              <Text style={styles.historial}>Historial</Text>
            </Center>
            <EntypoIcon name="list" style={styles.ic_hystory}></EntypoIcon>
          </View>
          <Text style={styles.invest}>Ahorrar</Text>
          <View style={styles.profile}>
            <Center horizontal>
              <Text style={styles.miPerfil}>Mi perfil</Text>
            </Center>
            <FontAwesomeIcon
              name="user-circle"
              style={styles.ic_profile}
            ></FontAwesomeIcon>
          </View>
          <View style={styles.more}>
            <Center horizontal>
              <Text style={styles.mas}>Más</Text>
            </Center>
            <EntypoIcon
              name="dots-three-horizontal"
              style={styles.ic_more}
            ></EntypoIcon>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(248,248,252,1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0)"
  },
  mainContent: {
    position: "absolute",
    backgroundColor: "rgba(248,248,252,1)",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  mainContent_contentContainerStyle: {
    height: 2430,
    alignItems: "center"
  },
  title1: {
    height: 24,
    backgroundColor: "rgba(15,15, 15,0)",
    marginTop: 64,
    alignSelf: "stretch",
    marginRight: 24,
    marginLeft: 24,
    marginBottom: 10
  },
  titleContainer1: {
    left: 0,
    height: 24,
    position: "absolute",
    right: 0,
    top: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  holaCamila: {
    fontFamily: "open-sans-600",
    color: "rgba(88,80,107,1)",
    fontSize: 18,
    height: 24,
    width: 109
  },
  ic_notifications: {
    width: 24,
    height: 24
  },
  valueCard1: {
    backgroundColor: "rgba(74,144,226,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 300,
    shadowOpacity: 0.01,
    shadowRadius: 100,
    borderRadius: 20,
    justifyContent: "flex-start",
    height: 230,
    alignSelf: "stretch",
    marginRight: 24,
    marginLeft: 24,
    marginBottom: 20,
    marginTop: 30
  },
  eresEstratega1: {
    fontFamily: "open-sans-600",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    alignSelf: "flex-start",
    marginTop: 30,
    marginLeft: 25
  },
  tuSaldo1: {
    fontFamily: "open-sans-600",
    color: "rgba(255,255,255,1)",
    marginLeft: 20,
    marginTop: 60
  },
  loremIpsum1: {
    fontFamily: "open-sans-600",
    color: "rgba(255,255,255,1)",
    fontSize: 36,
    alignSelf: "flex-start",
    marginLeft: 20
  },
  investSummary: {
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 300,
    shadowOpacity: 0.01,
    shadowRadius: 100,
    overflow: "hidden",
    borderRadius: 20,
    height: 102,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    marginRight: 24,
    marginLeft: 24,
    paddingRight: 21,
    paddingLeft: 21,
    marginBottom: 40
  },
  frame1: {
    height: 21,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 283
  },
  inversion1: {
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)"
  },
  value2: {
    fontFamily: "open-sans-600",
    color: "rgba(88,80,107,1)"
  },
  divider1: {
    height: 1,
    backgroundColor: "rgba(250,249,253,1)",
    marginTop: 10,
    marginBottom: 10,
    marginRight: 0,
    marginLeft: 0,
    alignSelf: "stretch"
  },
  frame2: {
    height: 21,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 283
  },
  rendimiento: {
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)"
  },
  value3: {
    fontFamily: "open-sans-600",
    color: "rgba(88,80,107,1)"
  },
  title2: {
    height: 24,
    backgroundColor: "rgba(15,15, 15,0)",
    marginBottom: 10,
    marginRight: 24,
    marginLeft: 24,
    alignSelf: "stretch"
  },
  titleContainer2: {
    left: 0,
    height: 24,
    position: "absolute",
    right: 0,
    top: 0,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  tusMetas: {
    fontFamily: "open-sans-600",
    color: "rgba(88,80,107,1)",
    fontSize: 18,
    height: 24,
    width: 89
  },
  ic_add_circle: {
    width: 24,
    height: 24
  },
  image: {
    top: 99,
    left: 171,
    width: 170,
    height: 180,
    position: "absolute"
  },
  menu: {
    height: 86,
    position: "absolute",
    bottom: 61,
    left: 23,
    right: 25,
    backgroundColor: "rgba(255,255,255,0)"
  },
  containerBottom: {
    top: "29.7%",
    left: 0,
    height: 61,
    position: "absolute",
    borderRadius: 16,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 8,
      height: 20
    },
    elevation: 300,
    shadowOpacity: 0.01,
    shadowRadius: 100,
    right: 0
  },
  rect1: {
    top: -26,
    width: 55,
    height: 55,
    position: "absolute",
    left: 136
  },
  ellipse: {
    width: 55,
    height: 55,
    position: "absolute",
    top: 0
  },
  ic_add: {
    top: 14,
    left: 16,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 24
  },
  navbarContainer: {
    top: 26,
    width: 327,
    height: 60,
    position: "absolute"
  },
  options: {
    top: 35,
    height: 41,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    left: 0,
    right: -2,
    alignItems: "center"
  },
  rect2: {
    width: 37,
    height: 41,
    backgroundColor: "rgba(255,255,255,1)",
    alignSelf: "flex-end"
  },
  inicio: {
    top: 27,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "rgba(84,209,237,1)",
    fontSize: 10,
    textAlign: "center"
  },
  ic_home: {
    top: "0%",
    left: "17.17%",
    position: "absolute",
    color: "rgba(84,209,237,1)",
    fontSize: 24
  },
  history: {
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
  ic_hystory: {
    top: "0%",
    left: "17.78%",
    position: "absolute",
    color: "rgba(169,157,198,1)",
    fontSize: 24
  },
  invest: {
    fontFamily: "open-sans-regular",
    color: "rgba(169,157,198,1)",
    fontSize: 10,
    textAlign: "center",
    alignSelf: "flex-end"
  },
  profile: {
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
  ic_profile: {
    top: "0%",
    left: "17.78%",
    position: "absolute",
    color: "rgba(169,157,198,1)",
    fontSize: 24
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
  ic_more: {
    top: "0%",
    left: "17.78%",
    position: "absolute",
    color: "rgba(169,157,198,1)",
    fontSize: 24
  }
});

export default Home;
