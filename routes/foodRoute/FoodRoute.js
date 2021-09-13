import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { CardStyleInterpolators } from "@react-navigation/stack"

import FoodSplash from "../../screens/foodApp/main/foodSplash/FoodSplash";

const Default = createNativeStackNavigator();

const FoodRoute = () => {
  return (
    <Default.Navigator
      screenOptions={{
        cardStyleInterpolator: Platform.OS === "ios" ?
          CardStyleInterpolators.forHorizontalIOS
          :
          CardStyleInterpolators.forScaleFromCenterAndroid,
        headerShown: false,
      }}>
      <Default.Screen name="FoodSplash" component={FoodSplash} />

    </Default.Navigator>
  );
};

export default FoodRoute;
