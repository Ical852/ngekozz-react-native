import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'

const ChatItem = ({ img, name, chat, notif, time, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={onPress}>
        <View style={styles.data}>
            <Image source={img} style={styles.img}/>
            <View style={styles.main}>
                <Text style={styles.name}>{name}</Text>
                <Text numberOfLines={1} style={styles.chat(notif > 0)}>{chat}</Text>
            </View>
            <View style={styles.timechat}>
                <Text style={styles.time}>{time}</Text>
                {
                    notif > 0 ? (
                        <View style={styles.chatindctr}>
                            <Text style={styles.notif}>{notif}</Text>
                        </View>
                    ) : (
                        <View style={styles.space}>
                        </View>
                    )
                }
            </View>
        </View>
        <View style={styles.line}/>
    </TouchableOpacity>
  )
}

export default ChatItem

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        height: 67,
        marginBottom: 20
    },
    data: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        width: 46,
        height: 46,
        borderRadius: 50
    },
    main: {
        flex: 1,
        marginLeft: 12
    },
    name: {
        fontSize: 16,
        fontFamily: customFonts.medium,
        color: customColors.def.black,
        lineHeight: 24
    },
    chat: (active) => ({
        marginTop: 1,
        lineHeight: 21,
        fontSize: 14,
        fontFamily: customFonts.light,
        color: active ? customColors.def.black : customColors.def.grey,
    }),
    timechat: {
        marginLeft: 12,
        alignItems: 'center',
    },
    time: {
        fontSize: 14,
        fontFamily: customFonts.light,
        color: customColors.def.grey
    },
    chatindctr: {
        marginTop: 4,
        width: 21,
        height: 21,
        backgroundColor: customColors.def.red1,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notif: {
        fontSize: 10,
        fontFamily: customFonts.medium,
        color: customColors.def.white,
        lineHeight: 15
    },
    line: {
        height: 1,
        backgroundColor: customColors.def.line,
        marginTop: 20
    },
    space: {
        marginTop: 4,
        width: 21,
        height: 21,
    }
})