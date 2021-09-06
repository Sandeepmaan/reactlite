import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import Styles from "../../style/Styles";
import Colors from "../../style/Colors";
import BoxFlatlist from "../components/flatlists/components/BoxFlatlist";

const screen = Styles.screen;

const Splash = (props) => {
  const { navigate } = props.navigation;
  return (
    <SafeAreaView style={[screen.initialPage]}>
      <StatusBar backgroundColor={Colors.colorWhite} barStyle="dark-content" />
      <BoxFlatlist
        onPress1={()=> navigate('ChatRoute')}
        onPress2={()=> navigate('RechargeRoute')}
        onPress3={()=> navigate('UiElements')}
      />
    </SafeAreaView>
  );
};

export default Splash;
