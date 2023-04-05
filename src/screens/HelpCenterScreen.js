import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Height, Width } from '../utils/responsive'
import RightArrowComponent from '../assets/images/RightArrow'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const HelpCenterScreen = () => {
    const navigation = useNavigation()


    const [click, setClick] = useState(false)


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(20), marginLeft: Width(30) }}>
                <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
                    <RightArrowComponent height={Height(16)} width={Width(16)} />
                </TouchableOpacity>
                <Text style={{ fontSize: Height(20), marginLeft: Width(30), fontFamily: 'Gilroy-SemiBold', color: '#8041C6' }}>Help Center</Text>
            </View>


            <View style={{ width: Width(335), height: click ? Height(170) : Height(60), backgroundColor: 'white', alignSelf: 'center', borderRadius: Width(20), paddingHorizontal: Width(20), marginTop: Height(30) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: Height(20) }}>
                    <Text style={{ fontSize: Height(16), fontFamily: 'Gilroy-SemiBold', color: 'black', fontWeight: '600' }}>How To Swipe & Match?</Text>
                    <MaterialCommunityIcons name='chevron-down' size={Height(25)} onPress={() => setClick(!click)} />
                </View>
                {
                    click ?
                        <View>
                            <View style={{ alignSelf: 'center', width: Width(297), height: 1, backgroundColor: 'rgba(0, 0, 0, 0.1)', marginTop: Height(20) }} />
                            <Text style={{ fontSize: Height(13), fontFamily: 'Gilroy-SemiBold', color: 'rgba(0, 0, 0, 0.6)', fontWeight: '600', marginTop: Height(10) }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </Text>
                        </View> : null
                }
            </View>

        </SafeAreaView>
    )
}

export default HelpCenterScreen

const styles = StyleSheet.create({})