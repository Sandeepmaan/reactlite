import React from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import Styles from "../../../../../../style/Styles";
import Colors from "../../../../../../style/Colors";
import ImageAvatar from "../../../../../components/avatar/components/ImageAvatar";
import ButtonStyle from "../../../../../../style/ButtonStyle";
import ImageAvatarActive from "../../../../../components/avatar/components/ImageAvatarActive";

const button = ButtonStyle.button;
const content = Styles.content;
const flex = Styles.flex;
const space = Styles.space;

const RecentRechargeListCard = (props) => {
  return (
      <Pressable
        android_ripple={button.listRipple}
        style={[styles.card, props.selectItem && { backgroundColor: Colors.danger }]}
      >
        {!props.selected ?
          <ImageAvatar
            border={true}
          />
          :
          <ImageAvatarActive
            round={true}
            border={true}
          />
        }
        <View style={[flex.flex1, space.ml1]}>
          <Text style={[content.textMedium]}>{props.item.title}</Text>
          <Text style={[content.textLight]}>{props.item.time}</Text>
        </View>
      </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: Colors.colorWhite,
    borderBottomWidth: 1,
    borderBottomColor: Colors.defaultBorder,
  },
});

export default RecentRechargeListCard;
