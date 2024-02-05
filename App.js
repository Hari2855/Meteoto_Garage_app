import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './src/AppNavigator'
import { store } from './src/store'
import Profile from './src/Services/Profile'
import LocalStorage from './src/Services/LocalStorage'
import {Provider} from 'react-redux'



const App = () => {
  return (
    <Provider store={store}>
    <AppNavigator />
    </Provider>
  )
}

export default App