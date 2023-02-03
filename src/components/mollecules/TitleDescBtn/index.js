import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'

const TitleDescBtn = ({ title, desc, descwidth = 215, btnTitle, onPress }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc(descwidth)}>{desc}</Text>
        <TouchableOpacity activeOpacity={0.5} style={styles.btn} onPress={onPress}>
            <Text style={styles.btnTitle}>{btnTitle}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default TitleDescBtn

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontFamily: customFonts.semiBold,
        color: customColors.def.black,
        lineHeight: 30
    },
    desc: (width) => ({
        fontSize: 14,
        fontFamily: customFonts.light,
        color: customColors.def.grey,
        marginTop: 6,
        width: width,
        textAlign: 'center',
        lineHeight: 21
    }),
    btn: {
        width: 200,
        height: 50,
        backgroundColor: customColors.def.red1,
        marginTop: 30,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTitle: {
        fontSize: 16,
        fontFamily: customFonts.medium,
        color: customColors.def.white
    }
})