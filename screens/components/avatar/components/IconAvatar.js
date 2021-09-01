import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Styles from "../../../../style/Styles";
import AvatarStyle from "../../../../style/AvatarStyle";

const avatar = AvatarStyle.avatar;
const content = Styles.content;

const IconAvatar = (props) => {
  return (
    <View style={
      [avatar.avatar, props.border && avatar.border, props.round && avatar.round]
    }>
      <Image
        style={[avatar.avatarIcon]}
        source={props.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IconAvatar;
