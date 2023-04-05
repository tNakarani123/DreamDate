import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import RightArrowComponent from '../assets/images/RightArrow'
import { Height, Width } from '../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import LoveComponent from '../assets/images/Love'
import FriendComponent from '../assets/images/Friend'
import FlingComponent from '../assets/images/Fling'
import BusinessComponent from '../assets/images/Business'
import ButtonTwoComponent from '../assets/images/ButtonTwo'
import CustomAlert from '../utils/CustomAlert'
import LinearGradient from 'react-native-linear-gradient'
import DialogComponent from '../assets/images/Dialog'
import D_ImgComponent from '../assets/images/D_Img'

const IdealMatchScreen = () => {
    const navigation = useNavigation()
    const [index, setIndex] = useState(0)
    const [showDonationSuccessPopup,
        setShowDonationSuccessPopup] = useState(
            false,
        );

    const data = [
        {
            id: 1,
            img: <LoveComponent size={Height(70)} />,
            name: 'Love'
        },
        {
            id: 2,
            img: <FriendComponent size={Height(70)} />,
            name: 'Friends'
        },
        {
            id: 3,
            img: <FlingComponent size={Height(70)} />,
            name: 'Fling'
        },
        {
            id: 4,
            img: <BusinessComponent size={Height(70)} />,
            name: 'Busniess'
        }
    ]

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(20), marginLeft: Width(30) }}>
                <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
                    <RightArrowComponent height={Height(16)} width={Width(16)} />
                </TouchableOpacity>
                <Text style={{ fontSize: Height(20), marginLeft: Width(30), fontFamily: 'Gilroy-SemiBold', color: '#8041C6' }}>Ideal Match</Text>
            </View>
            <Text style={{ marginHorizontal: Width(30), fontFamily: 'Gilroy-SemiBold', color: 'black', fontSize: Height(16), marginTop: Height(30) }}>
                what are you hoping to find on kencan dating
                app?
            </Text>

            <FlatList
                data={data}
                numColumns={2}
                key={2}
                scrollEnabled={false}
                style={{ alignSelf: 'center', marginTop: Height(20) }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={{ height: Height(160), width: Width(160), borderWidth: 1.5, marginHorizontal: Width(10), marginVertical: Height(10), borderRadius: Width(20), justifyContent: 'center', alignItems: 'center', borderColor: index === item.id ? '#8041C6' : '#a9a9a9' }} onPress={() => setIndex(item.id)}>


                            {item.img}
                            <Text style={{ fontSize: Height(20), fontFamily: 'Gilroy-SemiBold', color: 'black', marginTop: Height(10) }}>{item.name}</Text>

                        </TouchableOpacity>
                    )
                }}
            />


            <LinearGradient colors={['#075790', '#8041C6']} style={{ height: Height(60), width: Width(230), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', marginTop: Height(20), }}
                start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }} useAngle={true}
                angle={145}
                angleCenter={{ x: 0.1, y: 0.1 }}>


                <TouchableOpacity
                    style={{
                        height: Height(60), width: Width(230), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', alignItems: 'center',
                    }}
                    onPress={() => setShowDonationSuccessPopup(true)}>
                    <Text style={{ fontWeight: '500', fontSize: Height(18), color: 'white', position: 'absolute', fontFamily: 'Gilroy-SemiBold', }}>
                        Next
                    </Text>
                </TouchableOpacity>

            </LinearGradient>
            <CustomAlert
                displayMode={'Great!'}
                displayMsg={'Your account has been Created Successfully!'}
                visibility={showDonationSuccessPopup}
                dismissAlert={setShowDonationSuccessPopup}
                image={<D_ImgComponent width={Width(282)} height={Height(171)} />}
            />

        </SafeAreaView>
    )
}

export default IdealMatchScreen

const styles = StyleSheet.create({})