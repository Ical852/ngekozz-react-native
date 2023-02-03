import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'

const OtpInput = ({ onChangeText, value }) => {
  return (
    <View style={styles.container}>
        <TextInput style={styles.input} onChangeText={onChangeText} value={value}/>
    </View>
  )
}

export default OtpInput

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: 45,
        borderWidth: 1,
        borderColor: customColors.def.greyL,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        fontSize: 22,
        fontFamily: customFonts.medium,
        color: customColors.def.black,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 0
    }
})