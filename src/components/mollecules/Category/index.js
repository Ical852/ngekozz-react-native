import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryItem from '../CategoryItem'

const Category = ({ current, first, sec, last }) => {
  return (
    <View style={styles.container}>
        <CategoryItem
            icon={"male"}
            active={current == 1}
            onPress={first}
            title={"Male"}
        />
        <CategoryItem
            icon={"female"}
            active={current == 2}
            onPress={sec}
            title={"Female"}
        />
        <CategoryItem
            icon={"both"}
            active={current == 3}
            onPress={last}
            title={"Gabung"}
        />
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        flexDirection: 'row'
    }
})