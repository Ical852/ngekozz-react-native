import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackBtn from '../BackBtn'
import { customColors, customFonts } from '../../../utils'

const Type1Header = ({ title, onPress }) => {
  return (
    <>
        <View style={styles.container}>
            <BackBtn onPress={onPress}/>
            <Text style={styles.title}>{title}</Text>
            <View style={{width: 26}}/>
        </View>
        <View style={styles.line}/>
    </>
  )
}

export default Type1Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 25,
        marginHorizontal: 24
    },
    line: {
        height: 1,
        width: '100%',
        backgroundColor: customColors.def.line,
        marginTop: 25
    },
    title: {
        fontSize: 14,
        fontFamily: customFonts.semiBold,
        color: customColors.def.black
    }
})