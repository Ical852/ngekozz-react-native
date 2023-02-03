import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { IcBackAuth } from '../../../assets'

const BackHeader = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <IcBackAuth/>
    </TouchableOpacity>
  )
}

export default BackHeader

const styles = StyleSheet.create({
    container: {
        marginLeft: 24,
        marginTop: 24
    }
})