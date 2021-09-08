import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ProfileListCard from "./ProfileListCard";

const ProfileList = (props) => {

  const data = ([
    { title: "Account" },
    { title: "Notifications" },
    { title: "Invite Friends" },
    { title: "Help" },
    { title: "Logout" },
  ]);

  return (
    <FlatList
      data={data}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => "key" + index}
      renderItem={({ item, index }) => (
        <ProfileListCard
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

export default ProfileList;
