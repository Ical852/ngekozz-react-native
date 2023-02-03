import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { customColors } from '../../../utils'
import { IcBackBlack } from '../../../assets'

const BackBtn = ({ onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={styles.container}>
        <IcBackBlack/>
    </TouchableOpacity>
  )
}

export default BackBtn

const styles = StyleSheet.create({
    container: {
        height: 26,
        width: 26,
        backgroundColor: customColors.def.white,
        elevation: 3,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    }
})