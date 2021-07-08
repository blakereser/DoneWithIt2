import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import CustomButton from "../components/CustomButton" ;
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      blurRadius={5}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.text}>Sell What You Don't Need</Text>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton title="login" onPress={() => console.log("Tapped")}/>
        <CustomButton title="reGISter" color="secondary" onPress={() => console.log("Tapped")}/>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  buttonContainer: {
     padding: 10,
     width: "100%", 
     justifyContent: "center",
     alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
  },

  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },

  text: {
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 15,
  },

});

export default WelcomeScreen;
