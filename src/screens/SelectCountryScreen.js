import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { country } from '../utils/contry'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ButtonOneComponent from '../assets/images/ButtonOne'
import DropShadow from 'react-native-drop-shadow'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

const SelectCountryScreen = () => {

    const [index, setIndex] = useState(0)
    const [text, setText] = useState('');


    const filterdData = text // based on text, filter data and use filtered data
        ? country.filter(item => {
            const itemData = item.name.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        })
        : country; // on on text, u can return all data


    const navigation = useNavigation()

    return (
        <SafeAreaView>
            <View style={{ width: Width(315), height: Height(50), backgroundColor: '#E9EAEC', alignSelf: 'center', borderRadius: Width(20), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: Height(20) }} >
                <TextInput
                    placeholder='Search here'
                    style={{
                        paddingLeft: Width(30),
                        fontFamily: 'Gilroy-SemiBold',
                        color: 'black',
                        fontSize: Height(16),
                        width: Width(260)
                    }}
                    placeholderTextColor='rgba(0, 0, 0, 0.5)'
                    value={text}
                    onChangeText={text => setText(text)}
                />
                <Ionicons name='md-search-outline' size={Height(22)} style={{ marginRight: Width(20) }} color='rgba(0, 0, 0, 0.5)' />
            </View>


            <FlatList
                data={filterdData}
                style={{ marginBottom: Height(160) }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={{ flexDirection: 'row', width: Width(325), height: Height(100), borderWidth: 1, alignSelf: 'center', borderRadius: Width(30), marginTop: Height(20), alignItems: 'center', justifyContent: 'space-between', borderColor: index === item.id ? '#8041C6' : '#a9a9a9' }} onPress={() => setIndex(item.id)} >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>



                                <Text style={{ fontSize: Height(35), fontFamily: 'Gilroy-SemiBold', textAlign: 'center', marginLeft: Width(20) }}>{item.flag}</Text>


                                <Text style={{ marginLeft: Width(15), color: 'rgba(0, 0, 0, 0.5)', fontSize: Height(16), fontFamily: 'Gilroy-SemiBold', }}>{item.code}</Text>
                                <Text style={{ marginLeft: Width(15), color: 'black', fontSize: Height(16), width: Width(150), fontFamily: 'Gilroy-SemiBold', }}>{item.name}</Text>
                            </View>
                            <View>
                                <Ionicons name={index === item.id ? 'radio-button-on' : 'radio-button-off-sharp'} size={Height(20)} style={{ marginRight: Width(20) }} color='#8041C6' />
                            </View>
                        </TouchableOpacity>
                    )
                }}

            />
            <DropShadow
                style={{
                    shadowColor: "#000000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.17,
                    shadowRadius: 10,
                }}
            >
                <SafeAreaView style={{
                    flex: 1,
                    backgroundColor: 'white',

                    position: 'absolute',
                    bottom: Height(20),
                    width: '100%',
                    height: Height(130),
                    borderTopLeftRadius: Width(20),
                    borderTopRightRadius: Width(20)
                }}>
                    <LinearGradient colors={['#075790', '#8041C6']} style={{ height: Height(60), width: Width(230), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', marginTop: Height(20) }}
                        start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }} useAngle={true}
                        angle={145}
                        angleCenter={{ x: 0.1, y: 0.1 }}>
                        <TouchableOpacity
                            style={{ height: Height(60), width: Width(230), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => navigation.navigate('CreateProfile')}
                        >
                            <Text style={{ fontWeight: '500', fontSize: Height(18), color: 'white', position: 'absolute', fontFamily: 'Gilroy-SemiBold', textAlign: 'center' }}>
                                Next
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </SafeAreaView>
            </DropShadow>




        </SafeAreaView>
    )
}

export default SelectCountryScreen

const styles = StyleSheet.create({})