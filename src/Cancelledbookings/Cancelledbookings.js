import { View, Text, StyleSheet, Pressable, Image, Animated, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import DContainer from '../Component/DContainer'
import Header from '../Component/Header'

const Cancelledb = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Header title={'BOOKING'} onPress={() => navigation.goBack()} marginLeft={'30%'} />

            <Text style={[styles.text1, { marginLeft: moderateScale(20) }]}>C A N C E L L E D   B O O K I N G S</Text>

            <DContainer btcolor={'#ff3f00'}/>
            <DContainer btcolor={'#ff3f00'} />
            <DContainer btcolor={'#ff3f00'} />
            <DContainer btcolor={'#ff3f00'} />
        </ScrollView>
    )
}

export default Cancelledb

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
})