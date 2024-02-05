import React, { useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'

const Suceesotp1 = ({ navigation }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Success1')
        }, 3000);
        return () => {
            clearTimeout(timer);
        };
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.modalContent}>
                <View style={styles.container1}>
                    <Text style={[styles.text1, { marginTop: moderateScale(5) }]}>ENTER OTP</Text>
                </View>

                <View style={styles.container2}>
                    <TextInput style={styles.input} placeholder='8' placeholderTextColor={"#333333"} inputMode='numeric' ></TextInput>
                    <TextInput style={styles.input} placeholder='5' placeholderTextColor={"#333333"} inputMode='numeric' ></TextInput>
                    <TextInput style={styles.input} placeholder='4' placeholderTextColor={"#333333"} inputMode='numeric'></TextInput>
                    <TextInput style={styles.input} placeholder='9' placeholderTextColor={"#333333"} inputMode='numeric'></TextInput>
                </View>

                <Text style={[styles.text1, { color: '#6DA007', fontWeight: '600', marginTop: moderateScale(20), alignSelf: 'center' }]}>OTP Verified!</Text>
            </View>
        </View>
    )
}

export default Suceesotp1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    modalContent: {
        backgroundColor: '#ffffff',
        width: moderateScale(320),
        height: verticalScale(240),
        borderRadius: moderateScale(5),
        marginTop: '55%',
        alignSelf: 'center',
    },
    container1: {
        width: moderateScale(190),
        height: verticalScale(40),
        alignSelf: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#000000',
        fontFamily: 'Nunito'
    },
    cancel: {
        width: scale(16),
        height: scale(16),
        borderRadius: scale(10),
        borderWidth: 1,
        borderColor: '#666666',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '50%'
    },
    container2: {
        width: moderateScale(276),
        height: verticalScale(56),
        marginTop: moderateScale(10),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        width: moderateScale(60),
        height: verticalScale(56),
        borderWidth: 2,
        borderColor: '#6DA007',
        borderRadius: moderateScale(10),
        paddingLeft: moderateScale(25)
    },
    button: {
        width: moderateScale(136),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        alignSelf: 'center',
        marginTop: moderateScale(40),
        alignItems: 'center',
        justifyContent: 'center'
    }
});