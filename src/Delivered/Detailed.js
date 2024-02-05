import { View, Text, StyleSheet, Pressable, Image, Animated, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Header from '../Component/Header'

const Detailed = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Header title={'DETAILS'} onPress={() => navigation.goBack()} marginLeft={'29%'} />

            <Pressable style={styles.container1}>
                <Image source={require('../Assets/Verna.png')} style={styles.img1} />

                <View style={styles.detailc}>
                    <Text style={[styles.text1, { color: '#333333', fontFamily: 'Nunito Sans' }]}>HYUNDAI VERNA</Text>
                    <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginTop: moderateScale(3) }]}>Verna SX Turbo DT</Text>
                    <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginTop: moderateScale(3) }]}>Petrol</Text>
                    <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginTop: moderateScale(3) }]}>2020</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Image source={require('../Assets/tag.png')} style={styles.img2} />
                    <Text style={[styles.text1, { color: '#333333', fontFamily: 'Nunito Sans', top: '14%', marginLeft: '10%' }]}>MP04 SU 1234</Text>
                </View>
            </Pressable>

            <View style={styles.container2}>
                <Text style={[styles.text1, { color: '#666666', fontWeight: '600', fontFamily: 'Nunito Sans', marginLeft: moderateScale(10), marginTop: moderateScale(10) }]}>Vehicle issue(s)</Text>
                <View style={styles.container6}>
                    <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll} nestedScrollEnabled={true}>
                        <Text style={[styles.text1, { fontWeight: '400', color: '#333333', fontFamily: 'Nunito' }]}>
                            {`Lorem Ipsum has been the industry's standard \ndummy text ever since the 1500s, when an \nunknown printer took a galley of type and \nscrambled it to make a type specimen book. It has \nsurvived not only five centuries, but also the leap \ninto electronic typesetting, remaining essentially \nunchanged. It was popularised in the 1960s with \nthe release of Letraset sheets containing Lorem \nIpsum passages, and more recently with desktop \npublishing software like Aldus PageMaker \nincluding versions of Lorem Ipsum.`}
                        </Text>
                    </ScrollView>
                </View>

                <View style={styles.container7}>
                    <Image source={require("../Assets/wrench.png")} style={styles.img4} />
                    <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginLeft: moderateScale(5) }]}>Mechanic Name: <Text style={{ color: '#000000' }}>Ali Khan</Text></Text>
                </View>
            </View>

            <View style={styles.line}></View>

            <View style={styles.container8}>
                <View style={styles.textc}>
                    <Text style={[styles.text2, { marginTop: moderateScale(15) }]}><Text style={{ color: '#333333', fontSize: moderateScale(13) }}>•</Text> Service type: <Text style={{ color: '#333333' }}>Major Service</Text></Text>

                    <Text style={[styles.text2, { marginTop: moderateScale(5) }]}><Text style={{ color: '#333333', fontSize: moderateScale(13) }}>•</Text> Booking type: <Text style={{ color: '#333333' }}>Scheduled Booking</Text></Text>
                </View>

                <View style={[styles.textc, { height: verticalScale(152) }]}>
                    <Text style={[styles.text1, { color: '#000000', marginLeft: moderateScale(16), marginTop: moderateScale(10) }]}>Customer Details</Text>

                    <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginLeft: moderateScale(16), marginTop: moderateScale(10) }]}>Customer Name: <Text style={{ color: '#333333' }}>Aditya Sharma</Text></Text>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginLeft: moderateScale(16), marginTop: moderateScale(10) }]}>Customer Address:</Text>
                        <Image source={require('../Assets/Map.png')} style={styles.img5} />
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ width: moderateScale(256), height: verticalScale(16) }}>
                        <Text style={[styles.text1, { color: '#000000', fontWeight: '600', marginLeft: moderateScale(16), marginTop: moderateScale(10) }]}>Indrapuri, Sector-A, Near BHEL, Anantashree Hospital Bhopal</Text>
                    </ScrollView>

                    <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginLeft: moderateScale(16), marginBottom: moderateScale(20) }]}>Garage to Customer Distance: <Text style={{ color: '#333333' }}>5.2 km</Text></Text>
                </View>

                <View style={[styles.textc, { height: verticalScale(68), justifyContent: 'center' }]}>
                    <View style={styles.container9}>
                        <Text style={[styles.text1, { fontWeight: '600', color: '#333333' }]}>Customer requested for Car Pickup</Text>
                    </View>
                </View>
            </View>

            <View style={styles.container3}>
                <Text style={[styles.text1, { fontWeight: '600', color: '#333333', marginTop: moderateScale(8), marginLeft: moderateScale(8) }]}>Contact Number</Text>
                <View style={{ flexDirection: 'row', marginLeft: moderateScale(8), marginTop: moderateScale(10) }}>
                    <Pressable style={styles.iconc}>
                        <Feather name='phone-call' size={20} color={'#333333'} />
                    </Pressable>

                    <Pressable style={[styles.iconc, { marginLeft: moderateScale(10) }]}>
                        <Ionicons name='chatbubble-outline' size={20} color={'#333333'} />
                    </Pressable>
                </View>
            </View>

            <View style={styles.line}></View>

            <Pressable style={styles.container4} onPress={() => navigation.navigate('Jobcard')}>
                <Text style={[styles.text1, { color: '#333333', fontFamily: 'Nunito Sans', marginLeft: moderateScale(20) }]}>J O B  C A R D</Text>

                <Pressable style={styles.container5} onPress={() => navigation.navigate('Jobcard')}>
                    <Image source={require('../Assets/Vector1.png')} style={styles.img3} />
                </Pressable>
            </Pressable>
        </ScrollView>
    )
}

