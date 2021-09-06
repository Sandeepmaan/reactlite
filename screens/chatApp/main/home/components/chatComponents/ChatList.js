import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ChatListCard from "./ChatListCard";

const ChatList = (props) => {

  const data = ([
    { title: "Jazz", detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { title: "Robin", detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { title: "Joe", detail: "Video.." },
    { title: "Nick", detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  ]);

  return (
    <FlatList
      data={data}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => "key" + index}
      renderItem={({ item, index }) => (
        <ChatListCard
          item={item}
          index={index}
          title={item.title}
          detail={item.detail}
          onPress={props.onPress}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default ChatList;
