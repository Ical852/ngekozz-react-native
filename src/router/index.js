import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { ChangePw, Chatting, EditProfile, ExtendSuccess, GetStarted, KozDetail, Main, MyKoz, MyKozDetail, Notif, NotifDetail, OtpPhone, OtpValidate, Payment, PaySuccess, ResendOtp, SetProfile, SignUpSuccess, Splash, Transactions, VerifSucceed } from '../pages'
import { customColors } from '../utils'

const Stack = createNativeStackNavigator()

const Router = () => {
  return (
    <Stack.Navigator
        initialRouteName='Splash'
        screenOptions={{ headerShown: false, statusBarColor: customColors.def.red1 }}
    >
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='GetStarted' component={GetStarted}/>
        <Stack.Screen name='OtpPhone' component={OtpPhone}/>
        <Stack.Screen name='OtpValidate' component={OtpValidate}/>
        <Stack.Screen name='ResendOtp' component={ResendOtp}/>
        <Stack.Screen name='VerifSucceed' component={VerifSucceed}/>
        <Stack.Screen name='SetProfile' component={SetProfile}/>
        <Stack.Screen name='SignUpSuccess' component={SignUpSuccess}/>
        <Stack.Screen name='Main' component={Main}/>
        <Stack.Screen name='KozDetail' component={KozDetail}/>
        <Stack.Screen name='Chatting' component={Chatting}/>
        <Stack.Screen name='Payment' component={Payment}/>
        <Stack.Screen name='PaySuccess' component={PaySuccess}/>
        <Stack.Screen name='Notif' component={Notif}/>
        <Stack.Screen name='NotifDetail' component={NotifDetail}/>
        <Stack.Screen name='Transactions' component={Transactions}/>
        <Stack.Screen name='EditProfile' component={EditProfile}/>
        <Stack.Screen name='ChangePw' component={ChangePw}/>
        <Stack.Screen name='MyKoz' component={MyKoz}/>
        <Stack.Screen name='MyKozDetail' component={MyKozDetail}/>
        <Stack.Screen name='ExtendSuccess' component={ExtendSuccess}/>
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})