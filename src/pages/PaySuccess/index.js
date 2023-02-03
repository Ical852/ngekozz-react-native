import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors } from '../../utils'
import { IlPaySuccess } from '../../assets'
import { Gap, TitleDescBtn } from '../../components'

const PaySuccess = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <IlPaySuccess/>
        <Gap height={30}/>
        <TitleDescBtn
            title={"Payment Success!"}
            desc={"Thank you for your payment to rent our koz, now you can go to your place right now and have fun!"}
            btnTitle={"Go to Home"}
            descwidth={244}
            onPress={() => navigation.replace('Main')}
        />
    </View>
  )
}

export default PaySuccess

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: customColors.def.white,
        justifyContent: 'center',
        alignItems: 'center',
    }
})