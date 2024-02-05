import { View, Text, StyleSheet, Pressable, Image, Animated, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import DetailsContainer from '../Component/DetailsContainer'
import Header from '../Component/Header'

const Calcelled = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Header title={'BOOKING'} onPress={() => navigation.goBack()} marginLeft={'28%'} />

            <Text style={[styles.text1, { color: '#cccccc', fontFamily: 'Nunito Sans', marginLeft: moderateScale(20), marginTop: moderateScale(20)}]}>{`Note: If Customer doesn’t reach to garage after 15 \nminutes of Booking Timing, then booking will be \ncancelled automatically.`}</Text>

            <View style={styles.line}></View>

            <DetailsContainer title={'Cancelled'} onPress={() => navigation.navigate('Onwaitingc')} btcolor={'#ff3f00'} color={'#ff3f00'} />
            <DetailsContainer title={'Cancelled'} onPress={() => navigation.navigate('Onwaitingc')} btcolor={'#ff3f00'} color={'#ff3f00'} />
            <DetailsContainer title={'Cancelled'} onPress={() => navigation.navigate('Onwaitingc')} btcolor={'#ff3f00'} color={'#ff3f00'} />
            <DetailsContainer title={'Cancelled'} onPress={() => navigation.navigate('Onwaitingc')} btcolor={'#ff3f00'} color={'#ff3f00'} />
        </ScrollView>
    )
}

export default Calcelled

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
        height: verticalScale(108),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        borderBottomLeftRadius: moderateScale(5),
        borderBottomRightRadius: moderateScale(5),
        borderTopWidth: moderateScale(5),
        borderTopColor: '#FF3F00',
        marginTop: moderateScale(10),
        overflow: 'hidden'
    },
    container2: {
        width: moderateScale(320),
        height: verticalScale(28),
        borderBottomWidth: 0.5,
        borderColor: '#aaaaaa',
        alignItems: 'center',
        flexDirection: 'row'
    },
    container3: {
        width: moderateScale(152),
        height: verticalScale(56),
        marginLeft: moderateScale(10)
    },
    imgc: {
        width: scale(40),
        height: scale(40),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '33%'
    },
    line: {
        width: '100%',
        height: verticalScale(1),
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(10)
    }
})