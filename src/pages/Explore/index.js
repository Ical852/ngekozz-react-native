import { ActivityIndicator, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { customColors, customFonts, gloUrl, linkApi } from '../../utils'
import { IcLocHome, IcSearchExplore } from '../../assets'
import { Gap, InfoItem, MainItem, MsItem } from '../../components'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useCallback } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setFav } from '../../redux/action'

const Explore = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const navigation = useNavigation()

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

  useFocusEffect(
    useCallback(() => {
      getAll()
    }, [])
  )
  
  const getAll = async () => {
    setLoading(true)
    axios.get(`${linkApi}/koz/getall`).then(res => {
      setLoading(false)
      console.log(res.data.data);
      setData(res.data.data)
    }).catch(err => {
      setLoading(false)
      console.log(err);
    })
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      <View style={styles.topcontent}>
        <Text style={styles.loctitle}>Your Locations</Text>
        <View style={styles.locbox}>
          <IcLocHome/>
          <Text style={styles.loctext}><Text style={styles.location}>Tangerang,</Text> Indonesia</Text>
        </View>
        <View style={styles.searchcont}>
          <IcSearchExplore/>
          <TextInput style={styles.input} placeholder={"Find your favorite koz"}/>
        </View>
      </View>

      <View style={styles.line}/>

      <View style={styles.mostsearch}>
        <Text style={styles.mstitle}>Most Search</Text>
        <View style={styles.mscontent}>
          <MsItem title={"Bogor"}/>
          <MsItem title={"Jakarta"}/>
          <MsItem title={"Putra"}/>
          <MsItem title={"Depok"}/>
        </View>
        <View style={styles.mscontent}>
          <MsItem title={"Kosan Modern"}/>
          <MsItem title={"Kosan Gabung"}/>
          <MsItem title={"Putri"}/>
        </View>
      </View>

      <View style={styles.line}/>

      <Gap height={24}/>
      
      <InfoItem
        title={"Info"}
        desc={"Perhatian segera lengkapi alamat email anda untuk menyelesaikan data anda agar dapat memudahkan pemberitahuan info terbaru"}
      />

      <View style={styles.gapping}>
        <Text style={styles.mstitle}>Most Searched Koz</Text>
      </View>

      {loading && (
        <View style={styles.loading1view}>
          <ActivityIndicator size={'large'} color={customColors.def.red1}/>
        </View>
      )}
      
      {!loading && (
        data && (
          data.length > 0 && (
            data.map(data => {
              return (
                <MainItem
                  img={{ uri: `${gloUrl}/${data.image}` }}
                  loc={data.location}
                  title={data.name}
                  desc={data.desc}
                  price={data.price}
                  onPress={() => navigation.navigate('KozDetail', { data })}
                  onFav={() => checkAndAddOrRemove(data)}
                  active={checkActive(data)}
                />
              )
            })
          )
        )
      )}

      <Gap height={150}/>
    </ScrollView>
  )
}

export default Explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColors.def.white
  },
  topcontent: {
    marginTop: 24,
    marginHorizontal: 24
  },
  loctitle: {
    fontSize: 12,
    fontFamily: customFonts.regular,
    color: customColors.def.grey
  },
  locbox: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
    lineHeight: 18
  },
  loctext: {
    fontSize: 12,
    fontFamily: customFonts.regular,
    color: customColors.def.grey,
    marginLeft: 5
  },
  location: {
    fontFamily: customFonts.semiBold,
    color: customColors.def.black
  },
  searchcont: {
    height: 48,
    borderWidth: 1,
    borderColor: customColors.def.grey,
    marginTop: 12,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 24
  },
  input: {
    flex: 1,
    marginLeft: 11,
    fontSize: 14,
    fontFamily: customFonts.regular,
    lineHeight: 18,
    color: customColors.def.grey
  },
  line: {
    height: 1,
    backgroundColor: customColors.def.line,
  },
  mostsearch: {
    margin: 24,
  },
  mstitle: {
    fontSize: 18,
    fontFamily: customFonts.semiBold,
    color: customColors.def.black
  },
  mscontent: {
    flexDirection: 'row',
    marginTop: 12
  },
  gapping: {
    marginTop: 24,
    marginLeft: 24,
    marginBottom: 20
  },
  loading1view: {
    height: 394,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})