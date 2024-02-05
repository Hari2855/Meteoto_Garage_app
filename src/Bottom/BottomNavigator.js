import { View, Text, StyleSheet, Image, Pressable, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import Dashboard from '../Starting screens/Dashboard'
import Payment from '../Payment Screens/Payment'
import Booking from '../Booking/Booking'
import Chat from '../Chat Screens/Chat'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { enableScreens } from 'react-native-screens'

enableScreens();
const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {

  return (
    <View style={styles.container}>
      <Bottom.Navigator animationEnabled={true}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: '#333333', height: verticalScale(80), borderTopWidth: 0, alignItems: 'center'},
          tabBarLabelStyle: { fontSize: moderateScale(12), fontWeight: '500', marginBottom: moderateScale(15) },

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconColor;
            let lineColor;

            if (route.name === 'Dashboard') {
              iconName = require('../Assets/Dashboard.png');
            } else if (route.name === 'Booking') {
              iconName = require('../Assets/Booking.png');
            } else if (route.name === 'Chat') {
              iconName = require('../Assets/Chat.png');
            } else if (route.name === 'Payment') {
              iconName = require('../Assets/Payment.png');
            }

            iconColor = focused ? '#33CCCC' : '#ffffff';
            lineColor = focused ? '#33CCCC' : '#333333';

            return (
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={iconName}
                  style={[
                    styles.img,
                    { tintColor: iconColor},
                  ]}
                />
                {focused && (
                  <View
                    style={[
                      styles.line,
                      { backgroundColor: lineColor },
                    ]}
                  />
                )}
              </View>
            );
          },


          tabBarActiveTintColor: '#33CCCC',
          tabBarInactiveTintColor: '#ffffff',
          tabBarHideOnKeyboard: true,
        })}
      >
        <Bottom.Screen name="Dashboard" component={Dashboard}/>
        <Bottom.Screen name="Booking" component={Booking} />
        <Bottom.Screen name="Chat" component={Chat} />
        <Bottom.Screen name="Payment" component={Payment} />
      </Bottom.Navigator>
    </View>
  )
}

export default BottomNavigator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bottomNav: {
    width: moderateScale(360),
    height: verticalScale(80),
    backgroundColor: '#333333',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bottomNav2: {
    width: moderateScale(109),
    height: verticalScale(80),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  img: {
    width: scale(24),
    height: scale(24),
    marginTop: moderateScale(10)
  },
  img1: {
    width: scale(30),
    height: scale(30),
    tintColor: '#ffffff',
  },
  Text: {
    fontSize: moderateScale(12),
    fontWeight: '500',
    fontFamily: 'Roboto',
    color: '#ffffff',
    top: moderateScale(10),
  },
  line: {
    width: moderateScale(80),
    height: verticalScale(4),
    backgroundColor: '#ffffff',
    top: moderateScale(38),
  },

})
