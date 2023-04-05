import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import DreamComponent from '../assets/images/Dream'
import { Height, Width } from '../utils/responsive'
import MessageComponent from '../assets/images/Message'
import { useNavigation } from '@react-navigation/native'
import SearchComponent from '../assets/images/Search'
import data from '../utils/data'
import RightArrowComponent from '../assets/images/RightArrow'

const FavoriteScreen = () => {
    const navigation = useNavigation()
    const imageRef = useRef()
    const ref = useRef()
    const [selected, setSelected] = useState('');

    switch (selected) {
        case 'AllMatch':
            return (
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(20), marginHorizontal: Width(30), justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={{}} onPress={() => setSelected()}>
                                <RightArrowComponent height={Height(16)} width={Width(16)} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: Height(20), marginLeft: Width(30), fontFamily: 'Gilroy-SemiBold', color: 'black' }}>New Match</Text>
                        </View>
                        <TouchableOpacity>
                            <SearchComponent size={Height(40)} />
                        </TouchableOpacity>
                    </View>



                    <FlatList
                        data={data}
                        numColumns={2}
                        key={2}
                        style={{}}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={{ marginLeft: Width(25), marginTop: Height(20), height: Height(201), width: Width(148), borderRadius: Width(30) }} onPress={() => navigation.navigate('Match', { data: item })}>
                                    <Image source={item.image} style={{ height: Height(201), width: Width(148), borderRadius: Width(30) }} />
                                    {/* <View style={styles.overlayView} />
                                    <View style={{ position: "absolute", bottom: 0, flexDirection: 'row', alignItems: 'center', marginBottom: Width(5) }}>
                                        <View>

                                            <Image source={item.number} style={{ marginLeft: Width(5), }} />
                                            <Text style={{ position: 'absolute', color: 'white', alignSelf: 'center', padding: Height(3), paddingLeft: Width(8) }}>{item.id}</Text>
                                        </View>
                                        <Text style={{ color: colors.WHITE, fontFamily: "Poppins-Medium", fontWeight: '600', fontSize: Height(12), marginLeft: Width(5) }}>{item.name}</Text>
                                    </View> */}
                                </TouchableOpacity>

                            )
                        }}
                    />

                </SafeAreaView>
            )
        default:
            return (
                <SafeAreaView style={{ flex: 1, }}>
                    <View style={{ marginHorizontal: Width(30), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: Height(20) }}>
                        <DreamComponent width={Width(143)} height={Height(35)} />
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <SearchComponent size={Height(40)} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: Width(20) }} onPress={() => navigation.navigate('Inbox')}>
                                <MessageComponent size={Height(40)} />
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: Width(30), marginTop: Height(20) }}>
                        <Text style={{ fontSize: Height(16), fontFamily: 'Gilroy-SemiBold', color: 'black' }}>New Match</Text>
                        <TouchableOpacity onPress={() => setSelected('AllMatch')}>
                            <Text style={{ fontSize: Height(14), fontFamily: 'Gilroy-SemiBold', color: '#8041C6' }}>See All</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <FlatList
                            data={data}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{}}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity style={{ height: Height(300), width: Width(220), borderRadius: Width(30), marginLeft: Width(30), marginTop: Height(20) }}>
                                        <Image source={item.image} style={{ height: Height(300), width: Width(220), borderRadius: Width(30) }} />
                                        {/* <LinearGradient
                                    locations={[0.5, 1]} colors={['rgba(0,0,0,0.00)', '#414CAA']}
                                    style={{
                                        height: Height(300), width: Width(220), borderRadius: Width(30),
                                        position: 'absolute',

                                    }} /> */}
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: Width(30), marginTop: Height(20) }}>
                        <Text style={{ fontSize: Height(16), fontFamily: 'Gilroy-SemiBold', color: 'black' }}>Your Match</Text>
                        <Text style={{ fontSize: Height(14), fontFamily: 'Gilroy-SemiBold', color: '#8041C6' }}>See All</Text>
                    </View>
                    <View>
                        <FlatList
                            data={data}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{}}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity style={{ height: Height(140), width: Width(110), borderRadius: Width(15), marginLeft: Width(30), marginTop: Height(10) }}>
                                        <Image source={item.image} style={{ height: Height(140), width: Width(110), borderRadius: Width(15) }} />
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>
                </SafeAreaView>
            )
    }
}

export default FavoriteScreen

const styles = StyleSheet.create({})