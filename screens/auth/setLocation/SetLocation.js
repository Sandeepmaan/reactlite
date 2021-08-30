import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView, Alert, View, Text, StatusBar, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Styles from '../../../style/Styles';
import Colors from '../../../style/Colors';
import BlueButton from '../../components/buttons/BlueButton';
import DefaultInput from '../../components/input/DefaultInput';
import MapView, {PROVIDER_GOOGLE, AnimatedRegion, Animated} from 'react-native-maps';
import LocationHeader from '../../components/header/LocationHeader';
import useCurrentLocation from '../../../app/services/service-current-location';
import {useSelector, useDispatch} from 'react-redux';
import {setLocation, setUserAddresses} from '../../../store/actions/actions-user';
import {Translator} from "../../../helper/Translator";
import LocationTags from './locationTags/LocationTags';

const flex = Styles.flex;
const content = Styles.content;
const space = Styles.space;

const SetLocation = (props) => {
    const {
        getPlaceDetails,
        getReverseLocation,
        getMyCurrentLocation
    } = useCurrentLocation();
    const dispatch = useDispatch();
    const {user} = useSelector(state => state);
    const {navigate} = props.navigation;
    const [isMounted, setIsMounted] = useState(false);
    const [loading, setLoadiong] = useState(false);
    const [saving, SetSaving] = useState(false);
    const [description, setDescription] = useState('');
    const location_data = props.route.params.location_data;
    const redirect = props.route.params.redirect;
    const redirect_parameters = props.route.params.redirect_parameters ?? {};
    const refMap = useRef(null);
    const [textAddress, setTextAddress] = useState(location_data.formatted_address);
    const [addressType, setAddressType] = useState('Home');
    const [additionalDetails, setAdditionalDetails] = useState({
        floor: '',
        instructions: '',
        detailed_address: '',
    });
    const [next, setNext] = useState(false);
    const [latlng, setLatLng] = useState({
        lat: location_data.lat ?? '',
        lng: location_data.lng ?? '',
    });

    const [selectedCord, setSelectedCord] = useState({
        lat: null,
        lng: null,
    });

    useEffect(() => {
        if (location_data.type === 'place') {
            getPlaceData(location_data.place_id);
        }

        if (location_data.type === 'latlng') {
            getReverseLocationData(location_data.lat, location_data.lng);
        }
    }, [location_data]);

    useEffect(() => {
        if (latlng.lat && latlng.lng) {
            setIsMounted(true);
        }
    }, [latlng]);


    const getPlaceData = (place_id) => {
        setLoadiong(true);
        getPlaceDetails(place_id)
            .then((data) => {
                setLoadiong(false);
                if (data.status == 'OK') {
                    setTextAddress(data.result.formatted_address);
                    refMap.current ? refMap.current.animateToRegion({
                        latitude: data.result.geometry.location.lat,
                        longitude: data.result.geometry.location.lng,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.035,
                    }) : setLatLng({
                        lat: data.result.geometry.location.lat,
                        lng: data.result.geometry.location.lng,
                    });
                    setSelectedCord({
                        lat: data.result.geometry.location.lat,
                        lng: data.result.geometry.location.lng,
                    });
                }
            });
    }

    const getReverseLocationData = (lat, lng) => {
        setLoadiong(true);
        getReverseLocation(lat, lng)
            .then((data) => {
                setLoadiong(false);
                if (data.results.length > 0) {
                    setTextAddress(data.results[0].formatted_address);
                    setSelectedCord({
                        lat: lat,
                        lng: lng,
                    });
                }
            });
    }

    const getLocation = () => {
        getMyCurrentLocation()
            .then((data) => {
                getReverseLocationData(data.coords.latitude, data.coords.longitude);
                refMap.current.animateToRegion({
                    latitude: data.coords.latitude,
                    longitude: data.coords.longitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.035,
                });
            })
            .catch((err) => {
                if (err.PERMISSION_DENIED) {
                    Alert.alert('Give Permission', 'Please allow location permissions for Spacium Store app by going to Settings > Spacium Store > Location');
                }
            });
    }

    const onDrag = () => {
        setLoadiong(true);
    }

    const onRegionChange = (data) => {

        setLoadiong(false);
        getReverseLocationData(data.latitude, data.longitude);
    }

    const processLocation = () => {
        if (saving) {
            return;
        }
        if (!addressType) {
            Alert.alert('Required Field', 'Please add some description for this location');
            return;
        }

        if (!additionalDetails.detailed_address) {
            Alert.alert('Required Field', 'Please add complete address details!');
            return;
        }

        SetSaving(true);
        dispatch(setLocation({
            description: addressType,
            floor: additionalDetails.floor,
            complete_address: additionalDetails.detailed_address,
            instructions: additionalDetails.instructions,
            address: textAddress,
            addressType: addressType,
            latitude: selectedCord.lat,
            longitude: selectedCord.lng,
            is_default: true,
        })).then((data) => {
            SetSaving(false);
            dispatch(setUserAddresses());
            if (redirect) {
                navigate(redirect, redirect_parameters);
            } else {
                navigate('Main');
            }
        }).catch(err => {
            Alert.alert('Error',err.message);
            SetSaving(false);
        });
    }

    const goBack = () => {
        props.navigation.goBack();
    }

    const selectType = (type) => {
        setAddressType(type);
    }

    return (
        <SafeAreaView style={[flex.flex1, flex.justifySpace]}>
            <StatusBar backgroundColor={'#f7f4ef'} barStyle="dark-content"/>
            <LocationHeader marginHeader={true} navigation={props.navigation} goBack={goBack}/>
            <View style={[flex.flex1, flex.justifyCenter, flex.alignCenter]}>
                {isMounted && <MapView
                    ref={refMap}
                    mapType={'standard'}
                    onPanDrag={onDrag}
                    onMarkerDragStart={() => console.log('dragging')}
                    onMarkerDragEnd={() => console.log('drag ended')}
                    style={[{height: '100%', width: '100%'}]}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        longitude: latlng.lng,
                        latitude: latlng.lat,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.035,
                    }}
                    onRegionChangeComplete={(data) => onRegionChange(data)}
                    showsUserLocation={true}
                >
                </MapView>}
                {
                    <View style={[styles.pinView]}>
                        <Image
                            style={[styles.pin]}
                            source={require('../../../assets/icons/location-pin.png')}
                        />
                    </View>
                }
            </View>

            {!next ?
                <View style={[flex.flex0, space.px15, space.py2, {backgroundColor: Colors.whiteColor,borderTopStartRadius:20,borderTopEndRadius:20}]}>
                    <View style={[space.mb2]}>
                        <Text style={[content.lightMedium]}>{textAddress ? textAddress : 'Loading...'}</Text>
                    </View>
                    <TouchableOpacity onPress={getLocation} style={[space.mb2, flex.row, flex.alignCenter]}>
                        <Image style={[styles.locate, space.mr1]}
                               source={require('../../../assets/icons/currentLocation.png')}/>
                        <Text style={[content.lightMedium]}>{Translator.get('current_location')}</Text>
                    </TouchableOpacity>
                    {user.currentUser?.apiToken ?
                        <BlueButton name={saving ? Translator.get('saving...') : Translator.get('next')}
                                    onPress={() => setNext(true)}/>
                        :
                        <BlueButton name={Translator.get('use_location')} onPress={processLocation}/>
                    }
                </View>
                :
                <View style={[flex.flex0, space.px15, space.py2, {backgroundColor: Colors.whiteColor,borderTopStartRadius:20,borderTopEndRadius:20}]}>
                    <View style={[space.mb2, flex.row,]}>
                        <Text numberOfLines={2}
                              style={[content.lightMedium, flex.flex1, space.pr15]}>{textAddress ? textAddress : 'Loading...'}</Text>
                        <TouchableOpacity
                            onPress={() => setNext(false)} activeOpacity={.9}
                            style={[flex.flex0, flex.justifyCenter, flex.alignCenter,
                                {
                                    borderWidth: 1,
                                    borderColor: Colors.blueColor,
                                    width: 80,
                                    height: 26,
                                    borderRadius: 5,
                                }
                            ]}>
                            <Text style={[content.lightSmall, content.fwHeavy, {color: Colors.blueColor}]}>CHANGE</Text>
                        </TouchableOpacity>
                    </View>
                    <DefaultInput placeholder={'Detailed Address'} onChange={(text) => setAdditionalDetails({
                        ...additionalDetails,
                        detailed_address: text
                    })}/>
                    <DefaultInput placeholder={'Floor (Optional)'}
                                  onChange={(text) => setAdditionalDetails({...additionalDetails, floor: text})}/>
                    <DefaultInput placeholder={'How to reach(Optional)'} onChange={(text) => setAdditionalDetails({
                        ...additionalDetails,
                        instructions: text
                    })}/>
                    <View style={[space.mb2, flex.row, flex.alignCenter]}>
                        <LocationTags types={['Home', 'Work', 'Hotel', 'Others']} selectType={selectType}
                                      selected={addressType}/>
                    </View>
                    {user.currentUser?.apiToken ?
                        <BlueButton
                            name={saving ?
                                Translator.get('saving...')
                                :
                                Translator.get('save_address')}
                            onPress={processLocation}
                        />
                        :
                        <BlueButton
                            name={Translator.get('use_location')}
                            onPress={processLocation}
                        />
                    }
                </View>
            }
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
        width: 18,
        height: 18,
        tintColor: Colors.blueColor
    },
    pinView: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pin: {
        top: -19,
        width: 40,
        height: 40
    }
});

export default SetLocation;
