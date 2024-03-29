import * as React from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import Colors from "../../../../style/Colors";
import Styles from "../../../../style/Styles";
import ChatHeader from "../../components/chatHeader/ChatHeader";
import ChatList from "./components/chatComponents/ChatList";
import ChatSearchInput from "../../components/input/ChatSearchInput";

const screen = Styles.screen;
const flex = Styles.flex;

const ChatHome = (props) => {
  const { navigate } = props.navigation;
  return (
    <SafeAreaView style={[screen.defaultScreen]}>
      <StatusBar backgroundColor={Colors.colorWhite} barStyle="dark-content" />
      <ChatHeader
        pressLeft={() => navigate("EditChat")}
        pressLeftText="Edit"
        title="Chat"
        rightIcon={require("../../../../assets/icons/contact.png")}
        pressRight={() => navigate("Contact")}
      />
      <ChatSearchInput
        color={Colors.defaultBorder}
        icon={require("../../../../assets/icons/search.png")}
        placeholder="Search here..."
      />
      <View style={[flex.flex1]}>
        <ChatList onPress={() => navigate("ChatScreen")} />
      </View>
    </SafeAreaView>
  );
};

export default ChatHome;
