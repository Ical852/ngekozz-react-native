import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'
import { IcLoc } from '../../../assets'
import NumberFormatter from '../Number'

const MiniItem = ({ img, title, loc, price, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={onPress}>
        <Image source={img} style={styles.img}/>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.locont}>
            <IcLoc/>
            <Text style={styles.loctext}>{loc}</Text>
        </View>
        <Text style={styles.price}>
            <NumberFormatter
                number={price}
            />
            <Text style={styles.month}>/month</Text>
        </Text>
    </TouchableOpacity>
  )
}

export default MiniItem

const styles = StyleSheet.create({
    container: {
        width: 220,
        height: 270,
        backgroundColor: customColors.def.white,
        elevation: 3,
        marginTop: 20,
        marginBottom: 24,
        marginRight: 24,
        borderRadius: 12,
        padding: 16,
    },
    img: {
        width: 188,
        height: 150,
        borderRadius: 12
    },
    title: {
        fontSize: 14,
        fontFamily: customFonts.medium,
        color: customColors.def.black,
        marginTop: 12,
        lineHeight: 21
    },
    locont: {
        marginTop: 3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    loctext: {
        fontSize: 12,
        fontFamily: customFonts.regular,
        color: customColors.def.grey,
        lineHeight: 18,
        marginLeft: 2
    },
    price: {
        marginTop: 10,
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