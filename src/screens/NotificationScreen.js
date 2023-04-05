import { FlatList, SafeAreaView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Height, Width } from '../utils/responsive'
import RightArrowComponent from '../assets/images/RightArrow'
import { useNavigation } from '@react-navigation/native'

const NotificationScreen = () => {


    const notification = [
        {
            id: 1,
            name: 'Show Messages Previews',
            toggle: false
        },
        {
            id: 2,
            name: 'New Message',
            toggle: false
        },
        {
            id: 3,
            name: 'New Match',
            toggle: false
        },
        {
            id: 4,
            name: 'Match Around Me',
            toggle: false
        },
        {
            id: 5,
            name: 'You Got Likes',
            toggle: false
        },
        {
            id: 6,
            name: 'You Got Star',
            toggle: false
        },
        {
            id: 7,
            name: 'Subscription',
            toggle: false
        },
        {
            id: 8,
            name: 'Sound',
            toggle: false
        },
        {
            id: 9,
            name: 'Vidrate',
            toggle: false
        },
        {
            id: 10,
            name: 'New Updates',
            toggle: false
        },
        {
            id: 11,
            name: 'VIP Status',
            toggle: false
        },
        {
            id: 12,
            name: 'New Services',
            toggle: false
        }
    ]


    const navigation = useNavigation()
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [abc, setAbc] = useState(notification)

    // console.log({ isEnabled });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(20), marginLeft: Width(30) }}>
                <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
                    <RightArrowComponent height={Height(16)} width={Width(16)} />
                </TouchableOpacity>
                <Text style={{ fontSize: Height(20), marginLeft: Width(30), fontFamily: 'Gilroy-SemiBold', color: '#8041C6' }}>Notification</Text>
            </View>

            {
                abc.map((word, i, wordArray) =>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(30), marginTop: Height(30) }}>
                        <Text style={{ fontSize: Height(16), fontFamily: 'Gilroy-SemiBold', color: 'black' }}>{word.name}</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#8041C6' }}
                            thumbColor={isEnabled ? '#FFFFFF' : '#f4f3f4'}
                            ios_backgroundColor="#ABABAB"
                            onValueChange={(toggleValue) => {
                                wordArray[i].toggle = toggleValue;
                                setIsEnabled({ words: wordArray });
                            }}
                            value={word.toggle}
                        />
                    </View>
                )
            }



        </SafeAreaView>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({})