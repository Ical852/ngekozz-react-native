import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { customColors } from '../../../utils'
import { IcSaveFunc, IcSaveFuncActive } from '../../../assets'

const SaveBtn = ({ onPress, active }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.5}>
        {active ? <IcSaveFuncActive/> : <IcSaveFunc/>} 
    </TouchableOpacity>
  )
}

export default SaveBtn

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