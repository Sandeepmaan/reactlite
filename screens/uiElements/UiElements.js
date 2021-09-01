import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import Styles from "../../style/Styles";
import Colors from "../../style/Colors";
import DefaultHeader from "../components/header/DefaultHeader";
import ThemeButton from "../components/buttons/components/ThemeButton";

const screen = Styles.screen;
const space = Styles.space;

const UiElements = (props) => {
  const { navigate } = props.navigation;
  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <SafeAreaView style={[screen.defaultScreen]}>
      <StatusBar backgroundColor={Colors.colorWhite} barStyle="dark-content" />
      <DefaultHeader title="Avatars" goBack={goBack} />
      <View style={[space.px15]}>
        <ThemeButton
          buttonName="Buttons"
          onPress={() => navigate("Buttons")}
        />

        <ThemeButton
          buttonName="Inputs"
          onPress={() => navigate("Inputs")}
        />

        <ThemeButton
          buttonName="Avatars"
          onPress={() => navigate("Avatars")}
        />

        <ThemeButton
          buttonName="Alerts"
          onPress={() => navigate("Alerts")}
        />

        <ThemeButton
          buttonName="Modals"
          onPress={() => navigate("Modals")}
        />

        <ThemeButton
          buttonName="Cards"
          onPress={() => navigate("Cards")}
        />

        <ThemeButton
          buttonName="Flatlists"
          onPress={() => navigate("Flatlists")}
        />
      </View>
    </SafeAreaView>
  );
};

export default UiElements;
