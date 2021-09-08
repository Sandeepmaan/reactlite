import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { CardStyleInterpolators } from "@react-navigation/stack"

import RechargeSplash from "../../screens/quickRecharge/main/rechargeSplash/RechargeSplash";
import RechargeLogin from "../../screens/quickRecharge/auth/login/RechargeLogin";
import RechargeOtpScreen from "../../screens/quickRecharge/auth/otp/RechargeOtpScreen";
import RechargeHome from "../../screens/quickRecharge/main/home/RechargeHome";
import PhoneRecharge from "../../screens/quickRecharge/main/phoneRecharge/PhoneRecharge";
import SendMoney from "../../screens/quickRecharge/main/sendMoney/SendMoney";
import QRScanner from "../../screens/quickRecharge/main/qrCode/QRScanner";

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
      <Default.Screen name="QRScanner" component={QRScanner} />

    </Default.Navigator>
  );
};

export default RechargeRoute;
