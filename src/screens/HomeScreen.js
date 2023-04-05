// import React, { useRef, useState } from 'react';
// import {
//     Image,
//     StatusBar,
//     StyleSheet,
//     Text,
//     View,
//     SafeAreaView,
//     Dimensions,
//     TouchableOpacity,
//     Platform,
//     FlatList,
//     TextInput
// } from 'react-native';

// // import data from './data';
// import Swiper from 'react-native-deck-swiper';
// import { Transitioning, } from 'react-native-reanimated';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import DreamComponent from '../assets/images/Dream';
// import FavoriteComponent from '../assets/images/Favorite';
// import FilterComponent from '../assets/images/Filter';
// import MessageComponent from '../assets/images/Message';
// import NotfavoriteComponent from '../assets/images/Notfavorite';
// import StarComponent from '../assets/images/Star';
// import data from '../utils/data';
// import { Height, Width } from '../utils/responsive';
// import RBSheet from "react-native-raw-bottom-sheet";
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import Slider from '@react-native-community/slider';
// import MultiSlider from '@ptomasroos/react-native-multi-slider'
// import LinearGradient from 'react-native-linear-gradient';
// import { useNavigation, useRoute } from '@react-navigation/native';

// const { width } = Dimensions.get('window');

// const stackSize = 10;
// const colors = {
//     red: '#EC2379',
//     blue: '#0070FF',
//     gray: '#777777',
//     white: '#ffffff',
//     black: '#000000'
// };
// const ANIMATION_DURATION = 200;

// const Transition = {
//     Sequence: ({ children }) => <View>{children}</View>,
//     Out: ({ type, durationMs, interpolation, children }) => <View>{children}</View>,
//     Together: ({ children }) => <View>{children}</View>,
//     In: ({ type, durationMs, delayMs, interpolation, children }) => <View>{children}</View>
// };

// const transition = (
//     <Transition.Sequence>
//         <Transition.Out
//             type='slide-bottom'
//             durationMs={ANIMATION_DURATION}
//             interpolation='easeIn'
//         />
//         <Transition.Together>
//             <Transition.In
//                 type='fade'
//                 durationMs={ANIMATION_DURATION}
//                 delayMs={ANIMATION_DURATION / 2}
//             />
//             <Transition.In
//                 type='slide-bottom'
//                 durationMs={ANIMATION_DURATION}
//                 delayMs={ANIMATION_DURATION / 2}
//                 interpolation='easeOut'
//             />
//         </Transition.Together>
//     </Transition.Sequence>
// );







// const swiperRef = React.createRef();
// const transitionRef = React.createRef();


// const Card = ({ card }) => {
//     return (
//         <View style={styles.card}>
//             <Image source={card.image} style={styles.cardImage} />
//         </View>
//     );
// };


// const HomeScreen = () => {


//     const [index, setIndex] = React.useState(0);
//     const onSwiped = () => {
//         transitionRef.current.animateNextTransition();
//         setIndex((index + 1) % data.length);
//     };
//     const refRBSheet = useRef();
//     console.log({ index });

//     const [i, setI] = useState(0)

//     const [sliderValue, setSliderValue] = useState(15);



//     const gender = [
//         {
//             id: 1,
//             name: 'Women'
//         },
//         {
//             id: 2,
//             name: 'Men'
//         },
//         {
//             id: 3,
//             name: 'Both'
//         }
//     ]
//     const TIME = { min: 0, max: 100 }
//     const { min, max } = TIME;
//     const [width, setWidth] = useState(280);
//     const [selected, setSelected] = useState(null);

//     if (!selected) {
//         setSelected([min, max]);
//     }

//     const onLayout = (event) => {
//         setWidth(event.nativeEvent.layout.width - SliderPad * 2);
//     };
//     const onValuesChangeFinish = (values) => {
//         setSelected(values);
//     };

//     const navigation = useNavigation()
//     const CardDetails = ({ index, }) => (
//         <View>

//             <View key={data[index].id} >
//                 {console.log({ data: data[index] })}
//                 {/* <Text style={[styles.text, styles.heading]} numberOfLines={2}>
//                 {data[index].name}
//             </Text>
//             <Text style={[styles.text, styles.price]}>{data[index].price}</Text> */}
//                 <MaterialIcons name='more-vert' size={Height(50)} color='#8041C6' style={{ marginTop: Height(350), alignSelf: 'flex-end', right: Height(50) }} onPress={() => { console.log('Pressed'), navigation.navigate('Details', { Detail: data[index] }) }} />
//             </View>

