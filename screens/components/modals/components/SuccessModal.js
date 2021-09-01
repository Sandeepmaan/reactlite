import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import Styles from "../../../../style/Styles";
import PrimaryButton from "../../buttons/components/PrimaryButton";
import SmallBorderButton from "../../buttons/components/SmallBorderButton";
import ModalStyle from "../../../../style/ModalStyle";

const modal = ModalStyle.modal;
const space = Styles.space;

const SuccessModal = (props) => {
  return (
    <View>
      <PrimaryButton
        buttonName={props.buttonName}
        onPress={props.toggleModal}
      />
      <Modal isVisible={props.isModalVisible}>
        <View style={[modal.modalCard]}>
          <View style={[modal.iconCard, modal.successCard]}>
            <Image
              style={[modal.icon]}
              source={props.icon}
            />
          </View>
          <View style={[modal.contentCard]}>
            <Text style={[modal.content, space.mb2]}>
              {props.content}
            </Text>
            <SmallBorderButton
              buttonName="Done"
              onPress={props.toggleModal}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SuccessModal;
