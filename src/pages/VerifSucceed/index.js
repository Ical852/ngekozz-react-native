import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { customColors, customFonts } from '../../utils'
import { IcCheck } from '../../assets'

const VerifSucceed = ({ navigation, route }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SetProfile', { user: route.params.user })
    }, 2000);
  }, [])
  return (
    <View style={styles.container}>
        <IcCheck/>
        <Text style={styles.title}>Verification Success</Text>
    </View>
  )
}

export default VerifSucceed

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: customColors.def.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontFamily: customFonts.semiBold,
        color: customColors.def.red1,
        marginTop: 12
    }
})