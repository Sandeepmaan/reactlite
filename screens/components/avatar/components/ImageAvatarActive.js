import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AvatarStyle from "../../../../style/AvatarStyle";

const avatar = AvatarStyle.avatar;

const ImageAvatarActive = (props) => {
  return (
    <View>
      <View style={
        [
          avatar.avatar,
          props.border && avatar.border,
          props.round && avatar.round,
        ]
      }>
        <Image
          style={[avatar.avatarImage]}
          source={props.image}
        />
      </View>
      <View style={[avatar.avatarActive]}>
        <Image
          style={[avatar.avatarActiveIcon]}
          source={require('../../../../assets/icons/tick.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageAvatarActive;
