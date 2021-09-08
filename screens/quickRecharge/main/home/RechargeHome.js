import * as React from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import Colors from "../../../../style/Colors";
import Styles from "../../../../style/Styles";
import TopContainer from "./components/iconsContainer/TopContainer";
import DarkIconsList from "./components/iconsContainer/DarkIconsList";
import SectionHeading from "../../../components/sectionHeading/SectionHeading";
import RecentRechargeList from "./components/recentRecharge/RecentRechargeList";

const screen = Styles.screen;
const flex = Styles.flex;
const space = Styles.space;

const RechargeHome = (props) => {
  const { navigate } = props.navigation;
  return (
    <SafeAreaView style={[screen.defaultScreen]}>
      <StatusBar backgroundColor={Colors.rechargeTheme} barStyle="light-content" />
      <View style={[flex.flex1]}>
        <TopContainer
          navigate={navigate}
        />

        <View style={[space.pt1]}>
          <DarkIconsList />
        </View>

        <View style={[flex.flex1]}>
          <SectionHeading
            heading="Recent Recharge"
          />
          <RecentRechargeList />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RechargeHome;
