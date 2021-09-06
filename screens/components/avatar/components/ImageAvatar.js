import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AvatarStyle from "../../../../style/AvatarStyle";

const avatar = AvatarStyle.avatar;

const ImageAvatar = (props) => {
  return (
    <View style={
      [
        avatar.avatar,
        props.size && avatar.avatar100,
        props.border && avatar.border,
        props.round && avatar.round,
      ]
    }>
      <Image
        style={[avatar.avatarImage]}
        source={props.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageAvatar;
