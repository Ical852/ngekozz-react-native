import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { customColors, customFonts } from '../../utils'
import { IlLogo } from '../../assets'

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted')
    }, 2000);
  }, [])
  return (
    <View style={styles.container}>
      <IlLogo/>
      <Text style={styles.title}>Ngekozzz</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: customColors.def.red1
  },
  title: {
    fontSize: 32,
    fontFamily: customFonts.semiBold,
    color: customColors.def.white,
    marginTop: 30
  }
})