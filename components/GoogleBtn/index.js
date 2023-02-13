import React, { Component } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const GoogleBtn = ({ text, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <Icon name="google" size={21} style={styles.icon} />
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoogleBtn;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  button: {
    backgroundColor: "transparent",
    height: 48,
    width: "100%",
    borderRadius: 26,
    borderColor: "#F2F2F2",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    position: "absolute",
    fontFamily: "Inter_700Bold",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#fff",
  },
  icon: {
    width: "100%",
    paddingLeft: 40,
    color: "#F2F2F2",
  },
});
