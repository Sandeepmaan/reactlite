import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import LightIconCol from "./LightIconCol";

const LightIconsList = (props) => {
  const data = ([
    {
      icon: require("../../../../../../assets/icons/recharge/smartphone.png"),
      iconText: "Recharges",
      navigate: () => props.navigate("PhoneRecharge"),
    },
    { icon: require("../../../../../../assets/icons/recharge/bill.png"), iconText: "Pay Bills" },
    { icon: require("../../../../../../assets/icons/recharge/money.png"), iconText: "Cash Out" },
    { icon: require("../../../../../../assets/icons/recharge/send.png"),
      iconText: "Send Money",
      navigate: () => props.navigate("SendMoney"),
    },
  ]);

  return (
    <FlatList
      data={data}
      horizontal={false}
      numColumns={4}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => "key" + index}
      renderItem={({ item, index, separators }) => (
        <LightIconCol
          item={item}
          length={data.length}
          index={index}
          title={item.title}
          detail={item.detail}
          navigate={item.navigate}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default LightIconsList;
