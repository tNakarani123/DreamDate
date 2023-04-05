import { SafeAreaView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import RightArrowComponent from '../assets/images/RightArrow'
import { Height, Width } from '../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

const SecurityScreen = () => {
    const navigation = useNavigation()

    const security = [
        {
            id: 1,
            text: 'Remember Me',
            toggle: false
        },
        {
            id: 2,
            text: 'Face ID',
            toggle: false
        },
        {
            id: 3,
            text: 'BioMetric ID',
            toggle: false
        }
    ]


    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [abc, setAbc] = useState(security)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(20), marginLeft: Width(30) }}>
                <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
                    <RightArrowComponent height={Height(16)} width={Width(16)} />
                </TouchableOpacity>
                <Text style={{ fontSize: Height(20), marginLeft: Width(30), fontFamily: 'Gilroy-SemiBold', color: '#8041C6' }}>Security</Text>
            </View>
            {
                abc.map((word, i, wordArray) =>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(30), marginTop: Height(30) }}>
                        <Text style={{ fontSize: Height(16), fontFamily: 'Gilroy-SemiBold', color: 'black' }}>{word.text}</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#8041C6' }}
                            thumbColor={isEnabled ? '#FFFFFF' : '#f4f3f4'}
                            ios_backgroundColor="#ABABAB"
                            onValueChange={(toggleValue) => {
                                wordArray[i].toggle = toggleValue;
                                setIsEnabled({ words: wordArray });
                            }}
                            value={word.toggle}
                        />
                    </View>
                )
            }

            <LinearGradient colors={['#075790', '#8041C6']} style={{ height: Height(60), width: Width(315), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', marginTop: Height(30) }}
                start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }} useAngle={true}
                angle={145}
                angleCenter={{ x: 0.1, y: 0.1 }}>

                <TouchableOpacity
                    style={{
                        height: Height(60), width: Width(230), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', alignItems: 'center',
                    }}
                >

                    <Text style={{ fontWeight: '500', fontSize: Height(18), color: 'white', position: 'absolute', fontFamily: 'Gilroy-SemiBold' }}>
                        Change Pin
                    </Text>
                </TouchableOpacity>
            </LinearGradient>
            <LinearGradient colors={['#075790', '#8041C6']} style={{ height: Height(60), width: Width(315), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', marginTop: Height(30) }}
                start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }} useAngle={true}
                angle={145}
                angleCenter={{ x: 0.1, y: 0.1 }}>

                <TouchableOpacity
                    style={{
                        height: Height(60), width: Width(230), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', alignItems: 'center',
                    }}
                >

                    <Text style={{ fontWeight: '500', fontSize: Height(18), color: 'white', position: 'absolute', fontFamily: 'Gilroy-SemiBold' }}>
                        Change Password
                    </Text>
                </TouchableOpacity>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default SecurityScreen

const styles = StyleSheet.create({})