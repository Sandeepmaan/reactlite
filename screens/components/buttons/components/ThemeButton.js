import React, { useState } from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import ButtonStyle from "../../../../style/ButtonStyle";

const button = ButtonStyle.button;

const ThemeButton = (props) => {
  return (
    <Pressable
      onPress={props.onPress}
      android_ripple={button.ripple}
      style={[button.button, button.themeButton]}
    >
      <Text style={[button.textLight]}>
        {props.buttonName}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default ThemeButton;
