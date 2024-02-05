import { View, Text, StyleSheet, Pressable, Image, Animated, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import DetailsContainer from '../Component/DetailsContainer'
import Header from '../Component/Header'

const Delivered = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Header title={'DELIVERED'} onPress={() => navigation.goBack()} marginLeft={'27%'} />

            <DetailsContainer title={'Delivered'} onPress={() => navigation.navigate('Detailed')} btcolor={'#33CCCC'} color={'#33CCCC'} />
            <DetailsContainer title={'Delivered'} onPress={() => navigation.navigate('Detailed')} btcolor={'#33CCCC'} color={'#33CCCC'} />
            <DetailsContainer title={'Delivered'} onPress={() => navigation.navigate('Detailed')} btcolor={'#33CCCC'} color={'#33CCCC'} />
            <DetailsContainer title={'Delivered'} onPress={() => navigation.navigate('Detailed')} btcolor={'#33CCCC'} color={'#33CCCC'} />
        </ScrollView>
    )
}

export default Delivered

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
})