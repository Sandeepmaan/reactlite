import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CardStyleInterpolators } from "@react-navigation/stack";
import Splash from "./screens/splash/Splash";
import UiElements from "./screens/uiElements/UiElements";
import Buttons from "./screens/components/buttons/Buttons";
import Alerts from "./screens/components/alerts/Alerts";
import Inputs from "./screens/components/input/Inputs";
import { Platform } from "react-native";
import Avatars from "./screens/components/avatar/Avatars";
import Modals from "./screens/components/modals/Modals";
import Cards from "./screens/components/card/Cards";
import Flatlists from "./screens/components/flatlists/Flatlists";
import ChatRoute from "./routes/chatRoute/ChatRoute";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: Platform.OS === "ios" ?
            CardStyleInterpolators.forHorizontalIOS
            :
            CardStyleInterpolators.forScaleFromCenterAndroid,
          headerShown: false,
        }}>

        <Stack.Screen name="Splash" component={Splash} />

        {/*Chat Screens*/}
        <Stack.Screen name="ChatRoute" component={ChatRoute} />

        {/*ui elements*/}
        <Stack.Screen name="UiElements" component={UiElements} />
        <Stack.Screen name="Buttons" component={Buttons} />
        <Stack.Screen name="Inputs" component={Inputs} />
        <Stack.Screen name="Avatars" component={Avatars} />
        <Stack.Screen name="Alerts" component={Alerts} />
        <Stack.Screen name="Modals" component={Modals} />
        <Stack.Screen name="Cards" component={Cards} />
        <Stack.Screen name="Flatlists" component={Flatlists} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
