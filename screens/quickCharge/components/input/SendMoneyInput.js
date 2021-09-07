import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import Styles from "../../../../style/Styles";
import Colors from "../../../../style/Colors";
import InputStyle from "../../../../style/InputStyle";

const input = InputStyle.input;
const content = Styles.content;
const flex = Styles.flex;
const space = Styles.space;

const SendMoneyInput = (props) => {
  return (
    <TextInput
      style={[input.input, input.sendMoneyInput]}
      value={props.value}
      keyboardType={props.keyboardType ?? "default"}
      type={props.type}
      name={props.name}
      onChangeText={props.onChange}
      placeholder={props.placeholder}
      placeholderTextColor={Colors.defaultBorder}
      editable={props.editable}
      underlineColorAndroid="transparent"
    />
  );
};

const styles = StyleSheet.create({});

export default SendMoneyInput;
