import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AnimalComponent from '../assets/images/Animals';
import TabComponent from '../assets/images/Tab';
import { Height, Width } from '../utils/responsive';
import HomeComponent from '../assets/images/Home';
import Active_HomeComponent from '../assets/images/Active_Home';
import MapComponent from '../assets/images/Map';
import Active_MapComponent from '../assets/images/Active_Map';
import LikeComponent from '../assets/images/Like';
import Active_LikeComponent from '../assets/images/Active_Like';
import ProfileComponent from '../assets/images/Profile';
import Active_ProfileComponent from '../assets/images/Active_Profile';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false, tabBarBackground: () => <Image source={require('../assets/images/tab.png')} style={{ height: Height(150), width: '100%' }} />, tabBarStyle: { height: Height(90), paddingTop: Height(10) }
        }}  >
            <Tab.Screen name="Home" component={HomeScreen}
                options={() => ({
                    tabBarIcon: ({ focused }) => {
                        return (
                            !focused ? <HomeComponent size={Height(50)} /> : <Active_HomeComponent width={Width(70)} height={Height(60)} />
                        );
                    },
                    tabBarShowLabel: false
                })} />
            <Tab.Screen name="Map" component={MapScreen}
                options={() => ({
                    tabBarIcon: ({ focused }) => {
                        return (
                            !focused ? <MapComponent size={Height(50)} /> : <Active_MapComponent width={Width(70)} height={Height(60)} />
                        );
                    },
                    tabBarShowLabel: false
                })}
            />
            <Tab.Screen name='Favorite' component={FavoriteScreen}
                options={() => ({
                    tabBarIcon: ({ focused }) => {
                        return (
                            !focused ? <LikeComponent size={Height(50)} /> : <Active_LikeComponent width={Width(70)} height={Height(60)} />
                        );
                    },
                    tabBarShowLabel: false
                })}
            />
            <Tab.Screen name='Profile' component={ProfileScreen}
                options={() => ({
                    tabBarIcon: ({ focused }) => {
                        return (
                            !focused ? <ProfileComponent size={Height(50)} /> : <Active_ProfileComponent width={Width(70)} height={Height(60)} />

                        );
                    },
                    tabBarShowLabel: false
                })}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation

const styles = StyleSheet.create({})