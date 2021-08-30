import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import Styles from "../../../style/Styles";
import Colors from "../../../style/Colors";
import DefaultHeader from "../header/DefaultHeader";
import Input from "./components/Input";

const screen = Styles.screen;
const space = Styles.space;
const content = Styles.content;

const Inputs = (props) => {
  const { navigate } = props.navigation;
  return (
    <SafeAreaView style={[screen.defaultScreen]}>
      <StatusBar backgroundColor={Colors.colorWhite} barStyle="dark-content" />
      <DefaultHeader title="Alerts" />
      <View style={[space.px15]}>
        {/*Input with Label*/}
        <Input
          label="Label Input"
          placeholder="Label Input"
        />
        {/*Input Without Label*/}
        <Input
          placeholder="Without Label Input"
        />
        {/*Input with Icon*/}
        <Input
          icon={require('../../../assets/icons/search.png')}
          placeholder="Icon Input"
        />
        {/*Input with Icon*/}
        <Input
          withBackground={true}
          placeholder="Input With Background"
        />
        {/*Input border Bottom*/}
        <Input
          borderBottom={true}
          placeholder="Input Border Bottom"
        />
      </View>
    </SafeAreaView>
  );
};

export default Inputs;
