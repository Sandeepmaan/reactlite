import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import RecentRechargeListCard from "./RecentRechargeListCard";

const RecentRechargeList = (props) => {

  const data = ([
    { title: "Amazon", time:"10:10, 20-10-2021"},
    { title: "Flipcart", time:"10:10, 20-10-2021"},
    { title: "Paytm", time:"10:10, 20-10-2021"},
    { title: "GPay", time:"10:10, 20-10-2021"},
    { title: "Phonepe", time:"10:10, 20-10-2021"},
  ]);

  return (
    <FlatList
      data={data}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => "key" + index}
      renderItem={({ item, index }) => (
        <RecentRechargeListCard
          item={item}
          index={index}
          title={item.title}
          detail={item.detail}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default RecentRechargeList;