//         </View>
//     );
//     return (
//         <SafeAreaView style={{ flex: 1 }}>
//             <View style={{ marginHorizontal: Width(30), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: Height(20) }}>
//                 <DreamComponent width={Width(143)} height={Height(35)} />
//                 <View style={{ flexDirection: 'row' }}>
//                     <TouchableOpacity onPress={() => refRBSheet.current.open()}>
//                         <FilterComponent size={Height(40)} />
//                     </TouchableOpacity>
//                     <TouchableOpacity style={{ marginLeft: Width(20) }} onPress={() => navigation.navigate('Inbox')}>
//                         <MessageComponent size={Height(40)} />
//                     </TouchableOpacity>
//                 </View>
//             </View>
//             <View style={styles.swiperContainer}>
//                 <Swiper
//                     ref={swiperRef}
//                     cards={data}
//                     cardIndex={index}
//                     renderCard={card => <Card card={card} />}
//                     infinite
//                     backgroundColor={'transparent'}
//                     onSwiped={onSwiped}
//                     // onTapCard={() => swiperRef.current.swipeLeft()}
//                     stackSize={stackSize}
//                     stackScale={10}
//                     stackSeparation={14}
//                     animateOverlayLabelsOpacity
//                     animateCardOpacity
//                     // disableTopSwipe
//                     verticalSwipe={false}
//                     disableBottomSwipe
//                     swipeBackCard={false}
//                     onSwipedLeft={() => console.log('Swipe Left')}
//                     containerStyle={{
//                         marginBottom: Height(10)
//                     }}
//                     marginBottom={Height(50)}
//                     cardStyle={{
//                         marginBottom: Height(10)
//                     }}
//                     cardVerticalMargin={Height(20)}
//                     overlayLabels={{
//                         left: {
//                             title: 'NOPE',
//                             style: {
//                                 label: {
//                                     backgroundColor: colors.red,
//                                     borderColor: colors.red,
//                                     color: colors.white,
//                                     borderWidth: 1,
//                                     fontSize: 24
//                                 },
//                                 wrapper: {
//                                     flexDirection: 'column',
//                                     alignItems: 'flex-end',
//                                     justifyContent: 'flex-start',
//                                     marginLeft: -20,
//                                     marginTop: 20,
//                                 }
//                             }
//                         },
//                         right: {
//                             title: 'LIKE',
//                             style: {
//                                 label: {
//                                     backgroundColor: colors.blue,
//                                     borderColor: colors.blue,
//                                     color: colors.white,
//                                     borderWidth: 1,
//                                     fontSize: 24
//                                 },
//                                 wrapper: {
//                                     flexDirection: 'column',
//                                     alignItems: 'flex-start',
//                                     justifyContent: 'flex-start',
//                                     marginTop: 20,
//                                     marginLeft: 20
//                                 }
//                             }
//                         },
//                     }}
//                 />
//             </View>
//             <View style={styles.bottomContainer}>
//                 <Transitioning.View
//                     ref={transitionRef}
//                     transition={transition}
//                     style={styles.bottomContainerMeta}
//                 >
//                     <CardDetails index={index} />
//                 </Transitioning.View>
//                 <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: Width(58), marginTop: Height(50) }}>
//                     <NotfavoriteComponent size={Height(70)} onPress={() => { swiperRef.current.swipeLeft(), console.log('Left') }} />
//                     <StarComponent size={Height(80)} />
//                     <FavoriteComponent size={Height(70)} onPress={() => { swiperRef.current.swipeRight(), console.log('right') }} />
//                 </View>
//             </View>



//             <RBSheet
//                 ref={refRBSheet}
//                 closeOnDragDown={true}
//                 closeOnPressMask={false}
//                 customStyles={{
//                     draggableIcon: {
//                         backgroundColor: "#000"
//                     }
//                 }}
//                 height={Height(500)}
//             >
//                 <Text style={{ textAlign: 'center', fontFamily: 'Gilroy-SemiBold', fontSize: Height(20), color: '#8041C6', fontWeight: '600' }}>Filter</Text>
//                 <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: Height(18), marginLeft: Width(30), color: '#8041C6' }}>Interested In</Text>

