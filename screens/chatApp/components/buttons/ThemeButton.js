import React, { useState } from "react";
import { StyleSheet, Text, Pressable, ActivityIndicator } from "react-native";
import ButtonStyle from "../../../../style/ButtonStyle";
import Colors from "../../../../style/Colors";

const button = ButtonStyle.button;

const ThemeButton = (props) => {
  return (
    <Pressable
      onPress={props.onPress}
      android_ripple={button.ripple}
      style={[button.button, button.themeButton]}
    >
      {props.loading ?
        <ActivityIndicator size="small" color={Colors.colorWhite} />
        :
        <Text style={[button.textLight]}>
          {props.buttonName}
        </Text>
      }
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default ThemeButton;
