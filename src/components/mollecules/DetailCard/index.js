import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'
import { IcFemailMini, IcLocDetail, IcMaleMini, IcStarDetail, IcTogetherMini } from '../../../assets'

const DetailCard = ({ icon, img, rate, cat, title, loc }) => {
    const RenderIcon = () => {
        return icon == 'male' ? <IcMaleMini/>
        : icon == 'female' ? <IcFemailMini/>
        : icon == 'both' ? <IcTogetherMini/>
        : <IcMaleMini/>
    }
  return (
    <View style={styles.container}>
        <View style={styles.imgbox}>
            <Image source={img} style={styles.img} />
            <View style={styles.ratebox}>
                <IcStarDetail/>
                <Text style={styles.ratetext}>{rate}</Text>
            </View>
        </View>
        <View style={styles.content}>
            <View style={styles.category}>
                <RenderIcon/>
                <Text style={styles.titlecat}>{cat}</Text>
            </View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.loc}>
                <IcLocDetail/>
                <Text style={styles.loctext}>{loc}</Text>
            </View>
        </View>
    </View>
  )
}

export default DetailCard

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        height: 422,
        backgroundColor: customColors.def.white,
        elevation: 3,
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 20
    },
    imgbox: {
        height: 307
    },
    img: {
        height: 307,
        width: '100%',
        borderRadius: 8
    },
    ratebox: {
        height: 30,
        width: 55,
        backgroundColor: customColors.def.white,
        position: 'absolute',
        top: 0,
        right: 0,
        borderBottomLeftRadius: 20,
        flexDirection: 'row',
        paddingLeft: 5
    },
    ratetext: {
        fontSize: 14,
        fontFamily: customFonts.medium,
        color: customColors.def.black,
        marginLeft: 2
    },
    content: {
        alignItems: 'center',
    },
    category: {
        flexDirection: 'row',
        marginTop: 12,
        alignItems: 'center',
    },
    titlecat: {
        fontSize: 10,
        fontFamily: customFonts.medium,
        color: customColors.def.red1,
        marginLeft: 6,
        lineHeight: 15
    },
    title: {
        fontSize: 16,
        fontFamily: customFonts.semiBold,
        color: customColors.def.black,
        marginTop: 6,
    },
    loc: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6
    },
    loctext: {
        fontSize: 14,
        fontFamily: customFonts.regular,
        color: customColors.def.grey,
        marginLeft: 6,
        lineHeight: 21
    }
})