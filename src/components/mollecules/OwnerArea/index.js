import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { IcChatFunc } from '../../../assets'
import { customColors, customFonts } from '../../../utils'

const OwnerArea = ({ img, title, stat, onPress }) => {
  return (
    <View style={styles.container}>
        <Image source={img} style={styles.img} />
        <View style={styles.detail}>
            <Text style={styles.name}>{title}</Text>
            <Text style={styles.stat}>{stat}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={styles.chatbtn}>
            <IcChatFunc/>
        </TouchableOpacity>
    </View>
  )
}

export default OwnerArea

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        height: 46,
        width: 46,
        borderRadius: 50
    },
    detail: {
        marginLeft: 12,
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontFamily: customFonts.medium,
        color: customColors.def.black,
    },
    stat: {
        fontSize: 14,
        fontFamily: customFonts.light,
        color: customColors.def.grey
    },
    chatbtn: {
        height: 46,
        width: 46,
        borderWidth: 1,
        borderColor: customColors.def.red1,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    }
})