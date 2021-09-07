import React from "react";
import { StyleSheet, Text, Pressable, ActivityIndicator } from "react-native";
import ButtonStyle from "../../../../style/ButtonStyle";
import Colors from "../../../../style/Colors";
import Styles from "../../../../style/Styles";

const button = ButtonStyle.button;
const content = Styles.content;

const BorderButton = (props) => {
  return (
    <Pressable
      android_ripple={button.ripple}
      style={[button.button, button.borderFullButton]}
    >
      {props.loading ?
        <ActivityIndicator size="small" color={Colors.colorBlack} />
        :
        <Text style={[button.textLight, content.textColorBlack]}>
          {props.buttonName}
        </Text>
      }
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default BorderButton;
