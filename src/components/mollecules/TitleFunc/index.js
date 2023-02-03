import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'

const TitleFunc = ({ title, func, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
          <Text style={styles.functext}>{func}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TitleFunc

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontFamily: customFonts.semiBold,
        color: customColors.def.black
    },
    functext: {
        fontSize: 12,
        fontFamily: customFonts.medium,
        color: customColors.def.red1
    }
})