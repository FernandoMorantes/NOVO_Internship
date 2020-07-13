import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Center } from "@builderx/utils";

function PortafolioView(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.portafolio_view_main_content}>
        <View style={styles.portafolio_holding_donut}>
          <Image
            source={require("../assets/images/chart.png")}
            resizeMode="contain"
            style={styles.portafolio_chart}
          ></Image>
          <Center>
            <View style={styles.portafolio_roboadvisor}>
              <Image
                source={require("../assets/images/robot.png")}
                resizeMode="contain"
                style={styles.roboadvisor}
              ></Image>
              <Text style={styles.roboAdvisor_txt}>RoboAdvisor</Text>
              <Text style={styles.roboadvisor_value}>10 Fondos</Text>
            </View>
          </Center>
        </View>
        <View style={styles.portafolio_main_info}>
          <View style={styles.portafolio_title}>
            <Image
              source={require("../assets/images/logo1.png")}
              resizeMode="contain"
              style={styles.logo}
            ></Image>
            <View style={styles.frame3}>
              <Text style={styles.value_frame3}>15%</Text>
            </View>
          </View>
          <Text style={styles.fIC_old_mutual_efectivo}>
            FIC Old Mutual Efectivo
          </Text>
          <Text style={styles.portafolio_info_value}>$240.000</Text>
          <Text style={styles.tipoDeActivo}>Tipo de activo</Text>
          <Text style={styles.renta_fija}>
            Renta fija{"\n"}Depósito a la fija
          </Text>
          <View style={styles.portafolio_controls}>
            <View style={styles.portafolio_left_btn}>
              <Image
                source={require("../assets/images/chevron.png")}
                resizeMode="contain"
                style={styles.chevron_left}
              ></Image>
            </View>
            <View style={styles.portafolio_right_btn}>
              <Image
                source={require("../assets/images/chevron1.png")}
                resizeMode="contain"
                style={styles.chevron_right}
              ></Image>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frame4}>
        <Text style={styles.frame4_txt}>
          Tu dinero se invierte de la forma más eficiente de acuerdo al perfil
          de riesgo asignado por nuestr RoboAdvisor.
        </Text>
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
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  portafolio_view_main_content: {
    height: 144,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  portafolio_holding_donut: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center"
  },
  portafolio_chart: {
    width: 120,
    height: 120
  },
  portafolio_roboadvisor: {
    width: 70,
    height: 70,
    position: "absolute",
    alignItems: "center"
  },
  roboadvisor: {
    width: 40,
    height: 40
  },
  roboAdvisor_txt: {
    fontFamily: "open-sans-regular",
    color: "rgba(129,118,153,1)",
    fontSize: 10
  },
  roboadvisor_value: {
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)",
    fontSize: 12,
    height: 16
  },
  portafolio_main_info: {
    height: 141,
    flex: 1,
    marginLeft: 20
  },
  portafolio_title: {
    height: 15,
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    width: 70,
    height: 15
  },
  frame3: {
    width: 36,
    height: 15,
    backgroundColor: "rgba(65,207,105,1)",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center"
  },
  value_frame3: {
    fontFamily: "open-sans-600",
    color: "rgba(255,255,255,1)",
    fontSize: 10
  },
  fIC_old_mutual_efectivo: {
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)",
    fontSize: 12,
    alignSelf: "stretch",
    marginTop: 5,
    height: 16
  },
  portafolio_info_value: {
    fontFamily: "open-sans-600",
    color: "rgba(88,80,107,1)",
    fontSize: 12,
    marginTop: 5,
    height: 16,
    alignSelf: "stretch"
  },
  tipoDeActivo: {
    fontFamily: "open-sans-600",
    color: "rgba(65,207,105,1)",
    fontSize: 10,
    marginTop: 5,
    alignSelf: "stretch",
    height: 14
  },
  renta_fija: {
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)",
    fontSize: 10,
    alignSelf: "stretch",
    height: 28
  },
  portafolio_controls: {
    height: 30,
    alignSelf: "stretch",
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  portafolio_left_btn: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(250,249,253,1)",
    borderStyle: "solid",
    justifyContent: "center"
  },
  chevron_left: {
    width: 6,
    height: 10,
    marginRight: 3,
    alignSelf: "center"
  },
  portafolio_right_btn: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(250,249,253,1)",
    justifyContent: "center"
  },
  chevron_right: {
    width: 6,
    height: 10,
    marginLeft: 3,
    transform: [
      {
        rotate: "180.00deg"
      }
    ],
    alignSelf: "center"
  },
  frame4: {
    height: 28,
    justifyContent: "flex-start",
    alignSelf: "stretch",
    alignItems: "center",
    marginRight: 20,
    marginLeft: 20
  },
  frame4_txt: {
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)",
    fontSize: 10,
    textAlign: "left",
    flex: 1,
    alignSelf: "stretch"
  }
});

export default PortafolioView;
