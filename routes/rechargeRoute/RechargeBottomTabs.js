import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image, StyleSheet, Platform } from "react-native";
import Styles from "../../style/Styles";
import Home from "../../screens/chatApp/main/home/ChatHome";
import BottomTabsStyle from "../../style/BottomTabsStyle";
import { CardStyleInterpolators } from "@react-navigation/stack";

import RechargeHome from "../../screens/quickCharge/main/home/RechargeHome";

const content = Styles.content;
const tabs = BottomTabsStyle.tabs;

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function RechargeBottomTabs({ navigation, route }) {
  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      screenOptions={{
        cardStyleInterpolator: Platform.OS === "ios" ?
          CardStyleInterpolators.forHorizontalIOS
          :
          CardStyleInterpolators.forScaleFromCenterAndroid,
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={RechargeHome}
        options={{
          title: "",
          tabBarIcon: ({ focused, tintColor }) => (
            focused ?
              <View style={[tabs.activeTab]}>
                <Image
                  source={require("../../assets/icons/chat.png")}
                  style={[tabs.activeIcon]}
                />
                <Text style={[tabs.activeTabtext]}>Home</Text>
              </View>
              :
              <View style={[tabs.inActiveTab]}>
                <Image
                  source={require("../../assets/icons/chat.png")}
                  style={[tabs.inactiveIcon]}
                />
                <Text style={[tabs.inActiveTabtext]}>Home</Text>
              </View>
          ),
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={RechargeHome}
        options={{
          title: "",
          tabBarIcon: ({ focused, tintColor }) => (
            focused ?
              <View style={[tabs.activeTab]}>
                <Image
                  source={require("../../assets/icons/user.png")}
                  style={[tabs.activeIcon]}
                />
                <Text style={[tabs.activeTabtext]}>Profile</Text>
              </View>
              :
              <View style={[tabs.inActiveTab]}>
                <Image
                  source={require("../../assets/icons/user.png")}
                  style={[tabs.inactiveIcon]}
                />
                <Text style={[tabs.inActiveTabtext]}>Profile</Text>
              </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "How to get started";
    case "Links":
      return "Links to learn more";
  }
}

const styles = StyleSheet.create({});
