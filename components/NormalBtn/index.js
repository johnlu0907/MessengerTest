import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

const NormalBtn = ({ text, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }, styles.button]}
        onPress={onPress}
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default NormalBtn;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  button: {
    backgroundColor: "transparent",
    height: 17,
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  text: {
    position: "absolute",
    fontFamily: "Inter_500Medium",
    fontSize: 14,
    lineHeight: 17,
    textAlign: "center",
    color: "#fff",
  },
});
