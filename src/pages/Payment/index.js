import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { checkCat, customColors, customFonts, gloUrl, linkApi } from '../../utils'
import { BackBtn, CustomButton, DetailCard, Gap, NumberFormatter, PayMethod, PaySum, PriceDesc, SaveBtn } from '../../components'
import { useState } from 'react'
import WebView from 'react-native-webview'
import axios from 'axios'

const Payment = ({ navigation, route }) => {
    const params = route.params
    const detailData = route.params.data
    const [paymentUrl, setPaymentUrl] = useState('')
    const [loading, setLoading] = useState(false)

    const onPayment = async () => {
        setLoading(true)
        await axios({
            url: `${linkApi}/transaction/trans`,
            method: 'POST',
            data: {
                user: global.user._id,
                koz: detailData._id,
                total_month: params.month,
                order_id: (Math.floor(Math.random() * 1000) + 1).toString(),
            }
        }).then(res => {
            setLoading(false)
            console.log(res.data.data);
            console.log(res.data.data.transaction.paymentUrl);
            setPaymentUrl(res.data.data.transaction.paymentUrl)
        }).catch(err => {
            setLoading(false)
            console.log(err);
        })
    }
    
    if (paymentUrl !== '') {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={styles.header}>
                    <BackBtn
                        onPress={() => {
                            setPaymentUrl('')
                            setTimeout(() => {
                                navigation.navigate('PaySuccess')
                            }, 500)
                        }}
                    />
                    <Text style={styles.headertitle}>Payment</Text>
                    <View style={{width: 26}}/>
                </View>
                <Gap height={24}/>
                <WebView
                    style={{ flex: 1 }}
                    source={{ uri: paymentUrl }}
                    renderLoading={() => <ActivityIndicator size={'large'} color={customColors.def.red1} />}
                />
            </View>
        )
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <BackBtn
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.headertitle}>Payment Summary</Text>
                <View style={{width: 26}}/>
            </View>

            <Gap height={30}/>

            <DetailCard
                img={{ uri: `${gloUrl}/${detailData.image}` }}
                rate={detailData.ratings}
                cat={checkCat(detailData.category._id) == 1 ? 'Kosan Putra' : checkCat(detailData.category._id) == 2 ? 'Kosan Putri' : 'Kosan Gabung'}
                icon={checkCat(detailData.category._id) == 1 ? 'male' : checkCat(detailData.category._id) == 2 ? 'female' : 'both'}
                title={detailData.name}
                loc={detailData.location}
            />

            <Gap height={24}/>

            <PriceDesc
                price={detailData.price}
            />

            <Gap height={24}/>

            <PaySum
                keyval1={"Full Name"}
                keyval2={"Phone Number"}
                keyval3={"Total Month"}
                value1={global.user.fullName}
                value2={global.user.phoneNumber}
                value3={`${params.month} x ${new Intl.NumberFormat().format(detailData.price)} / Month`}
                total={params.total}
            />

            <Gap height={24}/>

            <PayMethod/>

            <Gap height={32}/>

            {loading && (
                <View style={styles.loadingview}>
                    <ActivityIndicator size={'large'} color={customColors.def.red1} />
                </View>
            )}
            
            {!loading && (
                <CustomButton
                    title={"Rent Now"}
                    onPress={() => onPayment()}
                />
            )}

            <Gap height={32}/>
        </ScrollView>
    )
}

export default Payment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: customColors.def.white
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 25,
        marginHorizontal: 24
    },
    headertitle: {
        fontSize: 14,
        fontFamily: customFonts.semiBold,
        color: customColors.def.black
    },
    loadingview: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})