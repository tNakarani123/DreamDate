import { FlatList, Linking, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import RightArrowComponent from '../assets/images/RightArrow'
import { Height, Width } from '../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
const SettingScreen = () => {
    const navigation = useNavigation()
    const data = [
        {
            id: 1,
            name: 'Personal Information',
            background: '#D1BAEA',
            icon: 'account',
            color: '#8041C6',
            nav: 'PersonalInfo'
        },
        {
            id: 2,
            name: 'Discovery Settings',
            background: '#FACDA3',
            icon: 'compass',
            color: '#F47A08',
            nav: 'DiscoverSetting'
        },
        {
            id: 3,
            name: 'Privacy & Permissions',
            background: '#B8C6FD',
            icon: 'lock',
            color: '#3B65F9',
            nav: 'PrivacyPolicy'
        },
        {
            id: 4,
            name: 'Notification',
            background: '#ffcad2',
            icon: 'bell',
            color: '#FF5B73',
            nav: 'Notification'
        },
        {
            id: 5,
            name: 'Security',
            background: '#c2f0dc',
            icon: 'shield-check',
            color: '#13C57D',
            nav: 'Security'
        },
        {
            id: 6,
            name: 'Language',
            background: '#c0e2fb',
            icon: 'text-box',
            color: '#1A96F0',
            nav: 'Language'
        },
        {
            id: 7,
            name: 'About App',
            background: '#cfd8dd',
            icon: 'information-outline',
            color: '#607D8A',
            nav: 'AboutApp'
        }
    ]

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(20), marginLeft: Width(30) }}>
                <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
                    <RightArrowComponent height={Height(16)} width={Width(16)} />
                </TouchableOpacity>
                <Text style={{ fontSize: Height(20), marginLeft: Width(30), fontFamily: 'Gilroy-SemiBold', color: '#8041C6' }}>Settings</Text>
            </View>
            <View>
                <FlatList
                    data={data}
                    scrollEnabled={false}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: Width(30), marginTop: Height(30) }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ height: Height(50), width: Height(50), borderRadius: Height(50) / 2, backgroundColor: item.background, justifyContent: 'center' }}>
                                        <MaterialCommunityIcons name={item.icon} style={{ textAlign: 'center' }} color={item.color} size={Height(25)} />
                                    </View>
                                    <Text style={{ fontSize: Height(17), color: 'black', fontFamily: 'Gilroy-SemiBold', marginLeft: Width(15) }}>{item.name}</Text>
                                </View>
                                <Ionicons name='ios-chevron-forward' size={Height(25)} color='black' onPress={() => navigation.navigate(item.nav)} />
                            </View>
                        )
                    }}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: Width(30), marginTop: Height(30) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ height: Height(50), width: Height(50), borderRadius: Height(50) / 2, backgroundColor: '#fef3c6', justifyContent: 'center' }}>
                        <MaterialCommunityIcons name={'file-document-edit'} style={{ textAlign: 'center' }} color={'#ffca00'} size={Height(25)} />
                    </View>
                    <Text style={{ fontSize: Height(17), color: 'black', fontFamily: 'Gilroy-SemiBold', marginLeft: Width(15) }}>FeedBack</Text>
                </View>
                <Ionicons name='ios-chevron-forward' size={Height(25)} color='black' onPress={() => Linking.openURL('https://example.com/app/customer/order/1234')} />
            </View>
        </SafeAreaView>
    )
}

export default SettingScreen

const styles = StyleSheet.create({})