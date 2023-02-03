import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'
import { NumberFormatter } from '../../mollecules'

const PriceDesc = ({ price }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Price starts from</Text>
      <Text style={styles.price}>
        <NumberFormatter
            number={price}
        />
        <Text style={styles.month}>/month</Text>
      </Text>
    </View>
  )
}

export default PriceDesc

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: customColors.def.white,
        elevation: 3,
        marginHorizontal: 24,
        borderRadius: 4,
        alignItems: 'center',
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 14,
        fontFamily: customFonts.regular,
        color: customColors.def.black
    },
    price: {
        fontSize: 14,
        fontFamily: customFonts.semiBold,
        color: customColors.def.red1
    },
    month: {
        fontSize: 10,
        fontFamily: customFonts.regular,
        color: customColors.def.grey
    }
})