import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Styles from "../../../../style/Styles";
import FlatlistStyle from "../../../../style/FlatlistStyle";
import DefaultCard from "../../card/components/DefaultCards";

const flatlist = FlatlistStyle.flatlist;
const space = Styles.space;

const ListFlatlist = (props) => {
  const data = ([
    { title: "title", detail: "Detail" },
  ]);

  return (
    <FlatList
      data={data}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => "key" + index}
      renderItem={({ item, index }) => (
        <DefaultCard
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

export default ListFlatlist;
