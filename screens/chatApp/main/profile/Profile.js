import * as React from "react";
import { SafeAreaView, View, StatusBar, Text, StyleSheet } from "react-native";
import Colors from "../../../../style/Colors";
import Styles from "../../../../style/Styles";
import ChatHeader from "../../components/chatHeader/ChatHeader";
import ImageAvatar from "../../../components/avatar/components/ImageAvatar";
import ProfileList from "./components/ProfileList";

const screen = Styles.screen;
const space = Styles.space;
const content = Styles.content;
const flex = Styles.flex;

const Profile = (props) => {
  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <SafeAreaView style={[screen.defaultScreen]}>
      <StatusBar backgroundColor={Colors.colorWhite} barStyle="dark-content" />
      <ChatHeader
        title="Profile"
      />

      <ProfileDetail />

      <View style={[flex.flex1]}>
        <ProfileList />
      </View>
    </SafeAreaView>
  );
};

const ProfileDetail = (props) => {
  return (
    <View style={[space.px15, flex.row, flex.alignCenter, space.py3, styles.card]}>
      <ImageAvatar
        size={true}
        round={true}
        border={true}
      />
      <View style={[space.ml1]}>
        <Text style={[content.textLarge]}>Gail Forcewind</Text>
        <Text style={[content.textRegular]}>+91 123 456 7890</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderBottomColor: Colors.primaryBorder,
    borderBottomWidth: 1,
  },
});

export default Profile;
