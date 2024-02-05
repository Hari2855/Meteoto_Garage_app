import { View, Text, StyleSheet, Pressable, Image,} from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import Header from '../Component/Header'

const Bankdetails = ({navigation}) => {
  return (
    <View style={styles.container}>
          <Header title={'BANK DETAILS'} onPress={() => navigation.goBack()} marginLeft={'25%'} />

          <View style={styles.container1}>
            <View style={styles.imgcontainer}>
              <Image source={require('../Assets/Bankicon.png')} style={styles.img2}/>
            </View>
            <View style={styles.details}>
                  <Text style={[styles.text1, {fontFamily: 'Nunito Sans', color: '#333333'}]}>State Bank of India</Text>
                  <Text style={[styles.text1, {color: '#666666', fontWeight: '600' }]}>A/c Number: 12345455626</Text>
                  <Text style={[styles.text1, { color: '#666666', fontWeight: '600' }]}>IFSC Code: SBIN0001201</Text>
            </View>
          </View>

          <Text style={styles.text2}>{`Note: For any changes related to your Bank A/c \ncontact`}</Text>
          <Pressable style={{left: moderateScale(90), bottom: moderateScale(17)}} onPress={() => navigation.navigate('Contact')}>
              <Text style={[styles.text1, { color: '#33CCCC', right: '7%' }]}>meteoto support.</Text>
          </Pressable>
    </View>
  )
}

export default Bankdetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        fontFamily: 'Nunito',
        color: '#ffffff',
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
    imgcontainer: {
        height: scale(60),
        width: scale(60),
        borderRadius: scale(30),
        borderWidth: 1,
        borderColor: '#33cccc',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: moderateScale(15)
    },
    img2: {
        width: scale(32),
        height: scale(32)
    },
    details: {
        width: moderateScale(162),
        height: verticalScale(54),
        marginLeft: moderateScale(20),
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    text2: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        fontFamily: 'Nunito Sans',
        color: '#cccccc',
        alignSelf: 'center',
        marginTop: '135%',
        marginRight: moderateScale(50)
    }
})