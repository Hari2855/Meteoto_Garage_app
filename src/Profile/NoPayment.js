import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import {moderateScale} from 'react-native-size-matters'

const NoPayment = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Payment Request</Text>
    </View>
  )
}

export default NoPayment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    text: {
        fontSize: moderateScale(16),
        fontWeight: '700',
        fontFamily: 'Nunito Sans',
        color: '#ffffff',
        alignSelf: 'center',
        marginTop: '65%'
    }
})