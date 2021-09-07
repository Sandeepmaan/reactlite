import React from "react";
import { FlatList, StyleSheet } from "react-native";
import AllContactListCard from "./AllContactListCard";

const AllContactList = (props) => {

  const data = ([
    { title: "Robert", time: "+91 000-000-0000" },
    { title: "Millar", time: "+91 000-000-0000" },
    { title: "Alex", time: "+91 000-000-0000" },
    { title: "Steve", time: "+91 000-000-0000" },
    { title: "Kelly", time: "+91 000-000-0000" },
    { title: "Trudi", time: "+91 000-000-0000" },
    { title: "Danian", time: "+91 000-000-0000" },
  ]);

  return (
    <FlatList
      data={data}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => "key" + index}
      renderItem={({ item, index }) => (
        <AllContactListCard
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

export default AllContactList;
