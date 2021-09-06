import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import ButtonStyle from "../../../../style/ButtonStyle";

const button = ButtonStyle.button;

const SmallBorderButton = (props) => {
  return (
    <Pressable
      android_ripple={button.ripple}
      style={[button.button, button.smallBorderButton]}
      onPress={props.onPress}
    >
      <Text style={[button.textDark]}>
        {props.buttonName}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default SmallBorderButton;
