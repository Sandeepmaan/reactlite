import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { CardStyleInterpolators } from "@react-navigation/stack"

import RechargeSplash from "../../screens/quickCharge/main/rechargeSplash/RechargeSplash";
import RechargeLogin from "../../screens/quickCharge/auth/login/RechargeLogin";
import RechargeOtpScreen from "../../screens/quickCharge/auth/otp/RechargeOtpScreen";
import RechargeBottomTabs from "./RechargeBottomTabs";

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

      <Default.Screen name="RechargeBottomTabs" component={RechargeBottomTabs} />
    </Default.Navigator>
  );
};

export default RechargeRoute
;
