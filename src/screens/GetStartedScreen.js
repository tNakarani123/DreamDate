import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Height, Width } from '../utils/responsive'
import ButtonOneComponent from '../assets/images/ButtonOne'
import RightArrowComponent from '../assets/images/RightArrow'
import FacebookComponent from '../assets/images/Facebook'
import GoogleComponent from '../assets/images/Google'
import AppleComponent from '../assets/images/Apple'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'

const GetStartedScreen = () => {

    const navigation = useNavigation()

    return (
        <SafeAreaView>


            <TouchableOpacity style={{ marginLeft: Width(30), marginTop: Height(50) }} onPress={() => navigation.goBack()}>
                {/* <RightArrowComponent height={Height(16)} width={Width(16)} /> */}
                <Ionicons name='arrow-back' size={Height(30)} color='black' />
            </TouchableOpacity>

            <Text style={{ color: 'black', fontFamily: 'Gilroy-Medium', fontSize: Height(26), fontWeight: '600', textAlign: 'center', marginTop: Height(60) }}>Let's You In</Text>

            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', height: Height(60), width: Width(280), borderWidth: 1, borderColor: '#a9a9a9', borderRadius: Width(20), alignSelf: 'center', justifyContent: 'center', marginTop: Height(30) }}>
                <View>
                    <FacebookComponent width={Width(25)} height={Height(25)} />
                </View>
                <Text style={{ width: Width(75), marginLeft: Width(15), fontSize: Height(16), fontFamily: 'Gilroy-SemiBold', color: 'black' }}>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', height: Height(60), width: Width(280), borderWidth: 1, borderColor: '#a9a9a9', borderRadius: Width(20), alignSelf: 'center', justifyContent: 'center', marginTop: Height(15) }}>
                <View>
                    <GoogleComponent width={Width(25)} height={Height(25)} />
                </View>
                <Text style={{ width: Width(75), marginLeft: Width(15), fontSize: Height(16), fontFamily: 'Gilroy-SemiBold', color: 'black' }}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', height: Height(60), width: Width(280), borderWidth: 1, borderColor: '#a9a9a9', borderRadius: Width(20), alignSelf: 'center', justifyContent: 'center', marginTop: Height(15) }}>
                <View>
                    <AppleComponent width={Width(25)} height={Height(25)} />
                </View>
                <Text style={{ width: Width(75), marginLeft: Width(15), fontSize: Height(16), fontFamily: 'Gilroy-SemiBold', color: 'black' }}>Apple</Text>
            </TouchableOpacity>

            <Text style={{ textAlign: 'center', fontSize: Height(14), fontFamily: 'Gilroy-SemiBold', color: 'black', marginTop: Height(40) }}>Or</Text>

            <LinearGradient colors={['#075790', '#8041C6']} style={{ height: Height(60), width: Width(280), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', marginTop: Height(40) }}
                start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }} useAngle={true}
                angle={145}
                angleCenter={{ x: 0.1, y: 0.1 }}>
                <TouchableOpacity
                    style={{
                        height: Height(60), width: Width(280), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', alignItems: 'center'
                    }}
                    onPress={() => navigation.navigate('SignIn')}>
                    {/* <ButtonOneComponent height={Height(60)} width={Width(280)} /> */}
                    <Text style={{ fontWeight: '500', fontSize: Height(18), color: 'white', position: 'absolute', fontFamily: 'Gilroy-SemiBold', }}>
                        SignIn with Password
                    </Text>
                </TouchableOpacity>
            </LinearGradient>

            <Text style={{ textAlign: 'center', fontSize: Height(14), fontFamily: 'Gilroy-SemiBold', color: 'black', marginTop: Height(120) }}>Don't Have An Account? <Text style={{ color: '#8041C6' }} onPress={() => navigation.navigate('SignUp')}>Sign up</Text></Text>

        </SafeAreaView>
    )
}

export default GetStartedScreen

const styles = StyleSheet.create({})