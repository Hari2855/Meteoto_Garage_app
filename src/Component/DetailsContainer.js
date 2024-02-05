import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'

const DetailsContainer = ({navigation, onPress, title, btcolor, color}) => {
    return (
        <Pressable style={[styles.container1, {borderTopColor: btcolor}]} onPress={onPress} navigation={navigation}>
            <View style={styles.container2}>
                <Text style={[styles.text1, { fontWeight: '600', color: '#333333', marginLeft: moderateScale(10) }]}>General Service</Text>
                <Text style={[styles.text1, { fontWeight: '400', color: '#666666', marginLeft: '36%' }]}>Status: <Text style={{ color: color, fontWeight: '600' }}>{title}</Text></Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: moderateScale(10) }}>
                <View style={styles.container3}>
                    <Text style={[styles.text1, { fontWeight: '600', color: '#666666' }]}>Car Model: <Text style={{ fontWeight: '400', color: '#333333' }}>Hyundayi i10</Text></Text>

                    <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginTop: moderateScale(3) }]}>Service Date: <Text style={{ fontWeight: '400', color: '#333333' }}>28/09/2023</Text></Text>

                    <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginTop: moderateScale(3) }]}>Service Time: <Text style={{ fontWeight: '400', color: '#333333' }}>06:00PM</Text></Text>
                </View>

                <Pressable style={styles.imgc} navigation={navigation}>
                    <Image source={require('../Assets/Vector1.png')} style={styles.img1} />
                </Pressable>
            </View>
        </Pressable>
    )
}

export default DetailsContainer

const styles = StyleSheet.create({
    container1: {
        width: moderateScale(320),
        height: verticalScale(108),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        borderBottomLeftRadius: moderateScale(5),
        borderBottomRightRadius: moderateScale(5),
        borderTopWidth: moderateScale(5),
        marginTop: moderateScale(10)
    },
    container2: {
        width: moderateScale(320),
        height: verticalScale(28),
        borderBottomWidth: 0.5,
        borderColor: '#aaaaaa',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#ffffff',
        fontFamily: 'Nunito'
    },
    container3: {
        width: moderateScale(152),
        height: verticalScale(56),
        marginLeft: moderateScale(10)
    },
    imgc: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '38%',
        marginBottom: moderateScale(20)
    },
    img1: {
        width: scale(7),
        height: scale(13)
    }
})