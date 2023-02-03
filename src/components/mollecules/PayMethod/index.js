import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'
import { Gap } from '../../atoms'
import { IcDown, IcMidtrans } from '../../../assets'

const PayMethod = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Method</Text>
      <Gap height={16}/>
      <View style={styles.midtransbox}>
        <IcMidtrans/>
        <Text style={styles.text}>Midtrans Payment</Text>
        <IcDown/>
      </View>
    </View>
  )
}

export default PayMethod

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 132,
        backgroundColor: customColors.def.white,
        elevation: 3,
        borderTopWidth: 1,
        borderTopColor: customColors.def.line,
        paddingHorizontal: 24,
        paddingVertical: 20
    },
    title: {
        fontSize: 16,
        fontFamily: customFonts.semiBold,
        color: customColors.def.black
    },
    midtransbox: {
        height: 48,
        borderWidth: 1,
        borderColor: customColors.def.grey,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    text: {
        fontSize: 14,
        fontFamily: customFonts.regular,
        color: customColors.def.black,
        marginLeft: 12,
        flex: 1,
    }
})