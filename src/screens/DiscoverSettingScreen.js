import { SafeAreaView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import RightArrowComponent from '../assets/images/RightArrow'
import { Height, Width } from '../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import SliderCustomLabel from '../utils/SliderCustomLabel'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const DiscoverSettingScreen = () => {
    const navigation = useNavigation()
    const TIME = { min: 0, max: 100 }
    const { min, max } = TIME;

    const [width, setWidth] = useState(315);
    const [selected, setSelected] = useState(null);

    if (!selected) {
        setSelected([min, max]);
    }
    const onValuesChangeFinish = (values) => {
        setSelected(values);
    };
    const textTransformerTimes = (value) => {
        return value === 0
            ? "0"
            : (value < 13 ? value : value - 0) + (value < 12 ? "" : "");
    };



    const [distance, setDistance] = useState(null)

    if (!distance) {
        setDistance([min, max])
    }

    const onDistanceChangeFinish = (values) => {
        setDistance(values)
    }

    const textTransformerTimesDistance = (value) => {
        return value === 0
            ? "0"
            : (value < 13 ? value : value - 0) + (value < 12 ? "" : "");
    }

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [hideLastSeen, setHideLastSeen] = useState(false)
    const toogleLastSeen = () => setHideLastSeen(previousState => !previousState)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(20), marginLeft: Width(30) }}>
                <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
                    <RightArrowComponent height={Height(16)} width={Width(16)} />
                </TouchableOpacity>
                <Text style={{ fontSize: Height(20), marginLeft: Width(30), fontFamily: 'Gilroy-SemiBold', color: '#8041C6' }}>Discover Settings</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: Width(30), marginTop: Height(30) }}>
                <Text style={{ fontSize: Height(16), color: 'black', fontFamily: 'Gilroy-SemiBold', }}>Location</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: Height(16), color: 'black', fontFamily: 'Gilroy-SemiBold', }}>New York, US</Text>
                    <MaterialCommunityIcons name='chevron-right' size={Height(20)} style={{ fontFamily: 'Gilroy-SemiBold' }} onPress={() => navigation.navigate('SelectLocation')} />
                </View>
            </View>
            <Text style={{ fontSize: Height(16), color: 'black', fontFamily: 'Gilroy-SemiBold', marginLeft: Width(30), marginTop: Height(20) }}>Age</Text>
            <MultiSlider
                min={min}
                max={max}
                // allowOverlap
                values={selected}
                sliderLength={width}
                onValuesChangeFinish={onValuesChangeFinish}
                enableLabel={true}
                customLabel={SliderCustomLabel(textTransformerTimesDistance)}
                trackStyle={{
                    height: Height(5),
                    borderRadius: 8,
                }}
                markerOffsetY={3}
                selectedStyle={{
                    backgroundColor: "#8041C6",
                }}
                unselectedStyle={{
                    backgroundColor: "#D6D6D6",
                }}
                containerStyle={{ alignSelf: 'center' }}
                markerStyle={{
                    backgroundColor: '#8041C6',
                    borderWidth: 3,
                    borderColor: '#FFFFFF'
                }}
            />
            <Text style={{ fontSize: Height(16), color: 'black', fontFamily: 'Gilroy-SemiBold', marginLeft: Width(30), marginTop: Height(20) }}>Distance ( in km )</Text>
            <MultiSlider
                min={min}
                max={max}
                // allowOverlap
                values={distance}
                sliderLength={width}
                onValuesChangeFinish={onDistanceChangeFinish}
                enableLabel={true}
                customLabel={SliderCustomLabel(textTransformerTimes)}
                trackStyle={{
                    height: Height(5),
                    borderRadius: 8,
                }}
                markerOffsetY={3}
                selectedStyle={{
                    backgroundColor: "#8041C6",
                }}
                unselectedStyle={{
                    backgroundColor: "#D6D6D6",
                }}
                containerStyle={{ alignSelf: 'center' }}
                markerStyle={{
                    backgroundColor: '#8041C6',
                    borderWidth: 3,
                    borderColor: '#FFFFFF'
                }}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(30), marginTop: Height(20) }}>
                <Text style={{ fontSize: Height(16), color: 'black', fontFamily: 'Gilroy-SemiBold', }}>New Match</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#8041C6' }}
                    thumbColor={isEnabled ? '#FFFFFF' : '#f4f3f4'}
                    ios_backgroundColor="#ABABAB"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: Width(30), marginTop: Height(30) }}>
                <Text style={{ fontSize: Height(16), color: 'black', fontFamily: 'Gilroy-SemiBold', }}>Show Me</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: Height(16), color: 'black', fontFamily: 'Gilroy-SemiBold', }}>Women Only</Text>
                    <MaterialCommunityIcons name='chevron-right' size={Height(20)} style={{ fontFamily: 'Gilroy-SemiBold' }} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(30), marginTop: Height(20) }}>
                <Text style={{ fontSize: Height(16), color: 'black', fontFamily: 'Gilroy-SemiBold', }}>Hide Last Seen</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#8041C6' }}
                    thumbColor={hideLastSeen ? '#FFFFFF' : '#f4f3f4'}
                    ios_backgroundColor="#ABABAB"
                    onValueChange={toogleLastSeen}
                    value={hideLastSeen}
                />
            </View>
        </SafeAreaView>
    )
}

export default DiscoverSettingScreen

const styles = StyleSheet.create({})