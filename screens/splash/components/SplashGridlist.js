import React from "react";
import {View, FlatList, StyleSheet, Dimensions} from "react-native";
import SplashGridListItem from "./SplashGridListItem";
import Colors from "../../../style/Colors";

const SplashGridlist = (props) => {
    const data = ([
        {
            title: "Chat",
            onPress: props.onPress1,
            cardColor: Colors.chatTheme,
            textColor: Colors.colorWhite
        },
        {
            title: "Quick Recharge",
            onPress: props.onPress2,
            cardColor: Colors.rechargeTheme,
            textColor: Colors.colorWhite
        },
        {
            title: "Food App Coming Soon...",
            onPress: props.onPress3,
            cardColor: Colors.primaryLight,
            textColor: Colors.colorBlack,
        },
        {
            title: "UI Elements",
            onPress: props.onPress4,
            cardColor: Colors.themeColor1,
            textColor: Colors.colorWhite
        },
    ]);

    const renderSeparator = ({item, index}) => (
        <View style={{height: 10}}/>
    );

    const windowWidth = Dimensions.get("window").width / 2 - 25;

    return (
        <FlatList
            data={data}
            columnWrapperStyle={[{justifyContent: "center"}]}
            horizontal={false}
            numColumns={2}
            ItemSeparatorComponent={renderSeparator}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => "key" + index}
            renderItem={({item, index, separators}) => (
                <SplashGridListItem
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

export default SplashGridlist;
