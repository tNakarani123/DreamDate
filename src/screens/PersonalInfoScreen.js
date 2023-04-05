import { Button, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import RightArrowComponent from '../assets/images/RightArrow'
import { useNavigation } from '@react-navigation/native'
import { Height, Width } from '../utils/responsive'
import * as ImagePicker from "react-native-image-picker"
import { Avatar } from 'react-native-paper'
import EditComponent from '../assets/images/Edit'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SelectDropdown from 'react-native-select-dropdown'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'


const PersonalInfoScreen = () => {
    const navigation = useNavigation()
    const [pickerResponse, setPickerResponse] = useState(null);
    const [index, setIndex] = useState(0)

    const chooseFile = () => {
        const options = {
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: true,
            quality: 0.1,
            maxHeight: 500, maxWidth: 500,
            // quality:0.1,mediaType:'photo',
        };
        ImagePicker.launchImageLibrary(options, setPickerResponse);

    };
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.log("A date has been picked: ", date);
        hideDatePicker();
    };

    const profilepic = pickerResponse?.assets && pickerResponse.assets[0].uri;
    const general = ["Male", "Female", "Other"]
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(20), marginLeft: Width(30) }}>
                <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
                    <RightArrowComponent height={Height(16)} width={Width(16)} />
                </TouchableOpacity>
                <Text style={{ fontSize: Height(20), marginLeft: Width(30), fontFamily: 'Gilroy-SemiBold', color: '#8041C6' }}>Personal Information</Text>
            </View>
            <View style={{ alignSelf: 'center', marginTop: Height(40), }}>

                {
                    profilepic ?
                        <Avatar.Image
                            size={Height(100)}
                            source={{
                                uri: profilepic,
                            }}
                        />
                        :
                        <Avatar.Image
                            size={Height(100)}
                            source={require('../assets/images/user.png')}
                        />
                }
                <TouchableOpacity style={{ position: 'absolute', marginLeft: Width(72), marginTop: Height(77) }} onPress={chooseFile}>
                    <EditComponent height={Height(20)} width={Width(20)} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <Text style={{ color: 'black', fontFamily: 'Gilroy-SemiBold', fontSize: Height(12), marginTop: Height(20), marginLeft: Width(50) }}>Full Name<Text style={{ color: '#FF115E', }}> *</Text></Text>
                    <TextInput
                        placeholder='Full Name'
                        placeholderTextColor='rgba(0, 0, 0, 0.6)'
                        style={{
                            alignSelf: 'center',
                            width: Width(315),
                            height: Height(50),
                            fontFamily: 'Gilroy-SemiBold',
                            borderWidth: 1.5,
                            borderRadius: Width(50),
                            paddingHorizontal: Width(30),
                            fontSize: Height(16),
                            marginTop: Height(10),
                            borderColor: index === 1 ? '#8041C6' : '#a9a9a9'
                        }}
                        onFocus={() => setIndex(1)}
                    />
                    <Text style={{ color: 'black', fontFamily: 'Gilroy-SemiBold', fontSize: Height(12), marginTop: Height(10), marginLeft: Width(50) }}>Email<Text style={{ color: '#FF115E', }}> *</Text></Text>
                    <View style={{ width: Width(315), height: Height(50), alignSelf: 'center', flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, borderRadius: Width(50), borderColor: index === 2 ? '#8041C6' : '#a9a9a9', marginTop: Height(10), }} onStartShouldSetResponder={() => setIndex(2)}>
                        <TextInput
                            placeholder='Email'
                            placeholderTextColor='rgba(0, 0, 0, 0.6)'
                            style={{
                                width: Width(280),
                                fontFamily: 'Gilroy-SemiBold',
                                paddingHorizontal: Width(30),
                                fontSize: Height(16),
                            }}
                            onPressIn={() => setIndex(2)}
                            onFocus={() => setIndex(2)}
                        />
                        <Ionicons name={'mail'} color='#666666' size={Height(20)} />
                    </View>
                    <Text style={{ color: 'black', fontFamily: 'Gilroy-SemiBold', fontSize: Height(12), marginTop: Height(10), marginLeft: Width(50) }}>Phone Number<Text style={{ color: '#FF115E', }}> *</Text></Text>
                    <View style={{ width: Width(315), height: Height(50), alignSelf: 'center', flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, borderRadius: Width(50), borderColor: index === 3 ? '#8041C6' : '#a9a9a9', marginTop: Height(10), }} onStartShouldSetResponder={() => setIndex(3)}>
                        <TextInput
                            placeholder='Phone Number'
                            placeholderTextColor='rgba(0, 0, 0, 0.6)'
                            style={{
                                width: Width(280),
                                fontFamily: 'Gilroy-SemiBold',
                                paddingHorizontal: Width(30),
                                fontSize: Height(16),
                            }}

                            onPressIn={() => setIndex(3)}
                            onFocus={() => setIndex(3)}
                            keyboardType='number-pad'
                        />
                        <Ionicons name={'call'} color='#666666' size={Height(20)} />
                    </View>
                    <Text style={{ color: 'black', fontFamily: 'Gilroy-SemiBold', fontSize: Height(12), marginTop: Height(10), marginLeft: Width(50) }}>Gender<Text style={{ color: '#FF115E', }}> *</Text></Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(10), width: Width(312), borderRadius: Width(50), alignSelf: 'center', borderWidth: 1.5, borderColor: index === 4 ? '#8041C6' : '#a9a9a9', }} onStartShouldSetResponder={() => setIndex(4)}>
                        <SelectDropdown
                            data={general}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                            dropdownStyle={{

                                borderRadius: Width(20),
                                width: Width(260),
                                marginLeft: Width(20)
                            }}
                            rowTextStyle={{
                                fontSize: Height(15),
                                textAlign: 'left',
                                fontFamily: 'Gilroy-SemiBold',
                                borderColor: 'black',
                            }}
                            buttonStyle={{
                                borderColor: index === 3 ? '#4D26A5' : 'white',
                                width: Width(300),
                                borderRadius: Width(50),
                                height: Height(50),
                                alignSelf: 'center',
                            }}
                            buttonTextStyle={{
                                fontFamily: 'Gilroy-SemiBold',
                                borderColor: 'black',
                                textAlign: 'left',
                                marginLeft: Width(20),
                                fontSize: Height(15)
                            }}
                            dropdownIconPosition='right'
                            defaultButtonText='Gender'
                            onFocus={() => setIndex(4)}
                            renderDropdownIcon={() => { return (<MaterialCommunityIcons name='menu-down' size={25} color='#666666' />) }}
                        />
                    </View>
                    <Text style={{ color: 'black', fontFamily: 'Gilroy-SemiBold', fontSize: Height(12), marginTop: Height(10), marginLeft: Width(50) }}>Location<Text style={{ color: '#FF115E', }}> *</Text></Text>
                    <View style={{ width: Width(315), height: Height(50), alignSelf: 'center', flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, borderRadius: Width(50), borderColor: index === 5 ? '#8041C6' : '#a9a9a9', marginTop: Height(10), }} onStartShouldSetResponder={() => setIndex(5)}>
                        <TextInput
                            placeholder='Location'
                            placeholderTextColor='rgba(0, 0, 0, 0.6)'
                            style={{
                                width: Width(280),
                                fontFamily: 'Gilroy-SemiBold',
                                paddingHorizontal: Width(30),
                                fontSize: Height(16),
                            }}
                            onPressIn={() => setIndex(5)}
                            onFocus={() => setIndex(5)}
                        />
                        <Ionicons name={'location-sharp'} color='#666666' size={Height(20)} />
                    </View>
                    <Text style={{ color: 'black', fontFamily: 'Gilroy-SemiBold', fontSize: Height(12), marginTop: Height(10), marginLeft: Width(50) }}>Birth Date<Text style={{ color: '#FF115E', }}> *</Text></Text>
                    <TouchableOpacity style={{ height: Height(50), width: Width(315), borderWidth: 1.5, borderColor: index === 6 ? '#8041C6' : '#a9a9a9', alignSelf: 'center', borderRadius: Width(50), flexDirection: 'row', alignItems: 'center', marginTop: Height(10) }} onPress={() => { setIndex(6), showDatePicker() }}>
                        <FontAwesome5 name='calendar' size={Height(20)} color='#666666' style={{ marginLeft: Width(30) }} />
                        <Text style={{ textAlign: 'center', fontFamily: 'Gilroy-SemiBold', fontSize: Height(16), marginLeft: Width(20) }}>Choose Your Birth Date</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                    <Text style={{ color: 'black', fontFamily: 'Gilroy-SemiBold', fontSize: Height(12), marginTop: Height(10), marginLeft: Width(50) }}>Bio<Text style={{ color: '#FF115E', }}> *</Text></Text>
                    <TextInput
                        placeholder='Bio'
                        placeholderTextColor='rgba(0, 0, 0, 0.6)'
                        style={{
                            alignSelf: 'center',
                            width: Width(315),
                            height: Height(50),
                            fontFamily: 'Gilroy-SemiBold',
                            borderWidth: 1.5,
                            borderRadius: Width(50),
                            paddingHorizontal: Width(30),
                            fontSize: Height(16),
                            marginTop: Height(10),
                            borderColor: index === 7 ? '#8041C6' : '#a9a9a9'
                        }}
                        onFocus={() => setIndex(7)}
                    />
                    <LinearGradient colors={['#075790', '#8041C6']} style={{ height: Height(60), width: Width(230), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', marginTop: Height(20) }}
                        start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }} useAngle={true}
                        angle={145}
                        angleCenter={{ x: 0.1, y: 0.1 }}>
                        <TouchableOpacity
                            style={{ height: Height(60), width: Width(230), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => navigation.navigate('AddPhotos')}
                        >
                            <Text style={{ fontWeight: '500', fontSize: Height(18), color: 'white', position: 'absolute', fontFamily: 'Gilroy-SemiBold', textAlign: 'center' }}>
                                Next
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </KeyboardAvoidingView>
            </ScrollView>

        </SafeAreaView>
    )
}

export default PersonalInfoScreen

const styles = StyleSheet.create({
    datePicker: {
        width: Width(315), height: Height(50), alignSelf: 'center',
    },

})