import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'

const MyChatBubble = ({ text }) => {
  return (
    <View style={styles.main}>
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    </View>
  )
}

export default MyChatBubble

const styles = StyleSheet.create({
    main: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 20
    },
    container: {
        maxWidth: '70%',
        backgroundColor: customColors.def.red2,
        padding: 14,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    text: {
        fontSize: 14,
        fontFamily: customFonts.regular,
        color: customColors.def.black
    }
})