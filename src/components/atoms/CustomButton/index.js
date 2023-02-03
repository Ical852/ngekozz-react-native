import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'

const CustomButton = ({ onPress, title, disable }) => {
  return (
    <TouchableOpacity disabled={disable} style={styles.container(disable)} onPress={disable ? () => {} : onPress}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container: (disable) => ({
        height: 50,
        backgroundColor: customColors.def.red1,
        marginHorizontal: 24,
        width: Dimensions.get('window').width - 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: disable ? 0.5 : 1
    }),
    title: {
        fontSize: 16,
        fontFamily: customFonts.medium,
        color: customColors.def.white
    }
})