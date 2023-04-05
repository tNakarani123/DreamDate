import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CongratulationsComponent from '../assets/images/Congratulations'
import { Height, Width } from '../utils/responsive'
import ButtonTwoComponent from '../assets/images/ButtonTwo'
import LinearGradient from 'react-native-linear-gradient'
const CongratulationsScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ alignSelf: 'center', }}>
                <CongratulationsComponent width={Width(292)} height={Height(317)} />
            </View>
            <Text style={{ color: '#8041C6', fontFamily: 'Gilroy-SemiBold', fontSize: Height(26), fontWeight: '500', textAlign: 'center', marginTop: Height(20) }}>Congratulations!</Text>
            <Text style={{ color: 'rgba(0, 0, 0, 0.6)', fontFamily: 'Gilroy-SemiBold', fontSize: Height(14), textAlign: 'center', marginTop: Height(20) }}>Your account is ready to use</Text>

            <LinearGradient colors={['#075790', '#8041C6']} style={{ height: Height(60), width: Width(315), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', marginTop: Height(95) }}
                start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }} useAngle={true}
                angle={145}
                angleCenter={{ x: 0.1, y: 0.1 }}>
                <TouchableOpacity
                    style={{
                        height: Height(60), width: Width(230), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', alignItems: 'center',
                    }}
                >

                    <Text style={{ fontWeight: '500', fontSize: Height(18), color: 'white', position: 'absolute', fontFamily: 'Gilroy-SemiBold', }}>
                        GO TO HOMEPAGE
                    </Text>
                </TouchableOpacity>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default CongratulationsScreen

const styles = StyleSheet.create({})