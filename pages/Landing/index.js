import React from "react";
import { StyleSheet, View, Text, ImageBackground, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "../../assets/horizontal-logo.svg";
import GoogleBtn from "../../components/GoogleBtn";
import NormalBtn from "../../components/NormalBtn";

const linearColors = [
  "rgba(244, 229, 251, 0.031)",
  "rgba(255, 255, 255, 0)",
  "#A09EFF",
  "rgba(89, 58, 247, 0.8)",
  "rgba(123, 97, 255, 0)",
];

const LandingScreen = ({ navigation }) => {
  const login = () => navigation.navigate("Verify");

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={linearColors}
        style={styles.linearBackground}
      >
        <View style={styles.subContainer}>
          <ImageBackground
            source={require("../../assets/people-group.png")}
            style={styles.image}
          />
          <Logo />
          <View style={{ width: "100%", marginTop: 82, marginBottom: 16 }}>
            <GoogleBtn
              text="Sign up with Google"
              onPress={console.log("Sign up")}
            />
          </View>
          <NormalBtn text="Login" onPress={login} />
        </View>
      </LinearGradient>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  linearBackground: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#A09EFF",
  },
  subContainer: {
    flex: 1,
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "70%",
    resizeMode: "cover",
  },
  logo: {
    width: "100%",
    height: "20%",
    resizeMode: "cover",
    paddingLeft: 20,
    paddingRight: 20,
  },
});
