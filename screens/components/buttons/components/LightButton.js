import React  from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import Styles from "../../../../style/Styles";
import Colors from "../../../../style/Colors";

const button = Styles.button;
const content = Styles.content;
const colors = Colors;

const LightButton = (props) => {
  return (
      <Pressable style={[button.fullButton, styles.light]}>
        <Text style={[content.textRegular,styles.buttonText]}>{props.buttonName}</Text>
      </Pressable>
  );
};

const styles = StyleSheet.create({
  light: {
    backgroundColor:Colors.light
  },
  buttonText: {
    color:Colors.dark
  },
});

export default LightButton;
