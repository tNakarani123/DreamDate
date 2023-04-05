import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Height, Width } from '../utils/responsive'
import RightArrowComponent from '../assets/images/RightArrow'
import { useNavigation, useRoute } from '@react-navigation/native'
import EditImageComponent from '../assets/images/EditImage'
import PhotoComponent from '../assets/images/Photo'
import ArchitectureComponent from '../assets/images/Architecture'
import FashionComponent from '../assets/images/Fashion'
import BookComponent from '../assets/images/Book'
import WriteComponent from '../assets/images/Write'
import LinearGradient from 'react-native-linear-gradient'

const EditProfileScreen = () => {
    const navigation = useNavigation()

    const route = useRoute()
    console.log({ route });

    const data = [
        {
            id: 1,
            image: require('../assets/images/1.jpg')
        },
        {
            id: 2,
            image: require('../assets/images/2.jpg')
        },
        {
            id: 3,
            image: require('../assets/images/3.jpg')
        },
        {
            id: 4,
            image: require('../assets/images/4.jpg')
        }
    ]

    const interest = [
        {
            id: 1,
            name: 'Photography',
            img: <PhotoComponent size={Height(17)} />
        },
        {
            id: 2,
            name: 'Architecture',
            img: <ArchitectureComponent size={Height(17)} />
        },
        {
            id: 3,
            name: 'Fashion',
            img: <FashionComponent size={Height(17)} />
        },
        {
            id: 4,
            name: 'Book',
            img: <BookComponent size={Height(17)} />
        },
        {
            id: 5,
            name: 'Writing',
            img: <WriteComponent size={Height(17)} />
        }
    ]


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(20), marginLeft: Width(30) }}>
                <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
                    <RightArrowComponent height={Height(16)} width={Width(16)} />
                </TouchableOpacity>
                <Text style={{ fontSize: Height(20), marginLeft: Width(30), fontFamily: 'Gilroy-SemiBold', color: '#8041C6' }}>Edit Profile</Text>
            </View>
            <Text style={{ fontSize: Height(16), color: 'black', fontFamily: 'Gilroy-SemiBold', marginLeft: Width(30), marginTop: Height(30) }}>Your Best Photos</Text>

            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {data.map((e) => {
                        return (
                            <View>
                                <Image source={e.image} style={{ height: Height(160), width: Width(110), marginLeft: Width(20), borderRadius: Width(20), marginTop: Height(24) }} />
                                <TouchableOpacity style={{ position: 'absolute', marginTop: Height(150), marginLeft: Width(100) }}>
                                    <EditImageComponent size={Height(20)} color='white' />
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>

            <View style={{ marginHorizontal: Width(30), marginTop: Height(30), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: Height(16), color: 'black', fontFamily: 'Gilroy-SemiBold', }}>Your Interest</Text>
                <TouchableOpacity>
                    <EditImageComponent size={Height(20)} color='#8041C6' />
                </TouchableOpacity>
            </View>

            <View>
                <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: Height(5), }}>
                    {
                        interest.map((item, k) => {
                            return (
                                <LinearGradient colors={['#075790', '#8041C6']} style={{ flexDirection: 'row', alignItems: 'center', borderRadius: Width(50), marginLeft: Width(20), marginTop: Height(7), paddingVertical: Height(8), paddingHorizontal: Width(15) }}
                                    start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }} useAngle={true}
                                    angle={145}
                                    angleCenter={{ x: 0.1, y: 0.1 }}>
                                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }} key={k} >
                                        {item.img}
                                        <Text style={{ fontSize: Height(15), fontFamily: 'Gilroy-SemiBold', color: 'white', marginLeft: Width(5) }}>{item.name}</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            )
                        })
                    }
                </ScrollView>
            </View>

            <Text style={{ fontSize: Height(16), color: 'black', fontFamily: 'Gilroy-SemiBold', marginLeft: Width(30), marginTop: Height(30) }}>Your Profile</Text>

            <View style={{ height: Height(50), width: Width(315), backgroundColor: 'white', justifyContent: 'center', alignSelf: 'center', borderRadius: Width(10), marginTop: Height(20) }}>
                <Text style={{ fontSize: Height(16), color: 'black', fontFamily: 'Gilroy-SemiBold', marginLeft: Width(30), }}>Full Name</Text>
            </View>
            <View style={{ height: Height(50), width: Width(315), backgroundColor: 'white', justifyContent: 'center', alignSelf: 'center', borderRadius: Width(10), marginTop: Height(20) }}>
                <Text style={{ fontSize: Height(16), color: 'black', fontFamily: 'Gilroy-SemiBold', marginLeft: Width(30), }}>Professional</Text>
            </View>
            <View style={{ height: Height(50), width: Width(315), backgroundColor: 'white', justifyContent: 'center', alignSelf: 'center', borderRadius: Width(10), marginTop: Height(20) }}>
                <Text style={{ fontSize: Height(16), color: 'black', fontFamily: 'Gilroy-SemiBold', marginLeft: Width(30), }}>Bio</Text>
            </View>

        </SafeAreaView>
    )
}

export default EditProfileScreen

const styles = StyleSheet.create({})