import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

import colors from "../atom/color";

const ViewImage = () => {
  return (
    <View style={style.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={style.button}>
          <View style={style.square}></View>
          <View
            style={[style.square, { backgroundColor: colors.secondary }]}
          ></View>
        </View>
        <View style={{ marginTop: 70, width: "100%", height: 550 }}>
          <Image
            source={require("../../assets/chair.jpg")}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ViewImage;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  square: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    paddingTop: 10,
  },
});
