import React from "react";
import { View, Text, StyleSheet, TextInput, Image, Pressable } from "react-native";
import Styles from "../../../../../style/Styles";
import Colors from "../../../../../style/Colors";
import InputStyle from "../../../../../style/InputStyle";

const input = InputStyle.input;
const flex = Styles.flex;

const MessageInput = (props) => {
  return (
    <View style={[flex.column]}>
      <TextInput
        style={[input.input, input.messageInput]}
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
      <Pressable style={input.sendIconButton}>
        <Image
          style={input.sendIcon}
          source={require("../../../../../assets/icons/send.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MessageInput;
