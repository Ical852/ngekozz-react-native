import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'
import { IcCross, IcInfoRed } from '../../../assets'

const InfoItem = ({ title, desc }) => {
  return (
    <View style={styles.container}>
        <IcInfoRed/>
        <View style={styles.infobox}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{desc}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} style={styles.closebtn}>
            <IcCross/>
        </TouchableOpacity>
    </View>
  )
}

export default InfoItem

const styles = StyleSheet.create({
    container: {
        height: 100,
        marginHorizontal: 24,
        backgroundColor: customColors.def.red2,
        borderWidth: 1,
        borderColor: customColors.def.red1,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    infobox: {
        marginLeft: 16,
        flex: 1,
    },  
    title: {
        fontSize: 12,
        fontFamily: customFonts.semiBold,
        color: customColors.def.black
    },
    desc: {
        marginTop: 4,
        fontSize: 10,
        fontFamily: customFonts.light,
        color: customColors.def.black
    },
    closebtn: {
        position: 'absolute',
        top: 11,
        right: 12
    }
})