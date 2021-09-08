import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import Styles from "../../../style/Styles";
import Colors from "../../../style/Colors";
import CardStyle from "../../../style/CardStyle";

const card = CardStyle.card;
const content = Styles.content;

const SplashGridListItem = (props) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={
        [card.card, card.squareCard,
          {
            width: props.width, height: props.width, marginEnd: 10,
            backgroundColor: props.item.cardColor,
          },
          (props.index + 1) % 2 === 0 && { marginEnd: 0 },
        ]
      }>
      <Text style={[card.title, content.textCenter, { color: props.item.textColor }]}>
        {props.title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default SplashGridListItem;
