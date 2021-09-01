import React, { useState } from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import Styles from "../../../../style/Styles";
import Colors from "../../../../style/Colors";
import ButtonStyle from "../../../../style/ButtonStyle";

const button = ButtonStyle.button;

const PrimaryButton = (props) => {
  return (
    <Pressable
      style={[button.button, button.primaryFullButton]}
      onPress={props.onPress}
    >
      <Text style={[button.textLight]}>
        {props.buttonName}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
});

export default PrimaryButton;
