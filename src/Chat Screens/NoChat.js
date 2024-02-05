import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Pressable } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Header from '../Component/Header'

const NoChat = ({ navigation }) => {
    const [color, setcolor] = useState(0)
    return (
        <View style={styles.container1}>
            <Header title={'CHATS'} onPress={() => navigation.goBack()} marginLeft={'30%'} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={require('../Assets/chat-illustration.png')} style={styles.img} />
                <Text style={styles.text4}>Currently, you do not have any active chat.</Text>
            </ScrollView>
        </View>
    )
}

export default NoChat

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#333333'
    },
    header: {
        flexDirection: 'row',
        height: verticalScale(60),
        backgroundColor: '#333333',
        alignItems: 'center',
    },
    text1: {
        color: '#ffffff',
        fontSize: moderateScale(12),
        fontWeight: '500',
        marginLeft: moderateScale(120),
    },
    container2: {
        width: moderateScale(208),
        height: verticalScale(40),
        // borderWidth: 1,
        // borderColor: '#938F99',
        marginTop: moderateScale(20),
        alignSelf: 'center',
        flexDirection: 'row'
    },
    container3: {
        height: verticalScale(40),
        width: moderateScale(104),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#938F99',
        borderTopLeftRadius: moderateScale(30),
        borderBottomLeftRadius: moderateScale(30)
    },
    container4: {
        height: verticalScale(40),
        width: moderateScale(104),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderColor: '#938F99',
        borderTopRightRadius: moderateScale(30),
        borderBottomRightRadius: moderateScale(30)
    },
    text2: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#ffffff'
    },
    line1: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#929292',
        marginTop: moderateScale(10)
    },
    container5: {
        width: moderateScale(320),
        height: verticalScale(60),
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScale(20),
        alignSelf: 'center'
    },
    text3: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#ffffff'
    },
    circle: {
        width: scale(20),
        height: scale(20),
        borderRadius: scale(10),
        backgroundColor: '#99cc33',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '10%'
    },
    line2: {
        width: moderateScale(320),
        height: verticalScale(1),
        backgroundColor: '#929292',
        alignSelf: 'center',
        marginTop: moderateScale(10)
    },
    img: {
        width: scale(202),
        height: scale(150),
        alignSelf: 'center',
        marginTop: '50%'
    },
    text4: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#cccccc',
        marginTop: moderateScale(20),
        alignSelf: 'center'
    }

})