import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Styles from '../../../../style/Styles';
import Colors from '../../../../style/Colors';

const flex = Styles.flex;
const content = Styles.content;
const space = Styles.space;

const LocationTags = (props) => {
    return (
        <>
            {props.types.length > 0 && props.types.map((item,index) => {
                    return <TouchableOpacity key={index} onPress={() => props.selectType(item)} activeOpacity={.9}
                                      style={[flex.justifyCenter, flex.alignCenter,space.mr1,
                                          props.selected == item && {backgroundColor:Colors.blueColor},
                                          {borderWidth:1, borderColor:Colors.blueColor, paddingHorizontal:10, height:26, borderRadius:5,}]}>
                        <Text style={[content.lightSmall,content.fwHeavy, props.selected == item && {color:Colors.whiteColor},]}>{item}</Text>
                    </TouchableOpacity>;
            })}
        </>
    );
};

const styles = StyleSheet.create({});

export default LocationTags;
