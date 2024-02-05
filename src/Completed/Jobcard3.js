import { View, Text, StyleSheet, Pressable, Image, ScrollView,} from 'react-native'
import React, { useState, useEffect } from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Copymodel from '../Booking/Copymodel'
import Detailsmodel from './Detailsmodel'
import Header from '../Component/Header'

const Jobcard3 = ({ navigation }) => {
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
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Header title={'JOB CARD'} onPress={() => navigation.goBack()} marginLeft={'27%'} />

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
                        <Text style={[styles.text1, { color: '#333333', fontWeight: '600', marginRight: moderateScale(58) }]}>Part Name</Text>
                    </View>

                    <View style={{ width: moderateScale(30), height: verticalScale(56), borderRightWidth: 1, borderRightColor: '#999999', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={[styles.text1, { color: '#333333', fontWeight: '600' }]}>Qt.</Text>
                    </View>

                    <View style={{ width: moderateScale(96), height: verticalScale(56), borderRightWidth: 1, borderRightColor: '#999999', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={[styles.text1, { color: '#333333', fontWeight: '600' }]}>Remark</Text>
                    </View>

                    <Text style={[styles.text1, { color: '#333333', fontWeight: '600', alignSelf: 'center', marginLeft: moderateScale(15), marginTop: moderateScale(10) }]}>Price</Text>
                </View>

                <View style={styles.container3}>
                    <View style={{ width: moderateScale(136), height: verticalScale(56), borderRightWidth: 1, borderRightColor: '#999999', alignItems: 'center', justifyContent: 'center' }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Text style={[styles.text1, { color: '#666666', fontWeight: '600', alignSelf: 'center', marginRight: moderateScale(27) }]}>Spark Plug- OEM</Text>
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
                            <Text style={[styles.text1, { color: '#666666', fontWeight: '600', alignSelf: 'center', marginRight: moderateScale(37) }]}>Break Oil OEM</Text>
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
                            <Text style={[styles.text1, { color: '#666666', fontWeight: '600', alignSelf: 'center', marginRight: moderateScale(25) }]}>Spark Plug- OEM</Text>
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

                    <Text style={[styles.text1, { fontWeight: '400', color: '#333333', marginLeft: '55%' }]}>xxxx</Text>
                </View>

                <View style={[styles.container3, { borderStyle: 'dashed', height: verticalScale(46), alignItems: 'center' }]}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={[styles.text1, { fontWeight: '400', color: '#333333', marginLeft: moderateScale(10) }]}>GST (18%)</Text>
                        <Text style={{ fontSize: moderateScale(8), fontWeight: '400', fontFamily: 'Nunito', marginLeft: moderateScale(10) }}>(9%-CGST & 9%-SGST)</Text>
                    </View>

                    <Text style={[styles.text1, { fontWeight: '400', color: '#333333', marginLeft: '57%' }]}>324</Text>
                </View>

                <View style={[styles.container3, { borderStyle: 'dashed', height: verticalScale(46), alignItems: 'center' }]}>
                    <Text style={[styles.text1, { fontWeight: '400', color: '#333333', marginLeft: moderateScale(10) }]}>Miscellaneous Charges</Text>
                    <Pressable style={{ marginLeft: moderateScale(10), height: scale(24), height: scale(24), alignItems: 'center', justifyContent: 'center' }} onPress={toggleModal1}>
                        <Image source={require('../Assets/Details.png')} style={styles.img4} />
                        <Detailsmodel isVisible={isModalVisible1} closeModal={toggleModal1} />
                    </Pressable>

                    <Text style={[styles.text1, { fontWeight: '400', color: '#333333', marginLeft: '34%' }]}>₹100</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.text1, { color: '#333333', marginLeft: moderateScale(10), marginTop: moderateScale(15) }]}>Grand Total</Text>

                    <Text style={[styles.text1, { color: '#333333', marginLeft: '60%', marginTop: moderateScale(15) }]}>₹1500</Text>
                </View>
            </View>

            <View style={styles.line}></View>

            <Pressable style={styles.container4} onPress={() => navigation.navigate('Status')}>
                <Text style={[styles.text1, { color: '#333333', fontFamily: 'Nunito Sans', marginLeft: moderateScale(20) }]}>P A Y M E N T  S T A T U S</Text>

                <Pressable style={styles.container5} onPress={() => navigation.navigate('Status')}>
                    <Image source={require('../Assets/Vector1.png')} style={styles.img6} />
                </Pressable>
            </Pressable>
        </ScrollView>
    )
}

export default Jobcard3

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
        height: verticalScale(450),
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
    },
    img4: {
        width: scale(18),
        height: scale(18)
    },
    line: {
        width: '100%',
        height: verticalScale(1),
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(15)
    },
    input: {
        width: moderateScale(320),
        height: verticalScale(48),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        borderRadius: moderateScale(8),
        flexDirection: 'row',
        alignItems: 'center',
    },
    input2: {
        height: verticalScale(48),
        width: moderateScale(295),
        borderLeftWidth: 1,
        borderLeftColor: '#333333',
        paddingLeft: moderateScale(20),
        marginLeft: moderateScale(25)
    },
    img5: {
        width: scale(16),
        height: scale(16),
        right: moderateScale(50)
    },
    img6: {
        width: scale(6),
        height: scale(12),
        tintColor: '#999999',
        marginRight: moderateScale(60)
    }
})