import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IlWelcome } from '../../assets'
import { customColors, customFonts } from '../../utils'
import { CustomButton, Gap, TextBtn } from '../../components'

const GetStarted = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <IlWelcome/>
            <Text style={styles.title}>Welcome to Ngekozzz App</Text>
            <Text style={styles.desc}>Selamat datang din Ngekozz, tempat dimana kamu dapat mencari kosan untuk tempat tinggal.</Text>
            <Gap height={32}/>
            <CustomButton
                onPress={() => navigation.navigate('OtpPhone', {
                    type: 'signup'
                })}
                title={"Get Started"}
            />
            <Gap height={24}/>
            <TextBtn
                title={"Already have an account? "}
                btn={"Sign In!"}
                onPress={() => navigation.navigate('OtpPhone', {
                    type: 'signin'
                })}
            />
        </View>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: customColors.def.white
    },
    title: {
        fontSize: 32,
        fontFamily: customFonts.semiBold,
        color: customColors.def.black,
        width: 327,
        textAlign: 'center',
        marginTop: 103,
        lineHeight: 35
    },
    desc: {
        fontSize: 16,
        fontFamily: customFonts.regular,
        color: customColors.def.grey,
        width: 327,
        textAlign: 'center',
        marginTop: 24
    }
})