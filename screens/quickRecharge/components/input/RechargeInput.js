import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import Styles from "../../../../style/Styles";
import Colors from "../../../../style/Colors";
import InputStyle from "../../../../style/InputStyle";
import ButtonStyle from "../../../../style/ButtonStyle";

const input = InputStyle.input;
const button = ButtonStyle.button;
const content = Styles.content;
const flex = Styles.flex;
const space = Styles.space;

const RechargeInput = (props) => {
  return (
    <View style={[flex.column]}>
      <Text style={[content.textRegular, space.mb1]}>{props.label}</Text>
      <TextInput
        style={[input.input, input.borderBottom]}
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
      <Pressable
        style={[button.inputButton, { backgroundColor: Colors.rechargeTheme }]}
      >
        <Text style={[content.textLight, content.textColorWhite]}>Recharge</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RechargeInput;
