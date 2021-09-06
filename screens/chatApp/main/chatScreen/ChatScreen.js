import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Styles from "../../../../style/Styles";
import ChatHeader from "../../components/chatHeader/ChatHeader";
import MessageInput from "./components/MessageInput";

const flex = Styles.flex;
const screen = Styles.screen;

const ChatScreen = (props) => {

  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <View style={[screen.defaultScreen]}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <ChatHeader
        goBack={goBack}
        title="Messages"
      />

      <View style={[flex.flex1]}>
        <View style={[flex.flex1, flex.justifyCenter, flex.alignCenter]}>
          <Text>No Messages</Text>
        </View>
        <View>
          <MessageInput
            placeholder="Message"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChatScreen;
