import { View, Text, StyleSheet,Image, ScrollView,} from 'react-native'
import React, { useState, useEffect } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

const PartsConfriom = ({navigation}) => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
            <View style={styles.container1}>
                <Image source={require('../Assets/Message.png')} style={styles.img} />
                <View style={styles.container2}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text1}>From: Aditya Sharma</Text>
                        <Text style={[styles.text1, { marginLeft: '32%', fontWeight: '600', color: '#999999', fontFamily: 'Nunito' }]}>12:10</Text>
                    </View>
                    <Text style={[styles.text1, { fontWeight: '600', color: '#666666', fontFamily: 'Nunito', }]}>Invoice Number: <Text style={{ color: '#33CCCC' }}>12345455626</Text></Text>
                    <Text style={[styles.text1, { fontWeight: '600', fontFamily: 'Nunito' }]}>Request: <Text style={{ color: '#6DA007' }}>Acccepted</Text></Text>
                </View>
            </View>

            <View style={styles.container1}>
                <Image source={require('../Assets/Message.png')} style={styles.img} />
                <View style={styles.container2}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text1}>From: Aditya Sharma</Text>
                        <Text style={[styles.text1, { marginLeft: '32%', fontWeight: '600', color: '#999999', fontFamily: 'Nunito' }]}>12:10</Text>
                    </View>
                    <Text style={[styles.text1, { fontWeight: '600', color: '#666666', fontFamily: 'Nunito', }]}>Invoice Number: <Text style={{ color: '#33CCCC' }}>12345455626</Text></Text>
                    <Text style={[styles.text1, { fontWeight: '600', fontFamily: 'Nunito' }]}>Request: <Text style={{ color: '#FF3F00' }}>Rejected</Text></Text>
                </View>
            </View>

            <View style={styles.container1}>
                <Image source={require('../Assets/Message.png')} style={styles.img} />
                <View style={styles.container2}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text1}>From: Aditya Sharma</Text>
                        <Text style={[styles.text1, { marginLeft: '32%', fontWeight: '600', color: '#999999', fontFamily: 'Nunito' }]}>12:10</Text>
                    </View>
                    <Text style={[styles.text1, { fontWeight: '600', color: '#666666', fontFamily: 'Nunito', }]}>Invoice Number: <Text style={{ color: '#33CCCC' }}>12345455626</Text></Text>
                    <Text style={[styles.text1, { fontWeight: '600', fontFamily: 'Nunito' }]}>Request: <Text style={{ color: '#6DA007' }}>Acccepted</Text></Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default PartsConfriom

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    container1: {
        width: moderateScale(320),
        height: verticalScale(84),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(20),
        alignItems: 'center',
        flexDirection: 'row'
    },
    img: {
        width: scale(60),
        height: scale(60),
        borderRadius: scale(30),
        borderWidth: 1,
        borderColor: '#33CCCC',
        marginLeft: '5%'
    },
    container2: {
        width: moderateScale(220),
        height: verticalScale(54),
        marginLeft: '3%'
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#333333',
        fontFamily: 'Nunito Sans'
    },
})