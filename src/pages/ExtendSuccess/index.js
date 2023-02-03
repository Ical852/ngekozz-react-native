import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IlExtendSuccess } from '../../assets'
import { Gap, TitleDescBtn } from '../../components'
import { customColors } from '../../utils'
 
const ExtendSuccess = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <IlExtendSuccess/>
        <Gap height={30} />
        <TitleDescBtn
            title={"Extend Success!"}
            desc={"Thank you for your extend to rent our koz, now you can live longer with your own koz right now!"}
            btnTitle={"Back to Home"}
            descwidth={228}
            onPress={() => navigation.replace('Main')}
        />
    </View>
  )
}

export default ExtendSuccess

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: customColors.def.white,
        justifyContent: 'center',
        alignItems: 'center',
    }
})