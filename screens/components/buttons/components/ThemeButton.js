import React, { useState } from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import ButtonStyle from "../../../../style/ButtonStyle";

const button = ButtonStyle.button;

const ThemeButton = (props) => {
  return (
    <Pressable
      style={[button.button, button.themeButton]}
      onPress={props.onPress}
    >
      <Text style={[button.textLight]}>
        {props.buttonName}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default ThemeButton;
