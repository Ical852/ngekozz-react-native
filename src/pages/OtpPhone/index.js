import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { customColors, customFonts, linkApi, showError, showSuccess } from '../../utils'
import { IlOtp1 } from '../../assets'
import { BackHeader, CustomButton, CustomInput, Gap } from '../../components'
import axios from 'axios'
import { useState } from 'react'

const OtpPhone = ({ navigation, route }) => {
    const params = route.params
    const [phoneNumber, setPhoneNumber]=  useState('')

    const onSubmit = async () => {
        if (params.type === 'signin') {
            await axios({
                url: `${linkApi}/user/signin`,
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                data: {
                    "phone_number": phoneNumber
                }
            })
            .then(res => {
                const user = res.data.data
                console.log(user);
                showSuccess(`Wellcome ${user.fullName}, please continue to validate OTP`)
                setTimeout(() => {
                    navigation.navigate('OtpValidate', {user, type: params.type})
                }, 1500);
            })
            .catch(err => {
                showError('Oops Phone Number not Found')
                console.log(err.message);
            })
        }
        if (params.type === 'signup') {
            await axios({
                url: `${linkApi}/user/signup`,
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                data: {
                    "phone_number": phoneNumber
                }
            })
            .then(res => {
                const user = res.data.data
                console.log(user);
                showSuccess(`Sign up Success, please continue to validate OTP`)
                setTimeout(() => {
                    navigation.navigate('OtpValidate', {user, type: params.type})
                }, 1500);
            })
            .catch(err => {
                showError('Oops Phone Number not Found')
                console.log(err.message);
            })
        }
    }

    return (
        <ScrollView style={styles.container}>
            <BackHeader onPress={() => navigation.goBack()}/>
            <View style={styles.iltop}>
                <IlOtp1/>
                <Text style={styles.title}>OTP Verification</Text>
                <Text style={styles.desc}>Enter your phone number to receice one time password</Text>
            </View>
            <View style={styles.bottom}>
                <CustomInput
                    title={"Phone Number"}
                    placeholder={"Masukkan Phone Number"}
                    onChangeText={(text) => setPhoneNumber(text)}
                    value={phoneNumber}
                    keyboardType={'numeric'}
                />
                <Gap height={24}/>
                <View style={styles.btncont}>
                    <CustomButton
                        title={"Send OTP"}
                        onPress={() => onSubmit()}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default OtpPhone

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: customColors.def.white
    },
    back: {
        marginLeft: 24,
        marginTop: 24
    },
    iltop: {
        marginTop: 32,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontFamily: customFonts.semiBold,
        color: customColors.def.black,
        marginTop: 24
    },
    desc: {
        fontSize: 14,
        fontFamily: customFonts.light,
        color: customColors.def.grey,
        width: 207,
        textAlign: 'center',
        marginTop: 6
    },
    btncont: {
        marginHorizontal: 24,
        alignItems: 'center'
    },
    bottom: {
        marginHorizontal: 24,
        marginTop: Dimensions.get('window').height / 5,
        paddingBottom: 48
    }
})