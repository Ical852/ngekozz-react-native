import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { customColors, customFonts } from '../../utils'
import { IlResendOtp } from '../../assets'

const ResendOtp = ({ navigation, route }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('OtpValidate', {
                resend: true,
                user: route.params.user,
                otp: route.params.otp
            })
        }, 2000);
    }, [])
  return (
    <View style={styles.container}>
        <IlResendOtp/>
        <Text style={styles.title}>Resending OTP</Text>
        <Text style={styles.desc}>Resending the verification code to your phone number <Text style={styles.bold}>{route.params.user.phoneNumber}</Text></Text>
        <ActivityIndicator color={customColors.def.red1} />
    </View>
  )
}

export default ResendOtp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: customColors.def.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontFamily: customFonts.semiBold,
        color: customColors.def.black,
        marginTop: 24
    }, 
    desc: {
        width: 260,
        fontSize: 14,
        fontFamily: customFonts.light,
        color: customColors.def.black,
        textAlign: 'center',
        marginTop: 6
    },
    bold: {
        fontFamily: customFonts.semiBold
    },
    indicator: {
        marginTop: 8
    }
})