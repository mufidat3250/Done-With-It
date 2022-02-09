import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Platform,
  Image,
  StatusBar,
} from "react-native";
import React from "react";
// import { StatusBar } from "expo-status-bar";

const Login = () => {
  return (
    <ImageBackground
      style={style.container}
      source={require("../../assets/background.jpg")}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={style.hero}>
          <View style={style.logo}>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/logo-red.png")}
                style={style.Image}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                }}
              >
                Sell What You Don't Need
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                height: 70,
                width: "100%",
                backgroundColor: "lightblue",
              }}
            ></View>
            <View
              style={{
                height: 70,
                width: "100%",
                backgroundColor: "red",
              }}
            ></View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Login;

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  Image: {
    height: 120,
    width: 120,
  },
  hero: {
    marginTop: 50,
    // justifyContent: "flex-end",
    // alignItems: "center",
    flex: 1,
  },
  logo: {
    flex: 1,
  },
});
