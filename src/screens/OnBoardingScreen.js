import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    FlatList,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Dimensions,
    Image,

} from 'react-native';
import ButtonComponent from '../assets/images/Button';
import { Height, Width } from '../utils/responsive';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');



const slides = [
    {
        id: '1',
        image: require('../assets/images/one.png'),
        title: 'Easily Find Nearby',
        subtitle: 'Hold My hand tight as i want to grow old with you from this day forth.',
    },
    {
        id: '2',
        image: require('../assets/images/two.png'),
        title: 'Find Someone Special',
        subtitle: 'You are the only thing that exists in the world.',
    },
    {
        id: '3',
        image: require('../assets/images/three.png'),
        title: 'Start Dating',
        subtitle: 'Date with your partner and enjoy it.',
    },
];

const Slide = ({ item }) => {
    return (
        <View style={{ alignItems: 'center', width: Width(375) }}>
            <Text style={styles.title}>{item?.title}</Text>
            <Image source={item.image} style={{ height: Height(330), width: Width(330), marginTop: Height(50) }} resizeMode='contain' />
            <View>
                <Text style={styles.subtitle}>{item?.subtitle}</Text>
            </View>
        </View>
    );
};

const OnBoardingScreen = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const ref = React.useRef();
    const navigation = useNavigation()
    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current.scrollToOffset({ offset });
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };

    const Footer = () => {
        return (
            <View
                style={{
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.indicator,
                                currentSlideIndex == index && {
                                    backgroundColor: '#8041C6',
                                    width: Width(40),
                                    borderRadius: Width(50)
                                },
                            ]}
                        />
                    ))}
                </View>
                <View style={{ marginBottom: Height(10) }}>
                    {currentSlideIndex == slides.length - 1 ? (
                        <LinearGradient colors={['#075790', '#8041C6']} style={{ height: Height(60), width: Width(230), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', }}
                            start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }} useAngle={true}
                            angle={145}
                            angleCenter={{ x: 0.1, y: 0.1 }}>
                            <TouchableOpacity

                                style={styles.btn}
                                onPress={() => navigation.navigate('GetStarted')}>

                                <Text style={{ fontWeight: '500', fontSize: Height(18), color: 'white', position: 'absolute', fontFamily: 'Gilroy-SemiBold', }}>
                                    Get Started
                                </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    ) : (
                        <LinearGradient colors={['#075790', '#8041C6']} style={{ height: Height(60), width: Width(230), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', }}
                            start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }} useAngle={true}
                            angle={145}
                            angleCenter={{ x: 0.1, y: 0.1 }}>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={goToNextSlide}
                            >
                                <Text style={{ fontWeight: '500', fontSize: Height(18), color: 'white', position: 'absolute', fontFamily: 'Gilroy-SemiBold', textAlign: 'center' }}>
                                    Next
                                </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    )}
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <FlatList
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                // contentContainerStyle={{ height: height * 0.75 }}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={slides}
                pagingEnabled
                renderItem={({ item }) => <Slide item={item} />}
            />
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    subtitle: {
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: Height(16),
        marginTop: Height(30),
        maxWidth: '70%',
        textAlign: 'center',
        lineHeight: Height(24),
        fontFamily: 'Gilroy-Medium',
    },
    title: {
        color: 'black',
        fontSize: Height(24),
        marginTop: Height(50),
        textAlign: 'center',
        fontFamily: 'Gilroy-Medium',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    indicator: {
        height: Height(10),
        width: Width(10),
        backgroundColor: '#D9DBEE',
        marginHorizontal: 3,
        borderRadius: 50,
        marginBottom: Height(30)
    },
    btn: {
        height: Height(60), width: Width(230), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', alignItems: 'center'

    },

});
export default OnBoardingScreen;