import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CatBtn, NotifBtn } from '../../atoms'
import { customColors, customFonts } from '../../../utils'

const IconedHeader = ({ title, catPress, notifPress }) => {
  return (
    <View style={styles.container}>
        <CatBtn onPress={catPress}/>
        <Text style={styles.title}>{title}</Text>
        <NotifBtn onPress={notifPress}/>
    </View>
  )
}

export default IconedHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
        marginHorizontal: 24,
        alignItems: 'center',
    },
    title: {
        fontSize: 14,
        fontFamily: customFonts.semiBold,
        color: customColors.def.black
    }
})