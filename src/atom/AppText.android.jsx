import { View, Platform, StyleSheet, Text } from "react-native";
import React from "react";

const AppText = ({ children }) => {
  return <Text style={style.text}>{children}</Text>;
};

export default AppText;

const style = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
    fontSize: 18,
    color: "red",
  },
});
