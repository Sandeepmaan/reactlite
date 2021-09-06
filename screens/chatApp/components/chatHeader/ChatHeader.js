import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Styles from "../../../../style/Styles";

const header = Styles.header;
const content = Styles.content;
const flex = Styles.flex;

const ChatHeader = (props) => {
  return (
    <View style={[header.header, flex.justifySpace, { backgroundColor: props.backColor }]}>
      <View style={[header.headerLeft]}>
        {props.goBack ?
          <Pressable
            onPress={props.goBack}
            style={[header.backArrow]}
          >
            <Image
              style={[header.headerIcon]}
              source={require("../../../../assets/icons/left-arrow.png")}
            />
          </Pressable>
          :
          <Pressable
            onPress={props.pressLeft}
            style={[header.backArrow]}
          >
            <Text style={[content.textRegular]}>
              {props.pressLeftText}
            </Text>
          </Pressable>
        }
      </View>

      <Text style={[content.textLarge]}>{props.title}</Text>

      <Pressable
        onPress={props.pressRight}
        style={[header.headerRight, flex.alignEnd]}
      >
        <Image
          style={[header.headerIcon]}
          source={props.rightIcon}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChatHeader;
