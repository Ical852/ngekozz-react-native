import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'

const NotifItem = ({ title, desc, date, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={onPress}>
        <View style={styles.main}>
            <Text style={styles.title}>{title}</Text>
            <Text numberOfLines={3} style={styles.desc}>{desc}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
    </TouchableOpacity>
  )
}

export default NotifItem

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        height: 120,
        backgroundColor: customColors.def.white,
        elevation: 3,
        paddingVertical: 24,
        paddingLeft: 24,
        paddingRight: 16,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    title: {
        fontSize: 14,
        fontFamily: customFonts.medium,
        color: customColors.def.black
    },
    main: {
        flex: 1,
    },
    date: {
        marginLeft: 18,
        fontSize: 10,
        fontFamily: customFonts.light,
        color: customColors.def.grey
    },
    desc: {
        fontSize: 10,
        fontFamily: customFonts.medium,
        color: customColors.def.grey,
        marginTop: 4
    }
})