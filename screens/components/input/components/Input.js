import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import Styles from "../../../../style/Styles";
import Colors from "../../../../style/Colors";

const space = Styles.space;
const content = Styles.content;
const input = Styles.input;

const Input = (props) => {
  return (
    <View style={[styles.inputContainer, space.my1]}>
      {props.label &&
      <Text style={[content.textRegular, space.mb1]}>{props.label}</Text>
      }
      {props.icon &&
      <Image
        style={[styles.icon]}
        source={props.icon}
      />
      }
      <TextInput
        style={[
          input.defaultInput,
          props.icon && styles.iconInput,
          props.withBackground && styles.withBackground,
          props.borderBottom && styles.borderBottom,
        ]}
        value={props.value}
        keyboardType={props.keyboardType ?? "default"}
        type={props.type}
        name={props.name}
        onChangeText={props.onChange}
        placeholder={props.placeholder}
        placeholderTextColor={Colors.light}
        editable={props.editable}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
  },
  withBackground: {
    backgroundColor: Colors.primaryBorder,
  },
  borderBottom: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
    paddingHorizontal: 0,
  },
  iconInput: {
    paddingStart: 50,
  },
  icon: {
    position: "absolute",
    left: 15,
    top: 13,
    width: 24,
    height: 24,
    tintColor: Colors.primaryBorder,
  },
});

export default Input;
