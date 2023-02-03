import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { customColors, customFonts } from '../../../utils'

const CustomInput = ({ title, onChangeText, placeholder, value, secure, keyboardType, disable }) => {
    const [focus, setFocus] = useState(false)
    
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput 
        style={styles.input(focus)}
        onFocus={() => setFocus(true)}
        onSubmitEditing={() => setFocus(false)}
        onEndEditing={() => setFocus(false)}
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
        secureTextEntry={secure}
        keyboardType={keyboardType}
        editable={!disable}
    />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        fontFamily: customFonts.regular,
        color: customColors.def.black
    },
    input: (focus) => ({
        borderWidth: 1,
        borderColor: focus ? customColors.def.red1 : customColors.def.greyR,
        paddingHorizontal: 22,
        borderRadius: 12,
        marginTop: 6
    })
})