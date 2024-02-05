import { View, Text, StyleSheet, Pressable, Image, Animated, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import DetailsContainer from '../Component/DetailsContainer'
import Header from '../Component/Header'

const Completed = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Header title={'COMPLETED'} onPress={() => navigation.goBack()} marginLeft={'25%'} />

            <DetailsContainer title={'completed'} onPress={() => navigation.navigate('Details')} btcolor={'#33CCCC'} color={'#2c5f3a'} />
            <DetailsContainer title={'completed'} onPress={() => navigation.navigate('Details')} btcolor={'#33CCCC'} color={'#2c5f3a'} />
            <DetailsContainer title={'completed'} onPress={() => navigation.navigate('Details')} btcolor={'#33CCCC'} color={'#2c5f3a'} />
            <DetailsContainer title={'completed'} onPress={() => navigation.navigate('Details')} btcolor={'#33CCCC'} color={'#2c5f3a'} />
        </ScrollView>
    )
}

export default Completed

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
})