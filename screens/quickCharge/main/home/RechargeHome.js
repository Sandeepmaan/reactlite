import * as React from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import Colors from "../../../../style/Colors";
import Styles from "../../../../style/Styles";

const screen = Styles.screen;
const flex = Styles.flex;

const RechargeHome = (props) => {
  const { navigate } = props.navigation;
  return (
    <SafeAreaView style={[screen.defaultScreen]}>
      <StatusBar backgroundColor={Colors.colorWhite} barStyle="dark-content" />

    </SafeAreaView>
  );
};

export default RechargeHome;
