import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'
import { IcBath, IcDrinks, IcLaundry, IcMeals, IcPool, IcSport, IcWifi } from '../../../assets'

const SnfItem = ({ type }) => {
    const RenderIcon = () => {
        return type == 'wifi' ? <IcWifi/>
        : type == 'meal' ? <IcMeals/>
        : type == 'drink' ? <IcDrinks/>
        : type == 'bath' ? <IcBath/>
        : type == 'sport' ? <IcSport/>
        : type == 'pool' ? <IcPool/>
        : type == 'laundry' ? <IcLaundry/>
        : <IcWifi/>
    }

    const RenderText = () => {
        return type == 'wifi' ? 'Free Wifi'
        : type == 'meal' ? 'Meals'
        : type == 'drink' ? 'Drinks'
        : type == 'bath' ? 'Bath'
        : type == 'sport' ? 'Sports'
        : type == 'pool' ? 'Pool'
        : type == 'laundry' ? 'Laundry'
        : 'Free Wifi'
    }

  return (
    <View style={styles.container}>
        <RenderIcon/>
        <Text style={styles.text}>{RenderText()}</Text>
    </View>
  )
}

export default SnfItem

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 80,
        borderWidth: 1,
        borderColor: '#CACBD4',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12
    },
    text: {
        marginTop: 15,
        fontSize: 10,
        fontFamily: customFonts.medium,
        color: customColors.def.grey
    }
})