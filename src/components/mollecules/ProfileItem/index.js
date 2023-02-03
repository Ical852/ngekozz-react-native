import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'
import { IcDollar, IcHelp, IcMyKoz, IcPencil, IcRight, IcSettings } from '../../../assets'

const ProfileItem = ({ icon, title, desc, onPress }) => {
    const RenderIcon = () => {
        if (icon == 'pencil') {
            return <IcPencil/>
        } else if (icon == 'koz') {
            return <IcMyKoz/>
        } else if (icon == 'trx') {
            return <IcDollar/>
        } else if (icon == 'help') {
            return <IcHelp/>
        } else if (icon == 'settings') {
            return <IcSettings/>
        } else {
            return <IcPencil/>
        }
    }
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={onPress}>
        <View style={styles.iconbox}>
            <RenderIcon/>
        </View>
        <View style={styles.descbox}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{desc}</Text>
        </View>
        <IcRight/>
    </TouchableOpacity>
  )
}

export default ProfileItem

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        backgroundColor: customColors.def.white,
        elevation: 3,
        height: 76,
        borderRadius: 14,
        paddingVertical: 12,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
    },
    iconbox: {
        height: 52,
        width: 52,
        backgroundColor: customColors.def.greyI,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    descbox: {
        marginLeft: 16,
        flex: 1,
    },
    title: {
        fontSize: 14,
        fontFamily: customFonts.semiBold,
        color: customColors.def.black,
        lineHeight: 21
    },
    desc: {
        fontSize: 12,
        fontFamily: customFonts.regular,
        color: customColors.def.grey,
        marginTop: 4,
        lineHeight: 18
    }
})