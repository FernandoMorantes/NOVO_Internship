import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import InvestCard from "../components/InvestCard";
import InvestSummary from "../components/InvestSummary";
import GoalScroll from "../components/GoalScroll";
import PortafolioView from "../components/PortafolioView";
import MediaSlider from "../components/MediaSlider";
import Blog from "../components/Blog";
import Menu from "../components/Menu";

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
          <InvestCard style={styles.investCard}></InvestCard>
          <InvestSummary style={styles.investSummary}></InvestSummary>
          <View style={styles.title2}>
            <Text style={styles.tusMetas}>Tus metas</Text>
            <Image
              source={require("../assets/images/add_circle_outline_24px1.png")}
              resizeMode="contain"
              style={styles.cirlce_add_icon}
            ></Image>
          </View>
          <GoalScroll style={styles.goalScroll}></GoalScroll>
          <View style={styles.title3}>
            <Text style={styles.conoceTuPortafolio}>Conoce tu portafolio</Text>
            <View style={styles.status_portafolio}>
              <Text style={styles.estratega}>Estratega</Text>
            </View>
          </View>
          <PortafolioView style={styles.portafolioView}></PortafolioView>
          <View style={styles.title4}>
            <Text style={styles.losPTSDelAhorro}>Los P*t@s del ahorro</Text>
          </View>
          <MediaSlider style={styles.mediaSlider}></MediaSlider>
          <Blog style={styles.blog}></Blog>
        </ScrollView>
      </View>
      <Menu style={styles.menu}></Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollArea: {
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(248,248,252,1)",
    right: 0,
    top: 0,
    bottom: 0
  },
  scrollArea_contentContainerStyle: {
    height: 1950,
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
  investCard: {
    height: 260,
    alignSelf: "stretch",
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0
  },
  investSummary: {
    height: 114,
    alignSelf: "stretch"
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
  goalScroll: {
    height: 202,
    alignSelf: "stretch"
  },
  title3: {
    height: 25,
    alignSelf: "stretch",
    marginTop: 40,
    marginRight: 24,
    marginLeft: 24,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  conoceTuPortafolio: {
    fontFamily: "open-sans-600",
    color: "rgba(88,80,107,1)",
    fontSize: 18
  },
  status_portafolio: {
    width: 64,
    height: 21,
    backgroundColor: "rgba(228,255,238,1)",
    borderWidth: 1,
    borderColor: "rgba(65,207,105,1)",
    borderStyle: "solid",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  estratega: {
    fontFamily: "open-sans-600",
    color: "rgba(65,207,105,1)",
    fontSize: 10
  },
  portafolioView: {
    height: 229,
    alignSelf: "stretch"
  },
  title4: {
    height: 25,
    alignSelf: "stretch",
    marginRight: 24,
    marginLeft: 24,
    flexDirection: "row",
    marginBottom: 20
  },
  losPTSDelAhorro: {
    fontFamily: "open-sans-600",
    color: "rgba(88,80,107,1)",
    fontSize: 18
  },
  mediaSlider: {
    height: 320,
    alignSelf: "stretch"
  },
  blog: {
    height: 304,
    alignSelf: "stretch"
  },
  menu: {
    position: "absolute",
    left: 24,
    bottom: 24,
    right: 24,
    height: 86
  }
});

export default Home;
