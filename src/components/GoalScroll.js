import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Image, Text } from "react-native";

function GoalScroll(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.goal_scroll}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.goal_scroll_contentContainerStyle}
        >
          <View style={styles.goalCard}>
            <Image
              source={require("../assets/images/playa.png")}
              resizeMode="contain"
              style={styles.goalImage}
            ></Image>
            <Text style={styles.goalTitle}>Viaje a Islas{"\n"}Canarias</Text>
            <View style={styles.goalDivider}></View>
            <View style={styles.goalStatus}>
              <Image
                source={require("../assets/images/s_donut.png")}
                resizeMode="contain"
                style={styles.goalPercentage}
              ></Image>
              <View style={styles.goalValues}>
                <Text style={styles.goalValue}>$1.630.000</Text>
                <Text style={styles.goalValuetarget}>$8.000.000</Text>
              </View>
            </View>
          </View>
          <View style={styles.goalCard2}>
            <Image
              source={require("../assets/images/laptop.png")}
              resizeMode="contain"
              style={styles.goalImage2}
            ></Image>
            <Text style={styles.goalTitle2}>MacBook Pro</Text>
            <View style={styles.goalDivider2}></View>
            <View style={styles.goalStatus2}>
              <Image
                source={require("../assets/images/s_donut1.png")}
                resizeMode="contain"
                style={styles.goalPercentage2}
              ></Image>
              <View style={styles.goalValues2}>
                <Text style={styles.goalValue2}>$0</Text>
                <Text style={styles.goalValuetarget2}>$7.000.000</Text>
              </View>
            </View>
          </View>
          <View style={styles.goalCard3}>
            <Image
              source={require("../assets/images/playa1.png")}
              resizeMode="contain"
              style={styles.goalImage3}
            ></Image>
            <Text style={styles.goalTitle3}>Viaje a {"\n"}Cancún</Text>
            <View style={styles.goalDivider3}></View>
            <View style={styles.goalStatus3}>
              <Image
                source={require("../assets/images/s_donut1.png")}
                resizeMode="contain"
                style={styles.goalPercentage3}
              ></Image>
              <View style={styles.goalValues3}>
                <Text style={styles.goalValue3}>$0</Text>
                <Text style={styles.goalValuetarget3}>$9.750.000</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
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
  goalCard: {
    width: 158,
    backgroundColor: "rgba(255,255,255,1)",
    height: 202,
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "flex-start",
    marginRight: 10
  },
  goalImage: {
    width: 40,
    height: 40,
    marginTop: 20,
    marginLeft: 20
  },
  goalTitle: {
    fontFamily: "open-sans-600",
    color: "rgba(88,80,107,1)",
    marginTop: 10,
    marginLeft: 20
  },
  goalDivider: {
    height: 1,
    backgroundColor: "rgba(250,249,253,1)",
    alignSelf: "stretch",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 10
  },
  goalStatus: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch"
  },
  goalPercentage: {
    width: 50,
    height: 50,
    marginRight: 5
  },
  goalValues: {
    width: 63,
    height: 28,
    justifyContent: "center"
  },
  goalValue: {
    fontFamily: "open-sans-600",
    color: "rgba(72,185,230,1)",
    fontSize: 12,
    alignSelf: "flex-start"
  },
  goalValuetarget: {
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)",
    fontSize: 10,
    alignSelf: "flex-start"
  },
  goalCard2: {
    width: 158,
    backgroundColor: "rgba(255,255,255,1)",
    height: 202,
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "flex-start",
    marginRight: 10
  },
  goalImage2: {
    width: 40,
    height: 40,
    marginTop: 20,
    marginLeft: 20
  },
  goalTitle2: {
    fontFamily: "open-sans-600",
    color: "rgba(88,80,107,1)",
    marginTop: 20,
    marginLeft: 20,
    height: 19,
    marginBottom: 9
  },
  goalDivider2: {
    height: 1,
    backgroundColor: "rgba(250,249,253,1)",
    alignSelf: "stretch",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10
  },
  goalStatus2: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch"
  },
  goalPercentage2: {
    width: 50,
    height: 50,
    marginRight: 5
  },
  goalValues2: {
    width: 63,
    height: 28,
    justifyContent: "center"
  },
  goalValue2: {
    fontFamily: "open-sans-600",
    color: "rgba(72,185,230,1)",
    fontSize: 12,
    alignSelf: "flex-start"
  },
  goalValuetarget2: {
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)",
    fontSize: 10,
    alignSelf: "flex-start"
  },
  goalCard3: {
    width: 158,
    backgroundColor: "rgba(255,255,255,1)",
    height: 202,
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "flex-start",
    marginRight: 10
  },
  goalImage3: {
    width: 40,
    height: 40,
    marginTop: 20,
    marginLeft: 20
  },
  goalTitle3: {
    fontFamily: "open-sans-600",
    color: "rgba(88,80,107,1)",
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 0,
    alignSelf: "flex-start"
  },
  goalDivider3: {
    height: 1,
    backgroundColor: "rgba(250,249,253,1)",
    alignSelf: "stretch",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 10
  },
  goalStatus3: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch"
  },
  goalPercentage3: {
    width: 50,
    height: 50,
    marginRight: 5
  },
  goalValues3: {
    width: 63,
    height: 28,
    justifyContent: "center"
  },
  goalValue3: {
    fontFamily: "open-sans-600",
    color: "rgba(72,185,230,1)",
    fontSize: 12,
    alignSelf: "flex-start"
  },
  goalValuetarget3: {
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)",
    fontSize: 10,
    alignSelf: "flex-start"
  }
});

export default GoalScroll;
