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
      android_ripple={button.ripple}
      style={
        [
          { flex: 1 },
          card.rechargeIconCard, space.py2,
          (props.index + 1) % 2 === 0 && { marginEnd: 0 },
        ]
      }
    >
      <Image
        style={[styles.rechargeIcon, space.mb1]}
        source={props.item.icon}
      />
      <Text style={[content.textLight]}>
        {props.item.iconText}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rechargeIcon: {
    width: 20,
    height: 20,
  },
});

export default LightIconCol;
