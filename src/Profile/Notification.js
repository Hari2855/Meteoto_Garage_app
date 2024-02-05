import { View, Text, StyleSheet, Pressable, Image,} from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Paymentrequest from './Paymentrequest'
import PartsConfriom from './PartsConfriom'

const Tab = createMaterialTopTabNavigator()

const Notification = ({navigation}) => {
  return (
    <View style={styles.container}>
          <View style={styles.header}>
              <Pressable style={{ width: scale(48), height: scale(48), alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.goBack()}>
                  <Image source={require('../Assets/chevron-left.png')} style={styles.img} />
              </Pressable>
              <Text style={[styles.text1, { marginLeft: '23%' }]}>NOTIFICATIONS</Text>
          </View>

          <Tab.Navigator screenOptions={{
              tabBarStyle: {
                  backgroundColor: '#333333', elevation: 0
              },
              tabBarLabelStyle: {
                  fontSize: moderateScale(12), fontWeight: '500', color: '#ffffff'
              },
              tabBarIndicatorStyle: {
                  backgroundColor: '#33b6b6', width: scale(140), marginLeft: moderateScale(20), height: scale(4), borderRadius: scale(5)
              },
          }}>
              <Tab.Screen name='PAYMENT REQUEST' component={Paymentrequest} />
              <Tab.Screen name='PARTS CONFIRMATION' component={PartsConfriom} />
          </Tab.Navigator>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    header: {
        width: moderateScale(360),
        height: verticalScale(60),
        alignItems: 'center',
        flexDirection: 'row',
    },
    img: {
        width: scale(24),
        height: scale(24)
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#ffffff',
        fontFamily: 'Nunito'
    },
})