import * as React from "react";
import { SafeAreaView, View, Text, StatusBar } from "react-native";
import Colors from "../../../../style/Colors";
import Styles from "../../../../style/Styles";
import RechargeHeader from "../../components/rechargeHeader/RechargeHeader";
import SendMoneyInput from "../../components/input/SendMoneyInput";
import RechargeThemeButton from "../../components/buttons/RechargeThemeButton";

const screen = Styles.screen;
const flex = Styles.flex;
const space = Styles.space;
const content = Styles.content;

const SendMoney = (props) => {
  const { navigate } = props.navigation;
  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <SafeAreaView style={[screen.defaultScreen]}>
      <StatusBar backgroundColor={Colors.rechargeTheme} barStyle="light-content" />
      <RechargeHeader
        goBack={goBack}
        title="Send Money"
        backColor={Colors.rechargeTheme}
        color={Colors.colorWhite}
      />
      <View style={[flex.flex1, space.px15]}>
        <View style={[flex.alignCenter, space.my4]}>
          <Text style={[content.textLight, content.textColorLight, space.mr1]}>
            Available Balance : $20222
          </Text>
          <SendMoneyInput
            keyboardType="numeric"
            placeholder="0.000"
          />
        </View>
        <RechargeThemeButton
          buttonName="Confirm"
        />
      </View>
    </SafeAreaView>
  );
};

export default SendMoney;
