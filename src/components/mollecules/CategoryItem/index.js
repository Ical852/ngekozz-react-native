import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'
import { IcFemale, IcFemaleActive, IcMale, IcMaleActive, IcTogether, IcTogetherActive } from '../../../assets'

const CategoryItem = ({ icon, active, onPress, title }) => {
    const RenderIcon = () => {
        if (icon == 'male') {
            return active ? <IcMaleActive/> : <IcMale/>
        } else if (icon == 'female') {
            return active ? <IcFemaleActive/> : <IcFemale/>
        } else  if (icon == 'both') {
            return active ? <IcTogetherActive/> : <IcTogether/>
        } else {
            return active ? <IcMaleActive/> : <IcMale/>
        }
    }
  return (
    <View style={styles.main}>
        <TouchableOpacity style={styles.container(active)} activeOpacity={0.5} onPress={onPress}>
            <View style={styles.opacity(icon, active)}>
                <RenderIcon/>
            </View>
        </TouchableOpacity>
        <Text style={styles.text(active)}>{title}</Text>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        marginRight: 24
    },
    container: (active) => ({
        height: 80,
        width: 80,
        backgroundColor: active ? customColors.def.red2 : customColors.def.white,
        elevation: 3,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    }),
    opacity: (icon, active) => ({
        opacity: icon == 'male' && !active ? 0.3 : active ? 1 : 1
    }),
    text: (active) => ({
        fontSize: 12,
        fontFamily: customFonts.medium,
        color: active ? customColors.def.red1 : customColors.def.grey,
        marginTop: 12,
    })
})