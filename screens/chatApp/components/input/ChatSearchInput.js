import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import Styles from "../../../../style/Styles";
import Colors from "../../../../style/Colors";
import InputStyle from "../../../../style/InputStyle";

const flex = Styles.flex;
const content = Styles.content;
const input = InputStyle.input;

const ChatSearchInput = (props) => {
  return (
    <View style={[flex.column]}>
      <Image
        style={[input.inputIcon, { tintColor: props.color }]}
        source={props.icon}
      />
      <TextInput
        style={[input.input, input.iconInput, input.chatSearchInput]}
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
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChatSearchInput;
