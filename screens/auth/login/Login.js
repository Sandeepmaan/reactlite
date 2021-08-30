import React, { useState } from "react";
import { SafeAreaView, View, Text, StatusBar, StyleSheet } from "react-native";
import Styles from "../../../style/Styles";
import Colors from "../../../style/Colors";

const flex = Styles.flex;
const content = Styles.content;
const space = Styles.space;
const screen = Styles.screen;

const Login = (props) => {
  const { navigate } = props.navigation;
  return (
    <SafeAreaView style={[flex.flex1]}>
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.colorWhite} barStyle="light-content" />
        <View>
          <View style={[flex.alignStart, space.mt1]}>
            <Text>dsvfderkjv</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 140,
    height: 140,
  },
  overlay: {
    backgroundColor: "rgba(255,0,0,0.5)",
  },
});

export default Login;
