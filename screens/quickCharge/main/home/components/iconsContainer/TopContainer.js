import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CardStyle from "../../../../../../style/CardStyle";
import RechargeIconsList from "./LightIconsList";
import IconAvatar from "../../../../../components/avatar/components/IconAvatar";
import Styles from "../../../../../../style/Styles";
import LightIconsList from "./LightIconsList";

const card = CardStyle.card;
const space = Styles.space;
const flex = Styles.flex;
const content = Styles.content;
const divider = Styles.divider;

const TopContainer = (props) => {
  return (
    <View style={[card.card, card.rechargeCard]}>
      <View style={[space.px15, space.mb2, flex.row, flex.alignCenter]}>
        <IconAvatar />
        <View style={[space.ml1]}>
          <Text style={[content.textRegular, content.textColorWhite]}>$000</Text>
          <Text style={[content.textLight, content.textColorWhite]}>Available Balance</Text>
        </View>
      </View>
      <View style={[divider.divider, space.mb2]} />
      <LightIconsList
        navigate={props.navigate}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TopContainer;
