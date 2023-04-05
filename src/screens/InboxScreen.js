import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import RightArrowComponent from '../assets/images/RightArrow'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import UserListing from '../utils/UserListing'
import { useNavigation } from '@react-navigation/native'

const InboxScreen = () => {

    const navigation = useNavigation()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(20), marginLeft: Width(30) }}>
                <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
                    <RightArrowComponent height={Height(16)} width={Width(16)} />
                </TouchableOpacity>
                <Text style={{ fontSize: Height(20), marginLeft: Width(30), fontFamily: 'Gilroy-SemiBold', color: '#8041C6' }}>Chats</Text>
            </View>



            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', height: Height(50), width: Width(335), alignSelf: 'center', borderRadius: Width(30), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(30), marginTop: Height(20) }}>
                <TextInput
                    placeholder='Search'
                    style={{ height: Height(50), width: Width(240), fontSize: Height(16), fontFamily: 'Gilroy-SemiBold', color: 'black' }}
                    placeholderTextColor='#8E8E93'
                />
                <Ionicons name='md-search-outline' size={Height(22)} color='#8E8E93' />
            </View>

            <UserListing />


        </SafeAreaView>
    )
}

export default InboxScreen

const styles = StyleSheet.create({})