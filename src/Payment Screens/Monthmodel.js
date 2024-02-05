import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import {Checkbox} from 'react-native-paper';

const Monthmodel = ({ navigation, isVisible, closeModal, onMonthSelect }) => {
    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);


    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={closeModal}
            backdropOpacity={0.5}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            style={{ margin: 0, justifyContent: 'flex-end', }}
        >

            <Pressable style={styles.container} onPress={closeModal}>
                <View style={styles.shape}></View>

                <View style={{flexDirection: 'row'}}>
                <Text style={styles.text1}>S E L E C T   M O N T H</Text>
                <Text style={[styles.text1, {color: '#33CCCC', marginLeft: '38%'}]}>C L E A R</Text>
                </View>

                <View style={styles.line2}></View>

                <View style={styles.container1}>
                    <Checkbox
                        style={styles.checkbox}
                        status={checked ? 'unchecked' : 'checked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                        color='#33CCCC'
                    />
                    <Text style={[styles.text1, {bottom: moderateScale(15), right: moderateScale(15)}]}>Oct - 2023</Text>
                </View>

                <View style={styles.container1}>
                    <Checkbox
                        style={styles.checkbox}
                        status={checked1 ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked1(!checked1);
                        }}
                        color='#33CCCC'
                    />
                    <Text style={[styles.text1, { bottom: moderateScale(15), right: moderateScale(15) }]}>Nov - 2023</Text>
                </View>

                <View style={styles.container1}>
                    <Checkbox
                        style={styles.checkbox}
                        status={checked2 ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked2(!checked2);
                        }}
                        color='#33CCCC'
                    />
                    <Text style={[styles.text1, { bottom: moderateScale(15), right: moderateScale(15) }]}>Dec - 2023</Text>
                </View>

                <View style={styles.container1}>
                    <Checkbox
                        style={styles.checkbox}
                        status={checked3 ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked3(!checked3);
                        }}
                        color='#33CCCC'
                    />
                    <Text style={[styles.text1, { bottom: moderateScale(15), right: moderateScale(15) }]}>Jan - 2024</Text>
                </View>

                <View style={styles.container1}>
                    <Checkbox
                        style={styles.checkbox}
                        status={checked4 ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked4(!checked4);
                        }}
                        color='#33CCCC'
                    />
                    <Text style={[styles.text1, { bottom: moderateScale(15), right: moderateScale(15) }]}>Feb - 2024</Text>
                </View>

                 <View style={styles.container1}>
                    <Checkbox
                        style={styles.checkbox}
                        status={checked5 ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked5(!checked5);
                        }}
                        color='#33CCCC'
                    />
                    <Text style={[styles.text1, {bottom: moderateScale(15), right: moderateScale(15)}]}>Mar - 2024</Text>
                </View>

                <Pressable style={styles.button} onPress={closeModal}>
                    <Text style={styles.text6}>APPLY</Text>
                </Pressable>
            </Pressable>
        </Modal>
    );
}

export default Monthmodel

const styles = StyleSheet.create({
    container: {
        width: moderateScale(360),
        backgroundColor: '#333333',
        elevation: 5,
        height: verticalScale(460),
    },
    shape: {
        height: verticalScale(4),
        width: scale(40),
        backgroundColor: '#337070',
        borderRadius: moderateScale(10),
        marginTop: moderateScale(15),
        alignSelf: 'center'
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#ffffff',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(30),
        fontFamily: 'Nunito Sans'
    },
    line2: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#424242',
        marginTop: moderateScale(15)
    },
    radiocontainer: {
        width: moderateScale(200),
        height: verticalScale(40),
        marginLeft: moderateScale(20),
        alignItems: 'center',
        flexDirection: 'row',
    },
    text2: {
        fontSize: moderateScale(16),
        fontWeight: '700',
        color: '#ffffff',
        fontFamily: 'Nunito Sans',
    },
    input: {
        width: moderateScale(320),
        height: verticalScale(48),
        backgroundColor: '#ffffff',
        borderRadius: moderateScale(5),
        marginTop: moderateScale(10),
        alignSelf: 'center',
        paddingLeft: moderateScale(20),
        fontSize: moderateScale(12),
    },
    button: {
        width: moderateScale(307),
        height: verticalScale(40),
        backgroundColor: '#33CCCC',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(5),
        marginTop: moderateScale(30)
    },
    text6: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#ffffff',
        fontFamily: 'Nunito'
    },
    container1: {
        width: moderateScale(126),
        height: verticalScale(50),
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: moderateScale(20),
    },
})