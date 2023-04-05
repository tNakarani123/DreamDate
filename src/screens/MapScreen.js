
import React, { useEffect, useState } from 'react';
import { PermissionsAndroid, StyleSheet, View } from 'react-native';
import MapboxGL from '@rnmapbox/maps';

MapboxGL.setAccessToken('sk.eyJ1IjoicnV0aWxhbnR0ZWNobm9sb2d5IiwiYSI6ImNsZnhrZzdiajBzMDEzcW8zNDB1b2RxaGoifQ.q3Dek6Z47RvnvOQDe2ncdw');

const MapScreen = () => {
    const [location, setLocation] = useState(null);
    console.log({ location });

    useEffect(() => {

        (async () => {
            const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
            if (result) {
                console.log({ result });
            }
        })()
    }, []);

    return (
        <View style={styles.container}>
            <View style={StyleSheet.absoluteFillObject}>
                <MapboxGL.MapView style={styles.map}>
                    <MapboxGL.UserLocation
                        onUpdate={({ coords: { latitude, longitude
                        } }) => {
                            setLocation([longitude, latitude])
                        }}
                        minDisplacement={100}
                        requestsAlwaysUse={true}
                    />
                    {<MapboxGL.Camera zoomLevel={10} centerCoordinate={location} />}
                </MapboxGL.MapView>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});

export default MapScreen;

