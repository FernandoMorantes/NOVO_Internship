import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function Blog(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.blogEntry1}>
        <View style={styles.blogEntryTxt1}>
          <Text style={styles.blogEntryTitle1}>10 gastos que debes evitar</Text>
          <Text style={styles.blogEntryContent1}>
            Aunque el 66% de los adultos recibió educacion para el ahorro,
            apenas el 44% ahorra de manera formal.
          </Text>
        </View>
        <View style={styles.blogImgContainer1}>
          <Image
            source={require("../assets/images/IMG12.png")}
            resizeMode="contain"
            style={styles.blogImg2}
          ></Image>
        </View>
      </View>
      <View style={styles.blogDivider1}></View>
      <View style={styles.blogEntry2}>
        <View style={styles.blogEntryTxt2}>
          <Text style={styles.blogEntryTitle2}>10 gastos que debes evitar</Text>
          <Text style={styles.blogEntryContent2}>
            Aunque el 66% de los adultos recibió educacion para el ahorro,
            apenas el 44% ahorra de manera formal.
          </Text>
        </View>
        <View style={styles.blogImgContainer2}>
          <Image
            source={require("../assets/images/IMG21.png")}
            resizeMode="contain"
            style={styles.blogImg3}
          ></Image>
        </View>
      </View>
      <View style={styles.blogDivider2}></View>
      <View style={styles.blogEntry3}>
        <View style={styles.blogEntryTxt3}>
          <Text style={styles.blogEntryTitle3}>10 gastos que debes evitar</Text>
          <Text style={styles.blogEntryContent3}>
            Aunque el 66% de los adultos recibió educacion para el ahorro,
            apenas el 44% ahorra de manera formal.
          </Text>
        </View>
        <View style={styles.blogImgContainer3}>
          <Image
            source={require("../assets/images/IMG31.png")}
            resizeMode="contain"
            style={styles.blogImg4}
          ></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    marginRight: 24,
    marginLeft: 24,
    marginTop: 25,
    marginBottom: 16,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  blogEntry1: {
    height: 68,
    alignSelf: "stretch",
    marginRight: 20,
    marginLeft: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  blogEntryTxt1: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "stretch",
    alignItems: "flex-start",
    marginRight: 17
  },
  blogEntryTitle1: {
    fontFamily: "open-sans-regular",
    color: "rgba(129,118,153,1)",
    lineHeight: 21,
    alignSelf: "stretch",
    height: 19
  },
  blogEntryContent1: {
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)",
    alignSelf: "stretch",
    fontSize: 10,
    marginTop: 5,
    flex: 1
  },
  blogImgContainer1: {
    width: 68,
    height: 68,
    justifyContent: "center"
  },
  blogImg2: {
    width: 68,
    height: 68,
    alignSelf: "center"
  },
  blogDivider1: {
    height: 1,
    backgroundColor: "rgba(250,249,253,1)",
    alignSelf: "stretch",
    marginTop: 15,
    marginBottom: 15,
    marginRight: 20,
    marginLeft: 20
  },
  blogEntry2: {
    height: 68,
    alignSelf: "stretch",
    marginRight: 20,
    marginLeft: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  blogEntryTxt2: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "stretch",
    alignItems: "flex-start",
    marginRight: 17
  },
  blogEntryTitle2: {
    fontFamily: "open-sans-regular",
    color: "rgba(129,118,153,1)",
    lineHeight: 21,
    alignSelf: "stretch",
    height: 19
  },
  blogEntryContent2: {
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)",
    alignSelf: "stretch",
    fontSize: 10,
    marginTop: 5,
    flex: 1
  },
  blogImgContainer2: {
    width: 68,
    height: 68,
    justifyContent: "center"
  },
  blogImg3: {
    width: 68,
    height: 68,
    alignSelf: "center"
  },
  blogDivider2: {
    height: 1,
    backgroundColor: "rgba(250,249,253,1)",
    alignSelf: "stretch",
    marginTop: 15,
    marginBottom: 15,
    marginRight: 20,
    marginLeft: 20
  },
  blogEntry3: {
    height: 68,
    alignSelf: "stretch",
    marginRight: 20,
    marginLeft: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  blogEntryTxt3: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "stretch",
    alignItems: "flex-start",
    marginRight: 17
  },
  blogEntryTitle3: {
    fontFamily: "open-sans-regular",
    color: "rgba(129,118,153,1)",
    lineHeight: 21,
    alignSelf: "stretch",
    height: 19
  },
  blogEntryContent3: {
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)",
    alignSelf: "stretch",
    fontSize: 10,
    marginTop: 5,
    flex: 1
  },
  blogImgContainer3: {
    width: 68,
    height: 68,
    justifyContent: "center"
  },
  blogImg4: {
    width: 68,
    height: 68,
    alignSelf: "center"
  }
});

export default Blog;
