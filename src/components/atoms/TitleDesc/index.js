import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'

const TitleDesc = ({ title, desc }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  )
}

export default TitleDesc

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24
    },
    title: {
        fontSize: 14,
        fontFamily: customFonts.semiBold,
        color: customColors.def.black
    },
    desc: {
        fontSize: 12,
        fontFamily: customFonts.regular,
        color: customColors.def.grey
    }
})