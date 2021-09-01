import React from "react";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import Styles from "../../../style/Styles";
import Colors from "../../../style/Colors";
import DefaultHeader from "../header/DefaultHeader";
import DefaultCard from "./components/DefaultCards";
import ProfileCard from "./components/ProfileCards";
import UserProfileCard from "./components/UserProfileCards";
import DefaultButtonCard from "./components/DefaultButtonCards";
import AdvancedCard from "./components/AdvancedCard";

const screen = Styles.screen;
const space = Styles.space;
const content = Styles.content;

const Cards = (props) => {
  const { navigate } = props.navigation;
  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <SafeAreaView style={[screen.defaultScreen]}>
      <StatusBar backgroundColor={Colors.colorWhite} barStyle="dark-content" />
      <DefaultHeader
        title="Cards"
        goBack={goBack}
      />
      <ScrollView style={[space.px15]}>
        <DefaultCard
          title="Default Card"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s"
        />

        <View style={[space.mt1]} />
        <DefaultButtonCard
          title="Default Button Card"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s"
          badge="Badge"
        />

        <View style={[space.mt1]} />
        <AdvancedCard
          icon={require("../../../assets/icons/avatar.png")}
          title="Advanced Card"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s"
          badge="Badge"
        />

        <View style={[space.mt1]} />
        <ProfileCard
          icon={require("../../../assets/icons/avatar.png")}
          title="Profile Card"
        />

        <View style={[space.mt1]} />
        <UserProfileCard
          icon={require("../../../assets/icons/avatar.png")}
          title="User Profile Card"
          rightArrow={require("../../../assets/icons/right-arrow.png")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cards;
