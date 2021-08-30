import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useFocusEffect} from "@react-navigation/native";
import {Alert, View, Text, Image, StyleSheet, BackHandler} from 'react-native';
import Home from '../screens/chatApp/home/Home';
import Colors from '../style/Colors';
import Styles from '../style/Styles';
import Profile from '../screens/chatApp/profile/Profile';
import Cart from '../screens/chatApp/cart/Cart';
import {useDispatch, useSelector} from 'react-redux';
import {Translator} from '../helper/Translator';
import Orders from '../screens/chatApp/orders/Orders';
import {navigate} from "../rootNavigator";
import {
    filterActive
} from '../store/actions/actions-filter';
import {useEffect} from "react";
import useCurrentLocation from "../app/services/service-current-location";
import {setLocation} from "../store/actions/actions-user";
import EasyHome from "../screens/chatApp/home/EasyHome";

const flex = Styles.flex;
const content = Styles.content;
const space = Styles.space;
const screen = Styles.screen;

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({navigation, route}) {
    navigation.setOptions({headerTitle: getHeaderTitle(route)});
    const {cart, filter,user} = useSelector(state => state);
    const {getMyCurrentLocation,getReverseLocation} = useCurrentLocation();
    const dispatch = useDispatch();

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                if (filterActive(filter)) {
                    return false;
                } else {
                    Alert.alert(Translator.get('wait!'), Translator.get('are_you_sure'), [
                        {
                            text: "Cancel",
                            onPress: () => null,
                            style: "cancel"
                        },
                        {text: "YES", onPress: () => BackHandler.exitApp()}
                    ]);
                }

                return true;
            };

            BackHandler.addEventListener("hardwareBackPress", onBackPress);
            return () =>
                BackHandler.removeEventListener("hardwareBackPress", onBackPress);

        }, []));

    useEffect(() => {
        if(!user.selectedLocation){
            getMyCurrentLocation().then((data) => {
                getReverseLocation(data.coords.latitude,data.coords.longitude)
                    .then((res) => {
                        if (res.results.length > 0) {
                            dispatch(setLocation({
                                description: 'Home',
                                floor: '',
                                complete_address: '',
                                instructions: '',
                                address:  res.results[0].formatted_address,
                                addressType: 'Home',
                                latitude: data.coords.latitude,
                                longitude: data.coords.longitude,
                                is_default: true,
                            }))
                        }
                    });
            })
        }
    },[]);

    return (
        <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <BottomTab.Screen
                name="Home"
                component={EasyHome}
                options={{
                    title: '',
                    tabBarIcon: ({focused, tintColor}) => (
                        focused ?
                            <View style={[styles.activeTab]}>
                                <Image
                                    source={require('../assets/new/green-store.png')}
                                    style={[styles.icon]}
                                />
                                <Text
                                    style={[content.blueSmall, content.fwMedium]}>{Translator.get("menu_store")}</Text>
                            </View>
                            :
                            <View style={[styles.inActiveTab]}>
                                <Image
                                    source={require('../assets/new/dark-store.png')}
                                    style={[styles.icon]}
                                />
                                <Text
                                    style={[content.darkSmall, content.fwMedium]}>{Translator.get("menu_store")}</Text>
                            </View>
                    ),
                    tabStyle: {
                        labelStyle: {
                            fontSize: 20,
                        },
                    },
                }}
            />

            <BottomTab.Screen
                name="Orders"
                component={Orders}
                options={{
                    title: '',
                    tabBarIcon: ({focused, tintColor}) => (
                        focused ?
                            <View style={[styles.activeTab]}>
                                <Image
                                    source={require('../assets/new/green-bag.png')}
                                    style={[styles.icon]}
                                />
                                <Text
                                    style={[content.blueSmall, content.fwMedium]}>{Translator.get("profile_my_orders")}</Text>
                            </View>
                            :
                            <View style={[styles.inActiveTab]}>
                                <Image
                                    source={require('../assets/new/dark-bag.png')}
                                    style={[styles.icon]}
                                />
                                <Text
                                    style={[content.darkSmall, content.fwMedium]}>{Translator.get("profile_my_orders")}</Text>
                            </View>
                    ),
                    tabBarOptions: {
                        activeTintColor: '#ddd',
                        labelStyle: {
                            fontSize: 12,
                        },
                    },
                }}
            />

            <BottomTab.Screen
                name="Cart"
                component={Cart}
                options={{
                    title: '',
                    tabBarIcon: ({focused, tintColor}) => (
                        focused ?
                            <View style={[styles.activeTab]}>
                                {cart.items.length > 0 && <View style={[styles.count]}>
                                    <Text style={[content.blueSmall, {
                                        color: Colors.whiteColor,
                                        fontSize: 8
                                    }]}>{cart.items.length}</Text>
                                </View>}
                                <Image
                                    source={require('../assets/new/green-cart.png')}
                                    style={[styles.icon]}
                                />
                                <Text style={[content.blueSmall, content.fwMedium]}>{Translator.get("cart_cart")}</Text>
                            </View>
                            :
                            <View style={[styles.inActiveTab]}>
                                {cart.items.length > 0 && <View style={[styles.count, {backgroundColor: "#868686"}]}>
                                    <Text style={[content.blueSmall, {
                                        color: Colors.whiteColor,
                                        fontSize: 8
                                    }]}>{cart.items.length}</Text>
                                </View>}
                                <Image
                                    source={require('../assets/new/dark-cart.png')}
                                    style={[styles.icon]}
                                />
                                <Text style={[content.darkSmall, content.fwMedium]}>{Translator.get("cart_cart")}</Text>
                            </View>
                    ),
                    tabBarOptions: {
                        activeTintColor: '#ddd',
                        labelStyle: {
                            fontSize: 12,
                        },
                    },
                }}
            />

            <BottomTab.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: '',
                    tabBarIcon: ({focused, tintColor}) => (
                        focused ?
                            <View style={[styles.activeTab]}>
                                <Image
                                    source={require('../assets/new/green-profile.png')}
                                    style={[styles.icon]}
                                />
                                <Text style={[content.blueSmall, content.fwMedium]}>{Translator.get("menu_me")}</Text>
                            </View>
                            :
                            <View style={[styles.inActiveTab]}>
                                <Image
                                    source={require('../assets/new/dark-profile.png')}
                                    style={[styles.icon]}
                                />
                                <Text style={[content.darkSmall, content.fwMedium]}>{Translator.get("menu_me")}</Text>
                            </View>
                    ),
                    tabBarOptions: {
                        activeTintColor: '#ddd',
                        labelStyle: {
                            fontSize: 12,
                        },
                    },
                }}
            />

        </BottomTab.Navigator>
    );
}

