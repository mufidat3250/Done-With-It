import { View, Text, StyleSheet } from "react-native";
import React from "react";
import color from "../atom/color";

const AppButton = ({ title }) => {
  return (
    <View style={style.button}>
      <Text style={style.text}>{title}</Text>
    </View>
  );
};

export default AppButton;
const style = StyleSheet.create({
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: color.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    fontWeight: "bold",
  },
  text: {
    color: "white",
    fontSize: 16,
    textTransform: "uppercase",
  },
});
