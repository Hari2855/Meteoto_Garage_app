import { View, Text, StyleSheet, Pressable, Image, ScrollView, TextComponent, } from 'react-native'
import React, { useState, useEffect } from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Header from '../Component/Header'

const Paymentdetails = ({navigation}) => {
  return (
    <View style={styles.container}>
          <Header title={'PAYMENT'} onPress={() => navigation.goBack()} marginLeft={'27%'} />

          <Pressable style={styles.container1}>
            <View style={{width: moderateScale(84), height: verticalScale(84), borderRightWidth: 1, borderRightColor: '#4D4D4D', alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../Assets/check.png')} style={styles.img1}/>
            </View>

            <View style={styles.container2}>
                  <Text style={[styles.text1, {color: '#333333', fontFamily: 'Nunito Sans'}]}>Payment: Completed</Text>
                  <Text style={[styles.text1, { color: '#333333', fontWeight: '600'}]}>Date: 28/09/2023</Text>
                  <Text style={[styles.text1, { color: '#333333', fontWeight: '600' }]}>time: 06:00PM</Text>
            </View>
          </Pressable>

          <View style={styles.line}></View>

          <Pressable style={[styles.container7, { height: verticalScale(260) }]}>
              <View style={{ flexDirection: 'row', marginTop: moderateScale(10) }}>
                  <Image source={require('../Assets/Container.png')} style={styles.img4} />
                  <View style={styles.container8}>
                      <View style={{ flexDirection: 'row' }}>
                          <Text style={[styles.text1, { color: '#333333', fontFamily: 'Nunito Sans' }]}>Aditya Sharma</Text>
                          <Text style={[styles.text1, { color: '#333333', fontFamily: 'Nunito Sans', marginLeft: moderateScale(90) }]}>₹3,000</Text>
                      </View>
                      <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginTop: moderateScale(2) }]}>Hyundayi Verna XE</Text>
                      <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginTop: moderateScale(2) }]}>Transaction Date: 21-08-2023</Text>
                  </View>
              </View>

              <View style={styles.container9}>
                  <View style={{ flexDirection: 'row', marginTop: moderateScale(5) }}>
                      <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginLeft: moderateScale(15) }]}>Service Name : <Text style={{ fontWeight: '400', color: '#333333' }}>Electronic Expert</Text></Text>
                  </View>

                  <View style={{ flexDirection: 'row', marginTop: moderateScale(5) }}>
                      <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginLeft: moderateScale(15) }]}>Transaction No. : <Text style={{ fontWeight: '400' }}>IJBVKJ7657655766787</Text></Text>
                      <Pressable>
                          <Image source={require('../Assets/clipboard.png')} style={styles.img5} />
                      </Pressable>
                  </View>
                  <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginLeft: moderateScale(15), marginTop: moderateScale(5) }]}>Payment Method: <Text style={{ fontWeight: '400', color: '#333333' }}>Cash</Text></Text>
                  <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginLeft: moderateScale(15), marginTop: moderateScale(5) }]}>Invoice No. : <Text style={{ fontWeight: '400', color: '#33CCCC' }}>564895</Text></Text>
              </View>

              <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginLeft: moderateScale(15), marginTop: moderateScale(10) }]}>Credited to:</Text>
              <View style={{ flexDirection: 'row', marginLeft: moderateScale(15) }}>
                  <Pressable style={{ width: scale(32), height: scale(32), borderRadius: scale(20), borderWidth: 1, borderColor: '#999999', justifyContent: 'center' }}>
                      <Image source={require('../Assets/Bankicon.png')} style={{ height: scale(24), width: scale(24), alignSelf: 'center' }} />
                  </Pressable>
                  <Text style={[styles.text1, { fontWeight: '400', color: '#333333', marginLeft: moderateScale(10) }]}>XXXXXXX4030</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                  <Text style={[styles.text1, { fontWeight: '400', color: '#333333', marginLeft: moderateScale(56), bottom: moderateScale(13) }]}>UTR: 121212121212</Text>
                  <Image source={require('../Assets/clipboard.png')} style={[styles.img5, { bottom: moderateScale(13), left: moderateScale(70) }]} />
              </View>
          </Pressable>
    </View>
  )
}

export default Paymentdetails

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
    container1: {
        width: moderateScale(320),
        height: verticalScale(84),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(20),
        alignItems: 'center',
        flexDirection: 'row'
    },
    img1: {
        width: scale(60),
        height: scale(60),
        borderWidth: 1,
        borderColor: '#6da007',
        borderRadius: scale(30)
    },
    container2: {
        width: moderateScale(125),
        height: verticalScale(52),
        marginLeft: moderateScale(15),
        flexDirection: 'column'
    },
    container5: {
        width: scale(48),
        height: scale(48),
        marginLeft: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img3: {
        width: scale(6),
        height: scale(12),
        tintColor: '#999999'
    },
    line: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(20)
    },
    container7: {
        width: moderateScale(320),
        height: verticalScale(84),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(20),
    },
    img4: {
        height: scale(60),
        width: scale(60),
        borderWidth: 1,
        borderColor: '#33CCCC',
        borderRadius: scale(30),
        marginLeft: moderateScale(15)
    },
    container8: {
        width: moderateScale(212),
        height: verticalScale(54),
        flexDirection: 'column',
        marginLeft: moderateScale(20)
    },
    container9: {
        width: moderateScale(320),
        height: verticalScale(95),
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#999999',
        borderStyle: 'dashed',
        marginTop: moderateScale(17)
    },
    img5: {
        height: scale(16),
        width: scale(16),
        marginLeft: moderateScale(50),
        marginTop: moderateScale(2)
    },
    
})