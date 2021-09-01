import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Styles from "../../../../style/Styles";
import Colors from "../../../../style/Colors";
import CardStyle from "../../../../style/CardStyle";

const card = CardStyle.card;
const flex = Styles.flex;

const AdvancedCard = (props) => {
  return (
    <View style={[card.card]}>
      <View style={[flex.row, flex.alignCenter]}>
        <View style={[card.iconBox]}>
          <Image style={[card.cardIcon]} source={props.icon} />
        </View>
        <Text style={[card.title]}>{props.title}</Text>
      </View>
      <Text style={[card.detail]}>{props.detail}</Text>
      <Pressable style={[card.badge]}>
        <Text style={[card.badgeText]}>{props.badge}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AdvancedCard;
