import { View, Text, StyleSheet, Pressable, Image, Animated, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Monthmodal from '../Booking/Monthmodal'
import Header from '../Component/Header'

const Bookinghistory = ({navigation}) => {
    const [first, setfirst] = useState(0)
    const [second, setSecond] = useState(0)
    const [isModalVisible, setModalVisible] = useState(false)


    const toggleModal = () => {
        setModalVisible(!isModalVisible)
    }

  return (
    <ScrollView style={styles.container1} showsVerticalScrollIndicator={false}>
          <Header title={'BOOKING'} onPress={() => navigation.goBack()} marginLeft={'28%'} />

          <Text style={[styles.text1, {fontFamily: 'Nunito Sans', marginLeft: moderateScale(20), marginTop: moderateScale(20)}]}>BOOKING HISTORY</Text>

          <View style={styles.container3}>
              <TextInput style={styles.textinput} placeholder='Search via invoice no./ transaction no.' placeholderTextColor='#909090'>
              </TextInput>
              <Pressable>
                  <Ionicons name='search-outline' color={'#ffffff'} size={24} style={{ right: scale(35) }} />
              </Pressable>
          </View>

          <View style={styles.catogry}>
              <Pressable style={[styles.box, { backgroundColor: first == 1 ? '#33CCCC' : '#333333' }]} onPress={() => setfirst(1)}>
                  {first == 0 ? <View>
                      <Text style={{ fontSize: moderateScale(12), fontWeight: '500', color: '#cccccc' }}>General Service</Text>
                  </View> :
                  <Pressable onPress={() => setfirst(0)}>
                      <Text style={[styles.text1, { color: '#cccccc'}]}>General Service  X</Text>
                  </Pressable>
                    }
              </Pressable>
              <Pressable style={[styles.box, { backgroundColor: second == 1 ? '#33CCCC' : '#333333' }]} onPress={() => setSecond(1)}>
                  {second == 0 ? <View>
                      <Text style={{ fontSize: moderateScale(12), fontWeight: '500', color: '#cccccc' }}>Major Service</Text>
                  </View> :
                      <Pressable onPress={() => setSecond(0)}>
                          <Text style={[styles.text1, { color: '#cccccc' }]}>Major Service  X</Text>
                      </Pressable>
                  }
              </Pressable>
          </View>

          <View style={styles.line}></View>

          <View style={styles.box1}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.text1}>Month: September, September</Text>
              <Text style={[styles.text1, {marginTop: moderateScale(5)}]}>September, September, September</Text>
            </View>
              <Pressable style={styles.month} onPress={toggleModal}>
                <Text style={styles.text1}>Month</Text>
                  <Image source={require('../Assets/Vector.png')} style={styles.img1}/>
                  <Monthmodal isVisible={isModalVisible} closeModal={toggleModal}/>
              </Pressable>
          </View>

          <Pressable style={styles.box2} onPress={() => navigation.navigate('Booking2')}>
            <View style={styles.box3}>
                  <Text style={[styles.text1, {color: '#333333', fontWeight: '600', marginLeft: moderateScale(10)}]}>General Service</Text>
                  <Text style={[styles.text1, { color: '#666666', fontWeight: '400', marginLeft: '22%' }]}>Invoice No: <Text style={[styles.text1,{color: '#333333', fontWeight: '600'}]}>123456789872</Text></Text>
            </View>

              <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Car Model: <Text style={[styles.text1, { color: '#333333', fontWeight: '400' }]}>Hyundai i10</Text></Text>
              <View style={{flexDirection: 'row'}}>
              <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Service Date: <Text style={[styles.text1, { color: '#333333', fontWeight: '400' }]}>28/09/2023</Text></Text>
                  <Image source={require('../Assets/Vector1.png')} style={styles.img2}/>
              </View>
              <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Delivery Date: <Text style={[styles.text1, { color: '#333333', fontWeight: '400' }]}>29/09/2023</Text></Text>
              <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Transaction No. : <Text style={[styles.text1, { color: '#333333', fontWeight: '400' }]}>IJBVKJ7657655766787</Text></Text>
          </Pressable>

          <Pressable style={styles.box2} onPress={() => navigation.navigate('Booking2')}>
              <View style={styles.box3}>
                  <Text style={[styles.text1, { color: '#333333', fontWeight: '600', marginLeft: moderateScale(10) }]}>General Service</Text>
                  <Text style={[styles.text1, { color: '#666666', fontWeight: '400', marginLeft: '22%' }]}>Invoice No: <Text style={[styles.text1, { color: '#333333', fontWeight: '600' }]}>123456789872</Text></Text>
              </View>

              <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Car Model: <Text style={[styles.text1, { color: '#333333', fontWeight: '400' }]}>Hyundai i10</Text></Text>
              <View style={{ flexDirection: 'row' }}>
                  <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Service Date: <Text style={[styles.text1, { color: '#333333', fontWeight: '400' }]}>28/09/2023</Text></Text>
                  <Image source={require('../Assets/Vector1.png')} style={styles.img2} />
              </View>
              <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Delivery Date: <Text style={[styles.text1, { color: '#333333', fontWeight: '400' }]}>29/09/2023</Text></Text>
              <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Transaction No. : <Text style={[styles.text1, { color: '#333333', fontWeight: '400' }]}>IJBVKJ7657655766787</Text></Text>
          </Pressable>

          <Pressable style={styles.box2} onPress={() => navigation.navigate('Booking2')}>
              <View style={styles.box3}>
                  <Text style={[styles.text1, { color: '#333333', fontWeight: '600', marginLeft: moderateScale(10) }]}>General Service</Text>
                  <Text style={[styles.text1, { color: '#666666', fontWeight: '400', marginLeft: '22%' }]}>Invoice No: <Text style={[styles.text1, { color: '#333333', fontWeight: '600' }]}>123456789872</Text></Text>
              </View>

              <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Car Model: <Text style={[styles.text1, { color: '#333333', fontWeight: '400' }]}>Hyundai i10</Text></Text>
              <View style={{ flexDirection: 'row' }}>
                  <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Service Date: <Text style={[styles.text1, { color: '#333333', fontWeight: '400' }]}>28/09/2023</Text></Text>
                  <Image source={require('../Assets/Vector1.png')} style={styles.img2} />
              </View>
              <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Delivery Date: <Text style={[styles.text1, { color: '#333333', fontWeight: '400' }]}>29/09/2023</Text></Text>
              <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Transaction No. : <Text style={[styles.text1, { color: '#333333', fontWeight: '400' }]}>IJBVKJ7657655766787</Text></Text>
          </Pressable>

          <Pressable style={styles.box2} onPress={() => navigation.navigate('Booking2')}>
              <View style={styles.box3}>
                  <Text style={[styles.text1, { color: '#333333', fontWeight: '600', marginLeft: moderateScale(10) }]}>General Service</Text>
                  <Text style={[styles.text1, { color: '#666666', fontWeight: '400', marginLeft: '22%' }]}>Invoice No: <Text style={[styles.text1, { color: '#333333', fontWeight: '600' }]}>123456789872</Text></Text>
              </View>

              <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Car Model: <Text style={[styles.text1, { color: '#333333', fontWeight: '400' }]}>Hyundai i10</Text></Text>
              <View style={{ flexDirection: 'row' }}>
                  <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Service Date: <Text style={[styles.text1, { color: '#333333', fontWeight: '400' }]}>28/09/2023</Text></Text>
                  <Image source={require('../Assets/Vector1.png')} style={styles.img2} />
              </View>
              <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Delivery Date: <Text style={[styles.text1, { color: '#333333', fontWeight: '400' }]}>29/09/2023</Text></Text>
              <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Transaction No. : <Text style={[styles.text1, { color: '#333333', fontWeight: '400' }]}>IJBVKJ7657655766787</Text></Text>
          </Pressable>

          <Pressable style={styles.box2} onPress={() => navigation.navigate('Booking2')}>
              <View style={styles.box3}>
                  <Text style={[styles.text1, { color: '#333333', fontWeight: '600', marginLeft: moderateScale(10) }]}>General Service</Text>
                  <Text style={[styles.text1, { color: '#666666', fontWeight: '400', marginLeft: '22%' }]}>Invoice No: <Text style={[styles.text1, { color: '#333333', fontWeight: '600' }]}>123456789872</Text></Text>
              </View>

              <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Car Model: <Text style={[styles.text1, { color: '#333333', fontWeight: '400' }]}>Hyundai i10</Text></Text>
              <View style={{ flexDirection: 'row' }}>
                  <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Service Date: <Text style={[styles.text1, { color: '#333333', fontWeight: '400' }]}>28/09/2023</Text></Text>
                  <Image source={require('../Assets/Vector1.png')} style={styles.img2} />
              </View>
              <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Delivery Date: <Text style={[styles.text1, { color: '#333333', fontWeight: '400' }]}>29/09/2023</Text></Text>
              <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Transaction No. : <Text style={[styles.text1, { color: '#333333', fontWeight: '400' }]}>IJBVKJ7657655766787</Text></Text>
          </Pressable>
    </ScrollView>
  )
}

