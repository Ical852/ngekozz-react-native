import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors, linkApi, showError, showSuccess } from '../../utils'
import { CustomButton, CustomInput, Gap, TextBtn, Type1Header } from '../../components'
import { IlEditProfile } from '../../assets'
import { useState } from 'react'
import axios from 'axios'

const EditProfile = ({ navigation }) => {
    const [name, setName] = useState(global.user.fullName)
    const [location, setLocation] = useState(global.user.location)

    const onUpdate = async () => {
        await axios({
            url: `${linkApi}/user/update/${user._id}`,
            method: 'POST',
            data: {
                full_name: name,
                location: location
            }
        })
        .then((result) => {
            showSuccess('Update Profile Success')
            global.user = result.data.data
            console.log(result.data.data);
            setTimeout(() => {
                navigation.replace('Main')
            }, 1500);
        }).catch((err) => {
            showError('Oops, Something Went Wrong')
            console.log(err);
        });
    }

    return (
        <View style={styles.container}>
            <Type1Header
                title={"Edit Profile"}
                onPress={() => navigation.goBack()}
            />
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <View style={styles.il}>
                    <IlEditProfile/>
                    <Gap height={30}/>
                </View>
                <View style={styles.inputs}>
                    <CustomInput
                        title={"Full Name"}
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                    <Gap height={20}/>
                    <CustomInput
                        title={"Phone Number"}
                        value={"089643936990"}
                        disable
                    />
                    <Gap height={20}/>
                    <CustomInput
                        title={"Location"}
                        value={location}
                        onChangeText={(text) => setLocation(text)}
                    />
                    <Gap height={32}/>
                </View>
                <CustomButton
                    title={"Save"}
                    onPress={onUpdate}
                />
                <Gap height={24}/>
                <View style={styles.tbt}>
                    <TextBtn
                        title={"Change Password? "}
                        btn={"Here!"}
                        onPress={() => navigation.navigate('ChangePw')}
                    />
                </View>
                <Gap height={26}/>
            </ScrollView>
        </View>
    )
}

export default EditProfile

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