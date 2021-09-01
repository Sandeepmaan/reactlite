import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import ButtonStyle from "../../../../style/ButtonStyle";

const button = ButtonStyle.button;

const SmallButton = (props) => {
  return (
    <Pressable style={[button.button, button.smallButton]}>
      <Text style={[button.textLight]}>{props.buttonName}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default SmallButton;