//                 <View>
//                     <FlatList
//                         data={gender}
//                         horizontal
//                         scrollEnabled={false}
//                         renderItem={({ item }) => {
//                             return (
//                                 <TouchableOpacity style={{
//                                     marginLeft: Width(30), height: Height(35), width: Width(80), borderWidth: 1.5, justifyContent: 'center', borderRadius: Width(50), borderColor: '#8041C6', marginTop: Height(5), backgroundColor: i === item.id ? '#8041C6' : 'white'
//                                 }} onPress={() => setI(item.id)}>
//                                     <Text style={{
//                                         textAlign: 'center', fontSize: Height(14), fontFamily: 'Gilroy-SemiBold', color: i === item.id ? 'white' : '#8041C6'
//                                     }}>{item.name}</Text>
//                                 </TouchableOpacity>
//                             )
//                         }}
//                     />
//                 </View>

//                 <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: Height(18), marginLeft: Width(30), color: '#8041C6', marginTop: Height(5) }}>Location</Text>
//                 <View style={{ width: Width(315), height: Height(50), alignSelf: 'center', flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, borderRadius: Width(50), borderColor: i === 4 ? '#8041C6' : '#a9a9a9', marginTop: Height(10), }} onStartShouldSetResponder={() => setI(4)}>
//                     <TextInput
//                         placeholder='Location'
//                         placeholderTextColor='rgba(0, 0, 0, 0.6)'
//                         style={{
//                             width: Width(280),
//                             fontFamily: 'Gilroy-SemiBold',
//                             paddingHorizontal: Width(30),
//                             fontSize: Height(16),
//                         }}
//                         onPressIn={() => setI(4)}
//                         onFocus={() => setI(4)}
//                     />
//                     <MaterialIcons name='location-pin' color='#8041C6' size={Height(20)} />
//                 </View>

//                 <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: Height(18), marginLeft: Width(30), color: '#8041C6', marginTop: Height(5) }}>Distance</Text>
//                 <MultiSlider isMarkersSeparated={true} containerStyle={{ alignSelf: 'center' }}
//                     trackStyle={{
//                         height: Height(5),
//                         borderRadius: 8,
//                     }}
//                     markerOffsetY={3}
//                     selectedStyle={{
//                         backgroundColor: "#8041C6",
//                     }}
//                     unselectedStyle={{
//                         backgroundColor: "#D6D6D6",
//                     }}
//                     pressedMarkerStyle={{ backgroundColor: '#8041C6' }}
//                 />
//                 <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: Height(18), marginLeft: Width(30), color: '#8041C6', marginTop: Height(5) }}>Age</Text>
//                 <MultiSlider
//                     min={min}
//                     max={max}
//                     allowOverlap
//                     values={selected}
//                     sliderLength={width}
//                     onValuesChangeFinish={onValuesChangeFinish}
//                     enableLabel={true}
//                     trackStyle={{
//                         height: Height(5),
//                         borderRadius: 8,
//                     }}
//                     markerOffsetY={3}
//                     selectedStyle={{
//                         backgroundColor: "#8041C6",
//                     }}
//                     unselectedStyle={{
//                         backgroundColor: "#D6D6D6",
//                     }}
//                     containerStyle={{ alignSelf: 'center', }}
//                     pressedMarkerStyle={{ backgroundColor: '#8041C6' }}
//                 />
//                 <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(30), marginTop: Height(30) }}>
//                     <TouchableOpacity
//                         style={{
//                             height: Height(60), width: Width(150), borderRadius: Width(50), justifyContent: 'center', alignItems: 'center', borderWidth: 1.5, borderColor: '#8041C6'
//                         }}
//                     >
//                         <Text style={{ fontWeight: '500', fontSize: Height(18), color: '#8041C6', position: 'absolute', fontFamily: 'Gilroy-SemiBold', }}>
//                             RESET
//                         </Text>
//                     </TouchableOpacity>

