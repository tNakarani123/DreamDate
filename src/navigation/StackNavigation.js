import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnBoardingScreen from '../screens/OnBoardingScreen'
import GetStartedScreen from '../screens/GetStartedScreen'
import SignUpScreen from '../screens/SignUpScreen'
import SignInScreen from '../screens/SignInScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import VerifyCodeScreen from '../screens/VerifyCodeScreen'
import ResetPasswordScreen from '../screens/ResetPasswordScreen'
import CongratulationsScreen from '../screens/CongratulationsScreen'
import SelectCountryScreen from '../screens/SelectCountryScreen'
import CreateProfileScreen from '../screens/CreateProfileScreen'
import AddPhotosScreen from '../screens/AddPhotosScreen'
import SelectInterestScreen from '../screens/SelectInterestScreen'
import IdealMatchScreen from '../screens/IdealMatchScreen'
import HomeScreen from '../screens/HomeScreen'
import TabNavigation from './TabNavigation'
import InboxScreen from '../screens/InboxScreen'
import MatchScreen from '../screens/MatchScreen'
import DetailsScreen from '../screens/DetailsScreen'
import SubscriptionScreen from '../screens/SubscriptionScreen'
import ChoosePaymentScreen from '../screens/ChoosePaymentScreen'
import AddNewCardScreen from '../screens/AddNewCardScreen'
import ReviewSummaryScreen from '../screens/ReviewSummaryScreen'
import EditProfileScreen from '../screens/EditProfileScreen'
import ProfileDetailScreen from '../screens/ProfileDetailScreen'
import SettingScreen from '../screens/SettingScreen'
import HelpCenterScreen from '../screens/HelpCenterScreen'
import InviteFriendScreen from '../screens/InviteFriendScreen'
import PersonalInfoScreen from '../screens/PersonalInfoScreen'
import DiscoverSettingScreen from '../screens/DiscoverSettingScreen'
import NotificationScreen from '../screens/NotificationScreen'
import PrivacyPermissionScreen from '../screens/PrivacyPermissionScreen'
import SecurityScreen from '../screens/SecurityScreen'
import LanguageScreen from '../screens/LanguageScreen'
import AboutAppScreen from '../screens/AboutAppScreen'
import SelectLocationScreen from '../screens/SelectLocationScreen'
import ChatScreen from '../screens/ChatScreen'

const Stack = createNativeStackNavigator()
const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Tab' component={TabNavigation} />
            <Stack.Screen name='SelectInterest' component={SelectInterestScreen} />
            <Stack.Screen name='OnBoarding' component={OnBoardingScreen} />
            <Stack.Screen name='ProfileDetail' component={ProfileDetailScreen} />
            <Stack.Screen name='EditProfile' component={EditProfileScreen} />
            <Stack.Screen name='CreateProfile' component={CreateProfileScreen} />
            <Stack.Screen name='IdealMatch' component={IdealMatchScreen} />
            <Stack.Screen name='SelectCountry' component={SelectCountryScreen} />
            <Stack.Screen name='AddPhotos' component={AddPhotosScreen} />
            <Stack.Screen name='Congratulations' component={CongratulationsScreen} />
            <Stack.Screen name='ResetPassword' component={ResetPasswordScreen} />
            <Stack.Screen name='SignIn' component={SignInScreen} />
            <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
            <Stack.Screen name='GetStarted' component={GetStartedScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
            <Stack.Screen name='VerifyCode' component={VerifyCodeScreen} />
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Inbox' component={InboxScreen} />
            <Stack.Screen name='Match' component={MatchScreen} />
            <Stack.Screen name='Details' component={DetailsScreen} />
            <Stack.Screen name='Subscription' component={SubscriptionScreen} />
            <Stack.Screen name='ChoosePayment' component={ChoosePaymentScreen} />
            <Stack.Screen name='AddNewCard' component={AddNewCardScreen} />
            <Stack.Screen name='ReviewSummary' component={ReviewSummaryScreen} />
            <Stack.Screen name='Setting' component={SettingScreen} />
            <Stack.Screen name='HelpCenter' component={HelpCenterScreen} />
            <Stack.Screen name='InviteFriend' component={InviteFriendScreen} />
            <Stack.Screen name='PersonalInfo' component={PersonalInfoScreen} />
            <Stack.Screen name='DiscoverSetting' component={DiscoverSettingScreen} />
            <Stack.Screen name='Notification' component={NotificationScreen} />
            <Stack.Screen name='PrivacyPolicy' component={PrivacyPermissionScreen} />
            <Stack.Screen name='Security' component={SecurityScreen} />
            <Stack.Screen name='Language' component={LanguageScreen} />
            <Stack.Screen name='AboutApp' component={AboutAppScreen} />
            <Stack.Screen name='SelectLocation' component={SelectLocationScreen} />
            <Stack.Screen name='Chat' component={ChatScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})