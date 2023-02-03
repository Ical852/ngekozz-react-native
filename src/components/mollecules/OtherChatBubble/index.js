import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'

const OtherChatBubble = ({ text, img }) => {
  return (
    <View style={styles.main}>
        <Image source={img} style={styles.img}/>
        <View style={styles.chatb}>
            <Text style={styles.text}>{text}</Text>
        </View>
    </View>
  )
}

export default OtherChatBubble

const styles = StyleSheet.create({
    main: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    img: {
        height: 30,
        width: 30,
        borderRadius: 30/2,
        resizeMode: 'cover'
    },
    chatb: {
        marginLeft: 12,
        maxWidth: '50%',
        backgroundColor: customColors.def.red1,
        padding: 14,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    text: {
        fontSize: 14,
        fontFamily: customFonts.regular,
        color: customColors.def.white,
        lineHeight: 21
    }
})