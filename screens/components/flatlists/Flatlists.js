import React from "react";
import { SafeAreaView, View, StyleSheet, StatusBar, Text } from "react-native";
import Styles from "../../../style/Styles";
import Colors from "../../../style/Colors";
import DefaultHeader from "../header/DefaultHeader";
import ListFlatlist from "./components/ListFlatlist";
import Grid2FlatList from "./components/Grid2Flatlist";
import Grid3FlatList from "./components/Grid3Flatlist";
import HorizontalFlatList from "./components/HorizontalFlatlist";

const screen = Styles.screen;
const space = Styles.space;
const content = Styles.content;

const Flatlists = (props) => {
  const { navigate } = props.navigation;
  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <SafeAreaView style={[screen.defaultScreen]}>
      <StatusBar backgroundColor={Colors.colorWhite} barStyle="dark-content" />
      <DefaultHeader
        title="Flatlists"
        goBack={goBack}
      />
      <View style={[space.px15]}>
        <ListFlatlist />
        <Grid2FlatList/>
        <Grid3FlatList/>
        <HorizontalFlatList/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Flatlists;
