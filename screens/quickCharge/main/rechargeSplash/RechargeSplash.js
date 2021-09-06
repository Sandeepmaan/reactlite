import React from "react";
import { SafeAreaView, StatusBar, View, Text, Image, StyleSheet, Pressable } from "react-native";
import Styles from "../../../../style/Styles";
import Colors from "../../../../style/Colors";
import SmallBorderButton from "../../../components/buttons/components/SmallBorderButton";

const screen = Styles.screen;
const space = Styles.space;
const flex = Styles.flex;
const logo = Styles.logo;

const RechargeSplash = (props) => {
  const { navigate } = props.navigation;
  return (
    <SafeAreaView style={[screen.initialPage]}>
      <StatusBar backgroundColor={Colors.colorWhite} barStyle="dark-content" />
      <Image
        style={[logo.logo]}
        source={require("../../../../assets/images/logo-512.png")}
      />
      <View style={[space.mt5]} />
      <SmallBorderButton
        onPress={() => navigate("RechargeLogin")}
        buttonName="QUICK CHARGE"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default RechargeSplash;
