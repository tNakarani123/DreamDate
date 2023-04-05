import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import RightArrowComponent from '../assets/images/RightArrow'
import { Height, Width } from '../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } } }
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } } }

const SelectLocationScreen = () => {
    const navigation = useNavigation()
    const placesRef = useRef();

    const getAddress = () => {
        console.log(placesRef.current?.getAddressText());
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(20), marginLeft: Width(30) }}>
                <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
                    <RightArrowComponent height={Height(16)} width={Width(16)} />
                </TouchableOpacity>
                <Text style={{ fontSize: Height(20), marginLeft: Width(30), fontFamily: 'Gilroy-SemiBold', color: '#8041C6' }}>Select Location</Text>
            </View>
            {/* <GooglePlacesAutocomplete
                placeholder='Search'
                minLength={2}
                listViewDisplayed='auto'
                fetchDetails={true}
                renderDescription={row => row.description}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                // currentLocation={true}
                currentLocationLabel='Current Location'
                nearbyPlacesAPI='GooglePlacesSearch'
                GoogleReverseGeocodingQuery={{

                }}
                GooglePlacesSearchQuery={{

                }}
                query={{
                    key: 'AIzaSyDl-09DV8Eo_0VoXmMhrl3Io6QPPqy-Vqo',
                    language: 'en',
                }}
                filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
                // predefinedPlaces={[homePlace, workPlace]}
                debounce={200}
            /> */}
            <GooglePlacesAutocomplete
                // ref={ref}
                placeholder='Search'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: 'AIzaSyCSRujaqAOLrp9EUBDiCftmA5tWC4IAq2M',
                    language: 'en',
                    type: '(cities)'
                }}
                ref={placesRef}
            />

        </SafeAreaView>
    )
}

export default SelectLocationScreen

const styles = StyleSheet.create({})