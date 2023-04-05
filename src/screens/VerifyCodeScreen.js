import React from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { OTP } from 'react-native-otp-form';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Height, Width } from '../utils/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons'

import LinearGradient from 'react-native-linear-gradient';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const VerifyCodeScreen = () => {
    const navigation = useNavigation()



    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(40), marginLeft: Width(30) }}>

                    <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
                        <Ionicons name='arrow-back' size={Height(30)} color='black' />
                    </TouchableOpacity>
                    <Text style={{ fontSize: Height(20), marginLeft: Width(30), fontFamily: 'Gilroy-SemiBold', color: '#8041C6' }}>Forgot Password</Text>
                </View>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <Text style={styles.header}>Code has been send to +91 63******07</Text>
                        <OTP
                            codeCount={4}
                            containerStyle={{
                                borderColor: "red"
                            }}
                            otpStyles={{
                                backgroundColor: '#FAFAFA',
                                color: 'black',
                                marginBottom: Height(1),
                                borderColor: "#8041C6",
                                borderWidth: 1,
                                borderRadius: Width(20),

                            }}
                        />
                        <Text style={{ textAlign: "center", color: 'black', fontFamily: 'Gilroy-SemiBold', }}>Resend code in 1 m</Text>
                        <View style={styles.btnContainer}>
                            <LinearGradient colors={['#075790', '#8041C6']} style={{ height: Height(60), width: Width(230), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', marginTop: Height(100) }}
                                start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }} useAngle={true}
                                angle={145}
                                angleCenter={{ x: 0.1, y: 0.1 }}>
                                <TouchableOpacity
                                    style={{
                                        height: Height(60), width: Width(230), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', alignItems: 'center'
                                    }}
                                    onPress={() => navigation.navigate('ResetPassword')}>
                                    <Text style={{ fontWeight: '500', fontSize: Height(18), color: 'white', position: 'absolute', fontFamily: 'Gilroy-SemiBold', }}>
                                        Continue
                                    </Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    inner: {
        flex: 1,
        justifyContent: "space-evenly"
    },
    header: {
        fontSize: RFValue(17),
        textAlign: "center",
        marginTop: Height(7),
        color: 'black',
        fontFamily: 'Gilroy-SemiBold',
        opacity: 0.4
    },
    textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36
    },

});

export default VerifyCodeScreen;