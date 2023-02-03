import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'

const TextBtn = ({ title, btn, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.btn}>{btn}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TextBtn

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    title: {
        fontSize: 14,
        fontFamily: customFonts.regular,
        color: customColors.def.black
    },
    btn: {
        fontSize: 14,
        fontFamily: customFonts.semiBold,
        color: customColors.def.red1
    }
})