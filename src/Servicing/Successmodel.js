import React, { useEffect } from 'react';
import { Pressable } from 'react-native';
import { View, Text, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';

const Successmodel = ({ isVisible, onOff, onConfirm, navigation }) => {
    useEffect(() => {
        let timer;
        if (isVisible) {
            // Set a timer to close the modal and navigate after 3 seconds
            timer = setTimeout(() => {
                onOff(); // Close the modal
                navigation.navigate('Serviceing1'); // Replace 'AnotherScreen' with the screen you want to navigate to
            }, 3000);
        }

        // Clean up the timer when the component unmounts or modal is closed
        return () => {
            clearTimeout(timer);
        };
    }, [isVisible, onOff, navigation]);

    return (
        <Modal isVisible={isVisible} backdropOpacity={0.5} animationIn={'fadeIn'} animationOut={'fadeOut'}>
            <Pressable style={styles.modalContent} onPress={onConfirm}>
                <Image source={require('../Assets/verified.gif')} style={styles.img} />
                <Text style={[styles.text1, { marginTop: moderateScale(10), alignSelf: 'center' }]}>
                    CAR IS ADDED TO "COMPLETED" SECTION
                </Text>
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
        marginTop: moderateScale(30),
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#000000',
        fontFamily: 'Nunito',
    },
    img: {
        width: scale(100),
        height: scale(100),
        alignSelf: 'center',
        marginTop: moderateScale(60),
    },
});

export default Successmodel;
