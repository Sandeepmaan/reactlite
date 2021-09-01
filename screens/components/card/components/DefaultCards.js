import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Styles from "../../../../style/Styles";
import Colors from "../../../../style/Colors";
import CardStyle from "../../../../style/CardStyle";

const card = CardStyle.card;
const content = Styles.content;

const DefaultCard = (props) => {
  return (
    <View style={[card.card]}>
      <Text style={[card.title]}>{props.title}</Text>
      {props.detail && <Text style={[card.detail]}>{props.detail}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({});

export default DefaultCard;
