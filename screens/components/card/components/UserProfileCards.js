import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Styles from "../../../../style/Styles";
import Colors from "../../../../style/Colors";
import CardStyle from "../../../../style/CardStyle";

const card = CardStyle.card;
const flex = Styles.flex;

const UserProfileCard = (props) => {
  return (
    <View style={[card.card, card.profileCard]}>
      <View style={[card.iconBox, flex.flex0]}>
        <Image style={[card.cardIcon]} source={props.icon} />
      </View>
      <Text style={[card.title, flex.flex1]}>{props.title}</Text>
      <View style={[card.rightIconBox, flex.flex0]}>
        <Image style={[card.cardIcon]} source={props.rightArrow} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default UserProfileCard;