//                     <LinearGradient colors={['#075790', '#8041C6']} style={{ height: Height(60), width: Width(150), borderRadius: Width(50), justifyContent: 'center', }}
//                         start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }} useAngle={true}
//                         angle={145}
//                         angleCenter={{ x: 0.1, y: 0.1 }}>
//                         <TouchableOpacity
//                             style={{
//                                 height: Height(60), width: Width(200), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', alignItems: 'center'
//                             }}
//                         >
//                             <Text style={{ fontWeight: '500', fontSize: Height(18), color: 'white', position: 'absolute', fontFamily: 'Gilroy-SemiBold', }}>
//                                 Apply
//                             </Text>
//                         </TouchableOpacity>
//                     </LinearGradient>
//                 </View>
//             </RBSheet>
//         </SafeAreaView>
//     )
// }

// export default HomeScreen

// const styles = StyleSheet.create({
//     swiperContainer: {
//         flex: 0.55,
//         marginBottom: Height(50)
//     },
//     cardImage: {
//         resizeMode: 'cover',
//         height: '100%',
//         borderRadius: Width(40),
//         width: Width(315),
//     },
//     card: {
//         height: Height(540),
//         width: Width(315),
//         borderRadius: Width(40),
//         alignSelf: 'center',
//         marginBottom: Height(10)
//     },
//     text: {
//         textAlign: 'center',
//         fontSize: 50,
//     },
//     done: {
//         textAlign: 'center',
//         fontSize: 30,
//         color: colors.white,
//         backgroundColor: 'transparent'
//     },
//     text: {
//         fontFamily: 'Courier'
//     },
//     heading: {
//         fontSize: 24,
//         marginBottom: 10,
//         color: colors.gray
//     },
//     price: {
//         color: colors.blue,
//         fontSize: 32,
//         fontWeight: '500'
//     },
//     btnActive: {
//         backgroundColor: '#4D24A4',
//     },
//     btnTab: {
//         flexDirection: 'row',
//         padding: 10,
//         justifyContent: 'center',
//         borderRadius: 25,
//         width: width / 3.5,
//     },
//     textActive: {
//         color: '#fff'
//     },
//     text: {
//         color: 'black',
//         fontFamily: 'Gilroy-Medium'
//     }
// });



// import React from 'react';
// import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder } from 'react-native';

// const SCREEN_HEIGHT = Dimensions.get('window').height
// const SCREEN_WIDTH = Dimensions.get('window').width
// import Icon from 'react-native-vector-icons/Ionicons'
// const Users = [
//     { id: "1", uri: require('../assets/images/1.jpg') },
//     { id: "2", uri: require('../assets/images/1.jpg') },
//     { id: "3", uri: require('../assets/images/1.jpg') },
//     { id: "4", uri: require('../assets/images/1.jpg') },
//     { id: "5", uri: require('../assets/images/1.jpg') },
// ]

// export default class Home extends React.Component {

//     constructor() {
//         super()

//         this.position = new Animated.ValueXY()
//         this.state = {
//             currentIndex: 0
//         }

//         this.rotate = this.position.x.interpolate({
//             inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
//             outputRange: ['-30deg', '0deg', '10deg'],
//             extrapolate: 'clamp'
//         })

//         this.rotateAndTranslate = {
//             transform: [{
//                 rotate: this.rotate
//             },
//             ...this.position.getTranslateTransform()
//             ]
//         }

//         this.likeOpacity = this.position.x.interpolate({
//             inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
//             outputRange: [0, 0, 1],
//             extrapolate: 'clamp'
//         })
//         this.dislikeOpacity = this.position.x.interpolate({
//             inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
//             outputRange: [1, 0, 0],
//             extrapolate: 'clamp'
//         })

//         this.nextCardOpacity = this.position.x.interpolate({
//             inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
//             outputRange: [1, 0, 1],
//             extrapolate: 'clamp'
//         })
//         this.nextCardScale = this.position.x.interpolate({
//             inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
//             outputRange: [1, 0.8, 1],
//             extrapolate: 'clamp'
//         })

//     }
//     UNSAFE_componentWillMount() {
//         this.PanResponder = PanResponder.create({

//             onStartShouldSetPanResponder: (evt, gestureState) => true,
//             onPanResponderMove: (evt, gestureState) => {

//                 this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
//             },
//             onPanResponderRelease: (evt, gestureState) => {

//                 if (gestureState.dx > 120) {
//                     Animated.spring(this.position, {
//                         toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
//                     }).start(() => {
//                         this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
//                             this.position.setValue({ x: 0, y: 0 })
//                         })
//                     })
//                 }
//                 else if (gestureState.dx < -120) {
//                     Animated.spring(this.position, {
//                         toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
//                     }).start(() => {
//                         this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
//                             this.position.setValue({ x: 0, y: 0 })
//                         })
//                     })
//                 }
//                 else {
//                     Animated.spring(this.position, {
//                         toValue: { x: 0, y: 0 },
//                         friction: 4
//                     }).start()
//                 }
//             }
//         })
//     }

