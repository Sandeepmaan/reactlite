import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Styles from "../../../style/Styles";
import Colors from "../../../style/Colors";

const header = Styles.header;
const content = Styles.content;

const DefaultHeader = (props) => {
  return (
    <View style={[header.header]}>
      <Pressable
        onPress={props.goBack}
        style={[header.backArrow]}
      >
        <Image
          style={[header.headerIcon]}
          source={require("../../../assets/icons/left-arrow.png")}
        />
      </Pressable>
      <Text style={[content.textLarge]}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DefaultHeader;
