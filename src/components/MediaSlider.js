import React, { useState } from "react";
import { Dimensions } from 'react-native';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text
} from "react-native";
import Gradient from "react-native-css-gradient";
import Carousel from "react-native-carousel-control";

function MediaSlider(props) {
  const [currentPage, setcurrentPage] = useState(true);
  return (
    <View style={[styles.container, props.style]}>
      <Carousel 
        containerStyle={styles.carouselContainer} 
        pageStyle={styles.carouselPage} 
        swipeThreshold={0.10} 
        sneak={0} 
        pageWidth={Dimensions.get('window').width - 48}>
        <View>
          <View style={styles.media}>
            <View style={styles.mediaImgContainer1Stack}>
              <View style={styles.mediaImgContainer1}>
                <ImageBackground
                  source={require("../assets/images/thumb.png")}
                  resizeMode="cover"
                  style={styles.mediaImg2}
                  imageStyle={styles.mediaImg2_imageStyle}>
                  <Image
                    source={require("../assets/images/play_circle_outline_24px.png")}
                    resizeMode="contain"
                    style={styles.mediaPlayBtn1}
                  ></Image>
                </ImageBackground>
              </View>
              <View style={styles.mediaInfoContainer1}>
                <ImageBackground
                  source={require("../assets/images/Vector_6.png")}
                  resizeMode="stretch"
                  style={styles.mediaInfoOverlay1}
                  imageStyle={styles.mediaInfoOverlay1_imageStyle}
                >
                  <View style={styles.mediaInfo1}>
                    <Text style={styles.estoEsAhorro1}>Esto es AHORRO</Text>
                    <Text style={styles.mediaDesc1}>
                      Conoce como nuestro roboAdvisor crea el mejor portafolio de
                      inversión para ti.
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </View>
          <View style={styles.counter}>
            <Gradient 
                gradient = {`linear-gradient(180deg, rgba(44, 82, 216, 0) 0%, rgba(44, 82, 216, 0.4) 100%)`}
                style={styles.ellipse1}>
            </Gradient>
            <View style={styles.ellipse2}></View>
            <View style={styles.ellipse3}></View>
          </View>
        </View>

        <View>
          <View style={styles.media}>
            <View style={styles.mediaImgContainer1Stack}>
              <View style={styles.mediaImgContainer1}>
                <ImageBackground
                  source={require("../assets/images/thumb.png")}
                  resizeMode="cover"
                  style={styles.mediaImg2}
                  imageStyle={styles.mediaImg2_imageStyle}>
                  <Image
                    source={require("../assets/images/play_circle_outline_24px.png")}
                    resizeMode="contain"
                    style={styles.mediaPlayBtn1}
                  ></Image>
                </ImageBackground>
              </View>
              <View style={styles.mediaInfoContainer1}>
                <ImageBackground
                  source={require("../assets/images/Vector_6.png")}
                  resizeMode="stretch"
                  style={styles.mediaInfoOverlay1}
                  imageStyle={styles.mediaInfoOverlay1_imageStyle}
                >
                  <View style={styles.mediaInfo1}>
                    <Text style={styles.estoEsAhorro1}>Esto es AHORRO 2</Text>
                    <Text style={styles.mediaDesc1}>
                      Conoce como nuestro roboAdvisor 2 crea el mejor portafolio de
                      inversión para ti.
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </View>
          <View style={styles.counter}>
            <View style={styles.ellipse2}></View>
            <Gradient 
                gradient = {`linear-gradient(180deg, rgba(44, 82, 216, 0) 0%, rgba(44, 82, 216, 0.4) 100%)`}
                style={styles.ellipse1}>
            </Gradient>
            <View style={styles.ellipse3}></View>
          </View>
        </View>

        <View>
          <View style={styles.media}>
            <View style={styles.mediaImgContainer1Stack}>
              <View style={styles.mediaImgContainer1}>
                <ImageBackground
                  source={require("../assets/images/thumb.png")}
                  resizeMode="cover"
                  style={styles.mediaImg2}
                  imageStyle={styles.mediaImg2_imageStyle}>
                  <Image
                    source={require("../assets/images/play_circle_outline_24px.png")}
                    resizeMode="contain"
                    style={styles.mediaPlayBtn1}
                  ></Image>
                </ImageBackground>
              </View>
              <View style={styles.mediaInfoContainer1}>
                <ImageBackground
                  source={require("../assets/images/Vector_6.png")}
                  resizeMode="stretch"
                  style={styles.mediaInfoOverlay1}
                  imageStyle={styles.mediaInfoOverlay1_imageStyle}
                >
                  <View style={styles.mediaInfo1}>
                    <Text style={styles.estoEsAhorro1}>Esto es AHORRO 3</Text>
                    <Text style={styles.mediaDesc1}>
                      Conoce como nuestro roboAdvisor 3 crea el mejor portafolio de
                      inversión para ti.
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </View>
          <View style={styles.counter}>
            <View style={styles.ellipse2}></View>
            <View style={styles.ellipse3}></View>
            <Gradient 
                gradient = {`linear-gradient(180deg, rgba(44, 82, 216, 0) 0%, rgba(44, 82, 216, 0.4) 100%)`}
                style={styles.ellipse1}>
            </Gradient>
          </View>
        </View>
      </Carousel>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  carouselContainer:{
    top: 0,
    height: 200,
    marginBottom: 0
  },
  carouselPage:{
    top: 0,
    marginTop: 0,
    marginBottom: 0
  },
  media: {
    left: 0,
    right: 0,
    height: 290,
    alignSelf: "stretch",
    borderRadius: 20,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0, 
    overflow: "hidden"
  },
  mediaImgContainer1: {
    top: 0,
    left: 0,
    height: 221,
    position: "absolute",
    right: 0
  },
  mediaImg2: {
    height: 221
  },
  mediaImg2_imageStyle: {},
  mediaPlayBtn1: {
    width: 33,
    height: 33,
    marginTop: 94,
    alignSelf: "center"
  },
  mediaInfoContainer1: {
    left: 0,
    height: 122,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  mediaInfoOverlay1: {
    flex: 1
  },
  mediaInfoOverlay1_imageStyle: {},
  mediaInfo1: {
    height: 120,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  estoEsAhorro1: {
    fontFamily: "open-sans-600",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 5,
    alignSelf: "stretch",
    height: 33
  },
  mediaDesc1: {
    fontFamily: "open-sans-regular",
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 12,
    height: 34
  },
  mediaImgContainer1Stack: {
    height: 290
  },
  counter: {
    width: 50,
    height: 20,
    marginLeft: 14,
    marginTop: 9,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    bottom: 0,
    left: 0,
    alignSelf: "flex-start"
  },
  ellipse1: {
    width: 10,
    height: 10,
    backgroundColor: "#54D1ED",
    borderRadius: 5
  },
  ellipse2: {
    width: 10,
    height: 10,
    backgroundColor: "rgba(215,199,255,1)",
    borderRadius: 5
  },
  ellipse3: {
    width: 10,
    height: 10,
    backgroundColor: "rgba(215,199,255,1)",
    borderRadius: 5
  }
});

export default MediaSlider;
