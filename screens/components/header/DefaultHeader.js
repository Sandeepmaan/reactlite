import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Styles from "../../../style/Styles";
import Colors from "../../../style/Colors";

const screen = Styles.screen;
const content = Styles.content;

const DefaultHeader = (props) => {
  return (
    <View style={[styles.title]}>
      <Text style={[content.textLarge]}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: Colors.colorWhite,
    height: 50,
    paddingHorizontal: 15,
  },
});

export default DefaultHeader;
