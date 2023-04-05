import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import RightArrowComponent from '../assets/images/RightArrow'
import { Height, Width } from '../utils/responsive'
import AudioComponent from '../assets/images/Audio'
import VideoComponent from '../assets/images/VideoComponent'
import MenuComponent from '../assets/images/Menu'
import { GiftedChat, Bubble, Send, InputToolbar, Composer, Actions } from 'react-native-gifted-chat'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import MapScreen from './MapScreen'
import UserListing from '../utils/UserListing'
import ChatCameraComponent from '../assets/images/Chatcamera'
import ChatGalleryComponent from '../assets/images/ChatGallery'
import ChatAudioComponent from '../assets/images/ChatAudio'
const ChatScreen = () => {
    const route = useRoute()
    console.log(route?.params.Data);
    const navigation = useNavigation()



    const [messages, setMessages] = useState([]);
    const [click, setClick] = useState(false)
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
            {
                _id: 2,
                text: 'Hello World',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])
    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])


    const renderBubble = (props) => {
        return (

            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#8041C6',
                        borderTopLeftRadius: Width(10),
                        borderBottomLeftRadius: Width(10),
                        borderBottomRightRadius: Width(20),
                        borderTopRightRadius: Width(0)
                    },
                    left: {
                        backgroundColor: '#DCDCDC',
                        borderTopLeftRadius: Width(0),
                        borderBottomLeftRadius: Width(20),
                        borderBottomRightRadius: Width(10),
                        borderTopRightRadius: Width(10)
                    }
                }}
                textStyle={{
                    right: {
                        color: 'white',
                        fontFamily: 'Gilroy-SemiBold',
                        fontSize: Height(14)
                    },
                    left: {
                        color: 'black',
                        fontFamily: 'Gilroy-SemiBold',
                        fontSize: Height(14)
                    }
                }}
            />
        )
    }

    const renderSend = (props) => {
        return (
            // { ...props }
            <Send {...props}>
                <View>
                    <MaterialCommunityIcons name='send-circle' size={Height(42)} color='#8041C6' style={{}} />
                </View>
            </Send>
        )

    }

    const scrollToBottomComponent = () => {
        return (
            <View>
                <MaterialCommunityIcons name='chevron-double-down' size={Height(20)} color={'black'} />
            </View>
        )
    }
    const renderInputToolbar = (props) => {

        return (<InputToolbar
            {...props}
            containerStyle={{
                borderRadius: 30,

            }}

        />);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(20), marginHorizontal: Width(30), justifyContent: "space-between" }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <RightArrowComponent height={Height(16)} width={Width(16)} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: Height(20), marginLeft: Width(30), fontFamily: 'Gilroy-SemiBold', color: '#8041C6' }}>{route?.params.Data.name}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity style={{}}>
                        <AudioComponent size={Height(40)} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: Width(5) }}>
                        <VideoComponent size={Height(40)} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: Width(5) }}>
                        <MenuComponent size={Height(40)} />
                    </TouchableOpacity>
                </View>
            </View>

            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
                alignTop={true}
                renderBubble={renderBubble}
                alwaysShowSend
                renderSend={(props) => (
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center', marginRight: Width(10)
                        }}>
                        <Entypo
                            name="attachment"
                            color="#8041C6"
                            size={Height(22)}
                            onPress={() => setClick(!click)}
                        />
                        <Send {...props} containerStyle={{ justifyContent: 'center', marginLeft: Width(5) }}>
                            <View>
                                <MaterialCommunityIcons name="send-circle" size={Height(40)} color="#8041C6" />
                            </View>
                        </Send>
                    </View>
                )}
                scrollToBottom
                scrollToBottomComponent={scrollToBottomComponent}
                quickReplyStyle={{}}
                textInputStyle={{}}
                placeholder='Message'
                renderInputToolbar={renderInputToolbar}
                renderUsernameOnMessage={true}
                wrapInSafeArea={false}
                bottomOffset={Platform.select({
                    ios: 200,
                    android: 0
                })}
                renderComposer={props1 => (<Composer {...props1} textInputStyle={{ color: "black", fontFamily: 'Gilroy-SemiBold', }} multiline={true} />)}
                showAvatarForEveryMessage={true}
                keyboardShouldPersistTaps={'always'}
            />
            {
                click ?
                    <View style={{ position: 'absolute', bottom: 100, height: Height(150), width: Width(335), backgroundColor: 'white', alignSelf: 'center', borderRadius: Width(30), flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: Width(28), alignItems: 'center', alignContent: 'center' }}>
                        <TouchableOpacity style={{ height: Height(80), width: Width(80), backgroundColor: '#FF981E', borderRadius: Width(80) / 2, justifyContent: 'center', alignItems: 'center' }}>
                            <ChatCameraComponent width={Width(30)} height={Height(28)} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: Height(80), width: Width(80), backgroundColor: '#9D28AC', borderRadius: Width(80) / 2, justifyContent: 'center', alignItems: 'center' }}>
                            <ChatGalleryComponent width={Width(30)} height={Height(28)} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: Height(80), width: Width(80), backgroundColor: '#4AAF57', borderRadius: Width(80) / 2, justifyContent: 'center', alignItems: 'center' }}>
                            <ChatAudioComponent width={Width(30)} height={Height(28)} />
                        </TouchableOpacity>
                    </View> : null
            }
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    inputToolbarStyle: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 25
    },
})