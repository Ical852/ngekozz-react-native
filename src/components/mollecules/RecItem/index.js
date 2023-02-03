import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'
import { IcLoc, IcStar } from '../../../assets'
import NumberFormatter from '../Number'

const RecItem = ({ onPress, img, title, loc, rate, price }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={onPress}>
        <Image source={img} style={styles.img} />
        <View style={styles.topdetail}>
            <View style={styles.topleft}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.loc}>
                    <IcLoc/>
                    <Text style={styles.loctext}>{loc}</Text>
                </View>
            </View>
            <View style={styles.rate}>
                <Text style={styles.ratetext}>{rate}</Text>
                <IcStar/>
            </View>
        </View>
        <View style={styles.line}/>
        <View style={styles.pricebox}>
            <Text style={styles.pricefrom}>Price Start from:</Text>
            <Text style={styles.price}>
                <NumberFormatter
                    number={price}
                />
                <Text style={styles.per}>/Month</Text>
            </Text>
        </View>
    </TouchableOpacity>
  )
}

export default RecItem

const styles = StyleSheet.create({
    container: {
        height: 350,
        width: 280,
        backgroundColor: customColors.def.white,
        elevation: 3,
        marginTop: 20,
        marginBottom: 24,
        marginRight: 24,
        borderRadius: 12
    },
    img: {
        height: 200,
        width: 256,
        marginTop: 12,
        marginLeft: 12,
        marginRight: 12,
        borderRadius: 12
    },
    topdetail: {
        flexDirection: 'row',
        marginTop: 12,
        marginHorizontal :12,
        alignItems: 'center',
    },
    topleft: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontFamily: customFonts.medium,
        color: customColors.def.black,
        lineHeight: 24
    },
    loc: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    loctext: {
        marginLeft: 4,
        fontSize: 14,
        fontFamily: customFonts.regular,
        color: customColors.def.grey,
        lineHeight: 21,
    },
    rate: {
        flexDirection: 'row'
    },
    ratetext: {
        marginRight: 2,
        fontSize: 12,
        fontFamily: customFonts.medium,
        color: customColors.def.grey
    },
    line: {
        height: 1,
        backgroundColor: customColors.def.line,
        marginTop: 18
    },
    pricebox: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 12,
        justifyContent: 'space-between',
    },
    pricefrom: {
        fontSize: 12,
        fontFamily: customFonts.regular,
        color: customColors.def.grey
    },
    price: {
        fontSize: 14,
        fontFamily: customFonts.semiBold,
        color: customColors.def.red1
    },
    per: {
        fontSize: 10,
        fontFamily: customFonts.regular,
        color: customColors.def.grey
    }
})