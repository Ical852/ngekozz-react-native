import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IcSendChat, IcSendChatActive } from '../../assets'
import { customFonts, customColors, gloUrl } from '../../utils'
import { Gap, MyChatBubble, OtherChatBubble, Type1Header } from '../../components'
import { useEffect } from 'react'

const Chatting = ({ navigation, route }) => {
    const owner = route.params.owner
    const type = route.params.type

    const [ownerName, setOwnerName] = useState('')
    const [ownerPic, setOwnerPic] = useState('')

    useEffect(() => {
        if (type === 'request') {
            setOwnerName(owner.fullName)
            setOwnerPic({ uri: `${gloUrl}/${owner.image}` })
        }
        if (type === 'normal') {
            setOwnerName(route.params.name)
            setOwnerPic(route.params.image)
        }
    }, [])

    const [active, setActive] = useState(false)
    const [text, setText] = useState('')
    const [chats, setChats] = useState([
        {
            id: 1,
            type: 'me',
            text: 'Pak budi, saya mau dong pesan kos 6 bulan'
        },
        {
            id: 2,
            type: 'other',
            text: 'boleh langsung pesan aja 6 bulan ya'
        }
    ])
  return (
    <View style={styles.container}>
        <Type1Header
            title={ownerName}
            onPress={() => navigation.goBack()}
        />

        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
            <Gap height={30}/>
            {
                chats.map((data, i) => {
                    return data.type == 'me' ?
                    <MyChatBubble 
                        key={i}
                        text={data.text}
                    /> : 
                    <OtherChatBubble
                        text={data.text}
                        img={ownerPic} 
                        key={i}
                    /> 
                })
            }
        </ScrollView>

        <View style={styles.chatinput}>
            <TextInput style={styles.input} placeholder={"Tulis pesan untuk budi"} 
                onFocus={() => setActive(true)}
                onSubmitEditing={() => setActive(false)}
                onEndEditing={() => setActive(false)}
                onChangeText={(text) => setText(text)}
                value={text}
            />
            <TouchableOpacity activeOpacity={0.5} style={styles.sendBtn(active)} disabled={!active} onPress={() => {
                const newChats = [...chats]
                newChats.push({
                    id: 2,
                    text: text,
                    type: 'me'
                })
                setChats(newChats)
                setText('')
                setActive(false)
            }}>
                {active ? <IcSendChatActive/> : <IcSendChat/>}
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Chatting

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: customColors.def.white
    },
    chatinput: {
        position: 'absolute',
        bottom: 16,
        flexDirection: 'row',
        left: 16,
        right: 16
    },
    input: {
        height: 45,
        backgroundColor: customColors.def.input,
        flex: 1,
        paddingHorizontal: 14,
        borderRadius: 10,
        fontSize: 14,
        fontFamily: customFonts.regular
    },
    sendBtn: (active) => ({
        height: 45,
        width: 45,
        backgroundColor: active ? customColors.def.red1 : customColors.def.input,
        marginLeft: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }),
    content: {
        flex: 1,
        marginHorizontal: 16
    }
})