//     renderUsers = () => {

//         return Users.map((item, i) => {


//             if (i < this.state.currentIndex) {
//                 return null
//             }
//             else if (i == this.state.currentIndex) {

//                 return (
//                     <Animated.View
//                         {...this.PanResponder.panHandlers}
//                         key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>
//                         <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
//                             <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>

//                         </Animated.View>

//                         <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
//                             <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>

//                         </Animated.View>

//                         <Image
//                             style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
//                             source={item.uri} />

//                     </Animated.View>
//                 )
//             }
//             else {
//                 return (
//                     <Animated.View

//                         key={item.id} style={[{
//                             opacity: this.nextCardOpacity,
//                             transform: [{ scale: this.nextCardScale }],
//                             height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute'
//                         }]}>
//                         <Animated.View style={{ opacity: 0, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
//                             <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>

//                         </Animated.View>

//                         <Animated.View style={{ opacity: 0, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
//                             <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>

//                         </Animated.View>

//                         <Image
//                             style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
//                             source={item.uri} />

//                     </Animated.View>
//                 )
//             }
//         }).reverse()
//     }

//     render() {
//         return (
//             <View style={{ flex: 1 }}>
//                 <View style={{ height: 60 }}>

//                 </View>
//                 <View style={{ flex: 1 }}>
//                     {this.renderUsers()}
//                 </View>
//                 <View style={{ height: 60 }}>

//                 </View>


//             </View>

//         );
//     }
// }




import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, PanResponder, StyleSheet, View } from 'react-native';
import Card from '../utils/Home/card';
import { ACTION_OFFSET, CARD } from '../utils/Home/constants';
import Footer from '../utils/Home/footer';

// import Card from '../Card';
// import Footer from '../Footer';
// import { ACTION_OFFSET, CARD } from '../utils/constants';
// import { pets as petsArray } from './data';
// import { styles } from './styles';
import { pets as petsArray } from '../utils/Home/data'
export default function Main() {
    const [pets, setPets] = useState(petsArray);
    const swipe = useRef(new Animated.ValueXY()).current;
    const tiltSign = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        if (!pets.length) {
            setPets(petsArray);
        }
    }, [pets.length]);

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, { dx, dy, y0 }) => {
            swipe.setValue({ x: dx, y: dy });
            tiltSign.setValue(y0 > CARD.HEIGHT / 2 ? 1 : -1);
        },
        onPanResponderRelease: (_, { dx, dy }) => {
            const direction = Math.sign(dx);
            const isActionActive = Math.abs(dx) > ACTION_OFFSET;

            if (isActionActive) {
                Animated.timing(swipe, {
                    duration: 200,
                    toValue: {
                        x: direction * CARD.OUT_OF_SCREEN,
                        y: dy,
                    },
                    useNativeDriver: true,
                }).start(removeTopCard);
            } else {
                Animated.spring(swipe, {
                    toValue: {
                        x: 0,
                        y: 0,
                    },
                    useNativeDriver: true,
                    friction: 5,
                }).start();
            }
        },
    });

    const removeTopCard = useCallback(() => {
        setPets((prevState) => prevState.slice(1));
        swipe.setValue({ x: 0, y: 0 });
    }, [swipe]);

    const handleChoice = useCallback(
        (direction) => {
            Animated.timing(swipe.x, {
                toValue: direction * CARD.OUT_OF_SCREEN,
                duration: 400,
                useNativeDriver: true,
            }).start(removeTopCard);
        },
        [removeTopCard, swipe.x]
    );

    return (
        <View style={styles.container}>
            {pets
                .map(({ name, source }, index) => {
                    const isFirst = index === 0;
                    const dragHandlers = isFirst ? panResponder.panHandlers : {};

                    return (
                        <Card
                            key={name}
                            name={name}
                            source={source}
                            isFirst={isFirst}
                            swipe={swipe}
                            tiltSign={tiltSign}
                            {...dragHandlers}
                        />
                    );
                })
                .reverse()}

            <Footer handleChoice={handleChoice} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
    },
})