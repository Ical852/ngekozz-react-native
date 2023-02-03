import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Dummy7, Dummy8, Dummy9, IlEmptyTrx } from '../../assets'
import { Gap, MainItem, TitleDescBtn, Type1Header } from '../../components'
import { customColors, customFonts, gloUrl, linkApi, showError } from '../../utils'
import { useEffect } from 'react'
import axios from 'axios'

const Transactions = ({ navigation }) => {
    const [emtpy, setEmpty] = useState(true)
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        getTransactions()
    }, [])

    const getTransactions = async () => {
        await axios.get(`${linkApi}/transaction/user/${global.user._id}`).then(res => {
            console.log(res.data.data);
            if (res.data.data.length > 0) {
                setEmpty(false)
                setTransactions(res.data.data)
            }
        }).catch(err => {
            showError('Something Went Wrong')
            console.log(err);
        })
    }

    const TrxExist = () => {
        return (
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>All of Your Transactions</Text>

                {transactions && (
                    transactions.length > 0 && (
                        transactions.map(data => {
                            return (
                                <MainItem
                                    img={{ uri: `${gloUrl}/${data.koz.image}` }}
                                    loc={data.koz.location}
                                    title={data.koz.name}
                                    desc={data.koz.desc}
                                    price={data.totalAmount}
                                    type={'trx'}
                                />
                            )
                        })
                    )
                )}
            </ScrollView>
        )
    }

    const EmptyTrx = () => {
        return (
            <View style={styles.emptycontent}>
                <IlEmptyTrx/>
                <Gap height={30}/>
                <TitleDescBtn
                    title={"No Transactions Yet"}
                    desc={"Seems like there is no anytransactions for you yet"}
                    btnTitle={"Back to Home"}
                    onPress={() => navigation.replace('Main')}
                />
            </View>
        )
    }

    const RenderContent = () => {
        return emtpy ? <EmptyTrx/> : <TrxExist/>
    }

    return (
        <View style={styles.container}>
            <Type1Header
                title={"Transactions"}
                onPress={() => navigation.goBack()}
            />
            <RenderContent/>
        </View>
    )
}

export default Transactions

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : customColors.def.white
    },
    emptycontent: {
        flex: 1,
        marginTop: 111,
        alignItems: 'center',
    },
    content: {
        flex: 1,
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