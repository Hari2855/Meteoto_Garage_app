import { View, Text, StyleSheet, Pressable, Image, ScrollView, TextInput, VirtualizedList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Header from '../Component/Header'

const Paymentsuccess = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <Header title={'PAYMENT'} onPress={() => navigation.navigate('Booking')} marginLeft={'28%'} />

            <View style={styles.container2}>
                <Image source={require('../Assets/check.png')} style={styles.img1} />
                <View style={styles.line}></View>
                <View style={styles.container3}>
                    <Text style={[styles.text1, { color: '#333333', fontFamily: 'Nunito Sans' }]}>Payment: Completed</Text>
                    <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginTop: moderateScale(3) }]}>Date: 28/09/2023</Text>
                    <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginTop: moderateScale(3) }]}>Time: 06:00PM</Text>
                </View>
            </View>

            <View style={styles.line1}></View>

            <Pressable style={styles.container4}>
                <View style={{ flexDirection: 'row', marginTop: moderateScale(10) }}>
                    <Image source={require('../Assets/Container.png')} style={styles.img2} />
                    <View style={styles.container5}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.text1, { color: '#333333', fontFamily: 'Nunito Sans' }]}>Aditya Sharma</Text>
                            <Text style={[styles.text1, { color: '#333333', fontFamily: 'Nunito Sans', marginLeft: moderateScale(90) }]}>₹3,000</Text>
                        </View>
                        <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginTop: moderateScale(2) }]}>Hyundayi Verna XE</Text>
                        <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginTop: moderateScale(2) }]}>Transaction Date: 21-08-2023</Text>
                    </View>
                </View>

                <View style={styles.container6}>
                    <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginLeft: moderateScale(15), marginTop: moderateScale(3) }]}>Service Name : <Text style={{ fontWeight: '400', color: '#333333' }}>Electronic Expert</Text></Text>
                    <View style={{ flexDirection: 'row', marginTop: moderateScale(5) }}>
                        <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginLeft: moderateScale(15) }]}>Transaction No. : <Text style={{ fontWeight: '400' }}>IJBVKJ7657655766787</Text></Text>
                        <Pressable>
                            <Image source={require('../Assets/clipboard.png')} style={styles.img3} />
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
                    <Image source={require('../Assets/clipboard.png')} style={[styles.img3, { bottom: moderateScale(13), left: moderateScale(70) }]} />
                </View>
            </Pressable>
        </View>
    )
}

export default Paymentsuccess

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
    container2: {
        width: moderateScale(320),
        height: verticalScale(84),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        alignItems: 'center',
        flexDirection: 'row'
    },
    img1: {
        width: scale(60),
        height: scale(60),
        marginLeft: moderateScale(12),
        borderRadius: scale(30),
        borderWidth: 1
    },
    line: {
        width: moderateScale(1),
        height: verticalScale(84),
        backgroundColor: '#4D4D4D',
        marginLeft: moderateScale(15)
    },
    container3: {
        width: moderateScale(125),
        height: verticalScale(36),
        marginLeft: moderateScale(10),
        marginBottom: moderateScale(20)
    },
    line1: {
        width: '100%',
        height: verticalScale(1),
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(20)
    },
    container4: {
        width: moderateScale(320),
        height: verticalScale(250),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(20),
    },
    img2: {
        height: scale(60),
        width: scale(60),
        borderWidth: 1,
        borderColor: '#33CCCC',
        borderRadius: scale(30),
        marginLeft: moderateScale(15)
    },
    container5: {
        width: moderateScale(212),
        height: verticalScale(54),
        flexDirection: 'column',
        marginLeft: moderateScale(20)
    },
    container6: {
        width: moderateScale(320),
        height: verticalScale(90),
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#999999',
        borderStyle: 'dashed',
        marginTop: moderateScale(17)
    },
    img3: {
        height: scale(16),
        width: scale(16),
        marginLeft: moderateScale(50),
        marginTop: moderateScale(2)
    },
})