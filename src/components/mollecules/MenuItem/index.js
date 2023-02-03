import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IcMenuChat, IcMenuChatActive, IcMenuExplore, IcMenuExploreActive, IcMenuHome, IcMenuHomeActive, IcMenuProfile, IcMenuProfileActive, IcMenuSaved, IcMenuSavedActive } from '../../../assets'
import { customColors, customFonts } from '../../../utils'

const MenuItem = ({ active, title, icon, onPress }) => {
    const RenderIcon = () => {
        if (icon == 'home') {
            return active ? <IcMenuHomeActive/> : <IcMenuHome/>
        } else if (icon == 'explore') {
            return active ? <IcMenuExploreActive/> : <IcMenuExplore/>
        } else if (icon == 'saved') {
            return active ? <IcMenuSavedActive/> : <IcMenuSaved/>
        } else if (icon == 'chats') {
            return active ? <IcMenuChatActive/> : <IcMenuChat/>
        } else if (icon == 'profile') {
            return active ? <IcMenuProfileActive/> : <IcMenuProfile/>
        } else {
            return active ? <IcMenuHomeActive/> : <IcMenuHome/>
        }
    }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.5}>
        <RenderIcon/>
        <Text style={styles.title(active)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default MenuItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    title: (active) => ({
        fontSize: 14,
        fontFamily: customFonts.medium,
        color: active ? customColors.def.red1 : customColors.def.red2,
        marginTop: 2
    })
})