import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import DarkIconCol from "./DarkIconCol";

const DarkIconsList = (props) => {
  const data = ([
    { icon: require("../../../../../../assets/icons/recharge/train.png"), iconText: "Train" },
    { icon: require("../../../../../../assets/icons/recharge/offline.png"), iconText: "Flights" },
    { icon: require("../../../../../../assets/icons/recharge/school-bus.png"), iconText: "Bus" },
    { icon: require("../../../../../../assets/icons/recharge/ship.png"), iconText: "Ferry" },
    { icon: require("../../../../../../assets/icons/recharge/film-reel.png"), iconText: "Movies" },
    { icon: require("../../../../../../assets/icons/recharge/park.png"), iconText: "Park" },
    { icon: require("../../../../../../assets/icons/recharge/healthcare.png"), iconText: "Health" },
    { icon: require("../../../../../../assets/icons/recharge/more.png"), iconText: "More" },
  ]);

  return (
    <FlatList
      data={data}
      horizontal={false}
      numColumns={4}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => "key" + index}
      renderItem={({ item, index, separators }) => (
        <DarkIconCol
          item={item}
          length={data.length}
          index={index}
          title={item.title}
          detail={item.detail}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default DarkIconsList;
