import React from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import Styles from "../../../../style/Styles";
import Colors from "../../../../style/Colors";

const screen = Styles.screen;
const content = Styles.content;

const Avatar = (props) => {
  return (
    <View style={
      [styles.avatar, props.border && styles.border, props.round && styles.round]
    }>
      {props.title ?
        <Text style={[content.textLarge]}>{props.title}</Text>
        :
        <Image style={styles.image} source={props.image} />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 70,
    height: 70,
    backgroundColor: Colors.primaryLight,
    borderWidth: 1,
    borderColor: Colors.primaryLight,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  border: {
    borderColor: Colors.primaryBorder,
  },
  round: {
    borderRadius: 70,
  },
  image: {
    width: 50,
    height: 50,
    tintColor: Colors.primary,
  },
});

export default Avatar;
