import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import ButtonStyle from "../../../../style/ButtonStyle";

const button = ButtonStyle.button;

const BorderButton = (props) => {
  return (
    <Pressable
      android_ripple={button.ripple}
      style={[button.button, button.borderFullButton]}
    >
      <Text style={[button.textDark]}>{props.buttonName}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default BorderButton;
