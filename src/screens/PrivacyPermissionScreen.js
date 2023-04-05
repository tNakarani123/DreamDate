import { SafeAreaView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import RightArrowComponent from '../assets/images/RightArrow'
import { Height, Width } from '../utils/responsive'
import { useNavigation } from '@react-navigation/native'

const PrivacyPermissionScreen = () => {
    const navigation = useNavigation()


    const privacy = [
        {
            id: 1,
            text: 'Enable Face or Fingerprint Login',
            toggle: false
        },
        {
            id: 2,
            text: 'Show Location',
            toggle: false
        },
        {
            id: 3,
            text: 'Show Online Status',
            toggle: false
        },
        {
            id: 4,
            text: 'Allow Public Search',
            toggle: false
        },
        {
            id: 5,
            text: 'Enable Bumps',
            toggle: false
        },
        {
            id: 6,
            text: 'Limit Profile Views',
            toggle: false
        },
        {
            id: 7,
            text: 'Allow Profile Sharing',
            toggle: false
        },
        {
            id: 8,
            text: 'Advertising Preferences',
            toggle: false
        },
    ]
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [abc, setAbc] = useState(privacy)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(20), marginLeft: Width(30) }}>
                <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
                    <RightArrowComponent height={Height(16)} width={Width(16)} />
                </TouchableOpacity>
                <Text style={{ fontSize: Height(20), marginLeft: Width(30), fontFamily: 'Gilroy-SemiBold', color: '#8041C6' }}>Privacy And Permission</Text>
            </View>
            {
                abc.map((word, i, wordArray) =>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(30), marginTop: Height(30) }}>
                        <Text style={{ fontSize: Height(16), fontFamily: 'Gilroy-SemiBold', color: 'black' }}>{word.text}</Text>
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

export default PrivacyPermissionScreen

const styles = StyleSheet.create({})