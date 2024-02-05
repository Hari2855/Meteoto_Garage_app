import { View, Text, StyleSheet, Pressable, Image, ScrollView, TextComponent, Switch } from 'react-native'
import React, { useState, useEffect } from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import { TextInput } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import Header from '../Component/Header'

const Jobcard2 = ({navigation}) => {
    const [selected, setSelected] = useState([]);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const data = [
        { key: '1', value: 'OEM',},
        { key: '2', value: 'Aftermarket' },
    ]

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
          <Header title={'JOB CARD'} onPress={() => navigation.goBack()} marginLeft={'27%'} />

          <Text style={[styles.text1, {fontFamily: 'Nunito Sans', marginLeft: moderateScale(20), marginTop: moderateScale(10)}]}>N E W  P A R T  R E Q U E S T</Text>

          <View style={styles.container1}>
            <Text style={[styles.text1, {fontFamily: 'Nunito Sans'}]}>Part Name</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextInput style={styles.input} placeholder='i.e. spark plug' placeholderTextColor={'#999999'} multiline={true}/>
                <Image source={require('../Assets/edit.png')} style={styles.img3}/>
            </View>
          </View>


              <Text style={[styles.text1, { fontFamily: 'Nunito Sans', marginLeft: moderateScale(20), marginTop: moderateScale(20) }]}>Part Type</Text>
              <SelectList
                  setSelected={(val) => setSelected(val)}
                  data={data}
                  save="value"
                  boxStyles={{width: moderateScale(320), height: verticalScale(48), borderRadius: moderateScale(8),backgroundColor: '#ffffff', marginTop: moderateScale(5), alignSelf: 'center' }}
                  dropdownStyles={{width: moderateScale(320), borderRadius: moderateScale(8), backgroundColor: '#ffffff', alignSelf: 'center', bottom: moderateScale(5)}}
                  dropdownTextStyles={{color: '#666666'}}
              />

          <View style={styles.container1}>
              <Text style={[styles.text1, { fontFamily: 'Nunito Sans' }]}>Brand Name</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TextInput style={styles.input} placeholder='i.e. Global X' placeholderTextColor={'#999999'}  multiline={true}/>
                  <Image source={require('../Assets/edit.png')} style={styles.img3} />
              </View>
          </View>

          <View style={[styles.container1, { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'}]}>
            <View style={styles.container4}>
                <Text style={[styles.text1, {fontFamily: 'Nunito Sans'}]}>Price</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <TextInput style={[styles.input, {width: moderateScale(150), marginBottom: 5}]} placeholder='400' placeholderTextColor={'#333333'} keyboardType='numeric' multiline={true} />
                      <Image source={require('../Assets/edit.png')} style={styles.img3} />
                  </View>
            </View>

              <View style={[styles.container4, {left: moderateScale(5)}]}>
                  <Text style={[styles.text1, { fontFamily: 'Nunito Sans' }]}>Quantity</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <TextInput style={[styles.input, { width: moderateScale(150), marginBottom: 5 }]} placeholder='i.e. 2' placeholderTextColor={'#999999'} keyboardType='numeric' multiline={true} />
                      <Image source={require('../Assets/edit.png')} style={styles.img3} />
                  </View>
              </View>
          </View>

          <View style={{width: moderateScale(66), height: verticalScale(64), marginTop: moderateScale(20), marginLeft: moderateScale(20),alignItems: 'center',justifyContent: 'space-between'}}>
            <Text style={styles.text1}>Important<Text style={{color: '#33CCCC'}}>*</Text></Text>
              <Switch
                  trackColor={{ false: 'gray', true: '#33CCCC' }}
                  thumbColor={isEnabled ? '#ffffff' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  marginLeft={'35%'}
                  style={{marginRight: moderateScale(20)}}
              />
          </View>

          <Pressable style={styles.button}>
            <Text style={[styles.text1]}>SEND REQUEST</Text>
          </Pressable>

          <Text style={[styles.text1, { marginLeft: moderateScale(20), color: '#cccccc', marginTop: moderateScale(15)}]}>{`Note: When part is very important to change, then \nonly use “Important” toggle switch.`}</Text>

          <View style={styles.line}></View>

          <Pressable style={styles.container5} onPress={() => navigation.navigate('Jobcard3')}>
              <Text style={[styles.text1, { color: '#333333', fontFamily: 'Nunito Sans', marginLeft: moderateScale(20) }]}>J O B  C A R D  D E T E A I L S</Text>

              <Pressable style={styles.container6} onPress={() => navigation.navigate('Jobcard3')}>
                  <Image source={require('../Assets/Vector1.png')} style={[styles.img4]} />
              </Pressable>
          </Pressable>

          <Pressable style={[styles.container5, { marginTop: moderateScale(40), bottom: moderateScale(20) }]} onPress={() => navigation.navigate('Requests')}>
              <Text style={[styles.text1, { color: '#333333', fontFamily: 'Nunito Sans', marginLeft: moderateScale(20) }]}>R E Q U E S T  S T A T U S</Text>

              <Pressable style={styles.container6} onPress={() => navigation.navigate('Requests')}>
                  <Image source={require('../Assets/Vector1.png')} style={[styles.img4, {right: moderateScale(27)}]} />
              </Pressable>
          </Pressable>
    </ScrollView>
  )
}

export default Jobcard2

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
        height: verticalScale(72),
        alignSelf: 'center',
        marginTop: moderateScale(20),
    },
    input: {
        width: moderateScale(320),
        height: verticalScale(48),
        borderRadius: moderateScale(8),
        backgroundColor: '#ffffff',
        marginTop: moderateScale(5),
        paddingLeft: moderateScale(20),
        color: '#333333'

    },
    img3: {
        width: scale(13.22),
        height: scale(13.22),
        right: moderateScale(35)
    },
    container4: {
        width: moderateScale(156),
        height: verticalScale(76),
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: 'gray',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(20)
    },
    line: {
        width: '100%',
        height: verticalScale(1),
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(15)
    },
    container5: {
        width: moderateScale(320),
        height: verticalScale(48),
        backgroundColor: '#ffffff',
        borderRadius: moderateScale(5),
        alignSelf: 'center',
        marginTop: moderateScale(20),
        alignItems: 'center',
        flexDirection: 'row'
    },
    container6: {
        width: scale(48),
        height: scale(48),
        marginLeft: '43%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img4: {
        width: scale(7),
        height: scale(12),
        tintColor: '#999999',
        right: moderateScale(45)
    }
})