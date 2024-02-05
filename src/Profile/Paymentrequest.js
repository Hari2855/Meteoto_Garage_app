import { View, Text, StyleSheet, Pressable, Image, Animated, ScrollView, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import Receviedmodel from './Receivedmodel'

const Paymentrequest = ({navigation}) => {
    const [size, setsize] = useState(0)
    const [size1, setsize1] = useState(0)
    const [isModalVisible, setModalVisible] = useState(false)

    const toggleModal = () => {
        setModalVisible(!isModalVisible)
    }

    const closeModal = () => {
        setModalVisible(false)
    }

    useEffect(() => {
        if (isModalVisible) {
            const timer = setTimeout(() => {
                closeModal();
                setsize(0)
            }, 3000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [isModalVisible]);


    return (
        <View style={[styles.container]}>
            {size === 0 && (
                <Pressable style={[styles.container1, {height: verticalScale(84)}]} onPress={() => setsize(1)}>
                    <View style={styles.container2}>
                        <Image source={require('../Assets/Container.png')} style={styles.img1} />
                        <View style={styles.container3}>
                            <Text style={styles.text1}>From: Aditya Sharma</Text>
                            <Text style={[styles.text1, { fontWeight: '600', color: '#666666', fontFamily: 'Nunito', }]}>Invoice Number: <Text style={{ color: '#33CCCC' }}>12345455626</Text></Text>
                            <Text style={[styles.text1, { fontWeight: '600', color: '#666666', fontFamily: 'Nunito', }]}>Amount: ₹10,000<Text style={{ color: '#FF3F00' }}>        00:53 sec</Text></Text>
                        </View>
                        <Image source={require('../Assets/downvector.png')} style={styles.img2} />
                    </View>
                </Pressable>
            )}
           
           {size === 1 && (
           <Pressable onPress={() => setsize(0)}>
                <Animated.View style={styles.container1}>
                    <View style={styles.container2}>
                        <Image source={require('../Assets/Container.png')} style={styles.img1} />
                        <View style={styles.container3}>
                            <Text style={styles.text1}>From: Aditya Sharma</Text>
                            <Text style={[styles.text1, { fontWeight: '600', color: '#666666', fontFamily: 'Nunito', }]}>Invoice Number: <Text style={{ color: '#33CCCC' }}>12345455626</Text></Text>
                            <Text style={[styles.text1, { fontWeight: '600', color: '#666666', fontFamily: 'Nunito', }]}>Amount: ₹10,000<Text style={{ color: '#FF3F00' }}>        00:53 sec</Text></Text>
                        </View>
                        <Image source={require('../Assets/upvector.png')} style={styles.img2} />
                    </View>
                    <View style={styles.line1}></View>
                        <Pressable style={styles.button} onPress={toggleModal}>
                        <Text style={[styles.text1, { color: '#ffffff', fontFamily: 'Nunito Sans' }]}>ACCEPT</Text>
                        <Receviedmodel isVisible={isModalVisible} onCancel={toggleModal}/>
                    </Pressable>
                </Animated.View>
                </Pressable>
           )}

            {size1 === 0 && (
                <Pressable style={[styles.container1, { height: verticalScale(84) }]} onPress={() => setsize1(1)}>
                    <View style={styles.container2}>
                        <Image source={require('../Assets/Container.png')} style={styles.img1} />
                        <View style={styles.container3}>
                            <Text style={styles.text1}>From: Aditya Sharma</Text>
                            <Text style={[styles.text1, { fontWeight: '600', color: '#666666', fontFamily: 'Nunito', }]}>Invoice Number: <Text style={{ color: '#33CCCC' }}>12345455626</Text></Text>
                            <Text style={[styles.text1, { fontWeight: '600', color: '#666666', fontFamily: 'Nunito', }]}>Amount: ₹10,000<Text style={{ color: '#FF3F00' }}>        00:10 sec</Text></Text>
                        </View>
                        <Image source={require('../Assets/downvector.png')} style={styles.img2} />
                    </View>
                </Pressable>
            )}

            {size1 === 1 && (
                <Pressable style={styles.container1} onPress={() => setsize1(0)}>
                    <View style={styles.container2}>
                        <Image source={require('../Assets/Container.png')} style={styles.img1} />
                        <View style={styles.container3}>
                            <Text style={styles.text1}>From: Aditya Sharma</Text>
                            <Text style={[styles.text1, { fontWeight: '600', color: '#666666', fontFamily: 'Nunito', }]}>Invoice Number: <Text style={{ color: '#33CCCC' }}>12345455626</Text></Text>
                            <Text style={[styles.text1, { fontWeight: '600', color: '#666666', fontFamily: 'Nunito', }]}>Amount: ₹10,000<Text style={{ color: '#FF3F00' }}>        00:10 sec</Text></Text>
                        </View>
                        <Image source={require('../Assets/upvector.png')} style={styles.img2} />
                    </View>
                    <View style={styles.line1}></View>
                    <Pressable style={styles.button} onPress={() => setsize1(0)}>
                        <Text style={[styles.text1, { color: '#ffffff', fontFamily: 'Nunito Sans' }]}>ACCEPT</Text>
                    </Pressable>
                </Pressable>
            )}

            <Text style={[styles.text1, { color: '#b7b7b7', marginLeft: '5%', top: '90%', position: 'absolute'}]}>{`Note: Accept Payment request within one minute or \nrequest will be dismissed automatically.`}</Text>
        </View>
    )
}

export default Paymentrequest

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    container1: {
        width: moderateScale(320),
        height: verticalScale(140),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(20),
        alignItems: 'center',
        flexDirection: 'column'
    },
    container2: {
        width: moderateScale(302),
        height: verticalScale(80),
        alignItems: 'center',
        flexDirection: 'row',
    },
    img1: {
        width: scale(60),
        height: scale(60),
        borderWidth: 1,
        borderColor: '#33CCCC',
        borderRadius: scale(30),
        marginLeft: '2%'
    },
    container3: {
        width: moderateScale(184),
        height: verticalScale(54),
        marginLeft: '3%'
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#333333',
        fontFamily: 'Nunito Sans'
    },
    line1: {
        width: moderateScale(320),
        height: verticalScale(1),
        borderWidth: 1,
        borderColor: '#999999',
        borderStyle: 'dashed'
    },
    img2: {
        width: scale(12),
        height: scale(6),
        marginBottom: '15%',
        marginLeft: '9%'
    },
    button: {
        width: scale(288),
        height: scale(40),
        borderRadius: scale(5),
        backgroundColor: '#6DA007',
        alignSelf: 'center',
        marginTop: '3%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})