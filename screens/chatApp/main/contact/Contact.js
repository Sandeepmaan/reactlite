import * as React from "react";
import { SafeAreaView, View, StatusBar, StyleSheet } from "react-native";
import Colors from "../../../../style/Colors";
import Styles from "../../../../style/Styles";
import ChatHeader from "../../components/chatHeader/ChatHeader";
import ContactList from "./components/ContactList";

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

      <View style={[flex.flex1]}>
        <ContactList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Contact;
