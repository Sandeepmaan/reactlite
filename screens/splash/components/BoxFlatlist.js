import React from "react";
import { View, FlatList, StyleSheet, Dimensions } from "react-native";
import SquareCard from "../../components/card/components/CustomCards";

const BoxFlatlist = (props) => {
  const data = ([
    { title: "Chat", onPress: props.onPress1 },
    { title: "Quick Charge", onPress: props.onPress2 },
    { title: "Food App Coming Soon...", onPress: props.onPress3 },
    { title: "UI Elements", onPress: props.onPress3 },
  ]);

  const renderSeparator = ({ item, index }) => (
    <View style={{ height: 10 }} />
  );

  const windowWidth = Dimensions.get("window").width / 2 - 25;

  return (
    <FlatList
      data={data}
      columnWrapperStyle={[{ justifyContent: "center" }]}
      horizontal={false}
      numColumns={2}
      ItemSeparatorComponent={renderSeparator}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => "key" + index}
      renderItem={({ item, index, separators }) => (
        <SquareCard
          item={item}
          index={index}
          length={data.length}
          width={windowWidth}
          title={item.title}
          detail={item.detail}
          margin={10}
          onPress={item.onPress}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default BoxFlatlist;
