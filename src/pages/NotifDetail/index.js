import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../utils'
import { Type1Header } from '../../components'

const NotifDetail = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Type1Header
            title={"Notification Detail"}
            onPress={() => navigation.goBack()}
        />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
            <Text style={styles.title}>Your account has been verified</Text>
            <Text style = {
                styles.desc
            }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Text>
        </ScrollView>
    </View>
  )
}

export default NotifDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: customColors.def.white
    },
    content: {
        flex: 1,
    },
    title: {
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 32,
        marginBottom: 25,
        fontSize: 16,
        fontFamily: customFonts.semiBold,
        color: customColors.def.black
    },
    desc: {
        marginHorizontal: 24,
        fontSize: 14,
        fontFamily: customFonts.light,
        color: customColors.def.black
    }
})