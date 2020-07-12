import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  ImageBackground
} from "react-native";
import Gradient from "react-native-css-gradient";

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.title1}>
            <Text style={styles.holaCamila}>Hola, Camila</Text>
            <Image
              source={require("../assets/images/notifications_24px1.png")}
              resizeMode="contain"
              style={styles.notification_icon}
            ></Image>
          </View>
          <Image
            source={require("../assets/images/IMG4.png")}
            resizeMode="contain"
            style={styles.inves_img}
          ></Image>
          <Gradient
            gradient = {`linear-gradient(180deg, rgba(44, 82, 216, 0) 0%, rgba(44, 82, 216, 0.4) 100%)`}
            style={styles.invest_card}>
            <Text style={styles.eresEstratega}>Eres{"\n"}Estratega</Text>
            <Text style={styles.tuSaldo}>Tu saldo</Text>
            <Text style={styles.invest_value}>$1.570.000</Text>
          </Gradient>
          <View style={styles.inves_summary}>
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
          <View style={styles.title2}>
            <Text style={styles.tusMetas}>Tus metas</Text>
            <Image
              source={require("../assets/images/add_circle_outline_24px1.png")}
              resizeMode="contain"
              style={styles.cirlce_add_icon}
            ></Image>
          </View>
          <View style={styles.goal_scroll}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.goal_scroll_contentContainerStyle}
            >
              <View style={styles.goalCard6}>
                <Image
                  source={require("../assets/images/playa.png")}
                  resizeMode="contain"
                  style={styles.goalImage6}
                ></Image>
                <Text style={styles.goalTitle2}>
                  Viaje a Islas{"\n"}Canarias
                </Text>
                <View style={styles.goalDivider6}></View>
                <View style={styles.goalStatus6}>
                  <Image
                    source={require("../assets/images/s_donut.png")}
                    resizeMode="contain"
                    style={styles.goalPercentage6}
                  ></Image>
                  <View style={styles.goalValues6}>
                    <Text style={styles.goalValue7}>$1.630.000</Text>
                    <Text style={styles.goalValuetarget6}>$8.000.000</Text>
                  </View>
                </View>
              </View>
              <View style={styles.goalCard5}>
                <Image
                  source={require("../assets/images/laptop.png")}
                  resizeMode="contain"
                  style={styles.goalImage5}
                ></Image>
                <Text style={styles.macBookPro2}>MacBook Pro</Text>
                <View style={styles.goalDivider5}></View>
                <View style={styles.goalStatus5}>
                  <Image
                    source={require("../assets/images/s_donut1.png")}
                    resizeMode="contain"
                    style={styles.goalPercentage5}
                  ></Image>
                  <View style={styles.goalValues5}>
                    <Text style={styles.goalValue6}>$1.630.000</Text>
                    <Text style={styles.goalValuetarget5}>$8.000.000</Text>
                  </View>
                </View>
              </View>
              <View style={styles.goalCard4}>
                <Image
                  source={require("../assets/images/playa.png")}
                  resizeMode="contain"
                  style={styles.goalImage4}
                ></Image>
                <Text style={styles.viajeACancun2}>Viaje a {"\n"}Cancún</Text>
                <View style={styles.goalDivider4}></View>
                <View style={styles.goalStatus4}>
                  <Image
                    source={require("../assets/images/s_donut2.png")}
                    resizeMode="contain"
                    style={styles.goalPercentage4}
                  ></Image>
                  <View style={styles.goalValues4}>
                    <Text style={styles.goalValue5}>$0</Text>
                    <Text style={styles.goalValuetarget4}>$9.850.000</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      <View style={styles.menu}>
        <View style={styles.options_containerStack}>
          <View style={styles.options_container}>
            <View style={styles.options}>
              <View style={styles.home_btn}>
                <Text style={styles.inicio}>Inicio</Text>
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
                <Text style={styles.miPerfil}>Mi perfil</Text>
                <Image
                  source={require("../assets/images/account_circle_24px.png")}
                  resizeMode="cover"
                  style={styles.profile_icon}
                ></Image>
              </View>
              <View style={styles.more}>
                <Text style={styles.mas}>Más</Text>
                <Image
                  source={require("../assets/images/more_horiz_24px.png")}
                  resizeMode="contain"
                  style={styles.more_icon}
                ></Image>
              </View>
            </View>
          </View>
          <View style={styles.rect}>
            <Image
              source={require("../assets/images/invest.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollArea: {
    backgroundColor: "rgba(248,248,252,1)",
    flex: 1
  },
  scrollArea_contentContainerStyle: {
    height: 950,
    alignItems: "center"
  },
  title1: {
    height: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 24,
    marginLeft: 24,
    alignSelf: "stretch",
    alignItems: "center",
    marginTop: 54,
    marginBottom: 10
  },
  holaCamila: {
    fontFamily: "open-sans-600",
    color: "rgba(88,80,107,1)",
    fontSize: 18
  },
  notification_icon: {
    width: 17,
    height: 20
  },
  inves_img: {
    top: 89,
    width: 190,
    height: 180,
    position: "absolute",
    right: 20,
    zIndex: 10
  },
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
  inves_summary: {
    height: 114,
    backgroundColor: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    marginRight: 24,
    marginLeft: 24,
    marginBottom: 40,
    borderRadius: 20,
    paddingLeft: 0,
    paddingRight: 0,
    justifyContent: "center",
    alignItems: "center"
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
  },
  title2: {
    height: 25,
    alignSelf: "stretch",
    marginRight: 24,
    marginLeft: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },
  tusMetas: {
    fontFamily: "open-sans-600",
    color: "rgba(88,80,107,1)",
    fontSize: 18
  },
  cirlce_add_icon: {
    width: 21,
    height: 21
  },
  goal_scroll: {
    height: 202,
    alignSelf: "stretch",
    marginRight: 24,
    marginLeft: 24,
    backgroundColor: "rgba(248,248,252,1)",
    overflow: "hidden",
    borderRadius: 20
  },
  goal_scroll_contentContainerStyle: {
    width: 494,
    height: 202,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 20
  },
  goalCard6: {
    width: 158,
    backgroundColor: "rgba(255,255,255,1)",
    height: 202,
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: 10
  },
  goalImage6: {
    width: 40,
    height: 40,
    marginTop: 20,
    marginLeft: 20
  },
  goalTitle2: {
    fontFamily: "open-sans-600",
    color: "rgba(88,80,107,1)",
    marginTop: 10,
    marginLeft: 20
  },
  goalDivider6: {
    height: 1,
    backgroundColor: "rgba(250,249,253,1)",
    alignSelf: "stretch",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10
  },
  goalStatus6: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch"
  },
  goalPercentage6: {
    width: 50,
    height: 50,
    marginRight: 5
  },
  goalValues6: {
    width: 63,
    height: 28,
    justifyContent: "center"
  },
  goalValue7: {
    fontFamily: "open-sans-600",
    color: "rgba(72,185,230,1)",
    fontSize: 12,
    alignSelf: "flex-start"
  },
  goalValuetarget6: {
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)",
    fontSize: 10,
    alignSelf: "flex-start"
  },
  goalCard5: {
    width: 158,
    backgroundColor: "rgba(255,255,255,1)",
    height: 202,
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "flex-start",
    marginRight: 10
  },
  goalImage5: {
    width: 40,
    height: 40,
    marginTop: 20,
    marginLeft: 20
  },
  macBookPro2: {
    fontFamily: "open-sans-600",
    color: "rgba(88,80,107,1)",
    marginTop: 20,
    marginLeft: 20,
    height: 19,
    marginBottom: 9
  },
  goalDivider5: {
    height: 1,
    backgroundColor: "rgba(250,249,253,1)",
    alignSelf: "stretch",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10
  },
  goalStatus5: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch"
  },
  goalPercentage5: {
    width: 50,
    height: 50,
    marginRight: 5
  },
  goalValues5: {
    width: 63,
    height: 28,
    justifyContent: "center"
  },
  goalValue6: {
    fontFamily: "open-sans-600",
    color: "rgba(72,185,230,1)",
    fontSize: 12,
    alignSelf: "flex-start"
  },
  goalValuetarget5: {
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)",
    fontSize: 10,
    alignSelf: "flex-start"
  },
  goalCard4: {
    width: 158,
    backgroundColor: "rgba(255,255,255,1)",
    height: 202,
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: 10
  },
  goalImage4: {
    width: 40,
    height: 40,
    marginTop: 20,
    marginLeft: 20
  },
  viajeACancun2: {
    fontFamily: "open-sans-600",
    color: "rgba(88,80,107,1)",
    marginTop: 10,
    marginLeft: 20
  },
  goalDivider4: {
    height: 1,
    backgroundColor: "rgba(250,249,253,1)",
    alignSelf: "stretch",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10
  },
  goalStatus4: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch"
  },
  goalPercentage4: {
    width: 50,
    height: 50,
    marginRight: 5
  },
  goalValues4: {
    width: 63,
    height: 28,
    justifyContent: "center"
  },
  goalValue5: {
    fontFamily: "open-sans-600",
    color: "rgba(72,185,230,1)",
    fontSize: 12,
    alignSelf: "flex-start"
  },
  goalValuetarget4: {
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)",
    fontSize: 10,
    alignSelf: "flex-start"
  },
  menu: {
    left: 24,
    height: 86,
    position: "absolute",
    bottom: 24,
    right: 24
  },
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
    }
  },
  options: {
    height: 41,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    marginTop: 9
  },
  home_btn: {
    width: 37,
    height: 41,
    backgroundColor: "rgba(255,255,255,1)"
  },
  inicio: {
    fontFamily: "open-sans-regular",
    color: "rgba(72,185,230,1)",
    fontSize: 10,
    textAlign: "center",
    marginTop: 27,
    alignSelf: "center"
  },
  home_icon: {
    width: 20,
    height: 17,
    marginTop: -37,
    marginLeft: 8
  },
  history_btn: {
    width: 37,
    height: 41,
    backgroundColor: "rgba(255,255,255,1)"
  },
  historial: {
    fontFamily: "open-sans-regular",
    color: "rgba(169,157,198,1)",
    fontSize: 10,
    textAlign: "center",
    marginTop: 27
  },
  history_icon: {
    width: 18,
    height: 15,
    marginTop: -38,
    marginLeft: 11
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
    fontFamily: "open-sans-regular",
    color: "rgba(169,157,198,1)",
    fontSize: 10,
    textAlign: "center",
    marginTop: 27,
    alignSelf: "center"
  },
  profile_icon: {
    width: 20,
    height: 20,
    marginTop: -40,
    marginLeft: 8
  },
  more: {
    width: 37,
    height: 41,
    backgroundColor: "rgba(255,255,255,1)"
  },
  mas: {
    fontFamily: "open-sans-regular",
    color: "rgba(169,157,198,1)",
    fontSize: 10,
    textAlign: "center",
    marginTop: 27,
    alignSelf: "center"
  },
  more_icon: {
    width: 16,
    height: 4,
    marginTop: -30,
    marginLeft: 10
  },
  rect: {
    left: 0,
    height: 60,
    position: "absolute",
    right: 0,
    bottom: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 16
  },
  image: {
    width: 55,
    height: 55
  },
  options_containerStack: {
    height: 90,
    marginTop: -4
  }
});

export default Home;
