import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { customColors } from '../../../utils'

const Loading = () => {
  return (
    <>
        <View style={styles.loadingbg}/>
        <View style={styles.loading}>
            <ActivityIndicator size={'large'} color={customColors.def.red1}/>
        </View>
    </>
  )
}

export default Loading

const styles = StyleSheet.create({
    loading: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingbg: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: 0.3
    }
})