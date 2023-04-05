import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import RightArrowComponent from '../assets/images/RightArrow'
import { Height, Width } from '../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import EmailPinkComponent from '../assets/images/EmailPink'
import SmsWhiteComponent from '../assets/images/SmsWhite'
import SmsPinkComponent from '../assets/images/SmsPink'
import EmailWhiteComponent from '../assets/images/EmailWhite'
import ButtonComponent from '../assets/images/Button'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
const ForgotPasswordScreen = () => {
    const navigation = useNavigation()


    const [sms, setSms] = useState(false)

    const [email, setEmail] = useState(false)

    const [index, setIndex] = useState(0)


    return (
        <SafeAreaView>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(40), marginLeft: Width(30) }}>
                <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
                    <Ionicons name='arrow-back' size={Height(30)} color='black' />
                </TouchableOpacity>
                <Text style={{ fontSize: Height(20), marginLeft: Width(30), fontFamily: 'Gilroy-SemiBold', color: '#8041C6' }}>Forgot Password</Text>
            </View>

            <Text style={{ width: Width(200), marginLeft: Width(30), fontFamily: 'Gilroy-SemiBold', marginTop: Height(30), fontSize: Height(14), color: 'black', opacity: 0.6 }}>
                Select which contact Details
                Should we use to reset your
                password:
            </Text>






            <TouchableOpacity style={{ borderWidth: 1.5, height: Height(100), width: Width(315), alignSelf: 'center', borderRadius: Width(20), borderColor: index === 1 ? '#8041C6' : '#a9a9a9', marginTop: Height(35) }} onPress={() => { setIndex(1) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', marginLeft: Width(20), marginVertical: Height(20) }}>
                    <View>
                        <SmsPinkComponent height={Height(60)} width={Width(60)} />
                    </View>
                    <View style={{ marginLeft: Width(20) }}>
                        <Text style={{ fontSize: Height(14), fontFamily: 'Gilroy-SemiBold', color: 'black', fontWeight: '500' }}>Via SMS:</Text>
                        <Text style={{ fontSize: Height(14), fontFamily: 'Gilroy-SemiBold', color: 'black', fontWeight: '500' }}>+91 45274 65746</Text>
                    </View>
                </View>
            </TouchableOpacity>




            <TouchableOpacity style={{ borderWidth: 1.5, height: Height(100), width: Width(315), alignSelf: 'center', borderRadius: Width(20), borderColor: index === 2 ? '#8041C6' : '#a9a9a9', marginTop: Height(35) }} onPress={() => { setIndex(2) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', marginLeft: Width(20), marginVertical: Height(20) }}>
                    <View>
                        <EmailPinkComponent height={Height(60)} width={Width(60)} />
                    </View>
                    <View style={{ marginLeft: Width(20) }}>
                        <Text style={{ fontSize: Height(14), fontFamily: 'Gilroy-SemiBold', color: 'black', fontWeight: '500' }}>Via EMAIL:</Text>
                        <Text style={{ fontSize: Height(14), fontFamily: 'Gilroy-SemiBold', color: 'black', fontWeight: '500' }}>ABC@gmail.com</Text>
                    </View>
                </View>
            </TouchableOpacity>


            <LinearGradient colors={['#075790', '#8041C6']} style={{ height: Height(60), width: Width(230), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', marginTop: Height(100) }}
                start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }} useAngle={true}
                angle={145}
                angleCenter={{ x: 0.1, y: 0.1 }}>


                <TouchableOpacity
                    style={{
                        height: Height(60), width: Width(230), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', alignItems: 'center'
                    }}
                    onPress={() => navigation.navigate('VerifyCode')}>
                    <Text style={{ fontWeight: '500', fontSize: Height(18), color: 'white', position: 'absolute', fontFamily: 'Gilroy-SemiBold', }}>
                        Continue
                    </Text>
                </TouchableOpacity>

            </LinearGradient>



        </SafeAreaView>
    )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: Height(100)
    },
})