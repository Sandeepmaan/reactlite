import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Styles from "../../../../style/Styles";
import Colors from "../../../../style/Colors";
import CardStyle from "../../../../style/CardStyle";

const card = CardStyle.card;
const content = Styles.content;

const DefaultButtonCard = (props) => {
  return (
    <View style={[card.card]}>
      <Text style={[card.title]}>{props.title}</Text>
      <Text style={[card.detail]}>{props.detail}</Text>
      <Pressable style={[card.badge]}>
        <Text style={[card.badgeText]}>{props.badge}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DefaultButtonCard;
