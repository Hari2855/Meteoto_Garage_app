import React, { useState, useRef } from 'react';
import { Pressable } from 'react-native';
import { View, Text, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'

const Responsemodel = ({ isVisible, onOff, onConfirm, navigation }) => {

    return (
        <Modal isVisible={isVisible} backdropOpacity={0.5} animationIn={'fadeIn'} animationOut={'fadeOut'}>
            <Pressable style={styles.modalContent} onPress={() => {
                onOff()
                navigation.navigate('MyProfile')
            }}>
                <Image source={require('../Assets/verified.gif')} style={styles.img} />
                <Text style={[styles.text1, { color: '#6DA007', marginTop: moderateScale(10), alignSelf: 'center' }]}>PART DETAILS ARE SUCCESSFULLY</Text>
                <Text style={[styles.text1, { color: '#6DA007', alignSelf: 'center' }]}>SENT TO THE USER</Text>
            </Pressable>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: '#ffffff',
        width: moderateScale(320),
        height: verticalScale(240),
        borderRadius: moderateScale(5),
        marginTop: moderateScale(30)
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#000000',
        fontFamily: 'Nunito'
    },
    img: {
        width: scale(100),
        height: scale(100),
        alignSelf: 'center',
        marginTop: moderateScale(60)
    }
});

export default Responsemodel;
