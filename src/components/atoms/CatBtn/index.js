import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { customColors } from '../../../utils'
import { IcCat } from '../../../assets'

const CatBtn = ({ onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={styles.container}>
        <IcCat/>
    </TouchableOpacity>
  )
}

export default CatBtn

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