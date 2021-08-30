import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../../../style/Styles";
import Colors from "../../../../style/Colors";

const flex = Styles.flex;
const space = Styles.space;
const content = Styles.content;

const WarningAlert = (props) => {
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
    borderColor: Colors.warningBorder,
    borderWidth: 1,
    backgroundColor: Colors.warningLight,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  alertIcon: {
    tintColor: Colors.warning,
    width: 16,
    height: 16,
  },
  alertText: {
    color: Colors.warning,
  },
});

export default WarningAlert;
