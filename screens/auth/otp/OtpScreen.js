import React,{useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image, StatusBar, StyleSheet, Alert,KeyboardAvoidingView,TouchableWithoutFeedback,Platform,Keyboard,ImageBackground} from 'react-native';
import Styles from '../../../style/Styles';
import Colors from '../../../style/Colors';
import BlueButton from '../../components/buttons/BlueButton';
import OtpInput from '../../components/input/OtpInput';
import {userService} from '../../../app/services/service-user';
import {setLoginState} from '../../../store/actions/actions-user';
import {useSelector,useDispatch} from 'react-redux';
import DeviceInfo from 'react-native-device-info';
import {Translator} from '../../../helper/Translator';
const flex = Styles.flex;
const content = Styles.content;
const space = Styles.space;

const OtpScreen = (props) => {
    const {navigate} = props.navigation;
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.currentUser);
    const initial = useSelector(state => state.initial);
    const {referral_phone} = useSelector(state => state.appload);
    const [otp,setOtp] = useState('');
    const [loading,setLoading] = useState(false);
    const goBack = () => {
        props.navigation.goBack();
    };

    const submitOtp = () => {
        if(!otp){
            Alert.alert('Invalid OTP', 'OTP is required to continue!');
            return;
        }
        setLoading(true);
        userService.checkOTP({phone:user.phone,otp:otp,referral_phone}).then((data) => {
            dispatch(setLoginState({
                id:data.id,
                name:data.name,
                email:data.email,
                phone:data.phone,
                reference:data.reference,
                address:data.address?data.address.value:'',
                apiToken:data.api_token,
                bio:data.custom_fields.bio?.value,
            }));
            if(data.silent_error) {
                Alert.alert(
                    "Error",
                    data.silent_error,
                    [
                        {
                            text: "Ok",
                            onPress: () => {
                                if (profileComplete(data)) {
                                    navigate('Main');
                                } else {
                                    navigate('EditProfile',{noback:true});
                                }
                            },
                            style: "cancel",
                        },
                    ]
                );
            }
            if(!data.silent_error){
                if(profileComplete(data)){
                    navigate('Main');
                } else {
                    navigate('EditProfile',{noback:true});
                }
            }




            setLoading(false);
        }).catch((err) => {
            Alert.alert('OTP Failed', err.error);
            setLoading(false);
        })
    }

    const profileComplete = (data) => {
        if(!data.email) return false;

        return true;
    }

    const resendOtp = () => {
        userService.checkPhone({phone:user.phone,device_token:initial.device_token,device_id:DeviceInfo.getUniqueId(),app:'customer'}).then((data) => {
            Alert.alert('Otp Sent','An new OTP number has been sent to your mobile number!');
        }).catch((err) => {
            Alert.alert('Login Failed', JSON.stringify(err));
            setLoading(false);
        })
    }

    return (
        <>
        <SafeAreaView style={[flex.flex1, flex.justifySpace,{backgroundColor: Colors.whiteColor}]}>
            <StatusBar backgroundColor={Colors.blueColor} barStyle="light-content"/>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "position" : "position"}  keyboardVerticalOffset={-170}
              style={styles.container}
            >
                    <View style={[ flex.justifyStart, flex.alignStart]}>
                        <View style={[space.pl15, space.mt4]}>
                            <Image style={[styles.logo]}
                                   source={require('../../../assets/icons/rocket-logo.png')}/>
                        </View>
                        {/*<Text style={[content.lightLarge, content.fwSemi,space.mb1, {color:Colors.blueColor}]}>Spacium Store</Text>*/}
                    </View>

                    <View style={[space.px15, space.py2, {backgroundColor: Colors.whiteColor}]}>
                        <View style={[flex.alignStart, space.mb2]}>
                            <View style={[flex.row, flex.alignStart, space.mb4]}>
                                <TouchableOpacity onPress={goBack}>
                                    <Image style={[styles.arrow]} source={require('../../../assets/icons/left-arrow.png')}/>
                                </TouchableOpacity>
                                <View style={[flex.flex1,space.pr15]}>
                                    <Text style={[content.darkLarge]}>{Translator.get("otp_verification")}</Text>
                                    <Text style={[content.darkMedium, content.fwMedium]}>
                                        {Translator.get("otp_enter_otp_line")} ({user.phone})
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <OtpInput handleChange={(input) => setOtp(input)}/>

                        <BlueButton name={Translator.get("otp_verify_otp")} onPress={submitOtp}/>
                        <View style={[flex.justifyCenter, flex.alignCenter, space.mt1, space.px15]}>
                            <Text style={[content.darkMedium, content.fwMedium, {textAlign:'center'}]}>
                                {Translator.get("otp_didnot_recieve")}
                            </Text>
                            <TouchableOpacity onPress={resendOtp} style={[{marginStart: 5}]}>
                                <Text style={[content.blueMedium, content.fwMedium]}>
                                    {Translator.get("otp_resend")}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
            </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        width: 140,
        height: 140,
    },
    arrow: {
        width: 20,
        height: 20,
        top: 6,
        marginEnd: 10,
    },
});

export default OtpScreen;
