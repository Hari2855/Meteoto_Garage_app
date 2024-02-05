import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import Header from '../Component/Header'

const Chat = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header title={'CHATS'} onPress={() => navigation.goBack()} marginLeft={'30%'} />

            <Text style={[styles.text1, {marginLeft: moderateScale(20), fontFamily: 'Nunito Sans', marginTop: moderateScale(10)}]}>{`Note: Chat will be deleted automatically once car \nservice is done.`}</Text>

            <View style={styles.line1}></View>

            <ScrollView showsVerticalScrollIndicator={false}>
            <Pressable style={[styles.container1, { marginTop: moderateScale(20),}]} onPress={() => navigation.navigate('Chating')}>
                <Image source={require('../Assets/Aditya.png')} style={styles.img1}/>
                <View style={styles.container2}>
                    <Text style={[styles.text1, {fontSize: moderateScale(16), fontFamily: 'Nunito Sans'}]}>Aditya Sharma</Text>
                    <Text style={[styles.text1, { fontFamily: '400', fontFamily: 'Nunito', color: '#cccccc', marginTop: moderateScale(7) }]}>Sir, it is imp to change...</Text>
                </View>

                <View style={styles.circle}>
                    <Text style={[styles.text1, { color: '#ffffff' }]}>2</Text>
                </View>
            </Pressable>

            <View style={styles.line2}></View>

                <Pressable style={styles.container1} onPress={() => navigation.navigate('Chating')}>
                <Image source={require('../Assets/Rashmika.png')} style={styles.img1} />
                <View style={styles.container2}>
                    <Text style={[styles.text1, { fontSize: moderateScale(16), fontFamily: 'Nunito Sans' }]}>Rashmika Sharma</Text>
                    <Text style={[styles.text1, { fontFamily: '400', fontFamily: 'Nunito', color: '#cccccc', marginTop: moderateScale(7) }]}>Sir, it is imp to change...</Text>
                </View>

                <View style={styles.circle}>
                    <Text style={[styles.text1, { color: '#ffffff' }]}>2</Text>
                </View>
            </Pressable>
            </ScrollView>
        </View>
    )
}

export default Chat

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
    line1: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(20)
    },
    container1: {
        width: moderateScale(320),
        height: verticalScale(80),
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    img1: {
        width: scale(40),
        height: scale(40),
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: scale(20)
    },
    container2: {
        width: moderateScale(180),
        height: verticalScale(44),
        marginLeft: moderateScale(30),
        flexDirection: 'column'
    },
    circle: {
        width: scale(20),
        height: scale(20),
        borderRadius: scale(10),
        backgroundColor: '#99cc33',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '10%'
    },
    line2: {
        width: moderateScale(320),
        height: verticalScale(1),
        backgroundColor: '#4D4D4D',
        alignSelf: 'center'
    }
})