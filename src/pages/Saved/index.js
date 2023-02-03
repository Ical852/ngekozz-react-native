import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { customColors, customFonts, gloUrl, linkApi } from '../../utils'
import { Gap, IconedHeader, MainItem, MiniItem, TitleDescBtn, TitleFunc } from '../../components'
import { Dummy7, Dummy8, Dummy9, IlEmptySaved } from '../../assets'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useCallback } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setFav } from '../../redux/action'

const Saved = () => {
  const navigation = useNavigation()
  const [empty, setEmpty] = useState(true)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

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
      getRecData()
      if (fav.length > 0) {
        setEmpty(false)
      }
    }, [])
  )

  const getRecData = async () => {
    setLoading(true)
    axios.get(`${linkApi}/koz/get/cat/633a53e7cbf97b94f8396ffa`).then(res => {
      setLoading(false)
      console.log(res.data.data);
      setData(res.data.data);
    }).catch(err => {
      setLoading(false)
      console.log(err);
    })
  }

  

  const EmptyKoz = () => {
    return (
      <View style={styles.emptycontent}>
        <IlEmptySaved/>
        <Gap height={30}/>
        <TitleDescBtn
          title={"No Saved Course Yet"}
          desc={"Seems like you have not saved any koz yet"}
          btnTitle={"Go To Home"}
          onPress={() => navigation.navigate('Main')}
        />
      </View>
    )
  }

  const ExistSavedKoz = () => {
    return (
      <View>
        {fav && (
          fav.length > 0 && (
            fav.map(data => {
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
        )}
      </View>
    )
  }
  
  const RenderSavedKoz = () => {
    return empty ? <EmptyKoz/> : <ExistSavedKoz/>
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <IconedHeader
        title={"Saved Koz"}
      />

      <Gap height={32}/>

      <TitleFunc
        title={"Place Might You Interest"}
        func={"View all"}
      />

      {loading && (
        <View style={styles.loadingbg2}>
          <ActivityIndicator size={'large'} color={customColors.def.red1}/>
        </View>
      )}

      {!loading && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Gap width={24}/>
          {data && (
            data.length > 0 && (
              data.map(data => {
                return (
                  <MiniItem
                    img={{ uri: `${gloUrl}/${data.image}` }}
                    title={data.name}
                    loc={data.location}
                    price={data.price}
                    onPress={() => navigation.navigate('KozDetail', { data })}
                  />
                )
              })
            )
          )}
        </ScrollView>
      )}


      <Text style={styles.mstitle}>Your Saved Koz</Text>
      <RenderSavedKoz/>

      <Gap height={160}/>
    </ScrollView>
  )
}

export default Saved

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColors.def.white
  },
  mstitle: {
    fontSize: 18,
    fontFamily: customFonts.semiBold,
    color: customColors.def.black,
    marginLeft: 24
  },
  emptycontent: {
    alignItems: 'center',
    marginTop: 24
  },
  loadingbg2: {
    height: 314,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})