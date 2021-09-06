import React from "react";
import { StyleSheet } from "react-native";
import OtpInputs from "react-native-otp-inputs";
import Colors from "../../../../style/Colors";
import ButtonStyle from "../../../../style/ButtonStyle";

const button = ButtonStyle.button;

const OtpInput = (props) => {
  return (
    <OtpInputs
      numberOfInputs={4}
      inputStyles={[button.otpInput]}
      handleChange={props.handleChange}
      unfocusedBorderColor={Colors.defaultBorder}
      focusedBorderColor={Colors.colorWhite}
      containerStyles={{
        margin: 0,
        padding: 0,
        borderWidth: 0,
      }}
      inputContainerStyles={{
        borderWidth: 0,
        width: 60,
        marginHorizontal: 10,
      }}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
      }}
    />
  );
};

const styles = StyleSheet.create({});
export default OtpInput;
