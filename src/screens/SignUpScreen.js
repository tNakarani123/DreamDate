import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DropShadow from 'react-native-drop-shadow'
import LogoComponent from '../assets/images/Logo'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ButtonTwoComponent from '../assets/images/ButtonTwo'
import { useNavigation } from '@react-navigation/native'
import FacebookComponent from '../assets/images/Facebook'
import GoogleComponent from '../assets/images/Google'
import LinearGradient from 'react-native-linear-gradient'

const SignInScreen = () => {

    const [passwordVisible, setPasswordVisible] = useState(true)
    const [checked, setChecked] = useState(false)
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const navigation = useNavigation()

    const [index, setIndex] = useState(0)

    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/




    const Validation = () => {
        console.log({ email });
        console.log({ password });
        var emailValid = false;
        if (email.length == 0) {
            setEmailError("Email is required");
        }
        else if (!reg.test(email)) {
            setEmailError("Please enter valid email address");
        }
        else {
            setEmailError("")
            emailValid = true
        }

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
        if (emailValid && passwordValid) {
            setEmail("");
            setPassword("");
        }
    }


    return (
        <SafeAreaView>
            <DropShadow
                style={{
                    shadowColor: "#000000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.17,
                    shadowRadius: 10,
                }}
            >
                <View style={{
                    alignSelf: 'center', marginTop: Height(30),

                }}>
                    <LogoComponent height={Height(114)} width={Width(114)} />
                </View>
            </DropShadow>
            <Text style={{ color: 'black', fontFamily: 'Gilroy-SemiBold', fontSize: Height(26), fontWeight: '500', textAlign: 'center', marginTop: Height(20) }}>Create An Account</Text>

            <Text style={{ color: 'black', fontFamily: 'Gilroy-SemiBold', fontSize: Height(12), marginTop: Height(20), marginLeft: Width(50) }}>Email<Text style={{ color: '#FF115E', }}> *</Text></Text>
            <TextInput
                placeholder='Email'
                placeholderTextColor='rgba(0, 0, 0, 0.6)'
                style={{
                    alignSelf: 'center',
                    width: Width(315),
                    height: Height(50),
                    fontFamily: 'Gilroy-SemiBold',
                    borderWidth: 1.5,
                    borderRadius: Width(50),
                    paddingHorizontal: Width(30),
                    fontSize: Height(16),
                    marginTop: Height(10),
                    borderColor: index === 1 ? '#8041C6' : '#a9a9a9'
                }}
                onBlur={() => Validation()}
                onChangeText={(text) => setEmail(text)}
                keyboardType='email-address'
                onFocus={() => setIndex(1)}
            />
            {emailError.length > 0 &&
                <Text style={{ color: 'red', marginLeft: Width(60), fontSize: Height(11), fontFamily: 'Gilroy-SemiBold' }}>{emailError}</Text>
            }

            <Text style={{ color: 'black', fontFamily: 'Gilroy-SemiBold', fontSize: Height(12), marginTop: Height(10), marginLeft: Width(50) }}>Password<Text style={{ color: '#FF115E', }}> *</Text></Text>
            <View style={{ width: Width(315), height: Height(50), alignSelf: 'center', flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, borderRadius: Width(50), borderColor: index === 2 ? '#8041C6' : '#a9a9a9', marginTop: Height(10), }} onStartShouldSetResponder={() => setIndex(2)}>
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
                    onPressIn={() => setIndex(2)}
                    onFocus={() => setIndex(2)}
                />
                <Ionicons name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} color='#666666' size={Height(20)} />
            </View>
            {passwordError.length > 0 &&
                <Text style={{ color: 'red', marginLeft: Width(60), fontSize: Height(11), fontFamily: 'Gilroy-SemiBold' }}>{passwordError}</Text>
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

                    <Text style={{ fontWeight: '500', fontSize: Height(18), color: 'white', position: 'absolute', fontFamily: 'Gilroy-SemiBold' }}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </LinearGradient>
            <Text style={{ textAlign: 'center', fontSize: Height(14), fontFamily: 'Gilroy-SemiBold', color: 'black', marginTop: Height(20) }}>Or Continue with</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: Width(20), marginTop: Height(20) }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', height: Height(60), width: Width(160), borderWidth: 1, borderColor: '#a9a9a9', borderRadius: Width(20), alignSelf: 'center', justifyContent: 'center', marginTop: Height(15) }}>
                    <View>
                        <FacebookComponent width={Width(25)} height={Height(25)} />
                    </View>
                    <Text style={{ width: Width(75), marginLeft: Width(15), fontSize: Height(16), fontFamily: 'Gilroy-SemiBold', color: 'black' }}>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', height: Height(60), width: Width(160), borderWidth: 1, borderColor: '#a9a9a9', borderRadius: Width(20), alignSelf: 'center', justifyContent: 'center', marginTop: Height(15) }}>
                    <View>
                        <GoogleComponent width={Width(25)} height={Height(25)} />
                    </View>
                    <Text style={{ width: Width(75), marginLeft: Width(15), fontSize: Height(16), fontFamily: 'Gilroy-SemiBold', color: 'black' }}>Google</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ textAlign: 'center', fontSize: Height(14), fontFamily: 'Gilroy-SemiBold', color: 'black', marginTop: Height(30) }}>Already have an Account?<Text style={{ color: '#8041C6' }} onPress={() => navigation.navigate('SignIn')}> Sign in</Text></Text>
        </SafeAreaView>
    )
}

export default SignInScreen

const styles = StyleSheet.create({})