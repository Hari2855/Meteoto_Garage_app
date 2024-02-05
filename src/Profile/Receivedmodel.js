import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale,} from 'react-native-size-matters'

const Receviedmodel = ({ isVisible, onCancel, onConfirm, }) => {

    return (
        <Modal isVisible={isVisible} backdropOpacity={0.1} animationIn={'slideInUp'} animationOut={'slideOutDown'}>
            <View style={styles.modalContent}>
                <Image source={require('../Assets/icon.png')} style={styles.img}/>
                <Text style={styles.text1}>PAYMENT RECEIVED</Text>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        height: verticalScale(48),
        width: moderateScale(280),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        alignSelf: 'center',
        backgroundColor: '#99CC33',
        borderRadius: moderateScale(5),
        flexDirection: 'row',
        top: '85%'
    },
    img: {
        width: scale(32),
        height: scale(32),
        borderRadius: scale(20),
        right: moderateScale(30)
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#ffffff',
        fontFamily: 'Nunito Sans',
    }
});

export default Receviedmodel;
