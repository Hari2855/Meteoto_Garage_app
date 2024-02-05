import { View, Text, StyleSheet, Pressable, Image, Animated, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import DContainer from '../Component/DContainer'
import Header from '../Component/Header'

const Confirmedb = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Header title={'BOOKING'} onPress={() => navigation.goBack()} marginLeft={'30%'} />

            <Text style={[styles.text1, {marginLeft: moderateScale(20)}]}>C O N F I R M E D   B O O K I N G S</Text>
            <DContainer btcolor={'#6DA007'} />
            <DContainer btcolor={'#6DA007'} />
            <DContainer btcolor={'#6DA007'} />
            <DContainer btcolor={'#6DA007'} />
        </ScrollView>
    )
}

export default Confirmedb

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
        borderBottomLeftRadius: moderateScale(5),
        borderBottomRightRadius: moderateScale(5),
        borderTopWidth: moderateScale(5),
        borderTopColor: '#6DA007',
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
})