import { View, Text, StyleSheet, Pressable, Image, Animated, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Header from '../Component/Header';

const Booking = ({navigation}) => {
  const [animationToday] = useState(new Animated.Value(0));
  const [showThreeBoxes, setShowThreeBoxes] = useState(false);
  const [animationScheduled] = useState(new Animated.Value(0));
  const [showTwoBoxes, setShowTwoBoxes] = useState(false);

  const handleBoxPress = () => {
    const toValue = showThreeBoxes ? 0 : 1;

    Animated.timing(animationToday, {
      toValue,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      setShowThreeBoxes(!showThreeBoxes);
    });

    Animated.timing(animationScheduled, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      setShowTwoBoxes(false);
    });
  };

  const handleBoxPress1 = () => {
    const toValue = showTwoBoxes ? 0 : 1;

    Animated.timing(animationScheduled, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setShowTwoBoxes(!showTwoBoxes);
    });

    Animated.timing(animationToday, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      setShowThreeBoxes(false);
    });
  };


  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* <View style={styles.header}>
        <Pressable style={{ width: scale(48), height: scale(48), alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate('Dashboard')}>
          <Image source={require('../Assets/chevron-left.png')} style={styles.img} />
        </Pressable>
        <Text style={[styles.text1, { marginLeft: '28%' }]}>BOOKING</Text>
      </View> */}

      <Header title={'BOOKING'} onPress={() => navigation.navigate('Dashboard')} marginLeft={'29%'}/>


      <Pressable onPress={handleBoxPress}>
        <View style={styles.box1}>
          <Text style={[styles.text1, { fontWeight: '600', color: '#333333', marginLeft: moderateScale(10) }]}>
            Today’s Bookings
          </Text>
          <Animated.Image source={require('../Assets/Vector1.png')} 
            style={[
              styles.img1,
              {
                tintColor: showThreeBoxes ? '#33CCCC' : '#c1c1c1',
                transform: [
                  {
                    rotate: animationToday.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '90deg'],
                    }),
                  },
                ],
              },
            ]}
          />
        </View>
      </Pressable>

      {showThreeBoxes && (
        <Animated.View style={{transform: [{ translateY: animationToday }] }}>
          <Pressable onPress={() => navigation.navigate('Onwaiting2')}>
          <View style={styles.box2}>
            <Text style={[styles.text1, { fontWeight: '600', color: '#333333', marginLeft: moderateScale(10) }]}>
              On waiting
            </Text>
            <Image source={require('../Assets/arrow.png')} style={styles.img2}/>
          </View>
          </Pressable>
          
        <Pressable onPress={() => navigation.navigate('Ingrage')}>
          <View style={styles.box2}>
            <Text style={[styles.text1, { fontWeight: '600', color: '#333333', marginLeft: moderateScale(10) }]}>
              In Garage
            </Text>
            <Image source={require('../Assets/arrow.png')} style={[styles.img2, { marginLeft: '69%' }]} />
          </View>
        </Pressable>
        
          <Pressable onPress={() => navigation.navigate('Serviceing1')}>
          <View style={styles.box2}>
            <Text style={[styles.text1, { fontWeight: '600', color: '#333333', marginLeft: moderateScale(10) }]}>
              Servicing
            </Text>
            <Image source={require('../Assets/arrow.png')} style={[styles.img2, {marginLeft: '69.5%'}]} />
          </View>
        </Pressable>

          <Pressable onPress={() => navigation.navigate('Completed')}>
            <View style={styles.box2}>
              <Text style={[styles.text1, { fontWeight: '600', color: '#333333', marginLeft: moderateScale(10) }]}>
                Completed
              </Text>
              <Image source={require('../Assets/arrow.png')} style={[styles.img2, { marginLeft: '66%' }]} />
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Delivered')}>
            <View style={styles.box2}>
              <Text style={[styles.text1, { fontWeight: '600', color: '#333333', marginLeft: moderateScale(10) }]}>
                Delivered
              </Text>
              <Image source={require('../Assets/arrow.png')} style={[styles.img2, { marginLeft: '68.5%' }]} />
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Cancelled')}>
            <View style={styles.box2}>
              <Text style={[styles.text1, { fontWeight: '600', color: '#333333', marginLeft: moderateScale(10) }]}>
                Cancelled
              </Text>
              <Image source={require('../Assets/arrow.png')} style={[styles.img2, { marginLeft: '67%' }]} />
            </View>
          </Pressable>
        </Animated.View>
      )}

      <View style={styles.line1}></View>
    
    <Pressable onPress={handleBoxPress1}>
      <View style={[styles.box1, {marginTop: moderateScale(20)}]}>
        <Text style={[styles.text1, { fontWeight: '600', color: '#333333', marginLeft: moderateScale(10) }]}>Scheduled Bookings</Text>
          <Animated.Image source={require('../Assets/Vector1.png')}
            style={[
              styles.img1,
              {
                tintColor: showTwoBoxes ? '#33CCCC' : '#c1c1c1',
                marginLeft: '51%',
                transform: [
                  {
                    rotate: animationScheduled.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '90deg'],
                    }),
                  },
                ],
              },
            ]}
          />
      </View>
    </Pressable>

      {showTwoBoxes && (
        <Animated.View style={{ transform: [{ translateY: animationScheduled }] }}>
          <Pressable onPress={() => navigation.navigate('Confirmedb')}>
            <View style={styles.box2}>
              <Text style={[styles.text1, { fontWeight: '600', color: '#333333', marginLeft: moderateScale(10) }]}>
                Confirmed Bookings
              </Text>
              <Image source={require('../Assets/arrow.png')} style={[styles.img2, {marginLeft: '49%'}]} />
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Cancelledb')}>
            <View style={styles.box2}>
              <Text style={[styles.text1, { fontWeight: '600', color: '#333333', marginLeft: moderateScale(10) }]}>
                Cancelled
              </Text>
              <Image source={require('../Assets/arrow.png')} style={[styles.img2, { marginLeft: '66.5%' }]} />
            </View>
          </Pressable>
        </Animated.View>
      )}

      <View style={styles.line1}></View>

      <Pressable style={[styles.box1, { marginTop: moderateScale(20) }]} onPress={() => navigation.navigate('Booking1')}>
        <Text style={[styles.text1, { fontWeight: '600', color: '#333333', marginLeft: moderateScale(10) }]}>Car Service History</Text>
        <Image source={require('../Assets/Vector1.png')} style={[styles.img1, { marginLeft: '53%' }]} />
      </Pressable>
    </ScrollView>
  )
}

export default Booking

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
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
  box1: {
    width: moderateScale(320),
    height: verticalScale(56),
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginTop: moderateScale(10),
    borderBottomLeftRadius: moderateScale(8),
    borderBottomRightRadius: moderateScale(8),
    borderTopWidth: 5,
    borderTopColor: '#33CCCC',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box2Container: {
    marginTop: 20,
  },
  box2: {
    width: moderateScale(320),
    height: verticalScale(40),
    borderRadius: moderateScale(8),
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginTop: moderateScale(10),
    alignItems: 'center',
    flexDirection: 'row'
  },
  img1: {
    width: scale(7),
    height: scale(12),
    tintColor: '#c1c1c1',
    marginLeft: '57%'
  },
  line1: {
    width: scale(360),
    height: scale(1),
    backgroundColor: '#4D4D4D',
    marginTop: moderateScale(20)
  },
  img2: {
    width: scale(13),
    height: scale(8),
    marginLeft: '68%'
  }

})