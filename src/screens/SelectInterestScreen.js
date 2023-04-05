import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, VirtualizedList } from 'react-native'
import React, { useRef, useState } from 'react'
import RightArrowComponent from '../assets/images/RightArrow'
import { Height, Width } from '../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import ArtComponent from '../assets/images/Paint'
import LinearGradient from 'react-native-linear-gradient'
import PencilComponent from '../assets/images/Pencil'
import MakeupComponent from '../assets/images/Makeup'
import PhotoComponent from '../assets/images/Photo'
import HandComponent from '../assets/images/Hand'
import MicComponent from '../assets/images/Mic'
import DanceComponent from '../assets/images/Dance'
import PinComponent from '../assets/images/Pin'
import VideoComponent from '../assets/images/Video'
import BeerComponent from '../assets/images/Beer'
import CoffeeComponent from '../assets/images/Coffee'
import CocktailsComponent from '../assets/images/Cocktails'
import DrinksComponent from '../assets/images/Drinks'
import TeaComponent from '../assets/images/Tea'
import WineComponent from '../assets/images/Wine'
import BuddhComponent from '../assets/images/Buddh'
import ChristiansComponent from '../assets/images/Christians'
import HinduComponent from '../assets/images/Hindu'
import IslamComponent from '../assets/images/Islam'
import JudaismComponent from '../assets/images/Judaism'
import SikhComponent from '../assets/images/Sikh'
import AtheismsComponent from '../assets/images/Atheisms'
import JainComponent from '../assets/images/Jain'
import BadmintonComponent from '../assets/images/Badminton'
import CycleComponent from '../assets/images/Cycle'
import GymComponent from '../assets/images/Gym'
import HiitComponent from '../assets/images/Hiit'
import HikingComponent from '../assets/images/Hiking'
import HorseComponent from '../assets/images/Horse'
import PilatesComponent from '../assets/images/Pilates'
import RockComponent from '../assets/images/Rock'
import RollerComponent from '../assets/images/Roller'
import SkateComponent from '../assets/images/Skate'
import RunningComponent from '../assets/images/Running'
import SkiingComponent from '../assets/images/Skiing'
import YogaComponent from '../assets/images/Yoga'
// import SurfingComponent from './Surfing'
import SwimComponent from '../assets/images/Swim'
import WalkComponent from '../assets/images/Walk'
import VeganComponent from '../assets/images/Vegan'
import PizzaComponent from '../assets/images/Pizza'
import VegetarianComponent from '../assets/images/Vegetarian'
import FoodieComponent from '../assets/images/Foodie'
import SweetComponent from '../assets/images/Sweet'
import BakingComponent from '../assets/images/Baking'
import EatingComponent from '../assets/images/Eating'
import SushiComponent from '../assets/images/Sushi'
import BrunchesComponent from '../assets/images/Brunches'
import CookComponent from '../assets/images/Cook'
import HealthComponent from '../assets/images/Health'
import CookingComponent from '../assets/images/Cooking'
import StreetComponent from '../assets/images/Street'
import GigsComponent from '../assets/images/Gigs'
import StandComponent from '../assets/images/Stand'
import FestivalsComponent from '../assets/images/Festivals'
import MuseumsComponent from '../assets/images/Museums'
import TheatreComponent from '../assets/images/Theatre'
import NightclubtsComponent from '../assets/images/Nightclubts'
import NatureComponent from '../assets/images/Nature'
import BookComponent from '../assets/images/Book'
import CinemaComponent from '../assets/images/Cinema'
import PicnicsComponent from '../assets/images/Picnics'
import KaraokeComponent from '../assets/images/Karaoke'
import ComedyComponent from '../assets/images/Comedy'
import HorrorComponent from '../assets/images/Horror'
import FantasyComponent from '../assets/images/Fantasy'
import SciComponent from '../assets/images/Sci'
import RomComponent from '../assets/images/Rom'
import BollywoodComponent from '../assets/images/Bollywood'
import IndieComponent from '../assets/images/Indie'
import ActionComponent from '../assets/images/Action'
import DramaComponent from '../assets/images/Drama'
import HipHopComponent from '../assets/images/HipHop'
import RockMusicComponent from '../assets/images/RockMusic'
import ElectronicComponent from '../assets/images/Electronic'
import RBComponent from '../assets/images/RB'
import ClassicalComponent from '../assets/images/Classical'
import CountryComponent from '../assets/images/Country'
import JazzComponent from '../assets/images/Jazz'
import SoulComponent from '../assets/images/Soul'
import ReggaeComponent from '../assets/images/Reggae'
import AfroComponent from '../assets/images/Afro'
import ArabComponent from '../assets/images/Arab'
import PunkComponent from '../assets/images/Punk'
import BluesComponent from '../assets/images/Blues'
import RapComponent from '../assets/images/Rap'
import TechnoComponent from '../assets/images/Techno'
import HouseComponent from '../assets/images/House'
import NinesComponent from '../assets/images/90s'
import FolkComponent from '../assets/images/Folk'
import DogComponent from '../assets/images/Dog'
import CatComponent from '../assets/images/Cat'
import BirdsComponent from '../assets/images/Birds'
import FishComponent from '../assets/images/Fish'
import TransComponent from '../assets/images/Trans'
import AllyComponent from '../assets/images/Ally'
import FeminismComponent from '../assets/images/Feminism'
import VoterComponent from '../assets/images/Voter'
import HumanComponent from '../assets/images/Human'
import EnvironmentalismComponent from '../assets/images/Environmentalism'
import GreenComponent from '../assets/images/Green'
import SustainabilityComponent from '../assets/images/Sustainability'
import FootballComponent from '../assets/images/Football'
import TennisComponent from '../assets/images/Tennis'
import HockeyComponent from '../assets/images/Hockey'
import BasketballComponent from '../assets/images/Basketball'
import TableComponent from '../assets/images/Table'
import VolleyComponent from '../assets/images/Volleyball'
import GolfComponent from '../assets/images/Golf'
import RugbyComponent from '../assets/images/Rugby'
import BoxingComponent from '../assets/images/Boxing'
import RowingComponent from '../assets/images/Rowing'
import CurlingComponent from '../assets/images/Curling'
import BowlingComponent from '../assets/images/Bowling'
import HandballComponent from '../assets/images/Handball'
import GymnasticsComponent from '../assets/images/Gymnastics'
import CricketComponent from '../assets/images/Cricket'
import KartingComponent from '../assets/images/Karting'
import MartialComponent from '../assets/images/Martial'
import LawComponent from '../assets/images/Law'
import SpiritualComponent from '../assets/images/Spiritual'
import BoardComponent from '../assets/images/Board'
import TakeoutComponent from '../assets/images/Takeout'
import GameComponent from '../assets/images/Game'
import SmokingComponent from '../assets/images/Smoking'
import WinterComponent from '../assets/images/Winter'
import BeachComponent from '../assets/images/Beach'
import CampingComponent from '../assets/images/Camping'
import BackpackingComponent from '../assets/images/Backpacking'
import RoadComponent from '../assets/images/Road'
import HeartComponent from '../assets/images/Heart'
import AromatherapyComponent from '../assets/images/Aromatherapy'
import ASMRComponent from '../assets/images/ASMR'
import MeditationComponent from '../assets/images/Meditation'
import OrganicComponent from '../assets/images/Organic'
import PlantsComponent from '../assets/images/Plants'
import SelfcareComponent from '../assets/images/Selfcare'
import SurfingComponent from '../assets/images/Surfing'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import RBSheet from 'react-native-raw-bottom-sheet'
import { log, set } from 'react-native-reanimated'

