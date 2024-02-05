import { View, Text, StyleSheet, Pressable, Image, Animated, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import DetailsContainer from '../Component/DetailsContainer'
import Header from '../Component/Header'

const Onwaitig2 = ({navigation}) => {
    
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <Header title={'ON WAITING'} onPress={() => navigation.navigate('Booking')} marginLeft={'25%'} />

          <DetailsContainer title={'on waiting'} onPress={() => navigation.navigate('Onwaitingdetails')} btcolor={'#E5B800'} color={'#33CCCC'}/>
          <DetailsContainer title={'on waiting'} onPress={() => navigation.navigate('Onwaitingdetails')} btcolor={'#E5B800'} color={'#33CCCC'} />
    </ScrollView>
  )
}

export default Onwaitig2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
})