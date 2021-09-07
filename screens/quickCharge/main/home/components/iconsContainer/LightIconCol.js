import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import CardStyle from "../../../../../../style/CardStyle";
import Styles from "../../../../../../style/Styles";
import Colors from "../../../../../../style/Colors";
import ButtonStyle from "../../../../../../style/ButtonStyle";

const card = CardStyle.card;
const content = Styles.content;
const space = Styles.space;
const button = ButtonStyle.button;

const LightIconCol = (props) => {
  return (
    <Pressable
      onPress={props.item.navigate}
      android_ripple={button.ripple}
      style={
        [
          { flex: 1 },
          card.rechargeIconCard,
          space.py1,
        ]
      }
    >
      <Image
        style={[styles.rechargeIcon, space.mb1]}
        source={props.item.icon}
      />
      <Text style={[content.textLight, { color: Colors.colorWhite }]}>
        {props.item.iconText}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rechargeIcon: {
    width: 20,
    height: 20,
    tintColor: Colors.colorWhite,
  },
});

export default LightIconCol;
