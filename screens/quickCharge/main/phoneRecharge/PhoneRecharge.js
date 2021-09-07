import * as React from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import Colors from "../../../../style/Colors";
import Styles from "../../../../style/Styles";
import RechargeHeader from "../../components/rechargeHeader/RechargeHeader";
import AllContactList from "./components/AllContactList";
import SectionHeading from "../../../components/sectionHeading/SectionHeading";
import RechargeInput from "../../components/input/RechargeInput";

const screen = Styles.screen;
const flex = Styles.flex;
const space = Styles.space;

const PhoneRecharge = (props) => {
  const { navigate } = props.navigation;
  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <SafeAreaView style={[screen.defaultScreen]}>
      <StatusBar backgroundColor={Colors.rechargeTheme} barStyle="light-content" />
      <RechargeHeader
        goBack={goBack}
        title="Recharge"
        backColor={Colors.rechargeTheme}
        color={Colors.colorWhite}
      />
      <View style={[flex.flex1]}>
        <View style={[space.px15, space.mt2]}>
          <RechargeInput
            label="Recharge your mobile number"
            placeholder="Enter name or phone number"
          />
        </View>
        <View style={[flex.flex1, space.mt2]}>
          <SectionHeading
            heading="All Contacts"
          />
          <AllContactList />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PhoneRecharge;
