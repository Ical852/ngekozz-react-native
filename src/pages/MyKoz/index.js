import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { customColors, customFonts, gloUrl, linkApi } from '../../utils'
import { Dummy7, Dummy8, Dummy9, IlEmptyKoz } from '../../assets'
import { Gap, MainItem, TitleDescBtn, Type1Header } from '../../components'
import { useEffect } from 'react'
import axios from 'axios'

const MyKoz = ({ navigation }) => {
    const [empty, setEmpty] = useState(true)
    const [myKoz, setMyKoz] = useState([])

    useEffect(() => {
        getMyKoz()
    }, [])

    const getMyKoz = async () => {
        await axios.get(`${linkApi}/userkoz/get/${global.user._id}`).then(res => {
            console.log(res.data.data);
            if (res.data.data.length > 0) {
                setEmpty(false)
                setMyKoz(res.data.data)
            }
        }).catch(err => {
            console.log(err);
        })
    }

    const getMonthLeft = (data) => {
        const period = new Date(data.period)
        const now = new Date()
        return (period.getMonth() + 1) - (now.getMonth() + 1) + (12 * (period.getFullYear() - now.getFullYear()))
    }

    const EmptyKoz = () => {
        return (
            <View style={styles.emptycontent}>
                <IlEmptyKoz/>
                <Gap height={30}/>
                <TitleDescBtn
                    title={"Ups! No Koz Yet"}
                    desc={"Looks like you have not rent any koz right now, go to home or explore to get your best koz first"}
                    btnTitle={"Back to Home"}
                    onPress={() => navigation.replace('Main')}
                    descwidth={250}
                />
            </View>
        )
    }

    const KozExist = () => {
        return (
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>All of Your Koz</Text>

                {myKoz && (
                    myKoz.length > 0 && (
                        myKoz.map(data => {
                            return (
                                <MainItem
                                    img={{ uri: `${gloUrl}/${data.koz.image}` }}
                                    loc={data.koz.location}
                                    title={data.koz.name}
                                    desc={data.koz.desc}
                                    type={'mine'}
                                    monthleft={getMonthLeft(data)}
                                    onPress={() => navigation.navigate('MyKozDetail', { data })}
                                />
                            )
                        })
                    )
                )}
            </ScrollView>
        )
    }

    const RenderContent = () => {
        return empty ? <EmptyKoz/> : <KozExist/>
    }

    return (
        <View style={styles.container}>
            <Type1Header
                title={"Your Koz"}
                onPress={() => navigation.goBack()}
            />
            <RenderContent/>
        </View>
    )
}

export default MyKoz

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: customColors.def.white
    },
    emptycontent: {
        marginTop: 111,
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontFamily: customFonts.semiBold,
        color: customColors.def.black,
        marginTop: 32,
        marginLeft: 24,
        marginBottom: 19
    }
})