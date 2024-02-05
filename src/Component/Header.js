import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'

const Header = ({title, navigation, onPress, marginLeft}) => {
  return (
      <View style={styles.header}>
          <Pressable style={{ width: scale(48), height: scale(48), alignItems: 'center', justifyContent: 'center',}} onPress={onPress} navigation={navigation}>
              <Image source={require('../Assets/chevron-left.png')} style={styles.img} />
          </Pressable>
          <Text style={[styles.text1, { marginLeft: marginLeft }]}>{title}</Text>
      </View>
  )
}

export default Header

const styles = StyleSheet.create({
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
        fontFamily: 'Nunito',
    },
})