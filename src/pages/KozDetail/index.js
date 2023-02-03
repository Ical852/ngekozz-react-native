import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { checkCat, customColors, customFonts, gloUrl } from '../../utils'
import { BackBtn, DetailCard, Gap, NumberFormatter, OwnerArea, PriceDesc, SaveBtn, SnfItem } from '../../components'
import { IcChatFunc, IcMinusBtn, IcPlusBtn, IcSend } from '../../assets'
import { useDispatch, useSelector } from 'react-redux'
import { setFav } from '../../redux/action'

const KozDetail = ({ navigation, route }) => {
    const detailData = route.params.data
    const [price, setPrice] = useState(detailData.price)
    const [month, setMonth] = useState(1)

    const onMin = () => {
        if (month > 1) {
            setMonth(month - 1)
        }
    }

    const onPlus = () => {
        setMonth(month + 1)
    }

    const { fav } = useSelector(state => state.globalReducer)
    const dispatch = useDispatch()
    const checkAndAddOrRemove = async (data) => {
        const exist = fav.filter(favdata => favdata._id == data._id).length > 0
        if (!exist) {
        const newData = [...fav]
        newData.push(data)
        dispatch(setFav(newData))
        }
        if (exist) {
        let delData = [...fav]
        delData = delData.filter((item) => {
            return item._id !== data._id
        })
        dispatch(setFav(delData))
        }
    }
    const checkActive = (data) => {
        return fav.filter(d => d._id == data._id).length > 0
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                <View style={styles.header}>
                    <BackBtn 
                        onPress={() => navigation.goBack()}
                    />
                    <Text style={styles.headertitle}>Koz Detail</Text>
                    <SaveBtn
                        onPress={() => checkAndAddOrRemove(detailData)}
                        active={checkActive(detailData)}
                    />
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

                <Text style={styles.snftext}>Services & Facilities</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Gap width={24}/>
                    <SnfItem type={"wifi"}/>
                    <SnfItem type={"meal"}/>
                    <SnfItem type={"drink"}/>
                    <SnfItem type={"bath"}/>
                    <SnfItem type={"sport"}/>
                    <SnfItem type={"pool"}/>
                    <SnfItem type={"laundry"}/>
                    <Gap width={12}/>
                </ScrollView>

                <Gap height={24}/>

                <View style={styles.descarea}>
                    <Text style={styles.desc}>Description</Text>
                    <Text style={styles.desctext}>{detailData.desc}</Text>
                </View>

                <Gap height={24}/>

                <OwnerArea
                    img={{ uri: `${gloUrl}/${detailData.owner.image}` }}
                    title={detailData.owner.fullName}
                    stat={"Koz Owner"}
                    onPress={() => navigation.navigate('Chatting', { owner: detailData.owner, type: 'request' })}
                />

                <View style={styles.line} />

                <PriceDesc price={price}/>

                <View style={styles.line} />

                <View style={styles.totalbox}>
                    <Text style={styles.totaltitle}>Total :</Text>
                    <View style={styles.pricing}>
                        <Text style={styles.price}>
                            <NumberFormatter
                                number={price * month}
                            />
                            <Text style={styles.month}>/ {month} month</Text>
                        </Text>

                        <View style={styles.qtying}>
                            <TouchableOpacity style={styles.minbtn} onPress={() => onMin()}>
                                <IcMinusBtn/>
                            </TouchableOpacity>
                            <Text style={styles.monthqty}>{month}</Text>
                            <TouchableOpacity style={styles.plusbtn} onPress={() => onPlus()}>
                                <IcPlusBtn/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <Gap height={150}/>
            </ScrollView>

            <View style={styles.bottom}>
                <TouchableOpacity style={styles.chatBtn} activeOpacity={0.5} onPress={() => navigation.navigate('Chatting', {
                    owner: detailData.owner
                })}>
                    <IcChatFunc/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rentBtn} activeOpacity={0.5} onPress={() => navigation.navigate('Payment', {
                    data: detailData,
                    total: price * month,
                    month: month
                })}>
                    <Text style={styles.btntext}>Rent This Koz Now</Text>
                    <IcSend/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default KozDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: customColors.def.white
    },
    bottom: {
        height: 75,
        width: '100%',
        elevation: 24,
        backgroundColor: customColors.def.white,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    chatBtn: {
        height: 43,
        width: 43,
        backgroundColor: customColors.def.red2,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rentBtn: {
        height: 43,
        backgroundColor: customColors.def.red1,
        flex: 1,
        marginLeft: 16,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 10,
        paddingVertical: 9
    },
    btntext: {
        fontSize: 14,
        fontFamily: customFonts.medium,
        color: customColors.def.white,
        flex: 1,
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
    snftext: {
        marginHorizontal: 24,
        fontSize: 14,
        fontFamily: customFonts.medium,
        color: customColors.def.black,
        marginBottom: 8
    },
    descarea: {
        marginHorizontal: 24
    },
    desc: {
        fontSize: 14,
        fontFamily: customFonts.medium,
        color: customColors.def.black
    },
    desctext: {
        fontSize: 12,
        fontFamily: customFonts.light,
        color: customColors.def.grey,
        marginTop: 8
    },
    line: {
        height: 1,
        width: '100%',
        backgroundColor: customColors.def.line,
        marginVertical: 24
    },
    totalbox: {
        marginHorizontal: 24
    },
    totaltitle: {
        fontSize: 14,
        fontFamily: customFonts.regular,
        color: customColors.def.black
    },
    pricing: {
        marginTop: 9,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price: {
        fontSize: 16,
        fontFamily: customFonts.semiBold,
        color: customColors.def.red1
    },
    month: {
        fontSize: 14,
        fontFamily: customFonts.regular,
        color: customColors.def.black
    },
    qtying: {
        flexDirection: 'row',
        alignItems: 'center',
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
    }
})