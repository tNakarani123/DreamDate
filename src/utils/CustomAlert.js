import React, { useState } from 'react';

import { Modal, Text, View, TouchableOpacity } from 'react-native';

import DialogComponent from '../assets/images/Dialog';
import { Height, Width } from './responsive';
import D_ImgComponent from '../assets/images/D_Img';
import { useNavigation } from '@react-navigation/native';

const CustomAlert = ({
    displayMode,
    displayMsg,
    visibility,
    dismissAlert,
    onPress,
    image
}) => {
    const navigation = useNavigation()

    return (
        <View>
            <Modal
                visible={visibility}
                animationType={'fade'}
                transparent={true}

            >

                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(52, 52, 52, 0.8)',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <View
                        style={{
                            alignItems: 'center',
                            height: Height(400),
                            width: Width(315),
                        }}>
                        <DialogComponent height={Height(400)} width={Width(315)} />

                        <View style={{ position: 'absolute' }}>

                            {/* <D_ImgComponent width={Width(282)} height={Height(171)} /> */}
                            {image}
                            <Text style={{ color: 'white', marginTop: Height(10), fontSize: Height(20), fontFamily: 'Gilroy-SemiBold', marginHorizontal: Width(30), textAlign: 'center' }}>
                                {displayMode}
                            </Text>
                            <Text style={{ color: 'white', marginTop: Height(10), fontSize: Height(20), fontFamily: 'Gilroy-SemiBold', marginHorizontal: Width(30), textAlign: 'center', opacity: 0.5 }}>
                                {displayMsg}
                            </Text>
                            <TouchableOpacity style={{ height: Height(60), width: Width(230), backgroundColor: 'white', alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', marginTop: Height(20) }} onPress={() => { navigation.navigate('Tab'), dismissAlert(false) }}>

                                <Text style={{ textAlign: 'center', fontFamily: 'Gilroy-SemiBold', fontSize: Height(20), color: '#414CAA', }}>Go to Home</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default CustomAlert