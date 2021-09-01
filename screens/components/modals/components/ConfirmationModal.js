import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import Styles from "../../../../style/Styles";
import PrimaryButton from "../../buttons/components/PrimaryButton";
import Colors from "../../../../style/Colors";
import SmallBorderButton from "../../buttons/components/SmallBorderButton";
import SmallButton from "../../buttons/components/SmallButton";
import ModalStyle from "../../../../style/ModalStyle";

const flex = Styles.flex;
const space = Styles.space;
const modal = ModalStyle.modal;

const ConfirmationModal = (props) => {
  return (
    <View>
      <PrimaryButton
        buttonName={props.buttonName}
        onPress={props.toggleModal}
      />
      <Modal isVisible={props.isModalVisible}>
        <View style={[modal.modalCard]}>
          <View style={[modal.contentCard]}>
            <Text style={[modal.title, space.mb2]}>Are you sure?</Text>
            <Text style={[modal.content, space.mb2, { textAlign: "center" }]}>
              {props.content}
            </Text>
            <View style={[flex.row]}>
              <SmallBorderButton buttonName="Close" onPress={props.toggleModal} />
              <View style={[space.ml1]} />
              <SmallButton style="danger" buttonName="Delete" onPress={props.toggleModal} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default ConfirmationModal;
