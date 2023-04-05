import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Height, Width } from '../utils/responsive'
import MessageComponent from '../assets/images/Message'
import PhotoComponent from '../assets/images/Photo'
import ArchitectureComponent from '../assets/images/Architecture'
import FashionComponent from '../assets/images/Fashion'
import BookComponent from '../assets/images/Book'
import WriteComponent from '../assets/images/Write'
import LinearGradient from 'react-native-linear-gradient'
import RightArrowComponent from '../assets/images/RightArrow'

const DetailsScreen = () => {


    const route = useRoute()
    console.log(route?.params.Detail.image);
    const navigation = useNavigation()

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
        <View style={{ flex: 1 }}>
            <Image source={route?.params.Detail.image} style={{ height: Height(576), width: '100%' }} resizeMode='cover' />
            <TouchableOpacity style={{ marginTop: Height(50), marginLeft: Width(30), position: 'absolute' }} onPress={() => navigation.goBack()}>
                <RightArrowComponent height={Height(16)} width={Width(16)} />
            </TouchableOpacity>
            <View style={{ height: Height(360), width: '100%', backgroundColor: 'white', position: 'absolute', marginTop: Height(470), borderTopLeftRadius: Width(30), borderTopRightRadius: Width(30) }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: Width(30), marginTop: Height(30), alignItems: "center" }}>
                    <View>
                        <Text style={{ fontSize: Height(20), color: 'black', fontFamily: 'Gilroy-SemiBold' }}>Alice Stevany, 22</Text>
                        <Text style={{ fontSize: Height(15), color: 'rgba(0, 0, 0, 0.6)', fontFamily: 'Gilroy-SemiBold' }}>Designer</Text>
                    </View>
                    <TouchableOpacity>
                        <MessageComponent size={Height(50)} />
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: Height(16), color: 'black', fontFamily: 'Gilroy-SemiBold', marginLeft: Width(30), marginTop: Height(10) }}>About</Text>
                <Text style={{ fontSize: Height(12), color: 'black', fontFamily: 'Gilroy-SemiBold', marginHorizontal: Width(30), marginTop: Height(10) }}>I am single and 22 year old. i love design, traveling,
                    and going out to play. you can find me in los angeles.</Text>
                <Text style={{ fontSize: Height(16), color: 'black', fontFamily: 'Gilroy-SemiBold', marginLeft: Width(30), marginTop: Height(10) }}>Interest</Text>
                <FlatList
                    data={interest}
                    key={2}
                    numColumns={2}
                    style={{ marginBottom: Height(30) }}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <LinearGradient colors={['#075790', '#8041C6']} style={{ flexDirection: 'row', alignItems: 'center', borderRadius: Width(50), marginLeft: Width(20), marginTop: Height(7), paddingVertical: Height(8), paddingHorizontal: Width(15) }}
                                    start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }} useAngle={true}
                                    angle={145}
                                    angleCenter={{ x: 0.1, y: 0.1 }}>
                                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }}>
                                        {item.img}
                                        <Text style={{ color: 'white', fontSize: Height(14), fontFamily: 'Gilroy-SemiBold', marginLeft: Width(5) }}>{item.name}</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({})