import { ScrollView, StyleSheet, Text, View, Image, TextInput, ImageBackground, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { DummyAva, DummyMap, DummyNearest, IcFilter, IcLocHome, IcSearchHome, IlMap } from '../../assets'
import { customColors, customFonts, gloUrl, imgUrl, linkApi } from '../../utils'
import { Category, Gap, MainItem, MiniItem, NotifBtn, RecItem, TitleDesc, TitleFunc } from '../../components'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useCallback } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setFav } from '../../redux/action'


const Home = () => {
  const [category, setCategory] = useState(1)
  const navigation = useNavigation()

  const [loading1, setLoading1] = useState(false)
  const [loading2, setLoading2] = useState(false)

  const [data1, setData1] = useState([])
  
  const [data2, setData2] = useState([])
  const [data2Filtered, setData2Filtered] = useState([])

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
      getAllData()
      setCategory(1)
    }, [])
  )

  const filter = (num) => {
    if (num == 1) {
      setData2Filtered(data2.filter(data => data.category._id === '633a533bcbf97b94f8396ff2'))
    }
    if (num == 2) {
      setData2Filtered(data2.filter(data => data.category._id === '633a5379cbf97b94f8396ff3'))
    }
    if (num == 3) {
      setData2Filtered(data2.filter(data => data.category._id === '633a53e7cbf97b94f8396ffa'))
    }
    setCategory(num)
  }

  const getRecData = async () => {
    setLoading1(true)
    axios.get(`${linkApi}/koz/get/cat/633a53e7cbf97b94f8396ffa`).then(res => {
      setLoading1(false)
      setData1(res.data.data);
    }).catch(err => {
      setLoading1(false)
      console.log(err);
    })
  }

  const getAllData = async () => {
    setLoading2(true)
    axios.get(`${linkApi}/koz/getall`).then(res => {
      setLoading2(false)
      setData2(res.data.data);
      setData2Filtered(res.data.data.filter(data => data.category._id == '633a533bcbf97b94f8396ff2'));
    }).catch(err => {
      setLoading2(false)
      console.log(err);
    })
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <View style={styles.headcontent}>
        <Image source={global.user.image === null || global.user.image === undefined ? DummyAva : { uri: `${imgUrl}/${global.user.image}` } } style={styles.ava} />
        <View style={styles.profile}>
          <Text style={styles.headtext}>Hello, {global.user.fullName}</Text>
          <View style={styles.loc}>
            <IcLocHome/>
            <Text style={styles.loctext}>{global.user.location}</Text>
          </View>
        </View>
        <NotifBtn
          onPress={() => navigation.navigate('Notif')}
        />
      </View>

      <View style={styles.line}/>

      <View style={styles.searchcont}>
        <View style={styles.searchBox}>
          <IcSearchHome/>
          <TextInput style={styles.input} placeholder={"Search koz you like..."}/>
        </View>
        <View style={styles.filterbox}>
          <IcFilter/>
        </View>
      </View>

      <Gap height={24}/>

      <TitleFunc
        title={"Recommended Koz"}
        func={"View all"}
        onPress={() => {}}
      />

      {loading1 && (
        <View style={styles.loading1view}>
          <ActivityIndicator size={'large'} color={customColors.def.red1}/>
        </View>
      )}
      
      {!loading1 && (
        <ScrollView style={styles.reacarea} horizontal showsHorizontalScrollIndicator={false}>
          <Gap width={24}/>
          {data1 && (
            data1.length > 0 && (
              data1.map(data => {
                return (
                  <RecItem
                    img={{ uri: `${gloUrl}/${data.image}` }}
                    title={data.name}
                    loc={data.location}
                    rate={data.ratings}
                    price={data.price}
                    onPress={() => navigation.navigate('KozDetail', { data })}
                  />
                )
              })
            )
          )}
        </ScrollView>
      )}

      <TitleFunc
        title={"Koz Nearest To You"}
        func={"View all"}
        onPress={() => {}}
      />

      <View style={styles.nearest}>
        <View style={styles.neartop}>
          <Image source={DummyNearest} style={styles.nearimg}/>
          <View style={styles.neardesc}>
            <Text style={styles.neartitletext}>Kosan Gabung Pak Joko</Text>
            <Text style={styles.neardesctext}>Kosan gabung putra putri daerah tangerang selatan, indonesia</Text>
          </View>
        </View>
        <ImageBackground source={DummyMap} imageStyle={styles.map}>
          <Text style={styles.space}>2.5 KM</Text>
          <Text style={styles.locstate}>Jl. Poris Indah, Blok H</Text>
        </ImageBackground>
      </View>

      <Gap height={24}/>

      <TitleDesc
        title={"Search By Category"}
        desc={"Get koz by it’s category to find it easier !"}
      />

      <Gap height={20}/>

      <Category 
        current={category}
        first={() => filter(1)}
        sec={() => filter(2)}
        last={() => filter(3)}
      />

      <Gap height={24}/>

      <TitleFunc
        title={"Available Koz Near You"}
        func={"View all"}
        onPress={() => {}}
      />

      {loading2 && (
        <View style={styles.loadingbg2}>
          <ActivityIndicator size={'large'} color={customColors.def.red1}/>
        </View>
      )}
      
      {!loading2 && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Gap width={24}/>
          {data2Filtered && (
            data2Filtered.length > 0 && (
              data2Filtered.map(data => {
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

      <TitleFunc
        title={"New Good Place For You"}
        func={"View all"}
        onPress={() => {}}
      />

      <Gap height={20}/>

      {loading2 && (
        <View style={styles.loading1view}>
          <ActivityIndicator size={'large'} color={customColors.def.red1}/>
        </View>
      )}

      {!loading2 && (
        data2 && (
          data2.length > 0 && (
            data2.map(data => {
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

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColors.def.white
  },
  headcontent: {
    paddingTop: 24,
    paddingHorizontal : 24,
    flexDirection: 'row',
    alignItems: 'center'
  },
  ava :{
    height: 50,
    width: 50,
    borderRadius: 50
  },
  headtext: {
    fontSize: 12,
    fontFamily: customFonts.semiBold,
    color: customColors.def.black
  },
  profile: {
    marginLeft: 12,
    flex: 1,
  },
  loc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loctext: {
    fontSize: 12,
    marginLeft: 6,
    fontFamily: customFonts.regular,
    color: customColors.def.grey
  },
  line: {
    backgroundColor: customColors.def.line,
    height: 1,
    width: '100%',
    marginTop: 24
  },
  searchcont: {
    marginTop: 20,
    marginHorizontal: 24,
    flexDirection: 'row'
  },
  searchBox: {
    height: 48,
    backgroundColor: customColors.def.white,
    elevation: 3,
    borderRadius: 14,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12
  },
  filterbox: {
    height: 48,
    width: 48,
    backgroundColor: customColors.def.red1,
    marginLeft: 16,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginLeft: 14,
    fontSize: 14,
    color: customColors.def.grey
  },
  nearest: {
    height: 168,
    marginHorizontal: 24,
    backgroundColor: customColors.def.white,
    elevation: 3,
    marginTop: 20,
    borderRadius: 12,
    padding: 16,
  },
  nearimg: {
    height: 60,
    width: 60,
    borderRadius: 6
  },
  neartop: {
    flexDirection: 'row',
  },
  neardesc: {
    flex: 1,
    marginLeft: 16
  },
  neartitletext: {
    fontSize: 14,
    fontFamily: customFonts.semiBold,
    color: customColors.def.black,
    lineHeight: 21
  },
  neardesctext: {
    fontSize: 10,
    fontFamily: customFonts.regular,
    color: customColors.def.grey,
    marginTop: 6,
    lineHeight: 15
  },
  map: {
    borderRadius: 6,
    height: 60,
    marginTop: 16,
    width: '100%'
  },
  space: {
    marginTop: 24,
    marginLeft: 12,
    fontSize: 14,
    fontFamily: customFonts.bold,
    color: customColors.def.red1
  },
  locstate: {
    marginLeft: 12,
    fontSize: 14,
    fontFamily: customFonts.semiBold,
    color: customColors.def.black
  },
  loading1view: {
    height: 394,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingbg2: {
    height: 314,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})