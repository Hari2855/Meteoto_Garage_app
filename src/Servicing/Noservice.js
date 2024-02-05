import { View, Text, StyleSheet, Pressable, Image, Animated, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'

const Noservice = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={{ width: scale(48), height: scale(48), alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate('Booking')}>
                    <Image source={require('../Assets/chevron-left.png')} style={styles.img} />
                </Pressable>
                <Text style={[styles.text1, { marginLeft: '28%' }]}>SERVICING</Text>
            </View>

            <View style={styles.container1}>
                <Image source={require('../Assets/Way.png')} style={styles.img1} />
                <Text style={[styles.text1, { fontSize: moderateScale(16), color: '#a8a8a8', fontFamily: 'Nunito Sans' }]}>No car is available</Text>
            </View>
        </View>
    )
}

export default Noservice

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
        width: moderateScale(139),
        height: verticalScale(84),
        alignSelf: 'center',
        marginTop: '60%',
        alignItems: 'center',
        flexDirection: 'column'
    },
    img1: {
        width: scale(60),
        height: scale(60)
    }
})