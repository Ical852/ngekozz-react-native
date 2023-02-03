import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { customColors, customFonts, linkApi, showError, showSuccess } from '../../utils'
import { BackHeader, CustomButton, Gap, Loading, OtpInput } from '../../components'
import { IlOtp2 } from '../../assets'
import axios from 'axios'
import { useFocusEffect } from '@react-navigation/native'
import { useCallback } from 'react'

const OtpValidate = ({ navigation, route }) => {
    const params = route.params
    const [loading, setLoading] = useState(false)
    const [otp, setOtp] = useState(['', '', '', ''])
    console.log(params.user);

    const createOTP = async () => {
        if (params.resend === undefined) {
            if (otp.filter(data => data === '').length === 4) {
                setLoading(true)
                await axios({
                    url: `${linkApi}/user/create`,
                    method: 'POST',
                    data: {
                        user_id: params.user._id
                    }
                })
                .then(res => {
                    showSuccess(`Kode OTP Anda adalah : ${res.data.data.otpVerif}`)
                    setOtp(res.data.data.otpVerif.split(''))
                    console.log(res.data.data);
                    setLoading(false)
                })
                .catch(err => {
                    showError('Validasi OTP Gagal')
                    console.log(res.message);
                    setLoading(false)
                })
                setLoading(false)
            }
        }
    }

    const resendOTPVerif = async () => {
        if (params.resend !== undefined) {
            setLoading(true)
            await axios({
                url: `${linkApi}/user/resend`,
                method: 'POST',
                data: {
                    user_id: params.user._id,
                    otp: params.otp
                }
            })
            .then(res => {
                showSuccess(`Kode OTP Baru Anda adalah : ${res.data.data.otpVerif}`)
                setOtp(res.data.data.otpVerif.split(''))
                console.log(res.data.data);
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                showError('Validasi OTP Gagal')
                console.log(res.message);
            })
            setLoading(false)
        }
    }

    const verifOTP = async () => {
        setLoading(true)
        await axios({
            url: `${linkApi}/user/resend`,
            method: 'POST',
            data: {
                user_id: params.user._id,
                otp: otp.join('')
            }
        })
        .then(res => {
            showSuccess(`Validasi OTP Berhasil`)
            console.log(res.data.data);
            setLoading(false)
            setTimeout(() => {
                if (params.type === 'signin') {
                    global.user = params.user
                    return navigation.replace('Main')
                }
                navigation.navigate('VerifSucceed', { user: params.user})
            }, 1500);
        })
        .catch(err => {
            setLoading(false)
            showError('Validasi OTP Baru Gagal')
            console.log(res.message);
        })
        setLoading(false)
    }

    const resendOTP = async () => {
        navigation.replace('ResendOtp', {
            otp: otp.join(''),
            user: params.user,
            phoneNumber: params.user.phoneNumber
        })
    }

    useFocusEffect(useCallback(() => {
        createOTP()
        resendOTPVerif()
    }, []))

    return (
        <>
            <ScrollView style={styles.container}>
                <BackHeader onPress={() => navigation.goBack()}/>
                <View style={styles.content}>
                    <IlOtp2/>
                    <Text style={styles.title}>OTP Verification</Text>
                    <Text style={styles.desc}>We have sent the verification code to your phone number <Text style={styles.bold}>{params.user.phoneNumber}</Text></Text>
                    <View style={styles.otpInputs}>
                        <OtpInput
                            value={otp[0]}
                            onChangeText={(text) => {
                                const newText = [...otp]
                                newText[0] = text
                                setOtp(newText)
                            }}
                        />
                        <OtpInput
                            value={otp[1]}
                            onChangeText={(text) => {
                                const newText = [...otp]
                                newText[1] = text
                                setOtp(newText)
                            }}
                        />
                        <OtpInput
                            value={otp[2]}
                            onChangeText={(text) => {
                                const newText = [...otp]
                                newText[2] = text
                                setOtp(newText)
                            }}
                        />
                        <OtpInput
                            value={otp[3]}
                            onChangeText={(text) => {
                                const newText = [...otp]
                                newText[3] = text
                                setOtp(newText)
                            }}
                        />
                    </View>
                    <View style={styles.resendText}>
                        <Text style={styles.resend}>Didn’t receive the OTP? </Text>
                        <TouchableOpacity onPress={() => resendOTP()}>
                            <Text style={styles.resend2}>Resend!</Text>
                        </TouchableOpacity>
                    </View>
                    <Gap height={130}/>
                    <CustomButton title={
                        params.type === 'signin' ? 'Sign In' : 'Sign Up'
                    } disable={otp.filter(data => data != '').length < 4} 
                        onPress={() => verifOTP()}
                    />
                </View>
                <Gap height={48}/>
            </ScrollView>
            {loading && (
                <Loading/>
            )}
        </>
    )
}

export default OtpValidate

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: customColors.def.white
    },
    content: {
        alignItems: 'center',
        marginTop: 32
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
    otpInputs: {
        width: Dimensions.get('window').width - 90,
        marginHorizontal: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 48
    },
    resendText: {
        flexDirection: 'row',
        marginTop: 32
    },
    resend: {
        fontSize: 14,
        fontFamily: customFonts.light,
        color: customColors.def.black
    },
    resend2: {
        fontSize: 14,
        fontFamily: customFonts.semiBold,
        color: customColors.def.black
    },
})