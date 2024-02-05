import React, { useEffect } from 'react';
import { Pressable } from 'react-native';
import { View, Text, StyleSheet, Image } from 'react-native';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'

const Successmodel1 = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Onwaiting2')
        }, 3000);
        return () => {
            clearTimeout(timer);
        };
    }, []);


    return (
        <View style={styles.container}>
            <Pressable style={styles.modalContent} onPress={() => { }}>
                <Image source={require('../Assets/verified.gif')} style={styles.img} />
                <Text style={[styles.text1, { marginTop: moderateScale(10), alignSelf: 'center' }]}>CAR IS ADDED TO "IN GARAGE" SECTION</Text>
            </Pressable>
        </View>
    )
}

export default Successmodel1

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
        alignSelf: 'center'
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