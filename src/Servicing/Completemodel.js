import React, {useState, useEffect} from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Successmodel from './Successmodel';

const Completemodel = ({ isVisible, onCancel, onConfirm, navigation}) => {
    const [isModalVisible, setisModalVisible] = useState(false)

    const toggleModal = () => {
        setisModalVisible(!isModalVisible);
    }


    return (
        <Modal isVisible={isVisible} backdropOpacity={0.5} animationIn={'fadeIn'} animationOut={'fadeOut'}>
            <View style={styles.modalContent}>
                <Text style={[styles.modalText, { fontWeight: '700'}]}>Is car service completed?</Text>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={onCancel} style={styles.modalButton1}>
                        <Text style={[styles.modalButtonText, { color: '#33CCCC' }]}>NO</Text>
                    </Pressable>
                    <Pressable onPress={onConfirm} style={[styles.modalButton2, { marginLeft: moderateScale(20) }]} onPressIn={toggleModal}>
                        <Text style={styles.modalButtonText}>YES</Text>
                        <Successmodel isVisible={isModalVisible} onOff={toggleModal} navigation={navigation}/>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: '#666666',
        padding: moderateScale(20),
        width: moderateScale(320),
        height: verticalScale(152),
        borderRadius: moderateScale(10),
        marginTop: moderateScale(60)
    },
    modalText: {
        fontSize: moderateScale(16),
        marginBottom: (22),
        color: '#ffffff',
        fontFamily: 'Nunito Sans'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        right: moderateScale(8),
        marginTop: moderateScale(20)
    },
    modalButton1: {
        width: scale(136),
        height: scale(40),
        borderRadius: scale(5),
        borderWidth: 1,
        borderColor: '#33CCCC',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalButton2: {
        backgroundColor: '#33CCCC',
        width: scale(136),
        height: scale(40),
        borderRadius: scale(5),
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: moderateScale(12),
        fontWeight: '700',
        fontFamily: 'Nunito'
    },
});

export default Completemodel;
