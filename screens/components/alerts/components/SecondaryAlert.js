import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../../../style/Styles";
import Colors from "../../../../style/Colors";

const flex = Styles.flex;
const space = Styles.space;
const content = Styles.content;

const SecondaryAlert = (props) => {
  return (
    <View style={[space.px15, flex.row, flex.alignCenter, styles.alertBox]}>
      <Image style={[styles.alertIcon]} source={require("../../../../assets/icons/exclamation.png")} />
      <Text style={[content.textLight, styles.alertText, space.ml1, flex.flex1]}>
        {props.alertText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  alertBox: {
    borderColor: Colors.secondaryBorder,
    borderWidth: 1,
    backgroundColor: Colors.secondaryLight,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  alertIcon: {
    tintColor: Colors.secondary,
    width: 16,
    height: 16,
  },
  alertText: {
    color: Colors.secondary,
  },
});

export default SecondaryAlert;
