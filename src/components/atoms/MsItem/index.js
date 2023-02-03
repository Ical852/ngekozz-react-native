import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors } from '../../../utils'

const MsItem = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  )
}

export default MsItem

const styles = StyleSheet.create({
    container: {
        paddingVertical: 6,
        paddingHorizontal: 22,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: customColors.def.grey,
        marginRight: 17
    }
})