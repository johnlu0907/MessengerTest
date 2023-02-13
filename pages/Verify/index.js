import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "../../assets/horizontal-logo.svg";
import GoogleBtn from "../../components/GoogleBtn";
import FilledBtn from "../../components/FilledBtn";

export default function VerifyScreen({ navigation }) {
  const invite = () => navigation.navigate("Invite");

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={linearColors}
        style={styles.linearBackground}
      >
        <View
          style={{
            width: "100%",
            alignItems: "center",
            paddingVertical: 40,
          }}
        >
          <Logo width="40%" style={styles.logo} />
        </View>
        <View style={styles.loginForm}>
          <Text style={styles.title}>Log In</Text>
          <View style={{ marginBottom: 24 }}>
            <TextInput
              style={styles.textinput}
              placeholder="Email address"
              placeholderTextColor="#fff"
              selectionColor="#fff"
            />
          </View>
          <View style={{ marginBottom: 32 }}>
            <FilledBtn text="Verify" onPress={invite} />
          </View>
          <View style={{ flexDirection: "row", marginTop: 40 }}>
            <View
              style={{
                backgroundColor: "#F2F2F2",
                height: 1,
                flex: 1,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                fontFamily: "Inter_500Medium",
                fontSize: 14,
                lineHeight: 17,
                textAlign: "center",
                color: "#F2F2F2",
                paddingHorizontal: 5,
              }}
            >
              or
            </Text>
            <View
              style={{
                backgroundColor: "#F2F2F2",
                height: 1,
                flex: 1,
                alignSelf: "center",
              }}
            />
          </View>
          <View style={{ marginVertical: 32 }}>
            <GoogleBtn
              text="Log in with Google"
              onPress={console.log("login")}
            />
          </View>
        </View>
        <View
          style={{ width: "100%", paddingVertical: 30, alignItems: "center" }}
        >
          <Text style={{ color: "#fff" }}>New around here? Sign Up</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const linearColors = [
  "rgba(156, 62, 201, 0.31)",
  "rgba(203, 92, 255, 0)",
  "#7B61FF",
  "rgba(123, 97, 255, 0)",
  "#A09EFF",
];

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#A09EFF",
  },
  linearBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "start",
    alignItems: "center",
    paddingTop: 37,
  },
  title: {
    fontFamily: "Inter_500Medium",
    fontSize: 24,
    lineHeight: 29,
    textAlign: "center",
    color: "#fff",
    marginVertical: 50,
  },

  loginForm: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  textinput: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 26,
    borderColor: "#fff",
    height: 48,
    padding: 16,
    color: "#fff",
  },
});
