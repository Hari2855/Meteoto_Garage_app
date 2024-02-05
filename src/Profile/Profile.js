import { View, Text, StyleSheet, Pressable, Image, Animated, ScrollView, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import Logoutmodel from './Logoutmodel'
import ImagePicker from 'react-native-image-crop-picker';
import i from '../Assets/Garage.png'

const Profile = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false)
  const [pimage, setpimage] = useState();


  const Gallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setpimage(image.path);
    });
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  const handelsearch = () => {
    toggleModal()
    navigation.navigate('Login')
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
      <View style={styles.header}>
        <Pressable style={{ width: scale(48), height: scale(48), alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate('Dashboard')}>
          <Image source={require('../Assets/chevron-left.png')} style={styles.img} />
        </Pressable>
        <Pressable style={styles.logout} onPress={toggleModal}>
          <Text style={styles.text1}>Logout</Text>
          <Image source={require('../Assets/logout-icon.png')} style={styles.img7} />
        </Pressable>
        <Logoutmodel isVisible={isModalVisible} onConfirm={handelsearch} onCancel={toggleModal} navigation={navigation} />
      </View>

      <ImageBackground source={require('../Assets/bgimg.png')} style={styles.img1}>
        <ImageBackground source={require('../Assets/upper.png')} style={styles.img1}>
          <Pressable style={styles.ring} onPress={() => navigation.navigate('Notification')}>
            <View style={styles.label}>
              <Text style={{ bottom: moderateScale(3) }}>1</Text>
            </View>
            <Image source={require('../Assets/bell-notification.png')} style={styles.img3} />
          </Pressable>

          <Image source={pimage ? { uri: pimage } : i} style={styles.img2} />
          <Text style={[styles.text1, {fontSize: moderateScale(16), fontFamily: 'Nunito Sans', marginTop: '5%'}]}>KRITPAL SINGH DOGRA</Text>
          <Text style={[styles.text1, {fontWeight: '600', marginTop: '1%'}]}>Garage ID: 12345</Text>
          <Pressable style={styles.imgcontainer} onPress={Gallery}>
            <Text style={[styles.text1, {color: '#33CCCC'}]}>Edit Shop Photo</Text>
          </Pressable>
        </ImageBackground>
      </ImageBackground>

      <View style={styles.line1}></View>

      <Pressable style={[styles.container1, { marginTop: moderateScale(25) }]} onPress={() => navigation.navigate('MyProfile')}>
        <Image source={require('../Assets/user.png')} style={styles.img4} />
        <Text style={styles.text4}>My Profile</Text>
        <Image source={require('../Assets/Vector2.png')} style={styles.img5} />
      </Pressable>

      <Pressable style={[styles.container1, { marginTop: moderateScale(15) }]} onPress={() => navigation.navigate('Shopeprofile')}>
        <Image source={require('../Assets/shop.png')} style={styles.img4} />
        <Text style={styles.text4}>Garage Profile</Text>
        <Image source={require('../Assets/Vector2.png')} style={[styles.img5, { marginLeft: '35%' }]} />
      </Pressable>

      <Pressable style={[styles.container1, { marginTop: moderateScale(15) }]} onPress={() => navigation.navigate('Bank')}>
        <Image source={require('../Assets/bank.png')} style={styles.img4} />
        <Text style={styles.text4}>Bank Details</Text>
        <Image source={require('../Assets/Vector2.png')} style={[styles.img5, { marginLeft: '39%' }]} />
      </Pressable>

      <View style={[styles.line1, { marginTop: moderateScale(20) }]}></View>

      <Pressable style={[styles.container1, { marginTop: moderateScale(20) }]} onPress={() => navigation.navigate('Setting')}>
        <Image source={require('../Assets/setting.png')} style={styles.img4} />
        <Text style={styles.text4}>Settings</Text>
        <Image source={require('../Assets/Vector2.png')} style={[styles.img5, { marginLeft: '47%' }]} />
      </Pressable>

      <Pressable style={[styles.container1, { marginTop: moderateScale(15) }]} onPress={() => navigation.navigate('Help')}>
        <Image source={require('../Assets/help.png')} style={styles.img4} />
        <Text style={styles.text4}>Help & Support</Text>
        <Image source={require('../Assets/Vector2.png')} style={[styles.img5, { marginLeft: '31%' }]} />
      </Pressable>

      <Image source={require('../Assets/logo2.png')} style={styles.img6} />
    </ScrollView>
  )
}

export default Profile

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
    justifyContent: 'space-between'
  },
  img: {
    width: scale(24),
    height: scale(24)
  },
  logout: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: moderateScale(15)
  },
  img7: {
    width: scale(48),
    height: scale(48)
  },
  text1: {
    fontSize: moderateScale(12),
    fontWeight: '700',
    color: '#ffffff',
    fontFamily: 'Nunito'
  },
  img1: {
    width: moderateScale(360),
    height: verticalScale(332),
    alignItems: 'center'
  },
  ring: {
    height: scale(32),
    width: scale(32),
    borderWidth: 1,
    borderRadius: scale(16),
    borderColor: '#ffffff',
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: moderateScale(30),
    marginTop: moderateScale(30)
  },
  img3: {
    width: scale(20),
    height: scale(20),
    bottom: moderateScale(6)
  },
  label: {
    height: scale(12),
    width: scale(12),
    borderRadius: scale(10),
    backgroundColor: '#e5b800',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: moderateScale(2),
    left: moderateScale(10)
  },
  img2: {
    width: scale(152),
    height: scale(152),
    borderRadius: scale(80),
    borderWidth: 2,
    borderColor: '#ffffff'
  },
  imgcontainer: {
    width: moderateScale(130),
    height: verticalScale(24),
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: moderateScale(12),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '3%'
  },
  line1: {
    width: scale(360),
    height: scale(1),
    backgroundColor: '#474747'
  },
  container1: {
    width: moderateScale(320),
    height: verticalScale(60),
    borderRadius: moderateScale(10),
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  img4: {
    height: scale(32),
    width: scale(32),
    marginLeft: moderateScale(15)
  },
  text4: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#333333',
    fontFamily: 'Nunito Sans',
    marginLeft: moderateScale(25)
  },
  img5: {
    width: scale(7),
    height: scale(12),
    marginLeft: '45%'
  },
  img6: {
    width: moderateScale(110),
    height: verticalScale(28),
    marginTop: moderateScale(80),
    alignSelf: 'center',
    bottom: moderateScale(20)
  }
})