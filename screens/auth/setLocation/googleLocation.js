import React from 'react';
import {SafeAreaView, Alert,View, StyleSheet, TouchableOpacity, Text, Image, StatusBar} from 'react-native';
import Styles from '../../../style/Styles';
import Colors from '../../../style/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
navigator.geolocation = require('@react-native-community/geolocation');
// navigator.geolocation = require('@react-native-community/geolocation');
// navigator.geolocation = require('react-native-geolocation-service');
const screen = Styles.screen;
const flex = Styles.flex;
const content = Styles.content;
const space = Styles.space;
const googleLocation = (props) => {
    const {navigate} = props.navigation;
  return (
    <SafeAreaView style={[screen.container, flex.justifyCenter, space.px15]}>
    <GooglePlacesAutocomplete
      placeholder='Search Location'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
            navigate('SetLocation',{location_data:details});
      }}
      onFail={(err) => console.log(err)}
      fetchDetails={true}
      autoFocus={true}
      nearbyPlacesAPI='GooglePlacesSearch'
      query={{
        key: 'AIzaSyD2vSMnKnPqJ2Fefy_8cU_V2O7IeDDRAfc',
        language: 'en',
      }}
      enablePoweredByContainer={false}
      currentLocation={true}
      currentLocationLabel={
        <View style={[space.mb2, flex.row, flex.alignCenter]}>
            <Image style={[styles.locate, space.mr1]} source={require('../../../assets/icons/currentLocation.png')}/>
            <Text style={[content.darkMedium]}>Current Location</Text>
        </View>
      }
    />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    logo: {
        width: 260,
        height: 66,
    },
    arrow: {
        width: 20,
        height: 20,
        marginEnd: 10,
    },
    locate: {
        width: 30,
        height: 30,
        tintColor:Colors.blueColor
    },
    
});
 
export default googleLocation;
