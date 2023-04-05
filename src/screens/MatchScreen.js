import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Height, Width } from '../utils/responsive'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import RightArrowComponent from '../assets/images/RightArrow';
import LinearGradient from 'react-native-linear-gradient';
const MatchScreen = () => {


    const route = useRoute()
    console.log(route?.params.data);

    const [fill, setFill] = useState(100)
    const navigation = useNavigation()

    return (
        <SafeAreaView>

            <TouchableOpacity style={{ marginTop: Height(40), marginLeft: Width(30) }} onPress={() => navigation.goBack()}>
                <RightArrowComponent height={Height(16)} width={Width(16)} />
            </TouchableOpacity>

            <Image source={require('../assets/images/heart.png')} style={{ alignSelf: 'center', height: Height(79.85), width: Width(291.29), marginTop: Height(50) }} />
            <View style={{ justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Image source={route?.params.data.image} style={{
                        width: Width(150),
                        height: Width(150),
                        borderRadius: Width(150) / 2,
                        overflow: "hidden",
                        borderWidth: 5,
                        borderColor: "#8041C6"
                    }} />
                    <Image source={route?.params.data.image} style={{
                        width: Width(150),
                        height: Width(150),
                        borderRadius: Width(150) / 2,
                        overflow: "hidden",
                        borderWidth: 5,
                        borderColor: "#8041C6",
                    }} />
                </View>

                <AnimatedCircularProgress
                    size={Height(70)}
                    width={Height(4)}
                    fill={fill}
                    tintColor="#8041C6"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="white"
                    lineCap='square'
                    children={() => { return (<Text style={{ color: 'black', fontSize: Height(15), fontFamily: 'Gilroy-SemiBold' }}>{fill}%</Text>) }}
                    padding={Height(10)}
                    style={{
                        backgroundColor: 'white',
                        position: 'absolute',
                        borderRadius: Height(70) / 2,
                        alignSelf: 'center'
                    }}
                />
            </View>
            <Image source={require('../assets/images/heart1.png')} style={{ alignSelf: 'center', height: Height(79.85), width: Width(291.29) }} />
            <Text style={{ textAlign: 'center', color: '#8041C6', fontFamily: 'Gilroy-SemiBold', fontSize: Height(40), marginTop: Height(20) }}>It’s a Match</Text>
            <Text style={{ textAlign: 'center', color: 'black', fontFamily: 'Gilroy-SemiBold', fontSize: Height(16) }}>Don’t keep her waiting, say hello Now!</Text>

            <LinearGradient colors={['#075790', '#8041C6']} style={{ height: Height(60), width: Width(315), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', marginTop: Height(40) }}
                start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }} useAngle={true}
                angle={145}
                angleCenter={{ x: 0.1, y: 0.1 }}>
                <TouchableOpacity
                    style={{
                        height: Height(60), width: Width(315), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', alignItems: 'center'
                    }}
                >
                    <Text style={{ fontWeight: '500', fontSize: Height(18), color: 'white', position: 'absolute', fontFamily: 'Gilroy-SemiBold', }}>
                        Say Hello
                    </Text>
                </TouchableOpacity>
            </LinearGradient>
            <LinearGradient colors={['rgba(7, 87, 144, 0.2)', 'rgba(128, 65, 198, 0.2)']} style={{ height: Height(60), width: Width(315), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', marginTop: Height(20) }}
                start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }} useAngle={true}
                angle={145}
                angleCenter={{ x: 0.1, y: 0.1 }}>
                <TouchableOpacity
                    style={{
                        height: Height(60), width: Width(315), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', alignItems: 'center'
                    }}
                >
                    <Text style={{ fontWeight: '500', fontSize: Height(18), color: '#8041C6', position: 'absolute', fontFamily: 'Gilroy-SemiBold', }}>
                        Keep Swiping
                    </Text>
                </TouchableOpacity>
            </LinearGradient>

        </SafeAreaView>
    )
}

export default MatchScreen

const styles = StyleSheet.create({})