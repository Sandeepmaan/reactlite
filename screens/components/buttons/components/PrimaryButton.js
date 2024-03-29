import React, { useState } from "react";
import { StyleSheet, Text, Pressable, ActivityIndicator } from "react-native";
import Styles from "../../../../style/Styles";
import Colors from "../../../../style/Colors";
import ButtonStyle from "../../../../style/ButtonStyle";

const button = ButtonStyle.button;

const PrimaryButton = (props) => {
  return (
    <Pressable
      android_ripple={button.ripple}
      style={[button.button, button.primaryFullButton]}
      onPress={props.onPress}
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

const styles = StyleSheet.create({
});

export default PrimaryButton;
