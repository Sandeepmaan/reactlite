import React from "react";
import { View, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import Styles from "../../../style/Styles";
import Colors from "../../../style/Colors";
import DefaultHeader from "../header/DefaultHeader";
import TextAvatar from "./components/TextAvatar";
import ImageAvatar from "./components/ImageAvatar";
import IconAvatar from "./components/IconAvatar";

const screen = Styles.screen;
const space = Styles.space;
const flex = Styles.flex;

const Avatars = (props) => {
  const { navigate } = props.navigation;
  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <SafeAreaView style={[screen.defaultScreen]}>
      <StatusBar backgroundColor={Colors.colorWhite} barStyle="dark-content" />
      <DefaultHeader title="Avatars" goBack={goBack} />
      <View style={[space.px15]}>
        <View style={[flex.row]}>
          <TextAvatar
            title="AV"
          />
          <TextAvatar
            border={true}
            title="AV"
          />
          <TextAvatar
            round={true}
            title="AV"
          />
        </View>
        <View style={[flex.row]}>
          <ImageAvatar
            user={true}
            image={require("../../../assets/images/avatar.jpeg")}
          />
          <ImageAvatar
            user={true}
            border={true}
            image={require("../../../assets/images/avatar.jpeg")}
          />
          <ImageAvatar
            user={true}
            round={true}
            image={require("../../../assets/images/avatar.jpeg")}
          />
        </View>
        <View style={[flex.row]}>
          <IconAvatar
            image={require("../../../assets/icons/avatar.png")}
          />
          <IconAvatar
            border={true}
            image={require("../../../assets/icons/avatar.png")}
          />
          <IconAvatar
            round={true}
            image={require("../../../assets/icons/avatar.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: Colors.colorWhite,
    height: 50,
    paddingHorizontal: 15,
  },
});

export default Avatars;
