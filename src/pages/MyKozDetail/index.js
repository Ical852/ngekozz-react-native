import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { checkCat, customColors, customFonts, gloUrl, linkApi } from '../../utils'
import { BackBtn, CustomButton, DetailCard, Gap, NumberFormatter, PaySum } from '../../components'
import { DummyDetail, IcMinusBtn, IcPlusBtn } from '../../assets'
import Modal from 'react-native-modal'
import WebView from 'react-native-webview'
import axios from 'axios'

const MyKozDetail = ({ navigation, route }) => {
    const data = route.params.data
    const detailData = data.koz

    const [paymentUrl, setPaymentUrl] = useState('')
    const [loading, setLoading] = useState(false)

    const extendRent = async () => {
        setLoading(true)
        await axios({
            url: `${linkApi}/transaction/extend/${data._id}`,
            method: 'POST',
            data: {
                user: global.user._id,
                koz: detailData._id,
                total_month: month,
                order_id: (Math.floor(Math.random() * 1000) + 1).toString(),
            }
        }).then(res => {
            setLoading(false)
            console.log(res.data.data);
            console.log(res.data.data.transaction.paymentUrl);
            setPaymentUrl(res.data.data.transaction.paymentUrl)
            setModal(false)
        }).catch(err => {
            setLoading(false)
            console.log(err);
        })
    }

    const getMonthLeft = (data) => {
        const period = new Date(data.period)
        const now = new Date()
        return (period.getMonth() + 1) - (now.getMonth() + 1) + (12 * (period.getFullYear() - now.getFullYear()))
    }

    const getDayLeft = (data) => {
        const date2 = new Date(data.period)
        const date1 = new Date() 
        const diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);
        return diffDays
    }

    const [modal, setModal] = useState(false)
    const [month, setMonth] = useState(1)
    const [price, setPrice] = useState(detailData.price)
    const onMin = () => {
        if (month > 1) {
            setMonth(month - 1)
        }
    }

    const onPlus = () => {
        setMonth(month + 1)
    }

    if (paymentUrl !== '') {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={styles.header}>
                    <BackBtn
                        onPress={() => {
                            setPaymentUrl('')
                            setTimeout(() => {
                                navigation.replace('ExtendSuccess')
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
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <BackBtn
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.headertitle}>Your Koz Detail</Text>
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

            <PaySum
                title='Koz Status'
                keyval1={"Owner"}
                keyval2={"Renter"}
                keyval3={"Month Left"}
                value1={detailData.owner.fullName}
                value2={global.user.fullName}
                value3={`${getMonthLeft(data)} Month Left`}
                total={getDayLeft(data)}
                lastkey={"Total Days Left :"}
                type={'mine'}
            />

            <Gap height={32}/>

            <CustomButton
                title={"Rent Now"}
                onPress={() => setModal(true)}
            />
            <Gap height={32}/>

            <Modal
                isVisible={modal}
                onBackdropPress={() => setModal(false)}
                animationInTiming={800}
                animationOutTiming={800}>
                <View style={styles.modalbody}>
                    <View style={styles.pricing}>
                        <Text style={styles.totaltext}>Total :</Text>
                        <Text style={styles.price}>
                            <NumberFormatter
                                number={price * month}
                            />
                            <Text style={styles.month}>/ {month} month</Text>
                        </Text>
                    </View>

                    <View style={styles.qtying}>
                        <TouchableOpacity style={styles.minbtn} onPress={() => onMin()}>
                            <IcMinusBtn/>
                        </TouchableOpacity>
                        <Text style={styles.monthqty}>{month}</Text>
                        <TouchableOpacity style={styles.plusbtn} onPress={() => onPlus()}>
                            <IcPlusBtn/>
                        </TouchableOpacity>
                    </View>

                    {loading && (
                        <View style={styles.loadingview}>
                            <ActivityIndicator size={'large'} color={customColors.def.red1} />
                        </View>
                    )}

                    {!loading && (
                        <TouchableOpacity activeOpacity={0.5} style={styles.extendbtn} onPress={() => extendRent()}>
                            <Text style={styles.text}>Extend Rent Now</Text>
                        </TouchableOpacity>
                    )}

                </View>
            </Modal>

        </ScrollView>
    )
}

export default MyKozDetail

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
    modalbody: {
        backgroundColor: customColors.def.white,
        borderRadius: 12,
        paddingVertical: 24,
        paddingHorizontal: 16,
    },
    pricing: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: 16,
        fontFamily: customFonts.semiBold,
        color: customColors.def.red1,
        lineHeight: 24
    },
    month: {
        fontSize: 14,
        fontFamily: customFonts.regular,
        color: customColors.def.black,
        lineHeight: 21
    },
    qtying: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    minbtn: {
        height: 24,
        width: 24,
        borderRadius: 50,
        backgroundColor: customColors.def.minbtn,
        justifyContent: 'center',
        alignItems: 'center',
    },
    plusbtn: {
        height: 24,
        width: 24,
        borderRadius: 50,
        backgroundColor: customColors.def.red1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    monthqty: {
        marginHorizontal: 12,
        fontSize: 16,
        fontFamily: customFonts.medium,
        color: customColors.def.black
    },
    totaltext: {
        fontSize: 14,
        fontFamily: customFonts.regular,
        color: customColors.def.black
    },
    extendbtn: {
        height: 50,
        backgroundColor: customColors.def.red1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    text: {
        fontSize: 16,
        fontFamily: customFonts.medium,
        color: customColors.def.white
    },
    loadingview: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})