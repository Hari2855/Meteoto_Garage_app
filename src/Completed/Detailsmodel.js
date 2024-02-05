import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'


const Detailsmodel = ({ navigation, isVisible, closeModal, }) => {


    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={closeModal}
            backdropOpacity={0.1}
            animationIn="fadeIn"
            animationOut="fadeOut"
            style={{ alignSelf: 'center', justifyContent: 'flex-end', }}
        >

            <Pressable style={styles.container} onPress={closeModal}>
                <Text style={{ fontSize: moderateScale(12), marginTop: moderateScale(10), marginLeft: moderateScale(10) }}>{`These charges cannot be \nclassified, hence kept \ndifferent. You may ask Garage \nabout these Charges.`}</Text>
            </Pressable>
        </Modal>
    );
}

export default Detailsmodel

const styles = StyleSheet.create({
    container: {
        width: moderateScale(200),
        backgroundColor: '#ffffff',
        elevation: 5,
        height: verticalScale(80),
        borderRadius: moderateScale(5),
        bottom: '33%',
        marginRight: '27%',
        borderWidth: 0.5,
        borderColor: '#666666',
        alignSelf: 'center'
    },
})