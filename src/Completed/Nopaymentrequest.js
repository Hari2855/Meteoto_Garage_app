import { View, Text, StyleSheet, Pressable, Image, ScrollView, TextInput, VirtualizedList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'

const Nopaymentr = ({ navigation }) => {
    const [state, setstate] = useState(0)


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={{ width: scale(48), height: scale(48), alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate('Jobbcard3')}>
                    <Image source={require('../Assets/chevron-left.png')} style={styles.img} />
                </Pressable>
                <Text style={[styles.text1, { marginLeft: '20%' }]}>PAYMENT STATUS</Text>
            </View>

            <View style={styles.container2}>
                <Image source={require('../Assets/Pending.png')} style={styles.img1} />
                <View style={styles.line}></View>
                <View style={styles.container3}>
                    <Text style={[styles.text1, { color: '#333333', fontFamily: 'Nunito Sans' }]}>Payment: Pending</Text>
                    <Text style={[styles.text1, { color: '#666666', fontWeight: '600', marginTop: moderateScale(3) }]}>Date: 28/09/2023</Text>
                </View>
            </View>

            <View style={styles.line1}></View>


            {state == 0 ? <View>
                <Pressable style={styles.container4} onPress={() => setstate(1)}>
                    <Text style={[styles.text1, { color: '#333333', fontFamily: 'Nunito Sans', marginLeft: moderateScale(20) }]}>CASH PAYMENT REQUEST</Text>

                    <Pressable onPress={() => setstate(0)}>
                        <Image source={require('../Assets/Alert.png')} style={styles.img2} />
                    </Pressable>

                    <Pressable style={{ marginLeft: '25%' }} onPress={() => setstate(0)}>
                        <Image source={require('../Assets/upvector.png')} style={styles.img3} />
                    </Pressable>
                </Pressable>
            </View> :

                <Pressable style={[styles.container5, { height: verticalScale(232) }]} onPress={() => setstate(0)}>
                    <View style={{ height: verticalScale(24), flexDirection: 'row', alignItems: 'center', marginTop: moderateScale(10), }}>
                        <Text style={[styles.text1, { color: '#333333', fontFamily: 'Nunito Sans', marginLeft: moderateScale(20) }]}>CASH PAYMENT REQUEST</Text>
                        <Pressable style={{ marginLeft: '35%' }} onPress={() => setstate(0)}>
                            <Image source={require('../Assets/Vector3.png')} style={styles.img3} />
                        </Pressable>
                    </View>

                    <View style={styles.container6}>
                        <Text style={[styles.text1, {color: '#333333', fontFamily: 'Nunito Sans', marginTop: '20%'}]}>No Payment Request!</Text>
                    </View>
                </Pressable>}
        </View>
    )
}

export default Nopaymentr

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
        width: moderateScale(109),
        height: verticalScale(36),
        marginLeft: moderateScale(10),
    },
    line1: {
        width: '100%',
        height: verticalScale(1),
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(20)
    },
    container4: {
        width: moderateScale(320),
        height: verticalScale(48),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: moderateScale(20)
    },
    img2: {
        width: scale(24),
        height: scale(24),
        marginLeft: moderateScale(5)
    },
    img3: {
        width: scale(13),
        height: scale(7),
        tintColor: '#666666'
    },
    container5: {
        width: moderateScale(320),
        height: verticalScale(232),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(20)
    },
    container6: {
        width: moderateScale(320),
        height: verticalScale(112),
        borderTopWidth: 1,
        borderTopColor: '#000000',
        borderBottomColor: '#000000',
        borderStyle: 'dashed',
        marginTop: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
})