export default Detailed

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
    container1: {
        width: moderateScale(320),
        height: verticalScale(108),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: moderateScale(5)
    },
    img1: {
        width: scale(60),
        height: scale(60),
        borderRadius: scale(30),
        borderWidth: 2,
        borderColor: '#C29802',
        marginLeft: moderateScale(16),
        marginBottom: moderateScale(25)
    },
    detailc: {
        width: moderateScale(113),
        height: verticalScale(76),
        marginLeft: moderateScale(15),
        flexDirection: 'column'
    },
    img2: {
        width: moderateScale(92),
        height: verticalScale(20),
        bottom: '33%',
        marginLeft: moderateScale(24),
        borderTopRightRadius: moderateScale(5)
    },
    container2: {
        width: moderateScale(320),
        height: verticalScale(176),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(15)
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
    line: {
        width: '100%',
        height: verticalScale(1),
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(15)
    },
    container3: {
        width: moderateScale(320),
        height: verticalScale(100),
        borderRadius: moderateScale(5),
        borderBottomWidth: moderateScale(5),
        borderBottomColor: '#33CCCC',
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(15),
    },
    iconc: {
        width: scale(48),
        height: scale(48),
        borderRadius: scale(20),
        borderWidth: 1,
        borderColor: '#666666',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container4: {
        width: moderateScale(320),
        height: verticalScale(48),
        backgroundColor: '#ffffff',
        borderRadius: moderateScale(5),
        alignSelf: 'center',
        marginTop: moderateScale(20),
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: moderateScale(20)
    },
    container5: {
        width: scale(48),
        height: scale(48),
        marginLeft: '43%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img3: {
        width: scale(6),
        height: scale(12),
        tintColor: '#999999',
        left: moderateScale(30)
    },
    container7: {
        width: moderateScale(320),
        height: verticalScale(45),
        borderTopWidth: 1,
        borderColor: '#999999',
        marginTop: moderateScale(13),
        alignItems: 'center',
        flexDirection: 'row'
    },
    img4: {
        width: scale(24),
        height: scale(24),
        marginLeft: moderateScale(8)
    },
    container8: {
        width: moderateScale(320),
        height: verticalScale(296),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(15)
    },
    text2: {
        color: '#666666',
        fontWeight: '600',
        fontFamily: 'Nunito',
        fontSize: moderateScale(12),
        marginTop: moderateScale(10),
        marginLeft: moderateScale(10)
    },
    textc: {
        width: moderateScale(320),
        height: verticalScale(76),
        borderBottomWidth: 0.5,
        borderBottomColor: '#999999',
    },
    container9: {
        width: moderateScale(288),
        height: verticalScale(36),
        borderWidth: 2,
        borderColor: '#FFCC00',
        borderRadius: moderateScale(5),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img5: {
        width: scale(24),
        height: scale(24),
        marginLeft: '45%'
    },
})