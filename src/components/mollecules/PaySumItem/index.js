import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'

const PaySumItem = ({ keyval, value, type }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.key}>{keyval}</Text>
      <Text style={styles.value(type == 'red')}>{value}</Text>
    </View>
  )
}

export default PaySumItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    key: {
        fontSize: 14,
        fontFamily: customFonts.regular,
        color: customColors.def.grey,
        lineHeight: 21
    },
    value: (red) => ({
        fontSize: 14,
        fontFamily: customFonts.semiBold,
        color: red ? customColors.def.red1 : customColors.def.black,
        lineHeight: 21
    })
})