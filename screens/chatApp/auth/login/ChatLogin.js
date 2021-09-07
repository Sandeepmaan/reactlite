import React from "react";
import { SafeAreaView, View, Image, StatusBar, StyleSheet, Text } from "react-native";
import Styles from "../../../../style/Styles";
import Colors from "../../../../style/Colors";
import ThemeButton from "../../components/buttons/ThemeButton";
import BorderBottomInput from "../../../components/input/components/BorderBottomInput";

const screen = Styles.screen;
const content = Styles.content;
const flex = Styles.flex;
const logo = Styles.logo;
const space = Styles.space;

const ChatLogin = (props) => {
  const { navigate } = props.navigation;

  return (
    <SafeAreaView style={[screen.defaultScreen]}>
      <StatusBar backgroundColor={Colors.colorWhite} barStyle="dark-content" />
      <View style={[flex.flex1, space.px15]}>
        <View style={[flex.alignCenter, space.py5]}>
          <Image
            style={[logo.logo]}
            source={require("../../../../assets/images/logo-512.png")}
          />
        </View>

        <View style={[space.px2]}>
          <Text style={[content.textLarge, content.textCenter]}>
            Enter mobile number and Login
          </Text>
          <View style={[space.mt1]} />
          <Text style={[content.textMedium, content.textCenter]}>
            We will send you a One Time Password on your phone number.
          </Text>
        </View>

        <View style={[flex.flex1, flex.justifyCenter]}>
          <BorderBottomInput
            placeholder="Enter Phone Number"
          />
          <View style={[space.mt5]} />
          <ThemeButton
            buttonName="Get OTP"
            onPress={()=> navigate('ChatOtpScreen')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default ChatLogin;
