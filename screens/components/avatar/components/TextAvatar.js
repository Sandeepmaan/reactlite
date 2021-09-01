import React from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import Styles from "../../../../style/Styles";
import Colors from "../../../../style/Colors";
import AvatarStyle from "../../../../style/AvatarStyle";

const avatar = AvatarStyle.avatar;
const content = Styles.content;

const TextAvatar = (props) => {
  return (
    <View style={
      [avatar.avatar, props.border && avatar.border, props.round && avatar.round]
    }>
      <Text style={[content.textLarge]}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TextAvatar;
