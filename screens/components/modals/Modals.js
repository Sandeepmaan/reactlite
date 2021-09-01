import React, { useState } from "react";
import { View, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import Styles from "../../../style/Styles";
import Colors from "../../../style/Colors";
import DefaultHeader from "../header/DefaultHeader";
import SuccessModal from "./components/SuccessModal";
import ErrorModal from "./components/ErrorModal";
import ConfirmationModal from "./components/ConfirmationModal";

const screen = Styles.screen;
const space = Styles.space;
const flex = Styles.flex;

const Modals = (props) => {
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);
  const [isErrorModalVisible, setErrorModalVisible] = useState(false);
  const [isConfirmationModalVisible, setConfirmationModalVisible] = useState(false);

  const toggleSuccessModal = () => {
    setSuccessModalVisible(!isSuccessModalVisible);
  };
  const toggleErrorModal = () => {
    setErrorModalVisible(!isErrorModalVisible);
  };
  const toggleConfirmationModal = () => {
    setConfirmationModalVisible(!isConfirmationModalVisible);
  };
  const { navigate } = props.navigation;
  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <SafeAreaView style={[screen.defaultScreen]}>
      <StatusBar backgroundColor={Colors.colorWhite} barStyle="dark-content" />
      <DefaultHeader
        title="Modals"
        goBack={goBack}
      />
      <View style={[space.px15]}>
        <SuccessModal
          buttonName="Success Modal"
          content="Profile has been successfully updated!"
          icon={require('../../../assets/icons/success.png')}
          isModalVisible={isSuccessModalVisible}
          toggleModal={toggleSuccessModal}
        />
        <ErrorModal
          buttonName="Error Modal"
          content="Profile has been successfully updated!"
          icon={require('../../../assets/icons/error.png')}
          isModalVisible={isErrorModalVisible}
          toggleModal={toggleErrorModal}
        />
        <ConfirmationModal
          buttonName="Confirmation Modal"
          content="Do you really want to delete these records? This process cannot be undone ."
          isModalVisible={isConfirmationModalVisible}
          toggleModal={toggleConfirmationModal}
        />
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

export default Modals;
