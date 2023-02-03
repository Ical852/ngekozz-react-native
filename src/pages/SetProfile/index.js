import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { customColors, customFonts, linkApi, showError, showSuccess } from '../../utils'
import { BackHeader, CustomButton, CustomInput, Gap } from '../../components'
import { DummyUserNull, IcPlusWhite } from '../../assets'
import * as ImagePicker from 'react-native-image-picker'
import axios from 'axios'

const SetProfile = ({ navigation, route }) => {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [current, setCurrent] = useState('name')
    const [image, setImage] = useState(null)
    const user = route.params.user

    const changeImage = async () => {
        Alert.alert('Image Choice', 'Pilih tipe pengambilan gambar anda', [
            {
                text: 'Camera',
                onPress: () => {
                    onCameraPick();
                }
            },
            {
                text: 'Gallery',
                onPress: () => {
                    onGalleryPick();
                },
            }
        ]);
    }

    const onUpdateImage = async (response) => {
        const form = new FormData()
        form.append('user_id', user._id)
        form.append('image', {
            uri: response.uri,
            name: response.fileName,
            type: response.type
        })

        await axios({
            url: `${linkApi}/user/updatephoto`,
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            data: form
        })
        .then(res => {
            showSuccess('Update Photo Success')
            setImage(response)
            console.log(res);
        })
        .catch(err => {
            showError("Update Photo Failed")
            console.log(err);
        })
    }

    const onGalleryPick = async () => {
        ImagePicker.launchImageLibrary().then(async res => {
            if (res.didCancel) {
                return showError('Oops gajadi ganti gambar?')
            }
            const response = res.assets[0]
            onUpdateImage(response)
        })
    }

    const onCameraPick = async = () => {
        ImagePicker.launchCamera().then(async res => {
            if (res.didCancel) {
                return showError('Oops gajadi ganti gambar?')
            }
            const response = res.assets[0]
            onUpdateImage(response)
        })
    }

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
            showSuccess('Set Up Profile Success')
            global.user = result.data.data
            console.log(result.data.data);
            setTimeout(() => {
                navigation.replace('SignUpSuccess')
            }, 1500);
        }).catch((err) => {
            showError('Oops, Something Went Wrong')
            console.log(err);
        });
    }

    return (
        <ScrollView style={styles.container}>
            <BackHeader onPress={() => navigation.goBack()}/>
            <View style={styles.content}>
                <TouchableOpacity style={styles.imgCont} activeOpacity={0.5} onPress={() => changeImage()}>
                    <Image source={image === null ? DummyUserNull : { uri: image.uri }} style={styles.img} />
                    <View style={styles.plusBtn}>
                        <View style={styles.btn}>
                            <IcPlusWhite/>
                        </View>
                    </View>
                </TouchableOpacity>
                <Text style={styles.title}>Set Your Profile</Text>
                <Text style={styles.desc}>Set your name and avatar, ( you can set the avatar later )</Text>
            </View>
            {
                current == 'name' && (
                    <>
                        <View style={styles.bottom}>
                            <CustomInput
                                title={"What's your name"}
                                placeholder={"Masukkan nama anda"}
                                onChangeText={(text) => setName(text)}
                            />
                        </View>
                        <CustomButton 
                            title={"Continue"}
                            disable={name == ''}
                            onPress={() => setCurrent('location')}
                        />
                        <Gap height={48}/>
                    </>
                )
            }
            {
                current == 'location' && (
                    <>
                        <View style={styles.bottom}>
                            <CustomInput
                                title={"Your Location ?"}
                                placeholder={"Masukkan lokasi anda"}
                                onChangeText={(text) => setLocation(text)}
                            />
                        </View>
                        <CustomButton 
                            title={"Continue"}
                            disable={location == ''}
                            onPress={() => onUpdate()}
                        />
                        <Gap height={48}/>
                    </>
                )
            }
        </ScrollView>
    )
}

export default SetProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: customColors.def.white,
    },
    content: {
        alignItems: 'center',
        width : '100%',
    },  
    imgCont: {
        marginTop: 82,
        height: 130,
        width: 130,
        borderWidth: 1,
        borderColor: customColors.def.greyL,
        borderRadius: 130/2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        height: 110,
        width: 110,
        borderRadius: 110/2
    },
    plusBtn: {
        position: 'absolute',
        width: 38,
        height: 38,
        backgroundColor: customColors.def.white,
        bottom: 10,
        right: -5,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        width: 30,
        height: 30,
        backgroundColor: customColors.def.red1,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontFamily: customFonts.semiBold,
        color: customColors.def.black,
        marginTop: 48
    },
    desc: {
        width: 214,
        fontSize: 14,
        fontFamily: customFonts.light,
        color: customColors.def.black,
        textAlign: 'center'
    },
    bottom: {
        marginHorizontal: 24,
        marginTop: 225,
        marginBottom: 24
    }
})