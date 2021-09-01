import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Styles from "../../../../style/Styles";
import Colors from "../../../../style/Colors";
import InputStyle from "../../../../style/InputStyle";

const input = InputStyle.input;
const flex = Styles.flex;

const DefaultInput = (props) => {
  return (
    <View style={[flex.column]}>
      <TextInput
        style={[input.input, input.defaultInput]}
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
      {props.err && <Text style={[input.inputError]}>Field Error</Text>}
    </View>
  );
};

const styles = StyleSheet.create({});

export default DefaultInput;
