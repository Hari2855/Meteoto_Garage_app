import { View, Text, StyleSheet, Pressable, Image, Animated, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Otpmodel from './Otpmodel'
import Header from '../Component/Header'

const Onwaitingdetails = ({navigation}) => {
    const [isModelvisible, setModelvisible] = useState(false)

    const togglmodel = () => {
        setModelvisible(!isModelvisible)
    }


  return (
    <View style={styles.container}>
          <Header title={'ON WAITING'} onPress={() => navigation.navigate('Onwaiting2')} marginLeft={'25%'} />

          <View style={styles.container1}>
            <Image source={require('../Assets/Dcar.png')} style={styles.img1}/>

            <View style={styles.detailc}>
                  <Text style={[styles.text1, {color: '#333333', fontFamily: 'Nunito Sans'}]}>HYUNDAI VERNA</Text>
                  <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginTop: moderateScale(3)}]}>Verna SX Turbo DT</Text>
                  <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginTop: moderateScale(3) }]}>Petrol</Text>
                  <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginTop: moderateScale(3) }]}>2020</Text>
            </View>

              <Text style={[styles.text1, { color: '#333333', fontFamily: 'Nunito Sans', marginTop: '17%' }]}>MP04 SU 1234</Text>
          </View>

          <View style={styles.container2}>
            <View style={styles.textc}>
              <Text style={[styles.text2, {marginTop: moderateScale(15)}]}><Text style={{color: '#333333', fontSize: moderateScale(13)}}>•</Text> Service type: <Text style={{color: '#333333'}}>Major Service</Text></Text>

              <Text style={[styles.text2, {marginTop: moderateScale(5)}]}><Text style={{ color: '#333333', fontSize: moderateScale(13) }}>•</Text> Booking type: <Text style={{ color: '#333333' }}>Scheduled Booking</Text></Text>
            </View>

            <View style={[styles.textc, {height: verticalScale(152)}]}>
                  <Text style={[styles.text1, {color: '#000000', marginLeft: moderateScale(16), marginTop: moderateScale(10)}]}>Customer Details</Text>

                  <Text style={[styles.text1, {fontWeight: '600', color: '#666666', marginLeft: moderateScale(16), marginTop: moderateScale(10)}]}>Customer Name: <Text style={{color: '#333333'}}>Aditya Sharma</Text></Text>

                <View style={{flexDirection: 'row'}}>
                  <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginLeft: moderateScale(16), marginTop: moderateScale(10) }]}>Customer Address:</Text>
                  <Image source={require('../Assets/Map.png')} style={styles.img2}/>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{width: moderateScale(256), height: verticalScale(16)}}>
                  <Text style={[styles.text1,{ color: '#000000', fontWeight: '600', marginLeft: moderateScale(16), marginTop: moderateScale(10) }]}>Indrapuri, Sector-A, Near BHEL, Anantashree Hospital Bhopal</Text>
                </ScrollView>

                  <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginLeft: moderateScale(16), marginBottom: moderateScale(20)}]}>Garage to Customer Distance: <Text style={{ color: '#333333' }}>5.2 km</Text></Text>
            </View>

            <View style={[styles.textc, { height: verticalScale(68), justifyContent: 'center' }]}>
                <View style={styles.container3}>
                      <Text style={[styles.text1, {fontWeight: '600', color: '#333333'}]}>Customer requested for Car Pickup</Text>
                </View>
            </View>

            <Pressable style={styles.button} onPress={togglmodel}>
                <Text style={styles.text1}>ENTER OTP</Text>
                <Otpmodel isVisible={isModelvisible} onCancel={togglmodel} navigation={navigation}/>
            </Pressable>
          </View>

    </View>
  )
}

export default Onwaitingdetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#ffffff',
        fontFamily: 'Nunito'
    },
    container1: {
        width: moderateScale(320),
        height: verticalScale(108),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        alignItems: 'center',
        flexDirection: 'row'
    },
    img1: {
        width: scale(60),
        height: scale(60),
        borderRadius: scale(30),
        borderWidth: 1,
        borderColor: '#33CCCC',
        marginLeft: moderateScale(16),
        marginBottom: moderateScale(25)
    },
    detailc: {
        width: moderateScale(113),
        height: verticalScale(76),
        marginLeft: moderateScale(15),
        flexDirection: 'column'
    },
    container2: {
        width: moderateScale(320),
        height: verticalScale(380),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(15)
    },
    text2: {
        color: '#666666', 
        fontWeight: '600', 
        fontFamily: 'Nunito', 
        fontSize: moderateScale(12),
        marginTop: moderateScale(10),
        marginLeft: moderateScale(10)
    },
    textc: {
      width: moderateScale(320),
      height: verticalScale(76),
      borderBottomWidth: 0.5,
      borderBottomColor: '#999999',
    },
    img2: {
        width: scale(24),
        height: scale(24),
        marginLeft: '45%'
    },
    container3: {
        width: moderateScale(288),
        height: verticalScale(36),
        borderWidth: 2,
        borderColor: '#FFCC00',
        borderRadius: moderateScale(5),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: moderateScale(288),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#6DA007',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: moderateScale(20)
    }
})