import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import RightArrowComponent from '../assets/images/RightArrow'
import { Height, Width } from '../utils/responsive'
import PrimeComponent from '../assets/images/Prime'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

const SubscriptionScreen = () => {

    const navigation = useNavigation()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableOpacity style={{ marginTop: Height(20), marginLeft: Width(30) }} onPress={() => navigation.goBack()}>
                <RightArrowComponent height={Height(16)} width={Width(16)} />
            </TouchableOpacity>
            <Text style={{ fontSize: Height(32), fontFamily: 'Gilroy-Bold', color: '#8041C6', textAlign: 'center', marginTop: Height(40) }}>Subscription</Text>
            <Text style={{ textAlign: 'center', marginHorizontal: Width(65), fontSize: Height(14), fontFamily: 'Gilroy-SemiBold', color: 'rgba(0, 0, 0, 0.6)', marginTop: Height(20) }}>
                Enjoy Unlimited Swiping & Like,
                Without Restrictions, & Without Ads
            </Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={{ height: Height(280), width: Width(315), borderWidth: 1.5, borderColor: '#8041C6', borderRadius: Width(40), alignSelf: 'center', marginTop: Height(30) }} onPress={() => navigation.navigate('ChoosePayment', { data: 6.99 })}>
                    <View style={{ alignSelf: 'center', marginTop: Height(20) }}>
                        <PrimeComponent width={Width(66)} height={Height(44)} />
                    </View>
                    <Text style={{ fontSize: Height(24), color: 'black', fontFamily: 'Gilroy-SemiBold', textAlign: 'center', marginTop: Height(10) }}>$6.99 <Text style={{ fontSize: Height(14), color: 'rgba(0, 0, 0, 0.6)' }}>/Month</Text></Text>
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
                </TouchableOpacity>
                <TouchableOpacity style={{ height: Height(280), width: Width(315), borderWidth: 1.5, borderColor: '#8041C6', borderRadius: Width(40), alignSelf: 'center', marginTop: Height(30) }} onPress={() => navigation.navigate('ChoosePayment', { data: 29.99 })}>
                    <View style={{ alignSelf: 'center', marginTop: Height(20) }}>
                        <PrimeComponent width={Width(66)} height={Height(44)} />
                    </View>
                    <Text style={{ fontSize: Height(24), color: 'black', fontFamily: 'Gilroy-SemiBold', textAlign: 'center', marginTop: Height(10) }}>$29.99 <Text style={{ fontSize: Height(14), color: 'rgba(0, 0, 0, 0.6)' }}>/Month</Text></Text>
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
                </TouchableOpacity>
            </ScrollView>

        </SafeAreaView>
    )
}

export default SubscriptionScreen