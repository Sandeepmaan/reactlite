import React from "react";
import { StyleSheet, Text, Pressable, ActivityIndicator } from "react-native";
import ButtonStyle from "../../../../style/ButtonStyle";
import Colors from "../../../../style/Colors";

const button = ButtonStyle.button;

const SecondaryButton = (props) => {
  return (
    <Pressable
      android_ripple={button.ripple}
      style={[button.button, button.secondaryFullButton]}
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

export default SecondaryButton;
