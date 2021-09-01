import React from "react";
import { SafeAreaView, StatusBar, View, Text, StyleSheet } from "react-native";
import Styles from "../../../style/Styles";
import Colors from "../../../style/Colors";
import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton";
import SuccessButton from "./components/SuccessButton";
import WarningButton from "./components/WarningButton";
import InfoButton from "./components/InfoButton";
import LightButton from "./components/LightButton";
import DarkButton from "./components/DarkButton";
import DefaultHeader from "../header/DefaultHeader";
import BorderButton from "./components/BorderButton";
import SmallButton from "./components/SmallButton";
import SmallBorderButton from "./components/SmallBorderButton";
import ButtonStyle from "../../../style/ButtonStyle";
import ThemeButton from "./components/ThemeButton";

const screen = Styles.screen;
const space = Styles.space;

const Buttons = (props) => {
  const { navigate } = props.navigation;
  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <SafeAreaView style={[screen.defaultScreen]}>
      <StatusBar backgroundColor={Colors.colorWhite} barStyle="dark-content" />
      <DefaultHeader
        title="Buttons"
        goBack={goBack}
      />
      <View style={[space.px15]}>
        <ThemeButton buttonName="Theme" />
        <PrimaryButton buttonName="Primary" />
        <SecondaryButton buttonName="Secondary" />
        <SuccessButton buttonName="Success" />
        <WarningButton buttonName="Warning" />
        <InfoButton buttonName="Info" />
        <LightButton buttonName="Light" />
        <DarkButton buttonName="Dark" />
        <BorderButton buttonName="Border" />
        <SmallButton buttonName="Small" />
        <SmallBorderButton buttonName="Small + Border" />
      </View>
    </SafeAreaView>
  );
};

export default Buttons;
