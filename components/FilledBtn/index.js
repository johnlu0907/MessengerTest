import React from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";

const FilledBtn = ({ text, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default FilledBtn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  button: {
    height: 48,
    width: "100%",
    backgroundColor: "#6656FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 26,
  },
  text: {
    position: "absolute",
    fontFamily: "Inter_700Bold",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#fff",
  },
});
