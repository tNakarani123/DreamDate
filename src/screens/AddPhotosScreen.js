import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import RightArrowComponent from '../assets/images/RightArrow'
import { Height, Width } from '../utils/responsive'
import AddBtnComponent from '../assets/images/AddBtn'
import * as ImagePicker from "react-native-image-picker"
import ButtonTwoComponent from '../assets/images/ButtonTwo'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

const AddPhotosScreen = () => {

    const navigation = useNavigation()

    const [one, setOne] = useState(null)
    const [two, setTwo] = useState(null)
    const [three, setThree] = useState(null)
    const [four, setFour] = useState(null)

    const chooseFileOne = () => {
        const options = {
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: true,
            quality: 0.1,
            maxHeight: 500, maxWidth: 500,
        };
        ImagePicker.launchImageLibrary(options, setOne);


    };
    const picker = one?.assets && one.assets[0].uri;


    const chooseFileTwo = () => {
        const options = {
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: true,
            quality: 0.1,
            maxHeight: 500, maxWidth: 500,
        };
        ImagePicker.launchImageLibrary(options, setTwo)


    };


    const picker1 = two?.assets && two.assets[0].uri;



    const chooseFileThree = () => {
        const options = {
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: true,
            quality: 0.1,
            maxHeight: 500, maxWidth: 500,
        };
        ImagePicker.launchImageLibrary(options, setThree)


    };


    const picker2 = three?.assets && three.assets[0].uri;


    const chooseFileFour = () => {
        const options = {
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: true,
            quality: 0.1,
            maxHeight: 500, maxWidth: 500,
        };
        ImagePicker.launchImageLibrary(options, setFour)


    };


    const picker3 = four?.assets && four.assets[0].uri;




    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(20), marginLeft: Width(30) }}>
                <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
                    <RightArrowComponent height={Height(16)} width={Width(16)} />
                </TouchableOpacity>
                <Text style={{ fontSize: Height(20), marginLeft: Width(30), fontFamily: 'Gilroy-SemiBold', color: '#8041C6' }}>Add Your Best Photos</Text>
            </View>
            <Text style={{ marginHorizontal: Width(30), fontFamily: 'Gilroy-SemiBold', color: 'black', fontSize: Height(16), marginTop: Height(30) }}>
                Add your best photo to get a higher amount
                of daily matches.
            </Text>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: Width(30), marginTop: Height(30) }}>
                <View style={{ height: Height(200), width: Width(144), borderWidth: 1, borderRadius: Width(20), borderStyle: 'dashed', borderColor: '#8041C6', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={chooseFileOne}>
                        {
                            picker ?
                                <Image
                                    source={{
                                        uri: picker,
                                    }}
                                    style={{
                                        height: Height(200), width: Width(144),
                                        borderRadius: Width(20),
                                        resizeMode: 'cover'
                                    }}
                                />
                                :
                                <AddBtnComponent height={Height(45)} width={Width(45)} />
                        }
                    </TouchableOpacity>
                </View>

                <View style={{ height: Height(200), width: Width(144), borderWidth: 1, borderRadius: Width(20), borderStyle: 'dashed', borderColor: '#8041C6', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={chooseFileTwo}>
                        {
                            picker1 ?
                                <Image
                                    source={{
                                        uri: picker1,
                                    }}
                                    style={{
                                        height: Height(200), width: Width(144),
                                        borderRadius: Width(20),
                                        resizeMode: 'cover'
                                    }}
                                />
                                :
                                <AddBtnComponent height={Height(45)} width={Width(45)} />
                        }
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: Width(30), marginTop: Height(30) }}>
                <View style={{ height: Height(200), width: Width(144), borderWidth: 1, borderRadius: Width(20), borderStyle: 'dashed', borderColor: '#8041C6', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={chooseFileThree}>
                        {
                            picker2 ?
                                <Image
                                    source={{
                                        uri: picker2,
                                    }}
                                    style={{
                                        height: Height(200), width: Width(144),
                                        borderRadius: Width(20),
                                        resizeMode: 'cover'
                                    }}
                                />
                                :
                                <AddBtnComponent height={Height(45)} width={Width(45)} />
                        }
                    </TouchableOpacity>
                </View>
                <View style={{ height: Height(200), width: Width(144), borderWidth: 1, borderRadius: Width(20), borderStyle: 'dashed', borderColor: '#8041C6', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={chooseFileFour}>
                        {
                            picker3 ?
                                <Image
                                    source={{
                                        uri: picker3,
                                    }}
                                    style={{
                                        height: Height(200), width: Width(144),
                                        borderRadius: Width(20),
                                        resizeMode: 'cover'
                                    }}
                                />
                                :
                                <AddBtnComponent height={Height(45)} width={Width(45)} />
                        }
                    </TouchableOpacity>
                </View>
            </View>

            <LinearGradient colors={['#075790', '#8041C6']} style={{ height: Height(60), width: Width(230), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', marginTop: Height(50) }}
                start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }} useAngle={true}
                angle={145}
                angleCenter={{ x: 0.1, y: 0.1 }}>
                <TouchableOpacity
                    style={{ height: Height(60), width: Width(230), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => navigation.navigate('SelectInterest', { screen: 'EditProfile', data: picker, data1: picker1, data2: picker2, data3: picker3 })}
                >
                    <Text style={{ fontWeight: '500', fontSize: Height(18), color: 'white', position: 'absolute', fontFamily: 'Gilroy-SemiBold', textAlign: 'center' }}>
                        Next
                    </Text>
                </TouchableOpacity>
            </LinearGradient>


        </SafeAreaView>
    )
}

export default AddPhotosScreen

const styles = StyleSheet.create({})