const SelectInterestScreen = () => {
    const navigation = useNavigation()

    const creativity = [
        {
            id: 1,
            name: 'Art',
            img: <ArtComponent size={Height(17)} />,
            cat: 'Creativity'
        },
        {
            id: 2,
            name: 'Design',
            img: <PencilComponent size={Height(17)} />,
            cat: 'Creativity'
        },
        {
            id: 3,
            name: 'Make-up',
            img: <MakeupComponent size={Height(17)} />,
            cat: 'Creativity'
        },
        {
            id: 4,
            name: 'Photography',
            img: <PhotoComponent size={Height(17)} />,
            cat: 'Creativity'
        },
        {
            id: 5,
            name: 'Writing',
            img: <HandComponent size={Height(17)} />,
            cat: 'Creativity'
        },
        {
            id: 6,
            name: 'Singing',
            img: <MicComponent size={Height(17)} />,
            cat: 'Creativity'
        },
        {
            id: 7,
            name: 'Dancing',
            img: <DanceComponent size={Height(17)} />,
            cat: 'Creativity'
        },
        {
            id: 8,
            name: 'Crafts',
            img: <PinComponent size={Height(17)} />,
            cat: 'Creativity'
        },
        {
            id: 9,
            name: 'Making Videos',
            img: <VideoComponent size={Height(17)} />,
            cat: 'Creativity'
        },
    ]
    const drinks = [
        {
            id: 1,
            name: 'Beer',
            img: <BeerComponent size={Height(20)} />,
            cat: 'Drinks'
        },
        {
            id: 2,
            name: 'Coffee',
            img: <CoffeeComponent size={Height(20)} />,
            cat: 'Drinks'
        },
        {
            id: 3,
            name: 'Cocktails',
            img: <CocktailsComponent size={Height(20)} />,
            cat: 'Drinks'
        },
        {
            id: 4,
            name: 'Going Out For Drinks',
            img: <DrinksComponent size={Height(20)} />,
            cat: 'Drinks'
        },
        {
            id: 5,
            name: 'Tea Lover',
            img: <TeaComponent size={Height(20)} />,
            cat: 'Drinks'
        },
        {
            id: 6,
            name: 'Wine Time',
            img: <WineComponent size={Height(20)} />,
            cat: 'Drinks'
        },
    ]
    const faith = [
        {
            id: 1,
            name: 'Buddhism',
            img: <BuddhComponent size={Height(17)} />,
            cat: 'Faith'
        },
        {
            id: 2,
            name: 'Christianity',
            img: <ChristiansComponent size={Height(17)} />,
            cat: 'Faith'
        },
        {
            id: 3,
            name: 'Hinduism',
            img: <HinduComponent size={Height(17)} />,
            cat: 'Faith'
        },
        {
            id: 4,
            name: 'Islam',
            img: <IslamComponent size={Height(17)} />,
            cat: 'Faith'
        },
        {
            id: 5,
            name: 'Judaism',
            img: <JudaismComponent size={Height(17)} />,
            cat: 'Faith'
        },
        {
            id: 6,
            name: 'Sikhism',
            img: <SikhComponent size={Height(17)} />,
            cat: 'Faith'
        },
        {
            id: 7,
            name: 'Atheisms',
            img: <AtheismsComponent size={Height(17)} />,
            cat: 'Faith'
        },
        {
            id: 8,
            name: 'Jainism',
            img: <JainComponent size={Height(17)} />,
            cat: 'Faith'
        },

    ]
    const fitness = [
        {
            id: 1,
            name: 'Badminton',
            img: <BadmintonComponent size={Height(17)} />,
            cat: 'Fitness'
        },
        {
            id: 2,
            name: 'Cycling',
            img: <CycleComponent size={Height(17)} />,
            cat: 'Fitness'
        },
        {
            id: 3,
            name: 'Gym',
            img: <GymComponent size={Height(17)} />,
            cat: 'Fitness'
        },
        {
            id: 4,
            name: 'Hiit',
            img: <HiitComponent size={Height(17)} />,
            cat: 'Fitness'
        },
        {
            id: 5,
            name: 'Hiking',
            img: <HikingComponent size={Height(17)} />,
            cat: 'Fitness'
        },
        {
            id: 6,
            name: 'Horse Riding',
            img: <HorseComponent size={Height(17)} />,
            cat: 'Fitness'
        },
        {
            id: 7,
            name: 'Pilates',
            img: <PilatesComponent size={Height(17)} />,
            cat: 'Fitness'
        },
        {
            id: 8,
            name: 'Rock Climbing',
            img: <RockComponent size={Height(17)} />,
            cat: 'Fitness'
        },
        {
            id: 9,
            name: 'Roller Skating',
            img: <RollerComponent size={Height(17)} />,
            cat: 'Fitness'
        },
        {
            id: 10,
            name: 'Skateboarding',
            img: <SkateComponent size={Height(17)} />,
            cat: 'Fitness'
        },
        {
            id: 11,
            name: 'Running',
            img: <RunningComponent size={Height(17)} />,
            cat: 'Fitness'
        },
        {
            id: 12,
            name: 'Skiing',
            img: <SkiingComponent size={Height(17)} />,
            cat: 'Fitness'
        },
        {
            id: 13,
            name: 'Yoga',
            img: <YogaComponent size={Height(17)} />,
            cat: 'Fitness'
        },
        {
            id: 14,
            name: 'Surfing',
            img: <SurfingComponent size={Height(17)} />,
            cat: 'Fitness'
        },
        {
            id: 15,
            name: 'Swimming',
            img: <SwimComponent size={Height(17)} />,
            cat: 'Fitness'
        },
        {
            id: 16,
            name: 'Walking',
            img: <WalkComponent size={Height(17)} />,
            cat: 'Fitness'
        },
    ]
    const foodie = [
        {
            id: 1,
            name: 'Vegan',
            img: <VeganComponent size={Height(17)} />,
            cat: 'Foodie'
        },
        {
            id: 2,
            name: 'Pizza',
            img: <PizzaComponent size={Height(17)} />,
            cat: 'Foodie'
        },
        {
            id: 3,
            name: 'Vegetarian',
            img: <VegetarianComponent size={Height(17)} />,
            cat: 'Foodie'
        },
        {
            id: 4,
            name: 'Foodie',
            img: <FoodieComponent size={Height(17)} />,
            cat: 'Foodie'
        },
        {
            id: 5,
            name: 'Sweet Tooth',
            img: <SweetComponent size={Height(17)} />,
            cat: 'Foodie'
        },
        {
            id: 6,
            name: 'Baking',
            img: <BakingComponent size={Height(17)} />,
            cat: 'Foodie'
        },
        {
            id: 7,
            name: 'Eating Out',
            img: <EatingComponent size={Height(17)} />,
            cat: 'Foodie'
        },
        {
            id: 8,
            name: 'Sushi',
            img: <SushiComponent size={Height(17)} />,
            cat: 'Foodie'
        },
        {
            id: 9,
            name: 'Brunches',
            img: <BrunchesComponent size={Height(17)} />,
            cat: 'Foodie'
        },
        {
            id: 10,
            name: 'Cook Alongs',
            img: <CookComponent size={Height(17)} />,
            cat: 'Foodie'
        },
        {
            id: 11,
            name: 'Cooking',
            img: <CookingComponent size={Height(17)} />,
            cat: 'Foodie'
        },
        {
            id: 12,
            name: 'Health Food',
            img: <HealthComponent size={Height(17)} />,
            cat: 'Foodie'
        },
        {
            id: 13,
            name: 'Street Food',
            img: <StreetComponent size={Height(17)} />,
            cat: 'Foodie'
        },

    ]
    const going = [
        {
            id: 1,
            name: 'Gigs',
            img: <GigsComponent size={Height(17)} />,
            cat: 'Going Out'
        },
        {
            id: 2,
            name: 'Stand Up',
            img: <StandComponent size={Height(17)} />,
            cat: 'Going Out'
        },
        {
            id: 3,
            name: 'Festivals',
            img: <FestivalsComponent size={Height(17)} />,
            cat: 'Going Out'
        },
        {
            id: 4,
            name: 'Museums & Galleries',
            img: <MuseumsComponent size={Height(17)} />,
            cat: 'Going Out'
        },
        {
            id: 5,
            name: 'Theatre',
            img: <TheatreComponent size={Height(17)} />,
            cat: 'Going Out'
        },
        {
            id: 6,
            name: 'Nightclubts',
            img: <NightclubtsComponent size={Height(17)} />,
            cat: 'Going Out'
        },
        {
            id: 7,
            name: 'Bars',
            img: <DrinksComponent size={Height(17)} />,
            cat: 'Going Out'
        },
        {
            id: 8,
            name: 'Nature',
            img: <NatureComponent size={Height(17)} />,
            cat: 'Going Out'
        },
        {
            id: 9,
            name: 'Books Clubs',
            img: <BookComponent size={Height(17)} />,
            cat: 'Going Out'
        },
        {
            id: 10,
            name: 'Cinema',
            img: <CinemaComponent size={Height(17)} />,
            cat: 'Going Out'
        },
        {
            id: 11,
            name: 'Picnics',
            img: <PicnicsComponent size={Height(17)} />,
            cat: 'Going Out'
        },
        {
            id: 12,
            name: 'Coffee Chats',
            img: <CoffeeComponent size={Height(17)} />,
            cat: 'Going Out'
        },
        {
            id: 13,
            name: 'Karaoke',
            img: <KaraokeComponent size={Height(17)} />,
            cat: 'Going Out'
        },
    ]
    const films = [
        {
            id: 1,
            name: 'Comedy',
            img: <ComedyComponent size={Height(17)} />,
            cat: 'Films'
        },
        {
            id: 2,
            name: 'Drama',
            img: <TheatreComponent size={Height(17)} />,
            cat: 'Films'
        },
        {
            id: 3,
            name: 'Horror',
            img: <HorrorComponent size={Height(17)} />,
            cat: 'Films'
        },
        {
            id: 4,
            name: 'Fantasy',
            img: <FantasyComponent size={Height(17)} />,
            cat: 'Films'
        },
        {
            id: 5,
            name: 'Sci-Fi',
            img: <SciComponent size={Height(17)} />,
            cat: 'Films'
        },
        {
            id: 6,
            name: 'Rom-Com',
            img: <RomComponent size={Height(17)} />,
            cat: 'Films'
        },
        {
            id: 7,
            name: 'Bollywood',
            img: <BollywoodComponent size={Height(17)} />,
            cat: 'Films'
        },
        {
            id: 8,
            name: 'Indie',
            img: <IndieComponent size={Height(17)} />,
            cat: 'Films'
        },
        {
            id: 9,
            name: 'Action',
            img: <ActionComponent size={Height(17)} />,
            cat: 'Films'
        },
        {
            id: 10,
            name: 'K-Drama',
            img: <DramaComponent size={Height(17)} />,
            cat: 'Films'
        }
    ]
    const music = [
        {
            id: 1,
            name: 'Hip-Hop',
            img: <HipHopComponent size={Height(17)} />,
            cat: 'Music'
        },
        {
            id: 2,
            name: 'Rock',
            img: <RockMusicComponent size={Height(17)} />,
            cat: 'Music'
        },
        {
            id: 3,
            name: 'Electronic',
            img: <ElectronicComponent size={Height(17)} />,
            cat: 'Music'
        },
        {
            id: 4,
            name: 'R&B',
            img: <RBComponent size={Height(17)} />,
            cat: 'Music'
        },
        {
            id: 5,
            name: 'Classical',
            img: <ClassicalComponent size={Height(17)} />,
            cat: 'Music'
        },
        {
            id: 6,
            name: 'Country',
            img: <CountryComponent size={Height(17)} />,
            cat: 'Music'
        },
        {
            id: 7,
            name: 'Jazz',
            img: <JazzComponent size={Height(17)} />,
            cat: 'Music'
        },
        {
            id: 8,
            name: 'Soul',
            img: <SoulComponent size={Height(17)} />,
            cat: 'Music'
        },
        {
            id: 9,
            name: 'Reggae',
            img: <ReggaeComponent size={Height(17)} />,
            cat: 'Music'
        },
        {
            id: 10,
            name: 'Afro',
            img: <AfroComponent size={Height(17)} />,
            cat: 'Music'
        },
        {
            id: 11,
            name: 'Arab',
            img: <ArabComponent size={Height(17)} />,
            cat: 'Music'
        },
        {
            id: 12,
            name: 'Punk',
            img: <PunkComponent size={Height(17)} />,
            cat: 'Music'
        },
        {
            id: 13,
            name: 'Metal',
            img: <KaraokeComponent size={Height(17)} />,
            cat: 'Music'
        },
        {
            id: 14,
            name: 'Blues',
            img: <BluesComponent size={Height(17)} />,
            cat: 'Music'
        },
        {
            id: 15,
            name: 'Rap',
            img: <RapComponent size={Height(17)} />,
            cat: 'Music'
        },
        {
            id: 16,
            name: 'Techno',
            img: <TechnoComponent size={Height(17)} />,
            cat: 'Music'
        },
        {
            id: 17,
            name: 'House',
            img: <HouseComponent size={Height(17)} />,
            cat: 'Music'
        },
        {
            id: 18,
            name: '90s',
            img: <NinesComponent size={Height(17)} />,
            cat: 'Music'
        },
        {
            id: 19,
            name: 'Folk & Acoustic',
            img: <FolkComponent size={Height(17)} />,
            cat: 'Music'
        },
    ]
    const pets = [
        {
            id: 1,
            name: 'Dog',
            img: <DogComponent size={Height(17)} />,
            cat: 'Pet'
        },
        {
            id: 2,
            name: 'Cats',
            img: <CatComponent size={Height(17)} />,
            cat: 'Pet'
        },
        {
            id: 3,
            name: 'Birds',
            img: <BirdsComponent size={Height(17)} />,
            cat: 'Pet'
        },
        {
            id: 4,
            name: 'Fish',
            img: <FishComponent size={Height(17)} />,
            cat: 'Pet'
        }
    ]
    const social = [
        {
            id: 1,
            name: 'Trans Ally',
            img: <TransComponent size={Height(17)} />,
            cat: 'Social Activism and Allyship'
        },
        {
            id: 2,
            name: 'LGBTQIA + Ally',
            img: <AllyComponent size={Height(17)} />,
            cat: 'Social Activism and Allyship'
        },
        {
            id: 3,
            name: 'Feminism',
            img: <FeminismComponent size={Height(17)} />,
            cat: 'Social Activism and Allyship'
        },
        {
            id: 4,
            name: 'Voter Rights',
            img: <VoterComponent size={Height(17)} />,
            cat: 'Social Activism and Allyship'
        },
        {
            id: 5,
            name: 'Human Rights',
            img: <HumanComponent size={Height(17)} />,
            cat: 'Social Activism and Allyship'
        },
        {
            id: 6,
            name: 'Environmentalism',
            img: <EnvironmentalismComponent size={Height(17)} />,
            cat: 'Social Activism and Allyship'
        },
        {
            id: 7,
            name: 'Going Green',
            img: <GreenComponent size={Height(17)} />,
            cat: 'Social Activism and Allyship'
        },
        {
            id: 8,
            name: 'Sustainability',
            img: <SustainabilityComponent size={Height(17)} />,
            cat: 'Social Activism and Allyship'
        },

    ]
    const sports = [
        {
            id: 1,
            name: 'Football',
            img: <FootballComponent size={Height(17)} />,
            cat: 'Sports'
        },
        {
            id: 2,
            name: 'Tennis',
            img: <TennisComponent size={Height(17)} />,
            cat: 'Sports'
        },
        {
            id: 3,
            name: 'Hockey',
            img: <HockeyComponent size={Height(17)} />,
            cat: 'Sports'
        },
        {
            id: 4,
            name: 'Basketball',
            img: <BasketballComponent size={Height(17)} />,
            cat: 'Sports'
        },
        {
            id: 5,
            name: 'Table Tennis',
            img: <TableComponent size={Height(17)} />,
            cat: 'Sports'
        },
        {
            id: 6,
            name: 'Volleyball',
            img: <VolleyComponent size={Height(17)} />,
            cat: 'Sports'
        },
        {
            id: 7,
            name: 'Golf',
            img: <GolfComponent size={Height(17)} />,
            cat: 'Sports'
        },
        {
            id: 8,
            name: 'Rugby',
            img: <RugbyComponent size={Height(17)} />,
            cat: 'Sports'
        },
        {
            id: 9,
            name: 'Boxing',
            img: <BoxingComponent size={Height(17)} />,
            cat: 'Sports'
        },
        {
            id: 10,
            name: 'Rowing',
            img: <RowingComponent size={Height(17)} />,
            cat: 'Sports'
        },
        {
            id: 11,
            name: 'Curling',
            img: <CurlingComponent size={Height(17)} />,
            cat: 'Sports'
        },
        {
            id: 12,
            name: 'Bowling',
            img: <BowlingComponent size={Height(17)} />,
            cat: 'Sports'
        },
        {
            id: 13,
            name: 'Handball',
            img: <HandballComponent size={Height(17)} />,
            cat: 'Sports'
        },
        {
            id: 14,
            name: 'Gymnastics',
            img: <GymnasticsComponent size={Height(17)} />,
            cat: 'Sports'
        },
        {
            id: 15,
            name: 'Cricket',
            img: <CricketComponent size={Height(17)} />,
            cat: 'Sports'
        },
        {
            id: 16,
            name: 'Go karting',
            img: <KartingComponent size={Height(17)} />,
            cat: 'Sports'
        },
        {
            id: 17,
            name: 'Martial Arts',
            img: <MartialComponent size={Height(17)} />,
            cat: 'Sports'
        },
    ]
    const spirituality = [
        {
            id: 1,
            name: 'Astrology',
            img: <HinduComponent size={Height(17)} />,
            cat: 'Spirituality'
        },
        {
            id: 2,
            name: 'Law Of Araction',
            img: <LawComponent size={Height(17)} />,
            cat: 'Spirituality'
        },
        {
            id: 3,
            name: 'Spiritual',
            img: <SpiritualComponent size={Height(17)} />,
            cat: 'Spirituality'
        },
    ]
    const stay = [
        {
            id: 1,
            name: 'Board Games',
            img: <BoardComponent size={Height(17)} />,
            cat: 'Stay In'
        },
        {
            id: 2,
            name: 'Gardening',
            img: <VeganComponent size={Height(17)} />,
            cat: 'Stay In'
        },
        {
            id: 3,
            name: 'Takeout',
            img: <TakeoutComponent size={Height(17)} />,
            cat: 'Stay In'
        },
        {
            id: 4,
            name: 'Gaming',
            img: <GameComponent size={Height(17)} />,
            cat: 'Stay In'
        },
        {
            id: 5,
            name: 'Rugby',
            img: <RugbyComponent size={Height(17)} />,
            cat: 'Stay In'
        },
        {
            id: 6,
            name: 'Smoking',
            img: <SmokingComponent size={Height(17)} />,
            cat: 'Stay In'
        },
        {
            id: 7,
            name: 'Film Nights',
            img: <CinemaComponent size={Height(17)} />,
            cat: 'Stay In'
        },
        {
            id: 8,
            name: 'Reading',
            img: <BookComponent size={Height(17)} />,
            cat: 'Stay In'
        }
    ]
    const travelling = [
        {
            id: 1,
            name: 'Beaches',
            img: <BeachComponent size={Height(17)} />,
            cat: 'Travelling'
        },
        {
            id: 2,
            name: 'Winter Sports',
            img: <WinterComponent size={Height(17)} />,
            cat: 'Travelling'
        },
        {
            id: 3,
            name: 'Camping',
            img: <CampingComponent size={Height(17)} />,
            cat: 'Travelling'
        },
        {
            id: 4,
            name: 'Backpacking',
            img: <BackpackingComponent size={Height(17)} />,
            cat: 'Travelling'
        },
        {
            id: 5,
            name: 'Smoking',
            img: <SmokingComponent size={Height(17)} />,
            cat: 'Travelling'
        },
        {
            id: 6,
            name: 'Film Nights',
            img: <CinemaComponent size={Height(17)} />,
            cat: 'Travelling'
        },
        {
            id: 7,
            name: 'Hiking Trips',
            img: <HikingComponent size={Height(17)} />,
            cat: 'Travelling'
        },
        {
            id: 8,
            name: 'Road Trips',
            img: <RoadComponent size={Height(17)} />,
            cat: 'Travelling'
        }
    ]
    const values = [
        {
            id: 1,
            name: 'Loyal',
            img: <HeartComponent size={Height(17)} />,
            cat: 'Values & Traits'
        },
        {
            id: 2,
            name: 'Fun',
            img: <HeartComponent size={Height(17)} />,
            cat: 'Values & Traits'
        },
        {
            id: 3,
            name: 'Bubbly',
            img: <HeartComponent size={Height(17)} />,
            cat: 'Values & Traits'
        },
        {
            id: 4,
            name: 'Calm',
            img: <HeartComponent size={Height(17)} />,
            cat: 'Values & Traits'
        },
        {
            id: 5,
            name: 'Charismatic',
            img: <HeartComponent size={Height(17)} />,
            cat: 'Values & Traits'
        },
        {
            id: 6,
            name: 'Charming',
            img: <HeartComponent size={Height(17)} />,
            cat: 'Values & Traits'
        },
        {
            id: 7,
            name: 'Chilled Out',
            img: <HeartComponent size={Height(17)} />,
            cat: 'Values & Traits'
        },
        {
            id: 8,
            name: 'Reserved',
            img: <HeartComponent size={Height(17)} />,
            cat: 'Values & Traits'
        },
        {
            id: 9,
            name: 'Smart',
            img: <HeartComponent size={Height(17)} />,
            cat: 'Values & Traits'
        },
        {
            id: 10,
            name: 'Active',
            img: <HeartComponent size={Height(17)} />,
            cat: 'Values & Traits'
        },
        {
            id: 11,
            name: 'Witty',
            img: <HeartComponent size={Height(17)} />,
            cat: 'Values & Traits'
        },
        {
            id: 12,
            name: 'Family-Orientated',
            img: <HeartComponent size={Height(17)} />,
            cat: 'Values & Traits'
        },
        {
            id: 13,
            name: 'Ambitious',
            img: <HeartComponent size={Height(17)} />,
            cat: 'Values & Traits'
        },
        {
            id: 14,
            name: 'Confident',
            img: <HeartComponent size={Height(17)} />,
            cat: 'Values & Traits'
        },
        {
            id: 15,
            name: 'Empathetic',
            img: <HeartComponent size={Height(17)} />,
            cat: 'Values & Traits'
        },
        {
            id: 16,
            name: 'Sense of Humour',
            img: <HeartComponent size={Height(17)} />,
            cat: 'Values & Traits'
        },
        {
            id: 17,
            name: 'Quirky',
            img: <HeartComponent size={Height(17)} />,
            cat: 'Values & Traits'
        },
        {
            id: 18,
            name: 'Reflective',
            img: <HeartComponent size={Height(17)} />,
            cat: 'Values & Traits'
        },
        {
            id: 19,
            name: 'Energetic',
            img: <HeartComponent size={Height(17)} />,
            cat: 'Values & Traits'
        },
        {
            id: 20,
            name: 'Outgoing',
            img: <HeartComponent size={Height(17)} />,
            cat: 'Values & Traits'
        },
        {
            id: 21,
            name: 'Socially Aware',
            img: <HeartComponent size={Height(17)} />,
            cat: 'Values & Traits'
        },
        {
            id: 22,
            name: 'Open-Minded',
            img: <HeartComponent size={Height(17)} />,
            cat: 'Values & Traits'
        },
        {
            id: 23,
            name: 'Self-Aware',
            img: <HeartComponent size={Height(17)} />,
            cat: 'Values & Traits'
        },
        {
            id: 24,
            name: 'Adventurous',
            img: <HeartComponent size={Height(17)} />,
            cat: 'Values & Traits'
        },
        {
            id: 25,
            name: 'Independent',
            img: <HeartComponent size={Height(17)} />,
            cat: 'Values & Traits'
        }
    ]
    const wellness = [
        {
            id: 1,
            name: 'Aromatherapy',
            img: <AromatherapyComponent size={Height(17)} />,
            cat: 'Wellness'
        },
        {
            id: 2,
            name: 'ASMR',
            img: <ASMRComponent size={Height(17)} />,
            cat: 'Wellness'
        },
        {
            id: 3,
            name: 'Meditation',
            img: <MeditationComponent size={Height(17)} />,
            cat: 'Wellness'
        },
        {
            id: 4,
            name: 'Nature',
            img: <VeganComponent size={Height(17)} />,
            cat: 'Wellness'
        },
        {
            id: 5,
            name: 'Organic',
            img: <OrganicComponent size={Height(17)} />,
            cat: 'Wellness'
        },
        {
            id: 6,
            name: 'Plants',
            img: <PlantsComponent size={Height(17)} />,
            cat: 'Wellness'
        },
        {
            id: 7,
            name: 'Yoga',
            img: <YogaComponent size={Height(17)} />,
            cat: 'Wellness'
        },
        {
            id: 8,
            name: 'Self Care',
            img: <SelfcareComponent size={Height(17)} />,
            cat: 'Wellness'
        },
        {
            id: 9,
            name: 'Journalling',
            img: <YogaComponent size={Height(17)} />,
            cat: 'Wellness'
        },
    ]

    const data = [
        {
            id: 1,
            name: 'Creativity',
            icon: 'checkbox-marked-circle',
            icon_change: 'checkbox-blank-circle-outline',
        },
        {
            id: 2,
            name: 'Drinks',
            icon: 'checkbox-marked-circle',
            icon_change: 'checkbox-blank-circle-outline',
        },
        {
            id: 3,
            name: 'Faith',
            icon: 'checkbox-marked-circle',
            icon_change: 'checkbox-blank-circle-outline',
        },
        {
            id: 4,
            name: 'Fitness',
            icon: 'checkbox-marked-circle',
            icon_change: 'checkbox-blank-circle-outline',
        },
        {
            id: 5,
            name: 'Foodie',
            icon: 'checkbox-marked-circle',
            icon_change: 'checkbox-blank-circle-outline',
        },
        {
            id: 6,
            name: 'Going Out',
            icon: 'checkbox-marked-circle',
            icon_change: 'checkbox-blank-circle-outline',
        },
        {
            id: 7,
            name: 'Films',
            icon: 'checkbox-marked-circle',
            icon_change: 'checkbox-blank-circle-outline',
        },
        {
            id: 8,
            name: 'Music',
            icon: 'checkbox-marked-circle',
            icon_change: 'checkbox-blank-circle-outline',
        },
        {
            id: 9,
            name: 'Pet',
            icon: 'checkbox-marked-circle',
            icon_change: 'checkbox-blank-circle-outline',
        },
        {
            id: 10,
            name: 'Social Activism and Allyship',
            icon: 'checkbox-marked-circle',
            icon_change: 'checkbox-blank-circle-outline',
        },
        {
            id: 11,
            name: 'Sports',
            icon: 'checkbox-marked-circle',
            icon_change: 'checkbox-blank-circle-outline',
        },
        {
            id: 12,
            name: 'Spirituality',
            icon: 'checkbox-marked-circle',
            icon_change: 'checkbox-blank-circle-outline',
        },
        {
            id: 13,
            name: 'Staying In',
            icon: 'checkbox-marked-circle',
            icon_change: 'checkbox-blank-circle-outline',
        },
        {
            id: 14,
            name: 'Travelling',
            icon: 'checkbox-marked-circle',
            icon_change: 'checkbox-blank-circle-outline',
        },
        {
            id: 15,
            name: 'Values & Traits',
            icon: 'checkbox-marked-circle',
            icon_change: 'checkbox-blank-circle-outline',
        },
        {
            id: 16,
            name: 'Wellness',
            icon: 'checkbox-marked-circle',
            icon_change: 'checkbox-blank-circle-outline',
        },
    ]

    const refRBSheet = useRef();
    const [name, setName] = useState('')
    const [select, setSelect] = useState([])
    const [artists, setArtists] = useState([]);
    const handlePress = (item) => {
        console.log({ item });
        console.log(item.id);
        console.log({ 'name': item.name });
        if (item.id === 1) {
            console.log('Creativity');
            setSelect(creativity)
            setName('Creativity')
        } else if (item.id === 2) {
            console.log('Drink');
            setSelect(drinks)
            setName('Drink')
        } else if (item.id === 3) {
            console.log('Faith');
            setSelect(faith)
            setName('Faith')
        } else if (item.id === 4) {
            console.log('Fitness');
            setSelect(fitness)
            setName('Fitness')
        } else if (item.id === 5) {
            console.log('Foodie');
            setSelect(foodie)
            setName('Foodie')
        } else if (item.id === 6) {
            console.log('Going out');
            setSelect(going)
            setName('Going Out')
        } else if (item.id === 7) {
            console.log('Films');
            setSelect(films)
            setName('Films')
        } else if (item.id === 8) {
            console.log('Music');
            setSelect(music)
            setName('Music')
        } else if (item.id === 9) {
            console.log('Pet');
            setSelect(pets)
            setName('Pets')
        } else if (item.id === 10) {
            console.log('Social Activism and Allyship');
            setSelect(social)
            setName('Social Activism and Allyship')
        } else if (item.id === 11) {
            console.log('Sports');
            setSelect(sports)
            setName('Sports')
        } else if (item.id === 12) {
            console.log('Spirituality');
            setSelect(spirituality)
            setName('Spirituality')
        } else if (item.id === 13) {
            console.log('Staying In');
            setSelect(stay)
            setName('Staying In')
        } else if (item.id === 14) {
            console.log('Travelling');
            setSelect(travelling)
            setName('Travelling')
        } else if (item.id === 15) {
            console.log('Values & Traits');
            setSelect(values)
            setName('Values & Traits')
        } else {
            console.log('Wellness');
            setSelect(wellness)
            setName('Wellness')
        }
    }

    console.log({ select });

    const [cre, setCre] = useState(false)
    const [dri, setDri] = useState(false)
    const [fai, setFai] = useState(false)
    const [fit, setFit] = useState(false)
    const [food, setFood] = useState(false)
    const [go, setGo] = useState(false)
    const [fil, setFil] = useState(false)
    const [mus, setMus] = useState(false)
    const [pet, setPet] = useState(false)
    const [soc, setSoc] = useState(false)
    const [spo, setSpo] = useState(false)
    const [spi, setSpi] = useState(false)
    const [sta, setSta] = useState(false)
    const [tra, setTra] = useState(false)
    const [val, setVal] = useState(false)
    const [wel, setWel] = useState(false)

    const handleOnPress = (item) => {
        const newItem = select.map((val) => {
            if (val.id === item.id) {
                return { ...val, selected: !val.selected }
            } else {
                return val
            }
        })
        setSelect(newItem)


        const a = newItem.map((i) => {
            console.log({ abc: i.selected });
            if (i.selected === true) {
                return !cre
            }
        })
        setCre(a)
        console.log({ a });


    }

    console.log({ cre: cre.length });







    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(20), marginLeft: Width(30) }}>
                <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
                    <RightArrowComponent height={Height(16)} width={Width(16)} />
                </TouchableOpacity>
                <Text style={{ fontSize: Height(20), marginLeft: Width(30), fontFamily: 'Gilroy-SemiBold', color: '#8041C6' }}>Select Your Interest</Text>
            </View>
            <Text style={{ marginHorizontal: Width(30), fontFamily: 'Gilroy-SemiBold', color: 'black', fontSize: Height(14), marginTop: Height(10) }}>
                Select Your Interests to match with users who
                have similar things in common.
            </Text>

            <FlatList
                data={data}
                style={{ marginTop: Height(10) }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={{ height: Height(60), width: Width(315), backgroundColor: 'white', marginTop: Height(20), alignSelf: 'center', borderRadius: Width(20), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(30) }} onPress={() => { refRBSheet.current.open(), handlePress(item) }}>
                            <Text style={{ fontSize: Height(15), fontFamily: 'Gilroy-SemiBold', color: 'black' }}>{item.name}</Text>
                            <MaterialCommunityIcons name={item.icon_change} color='#8041C6' size={Height(22)} />
                        </TouchableOpacity>
                    )
                }}
            />

            <LinearGradient colors={['#075790', '#8041C6']} style={{ height: Height(60), width: Width(230), alignSelf: 'center', borderRadius: Width(50), justifyContent: 'center', }}
                start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }} useAngle={true}
                angle={145}
                angleCenter={{ x: 0.1, y: 0.1 }}>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center', alignItems: 'center'
                    }}
                    onPress={() => navigation.navigate('IdealMatch')}>
                    <Text style={{ fontSize: Height(18), color: 'white', position: 'absolute', fontFamily: 'Gilroy-SemiBold', }}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </LinearGradient>

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                closeOnPressBack={true}
                customStyles={{
                    draggableIcon: {
                        backgroundColor: "#000"
                    },
                    container: {
                    },

                }}


            >
                <Text style={{ fontSize: Height(20), fontFamily: 'Gilroy-SemiBold', color: 'black', marginLeft: Width(30) }}>{name}</Text>
                <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: Height(5), }}>
                    {
                        select.map((item, k) => {
                            return (
                                <TouchableOpacity style={{ padding: Width(10), borderWidth: 1, borderRadius: Width(50), marginLeft: Width(20), marginVertical: Height(5), borderColor: '#8041C6', flexDirection: 'row', alignItems: 'center', backgroundColor: item.selected ? '#8041C6' : 'white' }} key={k} onPress={() => { handleOnPress(item) }}>
                                    {item.img}
                                    <Text style={{ fontSize: Height(15), fontFamily: 'Gilroy-SemiBold', color: !item.selected ? '#8041C6' : 'white', marginLeft: Width(5) }}>{item.name}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
                <MaterialCommunityIcons name={'checkbox-marked-circle'} color='#8041C6' size={Height(30)} style={{ alignSelf: 'flex-end', marginRight: Width(30), paddingBottom: Height(20) }} onPress={() => { artists.push(select), refRBSheet.current.close() }} />
                <TouchableOpacity>

                </TouchableOpacity>
            </RBSheet>





        </SafeAreaView>
    )
}

export default SelectInterestScreen

const styles = StyleSheet.create({})