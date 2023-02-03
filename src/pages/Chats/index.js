import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../utils'
import { ChatItem, Gap, IconedHeader } from '../../components'
import { DummyChat1, DummyChat2, DummyChat3, DummyChat4, DummyChat5, IcSearchChat } from '../../assets'
import { useNavigation } from '@react-navigation/native'

const Chats = () => {
  const navigation = useNavigation()
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <IconedHeader
        title={"Your Resend Chats"}
      />

      <View style={styles.searchbox}>
        <TextInput style={styles.input} placeholder={"Find Chats"}/>
        <IcSearchChat/>
      </View>

      <Text style={styles.mstitle}>Messages</Text>

      <Gap height={20}/>

      <ChatItem
        img={DummyChat1}
        name={"James Curt"}
        chat={"I saw it clearly and might be going to be bad"}
        time={"12:30"}
        onPress={() => navigation.navigate('Chatting', {
          type: 'normal',
          name: "James Curt",
          image: DummyChat1
        })}
      />
      <ChatItem
        img={DummyChat2}
        name={"Rosalie Emily"}
        chat={"Did you know how to get the to fall in love with"}
        time={"7:30"}
        notif={2}
        onPress={() => navigation.navigate('Chatting', {
          type: 'normal',
          name: "Rosalie Emily",
          image: DummyChat2
        })}
      />
      <ChatItem
        img={DummyChat3}
        name={"Anna Joeson"}
        chat={"Wanna hang out or something? this night or tomorrow"}
        time={"21:30"}
        notif={5}
        onPress={() => navigation.navigate('Chatting', {
          type: 'normal',
          name: "Anna Joeson",
          image: DummyChat3
        })}
      />
      <ChatItem
        img={DummyChat4}
        name={"Justin Anderson"}
        chat={"Nobody’s gonna know until we found it ourself"}
        time={"4:30"}
        onPress={() => navigation.navigate('Chatting', {
          type: 'normal',
          name: "Justin Anderson",
          image: DummyChat4
        })}
      />
      <ChatItem
        img={DummyChat5}
        name={"Angela Claire"}
        chat={"Why don’t you come to my house and doin something fun"}
        time={"11:25"}
        notif={3}
        onPress={() => navigation.navigate('Chatting', {
          type: 'normal',
          name: "Angela Claire",
          image: DummyChat5
        })}
      />

      <Gap height={150}/>
    </ScrollView>
  )
}

export default Chats

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColors.def.white
  },
  searchbox: {
    height: 40,
    backgroundColor: customColors.def.white,
    elevation: 3,
    marginHorizontal: 24,
    marginTop: 32,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 14
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: customColors.def.black,
    lineHeight: 21
  },
  mstitle: {
    fontSize: 18,
    fontFamily: customFonts.semiBold,
    color: customColors.def.black,
    marginLeft: 24,
    marginTop :32
  },
})