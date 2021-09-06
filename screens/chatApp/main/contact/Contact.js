import * as React from "react";
import { SafeAreaView, View, StatusBar, Text, StyleSheet } from "react-native";
import Colors from "../../../../style/Colors";
import Styles from "../../../../style/Styles";
import ChatHeader from "../../components/chatHeader/ChatHeader";
import ContactList from "./components/ContactList";
import ImageAvatar from "../../../components/avatar/components/ImageAvatar";

const screen = Styles.screen;
const space = Styles.space;
const content = Styles.content;
const flex = Styles.flex;

const Contact = (props) => {
  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <SafeAreaView style={[screen.defaultScreen]}>
      <StatusBar backgroundColor={Colors.primaryLight} barStyle="dark-content" />
      <ChatHeader
        goBack={goBack}
        title="Contact"
        backColor={Colors.primaryLight}
      />

      <ContactDetail />

      <View style={[flex.flex1]}>
        <ContactList />
      </View>
    </SafeAreaView>
  );
};

const ContactDetail = (props) => {
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
    backgroundColor: Colors.primaryLight,
    borderBottomColor: Colors.primaryBorder,
    borderBottomWidth: 1,
  },
});

export default Contact;