function getHeaderTitle(route) {
    const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

    switch (routeName) {
        case 'Home':
            return 'How to get started';
        case 'Links':
            return 'Links to learn more';
    }
}

const styles = StyleSheet.create({
    activeTab: {
        backgroundColor: Colors.whiteColor,
        position: 'absolute',
        left: 0,
        top: -5,
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: 'rgba(233,233,233,0.46)',
        borderTopWidth: 2,
    },
    activeBorder: {
        width: 40,
        height: 4,
        backgroundColor: Colors.blueColor,
        borderBottomStartRadius: 4,
        borderBottomEndRadius: 4,
        top: -8,
    },
    inActiveBorder: {
        width: 40,
        height: 4,
        backgroundColor: Colors.whiteColor,
        borderBottomStartRadius: 4,
        borderBottomEndRadius: 4,
        top: -8,
    },
    inActiveTab: {
        backgroundColor: Colors.whiteColor,
        position: 'absolute',
        left: 0,
        top: -5,
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: 'rgba(233,233,233,0.46)',
        borderTopWidth: 2,
    },
    icon: {
        width: 20,
        height: 20,
        marginBottom: 4,
    },
    count: {
        position: 'absolute',
        right: 22,
        top: 4,
        width: 16,
        height: 16,
        backgroundColor: Colors.blueColor,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
