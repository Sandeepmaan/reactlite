import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Styles from "../../../../style/Styles";
import Colors from "../../../../style/Colors";
import InputStyle from "../../../../style/InputStyle";

const input = InputStyle.input;
const flex = Styles.flex;

const WithoutBorderInput = (props) => {
  return (
    <View style={[flex.column]}>
      <TextInput
        style={[input.input, input.withoutBorder]}
        value={props.value}
        keyboardType={props.keyboardType ?? "default"}
        type={props.type}
        name={props.name}
        onChangeText={props.onChange}
        placeholder={props.placeholder}
        placeholderTextColor={Colors.colorWhite}
        editable={props.editable}
        underlineColorAndroid="transparent"
      />
      {props.err && <Text style={[input.inputError]}>Field Error</Text>}
    </View>
  );
};

const styles = StyleSheet.create({});

export default WithoutBorderInput;
