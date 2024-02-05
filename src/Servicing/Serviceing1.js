import { View, Text, StyleSheet, Pressable, Image, Animated, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Entypo from 'react-native-vector-icons/Entypo'
import DetailsContainer from '../Component/DetailsContainer'
import Header from '../Component/Header'

const Serviceing1 = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Header title={'SERVICING'} onPress={() => navigation.navigate('Booking')} marginLeft={'28%'} />

            <DetailsContainer title={'servicing'} onPress={() => navigation.navigate('Servicing2')} btcolor={'#33CCCC'} color={'#33CCCC'} />
            <DetailsContainer title={'servicing'} onPress={() => navigation.navigate('Servicing2')} btcolor={'#33CCCC'} color={'#33CCCC'} />
            <DetailsContainer title={'servicing'} onPress={() => navigation.navigate('Servicing2')} btcolor={'#33CCCC'} color={'#33CCCC'} />
            <DetailsContainer title={'servicing'} onPress={() => navigation.navigate('Servicing2')} btcolor={'#33CCCC'} color={'#33CCCC'} />
        </ScrollView>
    )
}

export default Serviceing1

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
})