import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import Styles from "../../../style/Styles";
import Colors from "../../../style/Colors";
import DefaultHeader from "../header/DefaultHeader";
import PrimaryAlert from "./components/PrimaryAlert";
import SecondaryAlert from "./components/SecondaryAlert";
import SuccessAlert from "./components/SuccessAlert";
import WarningAlert from "./components/WarningAlert";
import DangerAlert from "./components/DangerAlert";

const screen = Styles.screen;
const space = Styles.space;
const content = Styles.content;

const Alerts = (props) => {
  const { navigate } = props.navigation;
  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <SafeAreaView style={[screen.defaultScreen]}>
      <StatusBar backgroundColor={Colors.colorWhite} barStyle="dark-content" />
      <DefaultHeader
        title="Alerts"
        goBack={goBack}
      />
      <View style={[space.px15]}>
        <PrimaryAlert
          alertText="Order has been placed. Your will be redirect for make your payment."
        />
        <SecondaryAlert
          alertText="Order has been placed. Your will be redirect for make your payment."
        />
        <SuccessAlert
          alertText="Thanks for your deposit. Your account balance has been updated accordingly."
        />
        <WarningAlert
          alertText="Your credit card already expired. Please enter a valid & up-to-date credit card for make deposit."
        />
        <DangerAlert
          alertText="Update failed! There is some technical issues."
        />
      </View>
    </SafeAreaView>
  );
};

export default Alerts;
