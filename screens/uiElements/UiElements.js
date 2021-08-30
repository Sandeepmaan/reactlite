import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import Styles from "../../style/Styles";
import Colors from "../../style/Colors";
import PrimaryButton from "../components/buttons/components/PrimaryButton";

const screen = Styles.screen;

const UiElements = (props) => {
  const { navigate } = props.navigation;
  return (
    <SafeAreaView style={[screen.initialPage]}>
      <StatusBar backgroundColor={Colors.colorWhite} barStyle="dark-content" />
      <PrimaryButton
        buttonName="Buttons"
        onPress={() => navigate("Buttons")}
      />

      <PrimaryButton
        buttonName="Inputs"
        onPress={() => navigate("Inputs")}
      />

      <PrimaryButton
        buttonName="Avatars"
        onPress={() => navigate("Avatars")}
      />

      <PrimaryButton
        buttonName="Alerts"
        onPress={() => navigate("Alerts")}
      />

      <PrimaryButton
        buttonName="Modals"
        onPress={() => navigate("Modals")}
      />
    </SafeAreaView>
  );
};

export default UiElements;
