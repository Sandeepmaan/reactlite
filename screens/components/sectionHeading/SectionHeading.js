import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Styles from "../../../style/Styles";

const header = Styles.header;
const content = Styles.content;
const space = Styles.space;
const flex = Styles.flex;

const SectionHeading = (props) => {
  return (
    <View style={[header.heading, flex.justifySpace, space.px15]}>
      <Text style={[content.textRegular]}>
        {props.heading}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SectionHeading;
