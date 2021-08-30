import React  from "react";
import { SafeAreaView, StatusBar } from "react-native";
import Styles from "../../style/Styles";
import Colors from "../../style/Colors";
import PrimaryButton from "../components/buttons/components/PrimaryButton";

const screen = Styles.screen;

const Splash = (props) => {
  const { navigate } = props.navigation;
  return (
    <SafeAreaView style={[screen.initialPage]}>
      <StatusBar backgroundColor={Colors.colorWhite} barStyle="dark-content" />
      <PrimaryButton
        buttonName="Ui Elements"
        onPress={() => navigate("UiElements")}
      />
    </SafeAreaView>
  );
};

export default Splash;
