import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { CardStyleInterpolators } from "@react-navigation/stack"

import RechargeSplash from "../../screens/quickCharge/main/rechargeSplash/RechargeSplash";
import RechargeLogin from "../../screens/quickCharge/auth/login/RechargeLogin";
import RechargeOtpScreen from "../../screens/quickCharge/auth/otp/RechargeOtpScreen";
import RechargeHome from "../../screens/quickCharge/main/home/RechargeHome";
import PhoneRecharge from "../../screens/quickCharge/main/phoneRecharge/PhoneRecharge";
import SendMoney from "../../screens/quickCharge/main/sendMoney/SendMoney";

const Default = createNativeStackNavigator();

const RechargeRoute = () => {
  return (
    <Default.Navigator
      screenOptions={{
        cardStyleInterpolator: Platform.OS === "ios" ?
          CardStyleInterpolators.forHorizontalIOS
          :
          CardStyleInterpolators.forScaleFromCenterAndroid,
        headerShown: false,
      }}>
      <Default.Screen name="RechargeSplash" component={RechargeSplash} />
      <Default.Screen name="RechargeLogin" component={RechargeLogin} />
      <Default.Screen name="RechargeOtpScreen" component={RechargeOtpScreen} />

      <Default.Screen name="RechargeHome" component={RechargeHome} />
      <Default.Screen name="PhoneRecharge" component={PhoneRecharge} />
      <Default.Screen name="SendMoney" component={SendMoney} />

    </Default.Navigator>
  );
};

export default RechargeRoute
;
