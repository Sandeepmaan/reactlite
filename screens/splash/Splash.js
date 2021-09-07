import React from "react";
import { SafeAreaView, View, StatusBar, Image } from "react-native";
import Styles from "../../style/Styles";
import Colors from "../../style/Colors";
import BoxFlatlist from "./components/BoxFlatlist";

const screen = Styles.screen;
const space = Styles.space;
const flex = Styles.flex;
const logo = Styles.logo;

const Splash = (props) => {
  const { navigate } = props.navigation;
  return (
    <SafeAreaView style={[screen.initialPage]}>
      <StatusBar backgroundColor={Colors.colorWhite} barStyle="dark-content" />
      <View style={[flex.flex1]}>
        <View style={[flex.alignCenter, space.py5]}>
          <Image
            style={[logo.logo]}
            source={require("../../assets/images/logo-512.png")}
          />
        </View>

        <View style={[flex.flex1]}>
          <BoxFlatlist
            onPress1={() => navigate("ChatRoute")}
            onPress2={() => navigate("RechargeRoute")}
            onPress3={() => navigate("UiElements")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
