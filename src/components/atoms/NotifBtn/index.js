import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { customColors } from '../../../utils'
import { IcNotifBlack } from '../../../assets'

const NotifBtn = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.5}>
        <IcNotifBlack/>
    </TouchableOpacity>
  )
}

export default NotifBtn

const styles = StyleSheet.create({
    container: {
        width: 26,
        height: 26,
        backgroundColor: customColors.def.white,
        borderRadius: 6,
        elevation: 3,
        alignItems: 'center',
        justifyContent: 'center',
    }
})