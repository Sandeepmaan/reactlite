import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import EditChatListCard from "./EditChatListCard";

class EditChatList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected:[],
      data:[
        {
          id: "HJD34",
          title: "Jazz",
          detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          id: "HJD35",
          title: "Robin",
          detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        { id: "HJD36", title: "Joe", detail: "Video.." },
        {
          id: "HJD37",
          title: "Nick",
          detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
      ]
    }
  }

  updateSelected = (index) => {
    // console.log('trigger for '+ index);
    let selectedData = this.state.selected;
    if (!selectedData.includes(index)) {
      selectedData.push(index);
      this.setState({selected:selectedData});
      // console.log('selecting '+ index);
    } else if (this.state.selected.includes(index)) {
      // console.log('un selecting '+ index);
      this.setState({ selected: selectedData.filter((item) => item !== index) });
    }
    console.log(this.state.selected);
  };

  render() {

    return (
      <FlatList
        data={this.state.data}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item, index }) => (
          <EditChatListCard
            selectedChats={this.state.selected}
            selectChat={this.updateSelected}
            item={item}
            index={index}
            title={item.title}
            detail={item.detail}
            onPress={this.props.onPress}
          />
        )}
      />
    );
  };
}

const styles = StyleSheet.create({});

export default EditChatList;
