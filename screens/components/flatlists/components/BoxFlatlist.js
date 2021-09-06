import React from "react";
import { View, FlatList, StyleSheet, Dimensions } from "react-native";
import Styles from "../../../../style/Styles";
import FlatlistStyle from "../../../../style/FlatlistStyle";
import SquareCard from "../../card/components/CustomCards";

const flatlist = FlatlistStyle.flatlist;
const space = Styles.space;

const BoxFlatlist = (props) => {
  const data = ([
    { title: "Chat" ,onPress: props.onPress1 },
    { title: "Grocery" ,onPress: props.onPress2 },
    { title: "UI Elements" ,onPress: props.onPress3 },
  ]);

  const renderSeparator = ({ item, index }) => (
    <View style={{ height: 10 }} />
  );

  const windowWidth = Dimensions.get("window").width / 2 - 20;

  return (
    <FlatList
      data={data}
      horizontal={false}
      numColumns={2}
      ItemSeparatorComponent={renderSeparator}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => "key" + index}
      renderItem={({ item, index, separators }) => (
        <SquareCard
          item={item}
          index={index}
          length={props.length}
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
