import React  from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import Styles from "../../../../style/Styles";
import Colors from "../../../../style/Colors";

const button = Styles.button;
const content = Styles.content;
const colors = Colors;

const InfoButton = (props) => {
  return (
      <Pressable style={[button.fullButton, styles.info]}>
        <Text style={[content.textRegular,styles.buttonText]}>{props.buttonName}</Text>
      </Pressable>
  );
};

const styles = StyleSheet.create({
  info: {
    backgroundColor:Colors.info
  },
  buttonText: {
    color:Colors.colorWhite
  },
});

export default InfoButton;
