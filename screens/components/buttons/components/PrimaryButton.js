import React, { useState } from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import Styles from "../../../../style/Styles";
import Colors from "../../../../style/Colors";

const button = Styles.button;
const content = Styles.content;
const colors = Colors;

const PrimaryButton = (props) => {
  const [buttonPress, setButtonPress] = useState(0);
  return (
    <Pressable
      style={
        // ({ pressed }) =>
        [
          // { backgroundColor: pressed ? Colors.primaryBorder : Colors.warningBorder },
          button.fullButton, styles.primary]
      }
      // onPress={()=> setButtonPress(buttonPress +1)}
      onPress={props.onPress}
    >
      <Text style={[content.textRegular, styles.buttonText]}>{props.buttonName}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  primary: {
    backgroundColor: Colors.primary,
  },
  buttonText: {
    color: Colors.colorWhite,
  },
});

export default PrimaryButton;
