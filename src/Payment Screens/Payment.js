import { View, Text, Image, Pressable, StyleSheet, Animated } from 'react-native'
import React, { useState } from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Monthmodel from './Monthmodel'
import Header from '../Component/Header'

const Payment = ({ navigation }) => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [isModalVisible, setModalVisible] = useState(false)
  const [state, setstate] = useState(0)

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  const Back = () => {
    if (state === 0) {
      navigation.goBack()
    }
    else {
      setstate(0)
    }
  }


  return (
    <View style={styles.container}>
      <Header title={'PAYMENTS'} onPress={Back} marginLeft={'28%'} />

      {state === 0 ? (
        <View style={{alignSelf: 'center', flexDirection: 'column'}}>
          <Pressable style={styles.month} onPress={toggleModal}>
            <Text style={[styles.text1, { fontFamily: 'Nunito Sans' }]}>{selectedMonth || 'Select Month'}</Text>
            <Monthmodel isVisible={isModalVisible} closeModal={toggleModal} />
          </Pressable>
          
        <Pressable style={styles.container1} onPress={() => setstate(1)}>
          <View style={{ flexDirection: 'row', marginTop: moderateScale(10) }}>
            <Image source={require('../Assets/Container.png')} style={styles.img1} />
            <View style={styles.container2}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.text1, { color: '#333333', fontFamily: 'Nunito Sans' }]}>Aditya Sharma</Text>
                <Text style={[styles.text1, { color: '#333333', fontFamily: 'Nunito Sans', marginLeft: moderateScale(90) }]}>₹3,000</Text>
              </View>
              <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginTop: moderateScale(2) }]}>Hyundayi Verna XE</Text>
              <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginTop: moderateScale(2) }]}>Transaction Date: 21-08-2023</Text>
            </View>
          </View>
        </Pressable>

              <Pressable style={[styles.container5,]}>
        <View style={{ flexDirection: 'row', marginTop: moderateScale(10) }}>
          <Image source={require('../Assets/Container.png')} style={styles.img1} />
          <View style={styles.container2}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.text1, { color: '#333333', fontFamily: 'Nunito Sans' }]}>Aditya Sharma</Text>
              <Text style={[styles.text1, { color: '#333333', fontFamily: 'Nunito Sans', marginLeft: moderateScale(90) }]}>₹3,000</Text>
            </View>
            <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginTop: moderateScale(2) }]}>Hyundayi Verna XE</Text>
            <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginTop: moderateScale(2) }]}>Transaction Date: 21-08-2023</Text>
          </View>
        </View>
      </Pressable>

      <Pressable style={styles.container6}>
        <View style={{ flexDirection: 'row', marginTop: moderateScale(10) }}>
          <Image source={require('../Assets/Container.png')} style={styles.img1} />
          <View style={styles.container2}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.text1, { color: '#333333', fontFamily: 'Nunito Sans' }]}>Aditya Sharma</Text>
              <Text style={[styles.text1, { color: '#333333', fontFamily: 'Nunito Sans', marginLeft: moderateScale(90) }]}>₹3,000</Text>
            </View>
            <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginTop: moderateScale(2) }]}>Hyundayi Verna XE</Text>
            <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginTop: moderateScale(2) }]}>Transaction Date: 21-08-2023</Text>
          </View>
        </View>
      </Pressable>
      </View>

      ) : (
        <Pressable style={[styles.container7, {height: verticalScale(244), marginTop: moderateScale(40)}]}>
          <View style={{ flexDirection: 'row', marginTop: moderateScale(10) }}>
            <Image source={require('../Assets/Container.png')} style={styles.img1} />
            <View style={styles.container2}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.text1, { color: '#333333', fontFamily: 'Nunito Sans' }]}>Aditya Sharma</Text>
                <Text style={[styles.text1, { color: '#333333', fontFamily: 'Nunito Sans', marginLeft: moderateScale(90) }]}>₹3,000</Text>
              </View>
              <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginTop: moderateScale(2) }]}>Hyundayi Verna XE</Text>
              <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginTop: moderateScale(2) }]}>Transaction Date: 21-08-2023</Text>
            </View>
          </View>

          <View style={styles.container3}>
            <View style={{ flexDirection: 'row', marginTop: moderateScale(5) }}>
              <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginLeft: moderateScale(15) }]}>Transaction No. : <Text style={{ fontWeight: '400' }}>IJBVKJ7657655766787</Text></Text>
              <Pressable>
                <Image source={require('../Assets/clipboard.png')} style={styles.img2} />
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
            <Image source={require('../Assets/clipboard.png')} style={[styles.img2, { bottom: moderateScale(13), left: moderateScale(70) }]} />
          </View>
          <View style={styles.container4}>
              <Text style={[styles.text1, {fontWeight: '400'}]}>Secure Payments</Text>
              <Image source={require('../Assets/Maskgroup.png')} style={styles.img3}/>
          </View>
        </Pressable>)}
    </View>
  )
}

export default Payment

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
  month: {
    width: moderateScale(112),
    height: verticalScale(24),
    borderRadius: moderateScale(12),
    borderWidth: 1,
    borderColor: '#acacac',
    alignSelf: 'flex-end',
    marginTop: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center'
  },
  container1: {
    width: moderateScale(320),
    height: verticalScale(84),
    borderRadius: moderateScale(5),
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginTop: moderateScale(10),
  },
  img1: {
    height: scale(60),
    width: scale(60),
    borderWidth: 1,
    borderColor: '#33CCCC',
    borderRadius: scale(30),
    marginLeft: moderateScale(15)
  },
  container2: {
    width: moderateScale(212),
    height: verticalScale(54),
    flexDirection: 'column',
    marginLeft: moderateScale(20)
  },
  container3: {
    width: moderateScale(320),
    height: verticalScale(74),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#999999',
    borderStyle: 'dashed',
    marginTop: moderateScale(17)
  },
  img2: {
    height: scale(16),
    width: scale(16),
    marginLeft: moderateScale(50),
    marginTop: moderateScale(2)
  },
  container4: {
    width: scale(131),
    height: scale(24),
    alignSelf: 'center',
    top: moderateScale(30),
    alignItems: 'center',
    flexDirection: 'row'
  },
  img3: {
    height: scale(24),
    width: scale(24),
    marginLeft: moderateScale(10)
  },
  container5: {
    width: moderateScale(320),
    height: verticalScale(84),
    borderRadius: moderateScale(5),
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginTop: moderateScale(10),
  },
  container6: {
    width: moderateScale(320),
    height: verticalScale(84),
    borderRadius: moderateScale(5),
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginTop: moderateScale(10),
  },
  container7: {
    width: moderateScale(320),
    height: verticalScale(84),
    borderRadius: moderateScale(5),
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginTop: moderateScale(10),
  },
})