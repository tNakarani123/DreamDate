import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import RightArrowComponent from '../assets/images/RightArrow'
import { Height, Width } from '../utils/responsive'
import ResetComponent from '../assets/images/Reset'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ButtonTwoComponent from '../assets/images/ButtonTwo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'
const ResetPasswordScreen = () => {
    const [passwordVisible, setPasswordVisible] = useState(true)
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true)
    const [confirmPassword, setConfirmPassword] = useState([])
    const [password, setPassword] = useState([])
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const navigation = useNavigation()
    const [checked, setChecked] = useState(false)
    const [index, setIndex] = useState(0)

    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/




    const Validation = () => {

        console.log({ password });
        console.log({ confirmPassword });

        var passwordValid = false;
        if (password.length == 0) {
            setPasswordError("Password is required");
        }
        else if (password.length < 6) {
            setPasswordError("Password should be minimum 6 characters");
        }
        else if (password.indexOf(' ') >= 0) {
            setPasswordError('Password cannot contain spaces');
        }
        else {
            setPasswordError("")
            passwordValid = true
        }

        var confirmPasswordValid = false;
        if (password.length == 0) {
            setConfirmPasswordError("Password is required");
        }
        else if (password.length < 6) {
            setConfirmPasswordError("Password should be minimum 6 characters");
        }
        else if (password.indexOf(' ') >= 0) {
            setConfirmPasswordError('Password cannot contain spaces');
        }
        else if (password !== confirmPassword) {
            setConfirmPasswordError("Confirm Password Doesn't match")
        }
        else {
            setConfirmPasswordError("")
            confirmPasswordValid = true
        }

        if (confirmPasswordValid && passwordValid) {
            setConfirmPasswordError("");
            setPassword("");
            navigation.navigate('Congratulations')
        }
    }
    return (
        <SafeAreaView>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(40), marginLeft: Width(30) }}>

                <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
                    <Ionicons name='arrow-back' size={Height(30)} color='black' />
                </TouchableOpacity>
                <Text style={{ fontSize: Height(20), marginLeft: Width(30), fontFamily: 'Gilroy-SemiBold', color: '#8041C6' }}>Reset Password</Text>
            </View>


            <View style={{ alignSelf: 'center', marginTop: Height(60) }}>
                <ResetComponent width={Width(234)} height={Height(204)} />
            </View>
            <Text style={{ color: 'black', fontFamily: 'Gilroy-SemiBold', fontSize: Height(20), fontWeight: '500', marginTop: Height(20), marginLeft: Width(30) }}>Create a new password</Text>

            <Text style={{ color: 'black', fontFamily: 'Gilroy-SemiBold', fontSize: Height(12), marginTop: Height(30), marginLeft: Width(50) }}>Password<Text style={{ color: '#FF115E', }}> *</Text></Text>
            <View style={{ width: Width(315), height: Height(50), alignSelf: 'center', flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, borderRadius: Width(50), borderColor: index === 1 ? '#8041C6' : '#a9a9a9', marginTop: Height(10), }} onStartShouldSetResponder={() => setIndex(1)}>
                <TextInput
                    placeholder='Password'
                    placeholderTextColor='rgba(0, 0, 0, 0.6)'
                    style={{
                        width: Width(280),
                        fontFamily: 'Gilroy-SemiBold',
                        paddingHorizontal: Width(30),
                        fontSize: Height(16),
                    }}
                    secureTextEntry={passwordVisible}
                    onBlur={() => Validation()}
                    onChangeText={(text) => setPassword(text)}
                    onPressIn={() => setIndex(1)}
                    onFocus={() => setIndex(1)}
                />
                <Ionicons name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} color='#666666' size={Height(20)} />
            </View>
            {passwordError.length > 0 &&
                <Text style={{ color: 'red', marginLeft: Width(60), fontSize: Height(11), fontFamily: 'Gilroy-SemiBold' }}>{passwordError}</Text>
            }


            <Text style={{ color: 'black', fontFamily: 'Gilroy-SemiBold', fontSize: Height(12), marginTop: Height(20), marginLeft: Width(50) }}>Confirm Password<Text style={{ color: '#FF115E', }}> *</Text></Text>
            <View style={{ width: Width(315), height: Height(50), alignSelf: 'center', flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, borderRadius: Width(50), borderColor: index === 2 ? '#8041C6' : '#a9a9a9', marginTop: Height(10), }} onStartShouldSetResponder={() => setIndex(2)}>
                <TextInput
                    placeholder='Confirm Password'
                    placeholderTextColor='rgba(0, 0, 0, 0.6)'
                    style={{
                        width: Width(280),
                        fontFamily: 'Gilroy-SemiBold',
                        paddingHorizontal: Width(30),
                        fontSize: Height(16),
                    }}
                    secureTextEntry={confirmPasswordVisible}
                    onBlur={() => Validation()}
                    onChangeText={(text) => setConfirmPassword(text)}
                    onPressIn={() => setIndex(2)}
                    onFocus={() => setIndex(2)}
                />
                <Ionicons name={confirmPasswordVisible ? "eye" : "eye-off"} onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)} color='#666666' size={Height(20)} />
            </View>
            {confirmPasswordError.length > 0 &&
                <Text style={{ color: 'red', marginLeft: Width(60), fontSize: Height(11), fontFamily: 'Gilroy-SemiBold' }}>{confirmPasswordError}</Text>
            }

            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: Height(10) }}>
                <TouchableOpacity onPress={() => setChecked(!checked)}>
                    <MaterialCommunityIcons name={!checked ? 'checkbox-blank-outline' : 'checkbox-marked'} size={Height(27)} color='#8041C6' />
                </TouchableOpacity>
                <Text style={{ color: 'black', fontFamily: 'Gilroy-SemiBold', fontSize: Height(14), marginLeft: Width(10) }}>Remember Me</Text>
            </View>
            <LinearGradient colors={['#075790', '#8041C6']} style={{ height: Height(60), width: Width(315), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', marginTop: Height(30) }}
                start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }} useAngle={true}
                angle={145}
                angleCenter={{ x: 0.1, y: 0.1 }}>
                <TouchableOpacity
                    style={{
                        height: Height(60), width: Width(230), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', alignItems: 'center',
                    }}
                    onPress={Validation}>

                    <Text style={{ fontWeight: '500', fontSize: Height(18), color: 'white', position: 'absolute', fontFamily: 'Gilroy-SemiBold', }}>
                        RESET
                    </Text>
                </TouchableOpacity>
            </LinearGradient>

        </SafeAreaView>
    )
}

export default ResetPasswordScreen

const styles = StyleSheet.create({})