import React from "react";
import { View, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import Styles from "../../../style/Styles";
import Colors from "../../../style/Colors";
import DefaultHeader from "../header/DefaultHeader";
import Avatar from "./components/Avatar";

const screen = Styles.screen;
const space = Styles.space;
const flex = Styles.flex;

const Avatars = (props) => {
  const { navigate } = props.navigation;
  return (
    <SafeAreaView style={[screen.defaultScreen]}>
      <StatusBar backgroundColor={Colors.colorWhite} barStyle="dark-content" />
      <DefaultHeader title="Avatars" />
      <View style={[space.px15]}>
        <View style={[flex.row]}>
          <Avatar
            title="AV"
          />
          <Avatar
            border={true}
            title="AV"
          />
          <Avatar
            round={true}
            title="AV"
          />
        </View>
        <View style={[flex.row]}>
          <Avatar
            image={require('../../../assets/icons/exclamation.png')}
          />
          <Avatar
            border={true}
            image={require('../../../assets/icons/exclamation.png')}
          />
          <Avatar
            round={true}
            image={require('../../../assets/icons/exclamation.png')}
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
