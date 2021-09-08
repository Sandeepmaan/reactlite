import React from "react";
import { StyleSheet, View, Dimensions, Pressable, Text, Image } from "react-native";
import { RNCamera } from "react-native-camera";
import Styles from "../../../../style/Styles";

const flex = Styles.flex;
const screen = Styles.screen;
const qrScanner = Styles.qrScanner;
const content = Styles.content;

const QRScanner = (props) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View style={[screen.container]}>
      <RNCamera
        style={[qrScanner.qrScanner, { width: windowWidth, height: windowHeight }]}
        captureAudio={false}
      >
        <View style={[qrScanner.qrOverlay]}>
          <Pressable style={[qrScanner.findScanButton]}>
            <Text style={[content.textLight, content.textColorWhite]}>Find a code to scan</Text>
          </Pressable>
          <View style={[flex.flex1, flex.justifyCenter, flex.alignCenter]}>
            <Image
              style={[qrScanner.qrScanIcon]}
              source={require("../../../../assets/icons/recharge/scan.png")}
            />
          </View>
          <Pressable style={[qrScanner.torchButton]}>
            <Image
              style={[qrScanner.torchIcon]}
              source={require("../../../../assets/icons/recharge/torch.png")}
            />
          </Pressable>
        </View>
      </RNCamera>
    </View>
  );
};


const styles = StyleSheet.create(
  {},
);

export default QRScanner;
