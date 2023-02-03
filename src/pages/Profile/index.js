import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { DummyAva, IcLoc, IcPlusWhite } from '../../assets'
import { Gap, IconedHeader, ProfileItem } from '../../components'
import { customColors, customFonts, imgUrl, linkApi, showError, showSuccess } from '../../utils'
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'react-native-image-picker'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const Profile = () => {
  const navigation = useNavigation()
  const [image, setImage] = useState(null)
  const [user, setUser] = useState(global.user)

  const changeImage = async () => {
    Alert.alert('Image Choice', 'Pilih tipe pengambilan gambar anda', [{
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
        setImage(response)
        showSuccess('Update Photo Success')
        console.log(res);
      })
      .catch(err => {
        showError("Update Photo Failed")
        console.log(err);
      })

    await refresh()
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

  useEffect(() => {
    refresh()
  }, [image])

  const refresh = async () => {
    await axios.get(`${linkApi}/user/get/${global.user._id}`).then(res => {
      console.log(res.data.data);
      global.user = res.data.data
      setUser(res.data.data)
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <IconedHeader
        title={"My Profile"}
      />

      <View style={styles.profile}>
        <TouchableOpacity style={styles.imgboxprofile} onPress={changeImage}>
          <Image source={user.image == undefined || user.image == null ? DummyAva : { uri: `${imgUrl}/${user.image}`}} style={styles.img}/>
          <View style={styles.plusebox}>
            <View style={styles.plusbtn}>
              <IcPlusWhite/>
            </View>
          </View>
        </TouchableOpacity>
        <Text style={styles.name}>{global.user.fullName}</Text>
        <Text style={styles.phone}>{global.user.phoneNumber}</Text>
        <View style={styles.loccont}>
          <IcLoc/>
          <Text style={styles.loctext}>{global.user.location}</Text>
        </View>
      </View>

      <Text style={styles.title}>Profile Settings</Text>

      <Gap height={13}/>

      <ProfileItem
        icon={"pencil"}
        title={"Edit Profile"}
        desc={"Edit your profile account"}
        onPress={() => navigation.navigate('EditProfile')}
      />
      <ProfileItem
        icon={"koz"}
        title={"My Koz"}
        desc={"Check your koz rent right now"}
        onPress={() => navigation.navigate('MyKoz')}
      />
      <ProfileItem
        icon={"trx"}
        title={"My Transactions"}
        desc={"Your Transactions History"}
        onPress={() => navigation.navigate('Transactions')}
      />
      <ProfileItem
        icon={"help"}
        title={"Help Center"}
        desc={"Need more help"}
      />
      <ProfileItem
        icon={"settings"}
        title={"Settings"}
        desc={"Settings your account"}
      />

      <Gap height={150}/>
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : customColors.def.white
  },
  profile: {
    alignItems: 'center',
    marginTop: 32
  },
  imgboxprofile: {
    height: 100,
    width: 100
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  plusebox :{
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: customColors.def.white,
    position: 'absolute',
    bottom: -5,
    right: -5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusbtn: {
    height: 26,
    width: 26,
    borderRadius: 50,
    backgroundColor: customColors.def.red1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontFamily: customFonts.semiBold,
    color: customColors.def.black,
    marginTop: 16,
    lineHeight: 24
  },
  phone: {
    fontSize: 14,
    fontFamily: customFonts.medium,
    color: customColors.def.black,
    marginTop: 4,
    lineHeight: 21
  },
  loccont: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loctext: {
    marginLeft: 4,
    fontSize: 14,
    fontFamily: customFonts.regular,
    color: customColors.def.grey,
    lineHeight: 21
  },
  title: {
    fontSize: 16,
    fontFamily: customFonts.medium,
    color: customColors.def.black,
    marginLeft: 24,
    marginTop: 24
  }
})