import { View, Text, StyleSheet, Pressable, Image,} from 'react-native'
import React, { useState, useEffect } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import Contactmodel from './Contactmodel'
import { ScrollView } from 'react-native'
import Changessaved from './Changessaved'
import Button from '../Component/Button'
import Header from '../Component/Header'

const Shopeprofile = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false)
    const [isModalVisible1, setModalVisible1] = useState(false)

    const toggleModal = () => {
        setModalVisible(!isModalVisible)
    }

    const closeModal = () => {
        setModalVisible(false)
    }

    const toggleModal1 = () => {
        setModalVisible1(!isModalVisible1)
    }

    const closeModal1 = () => {
        setModalVisible1(false)
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
        if (isModalVisible1){
            const timer = setTimeout(() => {
                closeModal1();
            }, 3000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [isModalVisible1]);

  return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
              <Header title={'SHOPE PROFILE'} onPress={() => navigation.goBack()} marginLeft={'22%'} />

          <View style={styles.container1}>
            <Text style={[styles.text1, {fontFamily: 'Nunito Sans'}]}>N O T  E D I T A B L E</Text>
            <Pressable onPress={toggleModal}>
                  <Image source={require('../Assets/alert-circle.png')} style={styles.img2}/>
                  <Contactmodel isVisible={isModalVisible} onCancel={toggleModal}/>
            </Pressable>
          </View>

          <Text style={[styles.text1, {marginLeft: moderateScale(17), marginTop: moderateScale(15)}]}>Garage Name</Text>
          <View style={styles.container2}>
              <Text style={[styles.text1, {fontWeight: '600', color: '#333333'}]}>Harapreet Garage & Autoparts</Text>
          </View>

          <Text style={[styles.text1, { marginLeft: moderateScale(17), marginTop: moderateScale(20) }]}>Garage GST/Gumasta License No.</Text>
          <View style={styles.container2}>
              <Text style={[styles.text1, { fontWeight: '600', color: '#333333' }]}>123456789789841</Text>
          </View>

          <Text style={[styles.text1, { marginLeft: moderateScale(17), marginTop: moderateScale(20) }]}>Daily Service Request Limit</Text>
          <View style={styles.container2}>
              <Text style={[styles.text1, { fontWeight: '600', color: '#333333' }]}>05</Text>
          </View>

          <Text style={[styles.text1, { marginLeft: moderateScale(17), marginTop: moderateScale(20) }]}>Service Priority</Text>
          <View style={styles.container2}>
              <Text style={[styles.text1, { fontWeight: '600', color: '#333333' }]}>Premium Garage</Text>
          </View>

          <View style={styles.line1}></View>

          <Text style={[styles.text1, { fontFamily: 'Nunito Sans', marginTop: moderateScale(20), marginLeft: moderateScale(17) }]}>E D I T A B L E</Text>

          <Text style={[styles.text1, { marginLeft: moderateScale(17), marginTop: moderateScale(15) }]}>Garage Address</Text>
          <Pressable style={styles.container2} onPress={() => navigation.navigate('Editaddress')}>
              <Text style={[styles.text1, { fontWeight: '600', color: '#333333' }]}>Indrapuri, Sector-A</Text>
              <Image source={require('../Assets/Vector1.png')} style={styles.img3}/>
          </Pressable>

          <Text style={[styles.text1, { marginLeft: moderateScale(17), marginTop: moderateScale(15) }]}>Garage Contact Number</Text>
          <Pressable style={styles.container2} onPress={() => navigation.navigate('Editnumber')}>
              <Text style={[styles.text1, { fontWeight: '600', color: '#333333' }]}>9136566625 / 0755 235689</Text>
              <Image source={require('../Assets/Vector1.png')} style={[styles.img3, {marginLeft: '37.5%'}]} />
          </Pressable>
          </ScrollView>
        {/* <Pressable style={styles.button} onPress={toggleModal1}>
            <Text style={styles.text2}>SAVE CHANGES</Text>
        <Changessaved isVisible={isModalVisible1} onCancel={toggleModal1}/>
        </Pressable> */}

          <View style={{marginTop: '10%', marginBottom: '5%'}}>
              <Button title={'SAVE CHANGES'} bgColor={'#33CCCC'} onPress={() => toggleModal1()} />
              <Changessaved isVisible={isModalVisible1} onCancel={toggleModal1} />
          </View>
    </View>
  )
}

export default Shopeprofile

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
    img1: {
        height: scale(24),
        width: scale(24),
        marginLeft: moderateScale(15)
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        fontFamily: 'Nunito',
        color: '#ffffff',
    },
    container1: {
        width: moderateScale(320),
        height: verticalScale(24),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: moderateScale(10)
    },
    img2: {
        width: scale(24),
        height: scale(24),
    },
    container2: {
        width: moderateScale(320),
        height: verticalScale(48),
        borderRadius: moderateScale(10),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: moderateScale(15)
    },
    line1: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(20)
    },
    img3: {
        width: moderateScale(7),
        height: verticalScale(12),
        tintColor: '#999999',
        marginLeft: '55%'
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: '10%',
        marginBottom: '5%'
    },
    text2: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#ffffff',
        fontFamily: 'Nunito'
    }
})