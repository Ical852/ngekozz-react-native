import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { customColors, customFonts } from '../../../utils'
import { IcLoc, IcSaveFunc, IcSaveFuncActive } from '../../../assets'
import NumberFormatter from '../Number'

const MainItem = ({ img, loc, title, desc, price, onPress, type, monthleft, onFav, active }) => {
  return (
    <View style={styles.container}>
        <Image source={img} style={styles.img} />
        <View style={styles.content}>
            <View style={styles.locnsave}>
                <View style={styles.locont}>
                    <IcLoc/>
                    <Text style={styles.loctext}>{loc}</Text>
                </View>
                {
                    type != 'trx' && type !== 'mine' && (
                        <TouchableOpacity activeOpacity={0.5} onPress={onFav}>
                            {active ? <IcSaveFuncActive/> : <IcSaveFunc/>}
                        </TouchableOpacity>
                    )
                }
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text numberOfLines={2} style={styles.desc}>{desc}</Text>
            <Text style={styles.price}>
                {
                    type == 'mine' ? (
                        <Text>{monthleft} Month Left</Text>
                    ) : (
                        <NumberFormatter
                            number={price}
                        />
                    )
                }
                {
                    type != 'trx' && type != 'mine' && (
                        <Text style={styles.month}>/month</Text>
                    )
                }
            </Text>
            <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={onPress}>
                <Text style={styles.btntext}>{type == 'trx' ? 'Detail' : type == 'mine' ? 'Check' : 'Rent Now'}</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default MainItem

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        height: 170,
        backgroundColor: customColors.def.white,
        elevation: 3,
        marginBottom: 20,
        padding: 12,
        borderRadius: 12,
        flexDirection: 'row'
    },
    img: {
        width: 100,
        height: 146,
        borderRadius: 12
    },
    content: {
        flex: 1,
        marginLeft: 12
    },
    locnsave: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    locont: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    loctext: {
        marginLeft: 2,
        fontSize: 12,
        fontFamily: customFonts.regular,
        color: customColors.def.greyS
    },
    title: {
        fontSize: 14,
        fontFamily: customFonts.semiBold,
        color: customColors.def.black,
        marginTop: 4,
        lineHeight: 21
    },
    desc: {
        fontSize: 10,
        fontFamily: customFonts.regular,
        color: customColors.def.grey,
        marginTop: 4
    },
    price: {
        fontSize: 14,
        fontFamily: customFonts.semiBold,
        color: customColors.def.red1,
        marginTop: 4
    },
    month: {
        fontSize: 10,
        fontFamily: customFonts.regular,
        color: customColors.def.greyS
    },
    btn: {
        height: 32,
        backgroundColor: customColors.def.red1,
        marginTop: 6,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btntext: {
        fontSize: 10,
        fontFamily: customFonts.regular,
        color: customColors.def.white
    }
})