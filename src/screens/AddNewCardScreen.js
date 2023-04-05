import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import RightArrowComponent from '../assets/images/RightArrow'
import ScanComponent from '../assets/images/Scan'
import { Height, Width } from '../utils/responsive'
import CardComponent from '../assets/images/Card'
import { useNavigation, useRoute } from '@react-navigation/native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import LinearGradient from 'react-native-linear-gradient'

const AddNewCardScreen = () => {
    const navigation = useNavigation()
    const [index, setIndex] = useState(0)
    const route = useRoute()
    console.log({ AddCardPrime: route?.params.data });
    const prime = route?.params.data
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(20), marginHorizontal: Width(30), justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
                        <RightArrowComponent height={Height(16)} width={Width(16)} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: Height(20), marginLeft: Width(30), fontFamily: 'Gilroy-Bold', color: '#8041C6' }}>Add New Card</Text>
                </View>
                <ScanComponent size={Height(22)} />
            </View>
            <View style={{ alignSelf: 'center', marginTop: Height(30) }}>
                <CardComponent width={Width(335)} height={Height(208)} />
            </View>
            <View style={{ alignSelf: 'center', width: Width(320), height: 1, backgroundColor: 'rgba(0, 0, 0, 0.1)', marginTop: Height(20) }} />
            <Text style={{ fontSize: Height(16), marginLeft: Width(30), fontFamily: 'Gilroy-Semibold', color: 'black', marginTop: Height(20) }}>Card Name<Text style={{ color: 'red' }}> *</Text></Text>
            <TextInput
                placeholder='Andrew Ainsley'
                style={{
                    width: Width(315),
                    height: Height(60),
                    borderWidth: 1.5,
                    alignSelf: 'center',
                    borderRadius: Width(50),
                    fontFamily: 'Gilroy-Semibold',
                    fontSize: Height(16),
                    borderColor: index === 1 ? '#8041C6' : '#a9a9a9',
                    paddingHorizontal: Width(30),
                    marginTop: Height(10)
                }}
                onPressIn={() => setIndex(1)}
            />
            <Text style={{ fontSize: Height(16), marginLeft: Width(30), fontFamily: 'Gilroy-Semibold', color: 'black', marginTop: Height(20) }}>Card Number<Text style={{ color: 'red' }}> *</Text></Text>
            <TextInput
                placeholder='4654 4654 5455 5555'
                style={{
                    width: Width(315),
                    height: Height(60),
                    borderWidth: 1.5,
                    alignSelf: 'center',
                    borderRadius: Width(50),
                    fontFamily: 'Gilroy-Semibold',
                    fontSize: Height(16),
                    borderColor: index === 2 ? '#8041C6' : '#a9a9a9',
                    paddingHorizontal: Width(30),
                    marginTop: Height(10)
                }}
                onPressIn={() => setIndex(2)}
            />

            <View style={{ marginHorizontal: Width(30), marginTop: Height(20), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ fontSize: Height(16), fontFamily: 'Gilroy-Semibold', color: 'black', }}>Expiry Date<Text style={{ color: 'red' }}> *</Text></Text>
                    <View style={{
                        height: Height(60), width: Width(200), borderWidth: 1.5,
                        borderRadius: Width(50),
                        borderColor: index === 3 ? '#8041C6' : '#a9a9a9',
                        marginTop: Height(10),
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <TextInput
                            placeholder='09/05/25'
                            style={{
                                width: Width(160),
                                height: Height(60),
                                fontFamily: 'Gilroy-Semibold',
                                fontSize: Height(16),
                                paddingHorizontal: Width(30),

                            }}
                            onPressIn={() => setIndex(3)}
                            keyboardType='decimal-pad'
                        />
                        <EvilIcons name='calendar' size={Height(25)} color='#a9a9a9' />
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: Height(16), fontFamily: 'Gilroy-Semibold', color: 'black', }}>CVV<Text style={{ color: 'red' }}> *</Text></Text>
                    <TextInput
                        placeholder='699'
                        style={{
                            height: Height(60), width: Width(100), borderWidth: 1.5,
                            borderRadius: Width(50),
                            borderColor: index === 4 ? '#8041C6' : '#a9a9a9',
                            marginTop: Height(10),
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: Width(30),
                        }}
                        onPressIn={() => setIndex(4)}
                        keyboardType='decimal-pad'
                    />
                </View>


            </View>

            <LinearGradient colors={['#075790', '#8041C6']} style={{ height: Height(60), width: Width(315), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', marginTop: Height(30) }}
                start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }} useAngle={true}
                angle={145}
                angleCenter={{ x: 0.1, y: 0.1 }}>

                <TouchableOpacity
                    style={{
                        height: Height(60), width: Width(230), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', alignItems: 'center',
                    }}
                    onPress={() => navigation.navigate('ReviewSummary', { data: prime })}>
                    <Text style={{ fontWeight: '500', fontSize: Height(18), color: 'white', position: 'absolute', fontFamily: 'Gilroy-SemiBold' }}>
                        ADD
                    </Text>
                </TouchableOpacity>
            </LinearGradient>

        </SafeAreaView>
    )
}

export default AddNewCardScreen

const styles = StyleSheet.create({})