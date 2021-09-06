import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import ButtonStyle from "../../../../style/ButtonStyle";

const button = ButtonStyle.button;

const DarkButton = (props) => {
  return (
    <Pressable
      android_ripple={button.ripple}
      style={[button.button, button.darkFullButton]}
    >
      <Text style={[button.textLight]}>{props.buttonName}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default DarkButton;
