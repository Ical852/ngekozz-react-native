import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../utils'
import { IlSignUpSuccess } from '../../assets'
import { CustomButton, Gap } from '../../components'

const SignUpSuccess = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.il}>
            <IlSignUpSuccess/>
        </View>
        <Gap height={100} />
        <View style={styles.content}>
            <Text style={styles.title}>Sign up success!, you can start find your place</Text>
            <Text style={styles.desc}>Sign Up Berhasil, kini kamu dapat memulai mencari dan memsan kos kosan putra putri atau campuran yang kamu mau</Text>
        </View>
        <Gap height={16}/>
        <CustomButton title={"Continue"} onPress={() => navigation.replace('Main')}/>
        <Gap height={48}/>
    </View>
  )
}

export default SignUpSuccess

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: customColors.def.white,
        justifyContent: 'flex-end',
    },
    il: {
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontFamily: customFonts.medium,
        color: customColors.def.black
    },
    content: {
        marginHorizontal: 24
    },
    desc: {
        fontSize: 16,
        fontFamily: customFonts.regular,
        color: customColors.def.grey,
        marginTop: 8
    }
})