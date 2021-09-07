import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import DefaultCard from "../../card/components/DefaultCards";

const Grid2FlatList = (props) => {
  const data = ([
    { title: "Grid 1" },
    { title: "Grid 2" },
  ]);

  const renderSeparator = ({ item, index }) => (
    <View style={{ width: 10, height: 10 }} />
  );

  return (
    <FlatList
      data={data}
      horizontal={false}
      numColumns={2}
      ItemSeparatorComponent={renderSeparator}
      showsVerticalScrollIndicator={false}
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

export default Grid2FlatList;
