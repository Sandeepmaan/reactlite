import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ContactListCard from "./ContactListCard";

const ContactList = (props) => {

  const data = ([
    { title: "+91 000 000 0000"},
    { title: "+91 000 000 0000"},
    { title: "+91 000 000 0000"},
    { title: "+91 000 000 0000"},
  ]);

  return (
    <FlatList
      data={data}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => "key" + index}
      renderItem={({ item, index }) => (
        <ContactListCard
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

export default ContactList;
