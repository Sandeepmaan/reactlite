import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { CardStyleInterpolators } from "@react-navigation/stack"

import ChatSplash from "../../screens/chatApp/main/chatSplash/ChatSplash";
import ChatBottomTabs from "../../routes/chatRoute/ChatBottomTabs";
import EditChat from "../../screens/chatApp/main/home/EditChat";
import Contact from "../../screens/chatApp/main/contact/Contact";
import ChatScreen from "../../screens/chatApp/main/chatScreen/ChatScreen";
import ChatLogin from "../../screens/chatApp/auth/login/ChatLogin";
import ChatOtpScreen from "../../screens/chatApp/auth/otp/ChatOtpScreen";

const Default = createNativeStackNavigator();

const ChatRoute = () => {
  return (
    <Default.Navigator
      screenOptions={{
        cardStyleInterpolator: Platform.OS === "ios" ?
          CardStyleInterpolators.forHorizontalIOS
          :
          CardStyleInterpolators.forScaleFromCenterAndroid,
        headerShown: false,
      }}>
      <Default.Screen name="ChatSplash" component={ChatSplash} />
      <Default.Screen name="ChatLogin" component={ChatLogin} />
      <Default.Screen name="ChatOtpScreen" component={ChatOtpScreen} />

      <Default.Screen name="ChatBottomTabs" component={ChatBottomTabs} />
      <Default.Screen name="EditChat" component={EditChat} />
      <Default.Screen name="ChatScreen" component={ChatScreen} />

      <Default.Screen name="Contact" component={Contact} />
    </Default.Navigator>
  );
};

export default ChatRoute;
