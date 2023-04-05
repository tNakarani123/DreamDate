import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation, useRoute } from '@react-navigation/native'
import PrimeComponent from '../assets/images/Prime'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'
import MastercardComponent from '../assets/images/Mastercard'
import CustomAlert from '../utils/CustomAlert'
import D_ImgComponent from '../assets/images/D_Img'
import PrimecongoComponent from '../assets/images/Primecongo'

const ReviewSummaryScreen = () => {
    const navigation = useNavigation()

    const route = useRoute()
    console.log({ review: route?.params.data });
    const prime = route?.params.data

    const total = prime + 1.99

    const final = total.toPrecision(4)
    const [showDonationSuccessPopup,
        setShowDonationSuccessPopup] = useState(
            false,
        );
    return (
        <SafeAreaView>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(20), marginLeft: Width(30) }}>
                <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
                    <Ionicons name='arrow-back' size={Height(30)} color='black' />
                </TouchableOpacity>
                <Text style={{ fontSize: Height(20), marginLeft: Width(30), fontFamily: 'Gilroy-SemiBold', color: '#8041C6' }}>Review Summary</Text>
            </View>
            <View style={{ height: Height(280), width: Width(315), borderWidth: 1.5, borderColor: '#8041C6', borderRadius: Width(40), alignSelf: 'center', marginTop: Height(30) }} onPress={() => navigation.navigate('ChoosePayment', { data: '6.99' })}>
                <View style={{ alignSelf: 'center', marginTop: Height(20) }}>
                    <PrimeComponent width={Width(66)} height={Height(44)} />
                </View>
                <Text style={{ fontSize: Height(24), color: 'black', fontFamily: 'Gilroy-SemiBold', textAlign: 'center', marginTop: Height(10) }}>${prime}<Text style={{ fontSize: Height(14), color: 'rgba(0, 0, 0, 0.6)' }}>/Month</Text></Text>
                <View style={{ alignSelf: 'center', width: Width(280), height: 1, backgroundColor: 'rgba(0, 0, 0, 0.1)', marginTop: Height(20) }} />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(20) }}>
                    <MaterialCommunityIcons name='check' size={Height(20)} color='#8041C6' style={{ marginLeft: Width(28) }} />
                    <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: Height(15), marginLeft: Width(20) }}>Unlimited Swiping & Likes</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(10) }}>
                    <MaterialCommunityIcons name='check' size={Height(20)} color='#8041C6' style={{ marginLeft: Width(28) }} />
                    <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: Height(15), marginLeft: Width(20) }}>5 Super Likes A Day</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(10) }}>
                    <MaterialCommunityIcons name='check' size={Height(20)} color='#8041C6' style={{ marginLeft: Width(28) }} />
                    <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: Height(15), marginLeft: Width(20) }}>Unlimited Rewinds</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(10) }}>
                    <MaterialCommunityIcons name='check' size={Height(20)} color='#8041C6' style={{ marginLeft: Width(28) }} />
                    <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: Height(15), marginLeft: Width(20) }}>Remove Restrictions & Ads</Text>
                </View>
            </View>
            <View style={{ height: Height(178), width: Width(315), alignSelf: 'center', backgroundColor: 'white', borderRadius: Width(20), marginTop: Height(20) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(30) }}>
                    <Text style={{ fontSize: Height(15), fontFamily: 'Gilroy-SemiBold', color: 'rgba(0, 0, 0, 0.6)' }}>Amount</Text>
                    <Text style={{ fontSize: Height(15), fontFamily: 'Gilroy-SemiBold', color: 'black' }}>$ {prime}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(25) }}>
                    <Text style={{ fontSize: Height(15), fontFamily: 'Gilroy-SemiBold', color: 'rgba(0, 0, 0, 0.6)' }}>Tax</Text>
                    <Text style={{ fontSize: Height(15), fontFamily: 'Gilroy-SemiBold', color: 'black' }}>$ 1.99</Text>
                </View>
                <View style={{ alignSelf: 'center', width: Width(280), height: 1, backgroundColor: 'rgba(0, 0, 0, 0.1)', marginTop: Height(20) }} />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(25) }}>
                    <Text style={{ fontSize: Height(15), fontFamily: 'Gilroy-SemiBold', color: 'rgba(0, 0, 0, 0.6)' }}>total</Text>
                    <Text style={{ fontSize: Height(15), fontFamily: 'Gilroy-SemiBold', color: 'black' }}>$ {final}</Text>
                </View>
            </View>
            <View style={{ height: Height(60), width: Width(315), backgroundColor: 'white', alignSelf: 'center', borderRadius: Width(20), marginTop: Height(20), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(20) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <MastercardComponent height={Height(30)} width={Width(30)} />
                    <Text style={{ fontSize: Height(15), color: 'black', fontFamily: 'Gilroy-SemiBold', marginLeft: Width(10) }}>**** **** **** 4514</Text>
                </View>
                <Text style={{ fontSize: Height(15), color: '#8041C6', fontFamily: 'Gilroy-SemiBold', }}>Change</Text>
            </View>

            <LinearGradient colors={['#075790', '#8041C6']} style={{ height: Height(60), width: Width(315), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', marginTop: Height(40) }}
                start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }} useAngle={true}
                angle={145}
                angleCenter={{ x: 0.1, y: 0.1 }}>
                <TouchableOpacity
                    style={{
                        height: Height(60), width: Width(315), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', alignItems: 'center'
                    }}
                    onPress={() => setShowDonationSuccessPopup(true)}>
                    <Text style={{ fontSize: Height(18), color: 'white', position: 'absolute', fontFamily: 'Gilroy-SemiBold', }}>
                        Continue Payment
                    </Text>
                </TouchableOpacity>
            </LinearGradient>


            <CustomAlert
                displayMode={'Congratulations!'}
                displayMsg={'You have Successfully Subscribed to vIP For 1 month. enjoy the benefits!'}
                visibility={showDonationSuccessPopup}
                dismissAlert={setShowDonationSuccessPopup}
                image={<PrimecongoComponent width={Width(282)} height={Height(171)} />}
            />
        </SafeAreaView>
    )
}

export default ReviewSummaryScreen

const styles = StyleSheet.create({})