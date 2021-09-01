import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Styles from "../../../../style/Styles";
import FlatlistStyle from "../../../../style/FlatlistStyle";
import DefaultCard from "../../card/components/DefaultCards";

const flatlist = FlatlistStyle.flatlist;
const space = Styles.space;

const HorizontalFlatList = (props) => {
  const data = ([
    { title: "Grid 1" },
    { title: "Grid 2" },
    { title: "Grid 3" },
    { title: "Grid 4" },
    { title: "Grid 5" },
    { title: "Grid 6" },
    { title: "Grid 7" },
    { title: "Grid 8" },
  ]);

  const renderSeparator = ({ item, index }) => (
    <View style={{ width: 10, height: 10 }} />
  );

  return (
    <FlatList
      data={data}
      horizontal={true}
      ItemSeparatorComponent={renderSeparator}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => "key" + index}
      renderItem={({ item, index, separators }) => (
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

export default HorizontalFlatList;
