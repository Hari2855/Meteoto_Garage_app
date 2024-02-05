import { View, Text, StyleSheet, Pressable, Image, ScrollView, TextComponent, } from 'react-native'
import React, { useState, useEffect } from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Copymodel from './Copymodel'
import Header from '../Component/Header'

const Jobcard = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false)

    const toggleModal = () => {
        setModalVisible(!isModalVisible)
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


    return (
        <View style={styles.container}>
            <Header title={'BOOKING'} onPress={() => navigation.goBack()} marginLeft={'28%'} />

            <Text style={[styles.text1, { fontSize: moderateScale(16), fontFamily: 'Nunito Sans', marginLeft: moderateScale(20), marginTop: moderateScale(10) }]}>Job Card</Text>

            <View style={styles.line}></View>

            <View style={styles.container1}>
                <View style={styles.container2}>
                    <Image source={require('../Assets/bill.gif')} style={styles.img1} />
                    <Text style={[styles.text1, { color: '#666666', fontFamily: 'Nunito Sans', marginLeft: moderateScale(20) }]}>Invoice number:</Text>
                    <Text style={[styles.text1, { color: '#333333', fontWeight: '600' }]}> 45687875657</Text>
                    <Pressable style={styles.imgc} onPress={toggleModal}>
                        <Image source={require('../Assets/clipboard.png')} style={styles.img2} />
                        <Copymodel isVisible={isModalVisible} closeModal={toggleModal} />
                    </Pressable>
                </View>


                <View style={styles.container3}>
                    <View style={{ width: moderateScale(136), height: verticalScale(56), borderRightWidth: 1, borderRightColor: '#999999', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={[styles.text1, { color: '#333333', fontWeight: '600', marginRight: moderateScale(30) }]}>Part Name</Text>
                    </View>

                    <View style={{ width: moderateScale(30), height: verticalScale(56), borderRightWidth: 1, borderRightColor: '#999999', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={[styles.text1, { color: '#333333', fontWeight: '600' }]}>Qt.</Text>
                    </View>

                    <View style={{ width: moderateScale(96), height: verticalScale(56), borderRightWidth: 1, borderRightColor: '#999999', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={[styles.text1, { color: '#333333', fontWeight: '600' }]}>Remark</Text>
                    </View>

                    <Text style={[styles.text1, { color: '#333333', fontWeight: '600', alignSelf: 'center', marginLeft: moderateScale(15) }]}>Price</Text>
                </View>

                <View style={styles.container3}>
                    <View style={{ width: moderateScale(136), height: verticalScale(56), borderRightWidth: 1, borderRightColor: '#999999', alignItems: 'center', justifyContent: 'center' }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Text style={[styles.text1, { color: '#666666', fontWeight: '600', alignSelf: 'center', }]}>Spark Plug- OEM</Text>
                        </ScrollView>
                    </View>

                    <View style={{ width: moderateScale(30), height: verticalScale(56), borderRightWidth: 1, borderRightColor: '#999999', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={[styles.text1, { color: '#666666', fontWeight: '600' }]}>1</Text>
                    </View>

                    <View style={{ width: moderateScale(96), height: verticalScale(56), borderRightWidth: 1, borderRightColor: '#999999', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={[styles.text1, { color: '#666666', fontWeight: '600' }]}>Replaced</Text>
                    </View>

                    <Text style={[styles.text1, { color: '#666666', fontWeight: '600', alignSelf: 'center', marginLeft: moderateScale(15) }]}>236</Text>
                </View>

                <View style={styles.container3}>
                    <View style={{ width: moderateScale(136), height: verticalScale(56), borderRightWidth: 1, borderRightColor: '#999999', alignItems: 'center', justifyContent: 'center' }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Text style={[styles.text1, { color: '#666666', fontWeight: '600', alignSelf: 'center', marginRight: moderateScale(12) }]}>Break Oil OEM</Text>
                        </ScrollView>
                    </View>

                    <View style={{ width: moderateScale(30), height: verticalScale(56), borderRightWidth: 1, borderRightColor: '#999999', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={[styles.text1, { color: '#666666', fontWeight: '600' }]}>1</Text>
                    </View>

                    <View style={{ width: moderateScale(96), height: verticalScale(56), borderRightWidth: 1, borderRightColor: '#999999', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={[styles.text1, { color: '#666666', fontWeight: '600' }]}>Top-up</Text>
                    </View>

                    <Text style={[styles.text1, { color: '#666666', fontWeight: '600', alignSelf: 'center', marginLeft: moderateScale(15) }]}>236</Text>
                </View>

                <View style={styles.container3}>
                    <View style={{ width: moderateScale(136), height: verticalScale(46), borderRightWidth: 1, borderRightColor: '#999999', alignItems: 'center', justifyContent: 'center' }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Text style={[styles.text1, { color: '#666666', fontWeight: '600', alignSelf: 'center' }]}>Spark Plug- OEM</Text>
                        </ScrollView>
                    </View>

                    <View style={{ width: moderateScale(30), height: verticalScale(46), borderRightWidth: 1, borderRightColor: '#999999', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={[styles.text1, { color: '#666666', fontWeight: '600' }]}>1</Text>
                    </View>

                    <View style={{ width: moderateScale(96), height: verticalScale(46), borderRightWidth: 1, borderRightColor: '#999999', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={[styles.text1, { color: '#666666', fontWeight: '600' }]}>Serviced</Text>
                    </View>

                    <Text style={[styles.text1, { color: '#666666', fontWeight: '600', alignSelf: 'center', marginLeft: moderateScale(15) }]}>236</Text>
                </View>

                <View style={[styles.container3, { borderStyle: 'dashed', height: verticalScale(36), alignItems: 'center' }]}>
                    <Text style={[styles.text1, { fontWeight: '400', color: '#333333', marginLeft: moderateScale(10) }]}>Total</Text>

                    <Text style={[styles.text1, { fontWeight: '400', color: '#333333', marginLeft: '74.5%' }]}>800</Text>
                </View>

                <View style={[styles.container3, { borderStyle: 'dashed', height: verticalScale(36), alignItems: 'center' }]}>
                    <Text style={[styles.text1, { fontWeight: '400', color: '#333333', marginLeft: moderateScale(10) }]}>Service Chargee</Text>

                    <Text style={[styles.text1, { fontWeight: '400', color: '#333333', marginLeft: '55%' }]}>1000</Text>
                </View>

                <View style={[styles.container3, { borderStyle: 'dashed', height: verticalScale(46), alignItems: 'center' }]}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={[styles.text1, { fontWeight: '400', color: '#333333', marginLeft: moderateScale(10) }]}>GST (18%)</Text>
                        <Text style={{ fontSize: moderateScale(8), fontWeight: '400', fontFamily: 'Nunito', marginLeft: moderateScale(10) }}>(9%-CGST & 9%-SGST)</Text>
                    </View>

                    <Text style={[styles.text1, { fontWeight: '400', color: '#333333', marginLeft: '57%' }]}>324</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.text1, { color: '#333333', marginLeft: moderateScale(10), marginTop: moderateScale(15) }]}>Grand Total</Text>

                    <Text style={[styles.text1, { color: '#333333', marginLeft: '60%', marginTop: moderateScale(15) }]}>₹1500</Text>
                </View>
            </View>

            <View style={[styles.line, { marginTop: moderateScale(20) }]}></View>

            <Pressable style={styles.container4}>
                <Text style={[styles.text1, { color: '#333333', fontFamily: 'Nunito Sans', marginLeft: moderateScale(20) }]}>PAYMENT DETAILS</Text>

                <Pressable style={styles.container5} onPress={() => navigation.navigate('details')}>
                    <Image source={require('../Assets/Vector1.png')} style={styles.img3} />
                </Pressable>
            </Pressable>
        </View>
    )
}

export default Jobcard

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
    line: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(10)
    },
    container1: {
        width: moderateScale(320),
        height: verticalScale(415),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(25),
        borderTopWidth: 5,
        borderTopColor: '#33CCCC'
    },
    container2: {
        width: moderateScale(320),
        height: verticalScale(56),
        borderBottomWidth: 1,
        borderColor: '#999999',
        alignItems: 'center',
        flexDirection: 'row'
    },
    img1: {
        width: scale(32),
        height: scale(32),
        marginLeft: moderateScale(10)
    },
    imgc: {
        width: scale(24),
        height: scale(24),
        marginLeft: moderateScale(50),
        marginTop: moderateScale(10)
    },
    img2: {
        width: scale(16),
        height: scale(16)
    },
    container3: {
        width: moderateScale(320),
        height: verticalScale(46),
        borderBottomWidth: 1,
        borderColor: '#999999',
        flexDirection: 'row',
    },
    container4: {
        width: moderateScale(320),
        height: verticalScale(48),
        backgroundColor: '#ffffff',
        borderRadius: moderateScale(5),
        alignSelf: 'center',
        marginTop: moderateScale(20),
        alignItems: 'center',
        flexDirection: 'row'
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
        tintColor: '#999999'
    }
})