import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import Styles from "../../../style/Styles";
import Colors from "../../../style/Colors";
import DefaultHeader from "../header/DefaultHeader";
import DefaultInput from "./components/DefaultInput";
import LabelInput from "./components/LabelInput";
import IconInput from "./components/IconInput";
import WithoutBorderInput from "./components/WithoutBorderInput";
import BorderBottomInput from "./components/BorderBottomInput";
import PhoneNumberInput from "./components/PhoneNumberInput";

const screen = Styles.screen;
const space = Styles.space;

const Inputs = (props) => {
  const { navigate } = props.navigation;
  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <SafeAreaView style={[screen.defaultScreen]}>
      <StatusBar backgroundColor={Colors.colorWhite} barStyle="dark-content" />
      <DefaultHeader
        title="Inputs"
        goBack={goBack}
      />
      <View style={[space.px15]}>
        <DefaultInput
          placeholder="Default Input"
        />

        <View style={[space.mt1]} />
        <LabelInput
          label="Label Input"
          placeholder="Label Input"
        />

        <View style={[space.mt1]} />
        <IconInput
          icon={require("../../../assets/icons/search.png")}
          placeholder="Icon Input"
        />

        <View style={[space.mt1]} />
        <WithoutBorderInput
          withBackground={true}
          placeholder="Input With Background"
        />

        <View style={[space.mt1]} />
        <BorderBottomInput
          borderBottom={true}
          placeholder="Input Border Bottom"
        />

        <View style={[space.mt1]} />
        <PhoneNumberInput
          placeholder="Input Border Bottom"
        />
      </View>
    </SafeAreaView>
  );
};

export default Inputs;
