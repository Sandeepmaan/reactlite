import * as React from "react";
import { SafeAreaView, View, StatusBar, Alert } from "react-native";
import Colors from "../../../../style/Colors";
import Styles from "../../../../style/Styles";
import ChatHeader from "../../components/chatHeader/ChatHeader";
import EditChatList from "./components/editChatComponents/EditChatList";

const screen = Styles.screen;
const flex = Styles.flex;

const EditChat = (props) => {
  const { navigate } = props.navigation;
  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <SafeAreaView style={[screen.defaultScreen]}>
      <StatusBar backgroundColor={Colors.colorWhite} barStyle="dark-content" />
      <ChatHeader
        goBack={goBack}
        title="Edit Chat"
        rightIcon={require("../../../../assets/icons/delete.png")}
      />
      <View style={[flex.flex1]}>
        <EditChatList />
      </View>
    </SafeAreaView>
  );
};

export default EditChat;
