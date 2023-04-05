import { SafeAreaView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DreamComponent from '../assets/images/Dream'
import { Height, Width } from '../utils/responsive'
import OptionComponent from '../assets/images/Option'
import { Avatar } from 'react-native-paper'
import GetvipComponent from '../assets/images/Getvip'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import EditComponent from '../assets/images/Edit'

const ProfileScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ marginHorizontal: Width(30), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: Height(20) }}>
                <DreamComponent width={Width(143)} height={Height(35)} />
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ marginLeft: Width(20) }} onPress={() => navigation.navigate('Inbox')}>
                        <OptionComponent size={Height(25)} />
                    </TouchableOpacity>
                </View>
            </View>
            <Avatar.Image
                size={Height(120)}
                source={require('../assets/images/user.png')}
                style={{ alignSelf: 'center', marginTop: Height(40) }}
            />
            <TouchableOpacity style={{ position: 'absolute', marginLeft: Width(220), marginTop: Height(230) }} onPress={() => navigation.navigate('ProfileDetail')} >
                <EditComponent height={Height(25)} width={Width(25)} />
            </TouchableOpacity>
            <TouchableOpacity style={{ alignSelf: 'center', marginTop: Height(30) }} onPress={() => navigation.navigate('Subscription')}>
                <GetvipComponent width={Width(355)} height={Height(160)} />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(30) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name='settings-outline' size={Height(25)} />
                    <Text style={{ fontSize: Height(18), fontFamily: 'Gilroy-SemiBold', marginLeft: Width(10) }}>Settings</Text>
                </View>
                <Ionicons name='ios-chevron-forward' size={Height(25)} onPress={() => navigation.navigate('Setting')} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(20) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name='eye' size={Height(25)} />
                    <Text style={{ fontSize: Height(18), fontFamily: 'Gilroy-SemiBold', marginLeft: Width(10) }}>Dark Mode</Text>
                </View>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(20) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name='alert-circle-outline' size={Height(25)} />
                    <Text style={{ fontSize: Height(18), fontFamily: 'Gilroy-SemiBold', marginLeft: Width(10) }}>Help Center</Text>
                </View>
                <Ionicons name='ios-chevron-forward' size={Height(25)} onPress={() => navigation.navigate('HelpCenter')} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(20) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialCommunityIcons name='account-group-outline' size={Height(25)} />
                    <Text style={{ fontSize: Height(18), fontFamily: 'Gilroy-SemiBold', marginLeft: Width(10) }}>Invite Friends</Text>
                </View>
                <Ionicons name='ios-chevron-forward' size={Height(25)} onPress={() => navigation.navigate('InviteFriend')} />
            </View>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: Width(20), marginTop: Height(20) }}>
                <Ionicons name='log-out-outline' size={Height(25)} color='red' />
                <Text style={{ fontSize: Height(18), fontFamily: 'Gilroy-SemiBold', marginLeft: Width(10), color: 'red' }}>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})