export default Bookinghistory

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#333333'
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#ffffff',
        fontFamily: 'Nunito'
    },
    container3: {
        flexDirection: 'row',
        alignItems: 'center',
        width: moderateScale(360),
        height: verticalScale(100),
        alignSelf: 'center',
        justifyContent: 'space-between',
        bottom: moderateScale(10)
    },
    textinput: {
        width: moderateScale(320),
        height: verticalScale(52),
        color: 'white',
        borderWidth: 1,
        borderRadius: moderateScale(8),
        left: moderateScale(20),
        borderColor: '#ffffff',
        paddingLeft: moderateScale(20)
    },
    catogry: {
        width: moderateScale(270),
        height: verticalScale(24),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: moderateScale(10)
    },
    box: {
        width: moderateScale(127),
        height: verticalScale(24),
        borderRadius: moderateScale(12),
        borderWidth: 1,
        borderColor: '#cccccc',
        alignItems: 'center',
        justifyContent: 'center'
    },
    line: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#4D4D4D'
    },
    box1: {
        width: moderateScale(320),
        height: verticalScale(44),
        alignSelf: 'center',
        marginTop: moderateScale(10),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    month: {
        width: moderateScale(82),
        height: verticalScale(24),
        borderRadius: moderateScale(12),
        borderWidth: 1,
        borderColor: '#ED6B19',
        marginBottom: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    img1: {
        height: scale(8),
        width: scale(8),
        left: moderateScale(5)
    },
    box2: {
        width: moderateScale(320),
        height: verticalScale(128),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        borderBottomLeftRadius: moderateScale(5),
        borderBottomRightRadius: moderateScale(5),
        borderTopWidth: moderateScale(5),
        borderTopColor: '#33CCCC'
    },
    box3: {
        width: moderateScale(320),
        height: verticalScale(28),
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#999999'
    },
    img2: {
        width: moderateScale(7),
        height: verticalScale(12),
        marginLeft: '44%'
    }
})