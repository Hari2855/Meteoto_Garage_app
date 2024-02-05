import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'

const Empty = ({navigation}) => {
  return (
    <View style={styles.container}>
         <View style={styles.header}>
              <Pressable style={{ width: scale(48), height: scale(48), alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate('Dashboard')}>
                  <Image source={require('../Assets/chevron-left.png')} style={styles.img} />
              </Pressable>
              <Text style={[styles.text1, { marginLeft: '27%' }]}>PAYMENTS</Text>
          </View>

          <Text style={[styles.text1, {fontWeight: '600', fontSize: moderateScale(16), fontFamily: 'Nunito Sans', marginTop: '70%'}]}>No Payments</Text>
    </View>
  )
}

export default Empty

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
        alignItems: 'center',
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