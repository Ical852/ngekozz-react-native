import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { customColors, customFonts } from '../../utils'
import { IlEmptyNotif } from '../../assets'
import { Gap, NotifItem, TitleDescBtn, Type1Header } from '../../components'

const Notif = ({ navigation }) => {
    const [emtpy, setEmpty] = useState(false)

    const EmptyNotif = () => {
        return (
            <View style={styles.emptycontent}>
                <IlEmptyNotif/>
                <TitleDescBtn
                    title={"No Notifications Yet"}
                    desc={"Seems like there is no any notifications for you yet"}
                    btnTitle={"Back to Home"}
                    onPress={() => navigation.replace('Main')}
                />
            </View>
        )
    }

    const NotifExist = () => {
        return (
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Account Info</Text>
                <Gap height={16}/>
                <NotifItem
                    title={"Your account has been verified"}
                    desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."}
                    date={"20 May"}
                    onPress={() => navigation.navigate('NotifDetail')}
                />
                <NotifItem
                    title={"New Koz on Jakarta, Check Now !"}
                    desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."}
                    date={"20 May"}
                />
                <NotifItem
                    title={"New Modern Place on Bekasi"}
                    desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."}
                    date={"20 May"}
                />
                <NotifItem
                    title={"Don’t Forget to Check Your Rent !"}
                    desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."}
                    date={"20 May"}
                />
                <Gap height={50}/>
            </ScrollView>
        )
    }

    const RenderContent = () => {
        return emtpy ? <EmptyNotif/> : <NotifExist/>
    }

    return (
        <View style={styles.container}>
            <Type1Header
                title={"Notifications"}
                onPress={() => navigation.goBack()}
            />
            <RenderContent/>
        </View>
    )
}

export default Notif

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor :customColors.def.white
    },
    emptycontent: {
        flex: 1,
        marginTop :111,
        alignItems: 'center',
    },
    content: {
        flex: 1,
        backgroundColor: customColors.def.white
    },
    title: {
        marginTop: 32,
        marginLeft: 24,
        fontSize: 16,
        fontFamily: customFonts.semiBold,
        color: customColors.def.black
    }
})