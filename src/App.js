import { LogBox, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Router from './router'
import FlashMessage from 'react-native-flash-message'
import { Provider } from 'react-redux'
import { Main } from './pages'
import store from './redux/store'
LogBox.ignoreAllLogs()

const MainApp = () => {
  return (
    <>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
      <FlashMessage/>
    </>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <MainApp/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})