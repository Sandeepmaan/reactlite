import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  Pressable,
} from "react-native";
import Styles from "../../../../style/Styles";
import Colors from "../../../../style/Colors";
import OtpInput from "../../../components/input/components/OtpInput";
import RechargeThemeButton from "../../components/buttons/RechargeThemeButton";

const screen = Styles.screen;
const flex = Styles.flex;
const content = Styles.content;
const space = Styles.space;
const logo = Styles.logo;
const icon = Styles.icon;

const RechargeOtpScreen = (props) => {
  const { navigate } = props.navigation;

  const goBack = () => {
    props.navigation.goBack();
  };

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

        <View style={[flex.alignStart, space.mb2]}>
          <View style={[flex.row, flex.alignStart, space.mb4]}>
            <Pressable onPress={goBack}>
              <Image
                style={[icon.icon20, space.mr1]}
                source={require("../../../../assets/icons/left-arrow.png")}
              />
            </Pressable>
            <View style={[flex.flex1, space.pr3]}>
              <Text style={[content.textMedium]}>
                Enter the 4 digit number sent to your number +91 000 000 0000
              </Text>
            </View>
          </View>

          <View style={[flex.alignCenter, { width: "100%" }]}>
            <OtpInput />
            <RechargeThemeButton
              onPress={() => navigate("RechargeHome")}
              buttonName="Verify"
            />

            <View style={[flex.row, flex.alignCenter, space.mt3]}>
              <Text style={[content.textLight, { textAlign: "center" }]}>
                Didn't receive OTP?
              </Text>
              <Pressable
                style={[{ marginStart: 5 }]}
              >
                <Text style={[content.textLight, { color: Colors.danger }]}>
                  Resend
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default RechargeOtpScreen;
