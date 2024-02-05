import { View, Text, StyleSheet, Pressable, Image, ScrollView,} from 'react-native'
import React, { useState, useEffect } from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Copymodel from '../Booking/Copymodel'
import Copymodel2 from '../Booking/Copymodel2'
import Header from '../Component/Header'

const Bookingdetails = ({navigation}) => {
     const [isModalVisible, setModalVisible] = useState(false)
     const [isModalVisible1, setModalVisible1] = useState(false)

     const toggleModal = () => {
        setModalVisible(!isModalVisible)
     }

    const toggleModal1 = () => {
        setModalVisible1(!isModalVisible1)
    }

    const closeModal = () => {
        setModalVisible(false)
    }
    
    useEffect(() => {
        if (isModalVisible) {
            const timer = setTimeout(() => {
                closeModal();
            }, 3000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [isModalVisible]);

    useEffect(() => {
        if (isModalVisible1) {
            const timer = setTimeout(() => {
                setModalVisible1(false)
            }, 3000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [isModalVisible1]);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
          <Header title={'BOOKING'} onPress={() => navigation.goBack()} marginLeft={'28%'} />

          <View style={styles.container1}>
            <View style={styles.container2}>
                  <Text style={[styles.text1, {color: '#333333', fontWeight: '600', marginLeft: moderateScale(10)}]}>General Service</Text>
                  <Text style={[styles.text1, { color: '#666666', fontWeight: '400', marginLeft: '16%' }]}>Invoice No: <Text style={[styles.text1, { color: '#333333', fontWeight: '600' }]}>123456789872</Text></Text>
                  <Pressable onPress={toggleModal}>
                  <Image source={require('../Assets/clipboard.png')} style={styles.img1}/>
                  <Copymodel isVisible={isModalVisible} closeModal={toggleModal}/>
                  </Pressable>
            </View>

            <View style={styles.container3}>
                  <Text style={[styles.text1, {color: '#000000', fontFamily: 'Nunito Sans', marginLeft: moderateScale(10), marginTop: moderateScale(10)}]}>Booking Details</Text>
                  <Text style={[styles.text1, { color: '#666666', fontWeight: '600', fontFamily: 'Nunito Sans', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Booking Date: <Text style={{color: '#333333', fontWeight: '400'}}>28/09/2023</Text></Text>
                  <Text style={[styles.text1, { color: '#666666', fontWeight: '600', fontFamily: 'Nunito Sans', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Booking Type: <Text style={{ color: '#333333', fontWeight: '400' }}>Same Day Booking</Text></Text>
            </View>

            <View style={styles.container4}>
                <View style={styles.container5}>
                      <Text style={[styles.text1, { color: '#000000', fontFamily: 'Nunito Sans'}]}>Booking Details</Text>
                      <Pressable style={styles.jobcard} onPress={() => navigation.navigate('Jobcard')}>
                        <Text style={[styles.text1, {color: '#33CCCC', fontFamily: 'Nunito Sans'}]}>Job Card</Text>
                      </Pressable>
                </View>

                  <Text style={[styles.text1, { color: '#666666', fontWeight: '600', fontFamily: 'Nunito Sans', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Service Type: <Text style={{ color: '#333333', fontWeight: '400' }}>General Service</Text></Text>
                  <Text style={[styles.text1, { color: '#666666', fontWeight: '600', fontFamily: 'Nunito Sans', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Arriced On: <Text style={{ color: '#333333', fontWeight: '400' }}>28/09/2023</Text></Text>
                  <Text style={[styles.text1, { color: '#666666', fontWeight: '600', fontFamily: 'Nunito Sans', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Delivered On: <Text style={{ color: '#333333', fontWeight: '400' }}>30/09/2023</Text></Text>
                  <Text style={[styles.text1, { color: '#666666', fontWeight: '600', fontFamily: 'Nunito Sans', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Vehicle issue(s)</Text>

                  <View style={styles.container6}>
                    <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll} nestedScrollEnabled={true}>
                        <Text style={[styles.text1, {fontWeight: '400', color: '#333333', fontFamily: 'Nunito'}]}>
                              {`Lorem Ipsum has been the industry's standard \ndummy text ever since the 1500s, when an \nunknown printer took a galley of type and \nscrambled it to make a type specimen book. It has \nsurvived not only five centuries, but also the leap \ninto electronic typesetting, remaining essentially \nunchanged. It was popularised in the 1960s with \nthe release of Letraset sheets containing Lorem \nIpsum passages, and more recently with desktop \npublishing software like Aldus PageMaker \nincluding versions of Lorem Ipsum.`}
                        </Text>
                    </ScrollView>
                  </View>
            </View>

              <View style={styles.container7}>
                  <Text style={[styles.text1, { color: '#000000', fontFamily: 'Nunito Sans', marginTop: moderateScale(10), marginLeft: moderateScale(10) }]}>Car Details</Text>
                  <Text style={[styles.text1, { color: '#666666', fontWeight: '600', fontFamily: 'Nunito Sans', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Car Model: <Text style={{ color: '#333333', fontWeight: '400' }}>Hyundai Verna XE</Text></Text>
                  <Text style={[styles.text1, { color: '#666666', fontWeight: '600', fontFamily: 'Nunito Sans', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Car Number: <Text style={{ color: '#333333', fontWeight: '400' }}>MP04 SU 1234</Text></Text>
              </View>

            <View style={styles.container7}>
                  <Text style={[styles.text1, { color: '#000000', fontFamily: 'Nunito Sans', marginTop: moderateScale(10), marginLeft: moderateScale(10) }]}>Owner Details</Text>
                  <Text style={[styles.text1, { color: '#666666', fontWeight: '600', fontFamily: 'Nunito Sans', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Owner Name: <Text style={{ color: '#333333', fontWeight: '400' }}>Aditya Sharma</Text></Text>
                  <Text style={[styles.text1, { color: '#666666', fontWeight: '600', fontFamily: 'Nunito Sans', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Owner Contact No: <Text style={{ color: '#333333', fontWeight: '400' }}>0123456789</Text></Text>
            </View>

              <Text style={[styles.text1, { color: '#000000', fontFamily: 'Nunito Sans', marginTop: moderateScale(10), marginLeft: moderateScale(10) }]}>Payment Details</Text>
              <Text style={[styles.text1, { color: '#666666', fontWeight: '600', fontFamily: 'Nunito Sans', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Transaction No.: <Text style={{ color: '#33CCCC', fontWeight: '400' }}>IJBVKJ7657655766787</Text></Text>
              <Text style={[styles.text1, { color: '#666666', fontWeight: '600', fontFamily: 'Nunito Sans', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Amount Received : <Text style={{ color: '#333333', fontWeight: '400' }}>₹3,000</Text></Text>
              <Text style={[styles.text1, { color: '#666666', fontWeight: '600', fontFamily: 'Nunito Sans', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Payment Method: <Text style={{ color: '#333333', fontWeight: '400' }}>Cash</Text></Text>
              <Text style={[styles.text1, { color: '#666666', fontWeight: '600', fontFamily: 'Nunito Sans', marginLeft: moderateScale(10), marginTop: moderateScale(5) }]}>Credited to:</Text>

              <View style={styles.container8}>
                <View style={styles.circle}>
                      <Image source={require('../Assets/Bankicon.png')} style={styles.img2}/>
                </View>
                <View style={{marginLeft: moderateScale(10)}}>
                  <Text style={[styles.text1, {fontWeight: '400', color: '#333333', fontFamily: 'Nunito Sans'}]}>XXXXXXX4030</Text>
                      <Text style={[styles.text1, { fontWeight: '400', color: '#333333', fontFamily: 'Nunito Sans', top: moderateScale(5) }]}>UTR: 121212121212</Text>
                </View>
                  <Pressable onPress={toggleModal1} style={{ marginLeft: '42%', marginTop: moderateScale(23) }}>
                  <Image source={require('../Assets/clipboard.png')} style={styles.img1} />
                  <Copymodel2 isVisible={isModalVisible1} closeModal={toggleModal1}/>
                </Pressable>
              </View>
          </View>
    </ScrollView>
  )
}

export default Bookingdetails

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
        height: verticalScale(680),
        borderBottomLeftRadius: moderateScale(5),
        borderBottomRightRadius: moderateScale(5),
        borderTopWidth: 5,
        borderTopColor: '#33CCCC',
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        marginBottom: moderateScale(20)
    },
    container2: {
        width: moderateScale(320),
        height: verticalScale(36),
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#9c9c9c'
    },
    img1: {
        width: scale(16),
        height: scale(16),
        marginLeft: moderateScale(5)
    },
    container3: {
        width: moderateScale(320),
        height: verticalScale(80),
        borderBottomWidth: 0.5,
        borderBottomColor: '#333333',
        borderStyle: 'dashed'
    },
    container4: {
        width: moderateScale(320),
        height: verticalScale(220),
        borderBottomWidth: 0.5,
        borderBottomColor: '#333333',
        borderStyle: 'dashed'
    },
    container5: {
        width: moderateScale(304),
        height: verticalScale(24),
        alignSelf: 'center',
        marginTop: moderateScale(10),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    jobcard: {
        width: scale(84),
        height: scale(24),
        borderRadius: scale(12),
        borderWidth: 1,
        borderColor: '#333333',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container6: {
        width: moderateScale(304),
        height: verticalScale(88),
        borderRadius: moderateScale(5),
        borderWidth: 1,
        borderColor: '#999999',
        marginTop: moderateScale(5),
        alignSelf: 'center'
    },
    scroll: {
        width: moderateScale(288),
        height: verticalScale(72),
        alignSelf: 'center'
    },
    container7: {
    width: moderateScale(320),
    height: verticalScale(84),
    borderWidth: 0.5,
    borderColor: '#333333',
    borderStyle: 'dashed'
   },
   container8: {
    width: moderateScale(296),
    height: verticalScale(40),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
   },
   circle: {
   width: scale(32),
   height: scale(32),
   borderRadius: scale(16),
   borderWidth: 0.5,
   borderColor: '#999999',
   alignItems: 'center',
   justifyContent: 'center'
   },
   img2: {
    width: scale(24),
    height: scale(24),
   },
})