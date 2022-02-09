import { StatusBar as EStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import {
  useDeviceOrientation,
  useDimensions,
  userDimentions,
} from "@react-native-community/hooks";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

import Login from "./src/screens/loginScreen";
import ViewImage from "./src/screens/viewImage";
import AppText from "./src/atom/AppText";
import AppButton from "./src/atom/AppButton";

export default function App() {
  const { landscape } = useDeviceOrientation();
  return (
    // <SafeAreaView style={styles.container}>
    //   <EStatusBar style="dark" />
    //   <View
    //     style={{
    //       // backgroundColor: "red",
    //       flexDirection: "row",
    //       justifyContent: "center",
    //       // alignItems: "center",
    //       width: "100%",
    //       height: landscape ? "100%" : 70,
    //       flex: 1,
    //       flexWrap: "wrap",
    //       alignContent: "center",
    //     }}
    //   >
    //     <View
    //       style={{ backgroundColor: "green", height: 100, width: 100 }}
    //     ></View>
    //     <View
    //       style={{ backgroundColor: "purple", width: 100, height: 100 }}
    //     ></View>
    //     <View
    //       style={{ backgroundColor: "blue", height: 100, width: 100 }}
    //     ></View>
    //     <View
    //       style={{ backgroundColor: "pink", height: 100, width: 100 }}
    //     ></View>
    //     <View
    //       style={{ backgroundColor: "gray", height: 100, width: 100 }}
    //     ></View>
    //   </View>
    // </SafeAreaView>
    <View style={styles.container}>
      {/* <Login /> */}
      {/* <ViewImage /> */}
      {/* <AppText>i love react native</AppText> */}

      <AppButton title="login" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
