import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SwipeListView } from 'react-native-swipe-list-view';
import { Height, Width } from './responsive';
import { useNavigation } from '@react-navigation/native';

const UserListing = () => {

    const navigation = useNavigation()

    const data = [
        {
            id: 1,
            name: 'Jenny Wilson',
            img: require('../assets/images/user.png'),
            lastMsg: 'haha oh man',
            time: '20:00'
        },
        {
            id: 2,
            name: 'Esther Howard',
            img: require('../assets/images/user.png'),
            lastMsg: 'haha that’s terrifying 😂',
            time: '16:00'
        },
        {
            id: 3,
            name: 'Kristin Waston',
            img: require('../assets/images/user.png'),
            lastMsg: 'Just ideas for next time',
            time: '13:00'
        },
        {
            id: 4,
            name: 'Annette Black',
            img: require('../assets/images/user.png'),
            lastMsg: 'i’ll be there in 2 mins',
            time: '10:00'
        },
        {
            id: 5,
            name: 'Theresa Webb',
            img: require('../assets/images/user.png'),
            lastMsg: 'Perfect!',
            time: 'Yesterday'
        },
        {
            id: 6,
            name: 'Eleanor Pena',
            img: require('../assets/images/user.png'),
            lastMsg: 'that’s awesome!',
            time: 'Monday'
        }
    ]


    return (
        <View>
            <SwipeListView
                data={data}
                style={{ marginTop: Height(15) }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.userItemContainer} onPress={() => navigation.navigate('Chat', { Data: item })}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={item.img} style={{ height: Height(60), width: Width(60) }} />
                                <View style={styles.userDetailsContainer}>
                                    <Text style={{ fontSize: Height(16), fontFamily: 'Gilroy-SemiBold', color: 'black' }}>{item.name}</Text>
                                    <Text style={{ fontSize: Height(13), fontFamily: 'Gilroy-SemiBold', color: 'rgba(0, 0, 0, 0.6)', marginTop: Height(2) }}>{item.lastMsg}</Text>
                                </View>
                            </View>
                            <View>
                                <Text>{item.time}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default UserListing

const styles = StyleSheet.create({
    userItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Height(20),
        justifyContent: 'space-between',
        borderRadius: Width(15),
        borderWidth: 1,
        height: Height(85),
        width: Width(335),
        alignSelf: 'center',
        paddingHorizontal: Width(20),
        borderColor: '#8E8E93'
    },
    userDetailsContainer: {
        marginLeft: Width(15),

    }
})