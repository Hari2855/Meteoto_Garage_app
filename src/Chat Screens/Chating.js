import { View, Text, StyleSheet, Image, Pressable, ScrollView, TextInput, PermissionsAndroid } from 'react-native'
import React, { useState } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import Header from '../Component/Header';
import { launchCamera } from 'react-native-image-picker';

const Chating = ({navigation}) => {
    const [button, setbutton] = useState(0)
    const [message, setmessage] = useState(false);

    const areDetailsFilled = () => {
        return message
    };

    let options = {
        saveToPhotos: true,
        mediaType: 'photo'
    }

    const openCamera = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        if (granted == PermissionsAndroid.RESULTS.GRANTED) {
            const result = await launchCamera(options);
            setcameraPhoto(result.assets[0].uri)
        }
    };
  return (
    <View style={styles.container}>
          <Header title={'CHATS'} onPress={() => navigation.goBack()} marginLeft={'30%'} />

         <ScrollView showsVerticalScrollIndicator={false}>
          <Pressable style={styles.container2}>
              <View style={styles.container3}>
                  <Text style={styles.text2}>Aditya Sharma</Text>
                  <View style={styles.circle}></View>
              </View>
              <Text style={styles.text3}>{`Sir, your car requires new air filter. \nKindly accept the part request. so \nthat I can change it. \nThanks!`}</Text>
          </Pressable>
          <View style={styles.status}>
              <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#cbcbcb' }}>12:00 PM</Text>
              <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#cbcbcb' }}>seen</Text>
          </View>

          <Pressable style={styles.container4}>
              <View style={styles.container3}>
                  <Text style={styles.text2}>You</Text>
                  <View style={[styles.circle, { backgroundColor: '#FF3F00' }]}></View>
              </View>

              <Text style={styles.text3}>{`OKAY, Change it! I’ve accepted \nrequest.`}</Text>
          </Pressable>
          <View style={[styles.status, { alignSelf: 'flex-end', marginRight: moderateScale(20) }]}>
              <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#cbcbcb' }}>12:00 PM</Text>
              <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#cbcbcb' }}>seen</Text>
          </View>

          <Pressable style={[styles.container4, { height: verticalScale(180) }]}>
              <View style={styles.container3}>
                  <Text style={styles.text2}>You</Text>
                  <View style={styles.circle}></View>
              </View>
                  <Image source={require('../Assets/Engine.jpg')} style={styles.imgc} />
          </Pressable>
          <View style={[styles.status, {alignSelf: 'flex-end', marginRight: moderateScale(20)}]}>
              <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#cbcbcb' }}>12:00 PM</Text>
              <Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#cbcbcb' }}>seen</Text>
          </View>
          </ScrollView>

          <View style={styles.container5}>
              <View style={styles.inputContainer}>
                  <TextInput
                      placeholder='Your Message'
                      placeholderTextColor={'#B8B8B8'}
                      style={styles.input}
                      onChangeText={(text) => setmessage(text)}
                  />

                  <Pressable onPress={openCamera}>
                      <Image source={require('../Assets//Camera.png')} style={[styles.image, { marginRight: moderateScale(10) }]} />
                  </Pressable>
              </View>

              {message == false ? <View>
                  <Pressable>
                      <Image source={require('../Assets//Recording.png')} style={styles.img1} />
                  </Pressable>
              </View> :
                  <Pressable>
                      <Image source={require('../Assets//Send.png')} style={styles.img1} />
                  </Pressable>}
          </View>          
    </View>
  )
}

export default Chating

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#ffffff',
        fontFamily: 'Nunito'
    },
    container2: {
        width: moderateScale(236),
        height: verticalScale(108),
        marginTop: moderateScale(30),
        marginLeft: moderateScale(20),
        backgroundColor: '#ffffff',
        borderTopLeftRadius: moderateScale(12),
        borderTopRightRadius: moderateScale(12),
        borderBottomRightRadius: moderateScale(12),
        flexDirection: 'column'
    },
    container3: {
        width: moderateScale(236),
        height: moderateScale(30),
        borderBottomWidth: 1,
        borderBottomColor: '#b9b9b9',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    text2: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#666666',
        marginLeft: moderateScale(10),
        fontFamily: 'Nunito Sans'
    },
    circle: {
        width: scale(8),
        height: scale(8),
        borderRadius: scale(5),
        backgroundColor: '#99CC33',
        marginRight: moderateScale(10)
    },
    text3: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#333333',
        marginTop: moderateScale(10),
        marginLeft: moderateScale(10),
        fontFamily: 'Nunito'

    },
    status: {
        height: verticalScale(20),
        width: moderateScale(236),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: moderateScale(20)
    },
    container4: {
        width: moderateScale(236),
        height: verticalScale(76),
        borderTopLeftRadius: moderateScale(12),
        borderBottomLeftRadius: moderateScale(12),
        borderTopRightRadius: moderateScale(12),
        backgroundColor: '#ffffff',
        marginTop: moderateScale(30),
        alignSelf: 'flex-end',
        marginRight: moderateScale(20)
    },
    imgc: {
        width: moderateScale(220),
        height: verticalScale(136),
        alignSelf: 'center',
        marginTop: moderateScale(8),
        borderRadius: moderateScale(8),
        borderWidth: 1,
        borderColor: '#999999'
    },
    container5: {
        width: moderateScale(320),
        height: verticalScale(48),
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: moderateScale(20)
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: moderateScale(264),
        height: verticalScale(48),
        borderRadius: moderateScale(24),
        backgroundColor: '#ffffff',
    },
    input: {
        flex: 1,
        paddingLeft: moderateScale(20)
    },
    image: {
        width: moderateScale(24),
        height: moderateScale(24),
        margin: moderateScale(5),
    },
    img1: {
        width: scale(49),
        height: scale(49),
        marginLeft: moderateScale(10)
    }
})