import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import ButtonStyle from "../../../../style/ButtonStyle";

const button = ButtonStyle.button;

const InfoButton = (props) => {
  return (
    <Pressable style={[button.button, button.infoFullButton]}>
      <Text style={[button.textLight]}>{props.buttonName}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default InfoButton;
