import React from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import Styles from "../../../../../../style/Styles";
import Swipeout from "react-native-swipeout";
import Colors from "../../../../../../style/Colors";
import ImageAvatar from "../../../../../components/avatar/components/ImageAvatar";
import ButtonStyle from "../../../../../../style/ButtonStyle";

const button = ButtonStyle.button;
const content = Styles.content;
const flex = Styles.flex;
const space = Styles.space;

const swipeoutBtns = [
  {
    text: "Delete",
    backgroundColor: Colors.danger,
  },
];

const ChatListCard = (props) => {
  return (
    <Swipeout right={swipeoutBtns}>
      <Pressable
        onPress={props.onPress}
        android_ripple={button.listRipple}
        style={[styles.card, props.selectItem && { backgroundColor: Colors.danger }]}
      >
        <ImageAvatar
          round={true}
          border={true}
          image={require("../../../../../../assets/images/avatar.jpeg")}
        />

        <View style={[flex.flex1, space.ml1]}>
          <Text style={[content.textMedium]}>{props.item.title}</Text>
          <Text
            numberOfLines={1}
            style={[content.textRegular]}
          >
            {props.item.detail}
          </Text>
        </View>
      </Pressable>
    </Swipeout>
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

export default ChatListCard;
