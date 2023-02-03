import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors } from '../../utils'
import { CustomButton, CustomInput, Gap, Type1Header } from '../../components'
import { IlChangePw } from '../../assets'

const ChangePw = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Type1Header
            title={"Change Password"}
            onPress={() => navigation.goBack()}
        />
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            <View style={styles.il}>
                <IlChangePw/>
                <Gap height={30}/>
            </View>
            <View style={styles.inputs}>
                <CustomInput
                    title={"Current Password"}
                    value={"*********"}
                />
                <Gap height={20}/>
                <CustomInput
                    title={"New Password"}
                    value={"*********"}
                />
                <Gap height={20}/>
                <CustomInput
                    title={"Confirm New Password"}
                    value={"*********"}
                />
                <Gap height={32}/>
            </View>
            <CustomButton
                title={"Change"}
            />
            
            <Gap height={26}/>
        </ScrollView>
    </View>
  )
}

export default ChangePw

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: customColors.def.white
    },
    content: {
        flex: 1,
    },
    il: { alignItems: 'center', marginTop: 32 },
    inputs: {
        marginHorizontal: 24
    },
    tbt: { alignItems: 'center'},
})