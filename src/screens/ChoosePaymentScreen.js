import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import RightArrowComponent from '../assets/images/RightArrow'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Height, Width } from '../utils/responsive'
import ScanComponent from '../assets/images/Scan'
import PaypalComponent from '../assets/images/Paypal'
import GoogleComponent from '../assets/images/Google'
import AppleComponent from '../assets/images/Apple'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MastercardComponent from '../assets/images/Mastercard'
import GooglepayComponent from '../assets/images/Googlepay'
import ApplepayComponent from '../assets/images/Applepay'
import LinearGradient from 'react-native-linear-gradient'

const ChoosePaymentScreen = () => {
    const navigation = useNavigation()

    const [index, setIndex] = useState(0)
    const data = [
        {
            id: 1,
            name: 'Paypal',
            image: <PaypalComponent size={Height(30)} />,
            icon: 'ios-radio-button-off',
            icon_change: 'ios-radio-button-on'
        },
        {
            id: 2,
            name: 'Google Pay',
            image: <GooglepayComponent size={Height(30)} />,
            icon: 'ios-radio-button-off',
            icon_change: 'ios-radio-button-on'
        },
        {
            id: 3,
            name: 'Apple Pay',
            image: <ApplepayComponent size={Height(30)} />,
            icon: 'ios-radio-button-off',
            icon_change: 'ios-radio-button-on'
        },
        {
            id: 4,
            name: '**** **** **** 4514',
            image: <MastercardComponent height={Height(30)} width={Width(30)} />,
            icon: 'ios-radio-button-off',
            icon_change: 'ios-radio-button-on'
        }
    ]

    const route = useRoute()
    console.log({ prime: route?.params.data });
    const prime = route?.params.data

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(20), marginHorizontal: Width(30), justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
                        <RightArrowComponent height={Height(16)} width={Width(16)} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: Height(20), marginLeft: Width(30), fontFamily: 'Gilroy-Bold', color: '#8041C6' }}>Payment</Text>
                </View>
                <ScanComponent size={Height(22)} />
            </View>
            <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: Height(15), marginLeft: Width(30), color: 'rgba(0, 0, 0, 0.6)', marginTop: Height(35) }}>Select the payment method you want to use.</Text>
            <View>
                <FlatList
                    data={data}
                    style={{ marginTop: Height(20), }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', height: Height(70), width: Width(315), backgroundColor: 'white', marginTop: Height(20), alignSelf: 'center', borderRadius: Width(20), justifyContent: 'space-between', paddingHorizontal: Width(30), borderColor: index === item.id ? '#8041C6' : 'white', borderWidth: 1.5 }} onPress={() => setIndex(item.id)}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    {item.image}
                                    <Text style={{ fontSize: Height(18), fontFamily: 'Gilroy-SemiBold', marginLeft: Width(30) }}>{item.name}</Text>
                                </View>
                                <Ionicons name={index === item.id ? item.icon_change : item.icon} size={Height(25)} color='#8041C6' />
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>

            <TouchableOpacity style={{ height: Height(60), width: Width(315), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', alignItems: 'center', borderWidth: 1.5, borderColor: '#8041C6', marginTop: Height(20) }} onPress={() => navigation.navigate('AddNewCard', { data: prime })}>
                <Text style={{ fontSize: Height(18), color: '#8041C6', fontFamily: 'Gilroy-SemiBold', }}>ADD NEW CARD</Text>
            </TouchableOpacity>

            <LinearGradient colors={['#075790', '#8041C6']} style={{ height: Height(60), width: Width(315), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', marginTop: Height(100) }}
                start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }} useAngle={true}
                angle={145}
                angleCenter={{ x: 0.1, y: 0.1 }}>
                <TouchableOpacity
                    style={{
                        height: Height(60), width: Width(315), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', alignItems: 'center'
                    }}
                >
                    <Text style={{ fontSize: Height(18), color: 'white', position: 'absolute', fontFamily: 'Gilroy-SemiBold', }}>
                        Continue
                    </Text>
                </TouchableOpacity>

            </LinearGradient>
        </SafeAreaView>
    )
}

export default ChoosePaymentScreen

const styles = StyleSheet.create({})