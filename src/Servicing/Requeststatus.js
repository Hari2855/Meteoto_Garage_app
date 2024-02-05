import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import Deletemodel from './Deletemodel'
import Header from '../Component/Header'

const Requeststatus = ({ navigation }) => {
    const [state, setstate] = useState(false)
    const animation = useSharedValue(0)
    const [showAdditionalContainer, setShowAdditionalContainer] = useState(false);
    const [removeContainers, setRemoveContainers] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false)

    const toggleModal = () => {
        setModalVisible(!isModalVisible)
    }

    useEffect(() => {
        if (isModalVisible) {
            const timer = setTimeout(() => {
                setModalVisible(false)
            }, 3000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [isModalVisible]);


    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: animation.value }
            ]

        }
    })

    const onPressEditRequest = () => {
        setstate(true);
        animation.value = -55;
        setShowAdditionalContainer(true);
    };

    const onPressGoBack = () => {
        setstate(false);
        animation.value = 0;
        setShowAdditionalContainer(false);
    };

    const onPressRemoveContainers = () => {
        setRemoveContainers(true);
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Header title={'JOB CARD'} onPress={() => navigation.goBack()} marginLeft={'27%'} />

            <View style={{ flexDirection: 'row', width: moderateScale(320), height: verticalScale(22), alignItems: 'center', justifyContent: 'space-between', marginTop: moderateScale(20), alignSelf: 'center' }}>
                <Text style={styles.text1}>Request Pending</Text>
                <Pressable onPress={state ? onPressGoBack : onPressEditRequest}>
                    <Text style={[styles.text1, { color: '#33CCCC' }]}>{state ? 'Go Back' : 'Edit Request'}</Text>
                </Pressable>

            </View>
            
            {removeContainers == true ? (
                ""
            ) : (
                <Animated.View style={showAdditionalContainer ? styles.containerRow : null}>
                    <Animated.View style={[styles.container1, animatedStyle]}>
                        <View style={styles.container2}>
                            <Image source={require('../Assets/Circle.png')} style={styles.img} />
                        </View>
                        <View style={styles.line1}></View>
                        <View style={{ flexDirection: 'column', marginLeft: moderateScale(10), marginTop: moderateScale(5) }}>
                            <Text style={styles.text2}>Headlight</Text>
                            <Text style={styles.text3}>Aftermarket Part</Text>
                            <Text style={styles.text3}>Global X Qt. :<Text style={{ color: '#333333' }}> 02</Text></Text>
                        </View>
                        <View style={{ flexDirection: 'column', marginTop: moderateScale(2), marginLeft: moderateScale(75) }}>
                            <Text style={styles.text3}>Price</Text>
                            <Text style={[styles.text3, { marginTop: moderateScale(2), color: '#333333' }]}>4000/-</Text>
                            <View style={styles.imp}>
                                <View style={{ height: scale(5), width: scale(5), backgroundColor: '#FF9966', borderRadius: scale(3), marginRight: moderateScale(5) }}></View>
                                <Text style={styles.text4}>IMPORTANT</Text>
                            </View>
                        </View>
                    </Animated.View>

                    {showAdditionalContainer && (
                        <View style={[styles.additionalContainer, { borderColor: '#FF3F00' }]}>
                            <Pressable onPress={onPressRemoveContainers}>
                                <Text style={[styles.text, { fontSize: moderateScale(20) }]}>X</Text>
                                <Deletemodel isVisible={isModalVisible} onCancel={toggleModal}/>
                            </Pressable>
                        </View>
                    )}
                </Animated.View>
            )}


            <View style={showAdditionalContainer ? styles.containerRow : null}>
                <Animated.View style={[styles.container1, animatedStyle]}>
                    <View style={styles.container2}>
                        <Image source={require('../Assets/Circle.png')} style={styles.img} />
                    </View>
                    <View style={styles.line1}></View>
                    <View style={{ flexDirection: 'column', marginLeft: moderateScale(10), marginTop: moderateScale(5) }}>
                        <Text style={styles.text2}>Headlight</Text>
                        <Text style={styles.text3}>Aftermarket Part</Text>
                        <Text style={styles.text3}>Global X Qt. :<Text style={{ color: '#333333' }}> 02</Text></Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginTop: moderateScale(2), marginLeft: moderateScale(75) }}>
                        <Text style={styles.text3}>Price</Text>
                        <Text style={[styles.text3, { marginTop: moderateScale(2), color: '#333333' }]}>4000/-</Text>
                        <View style={styles.imp}>
                            <View style={{ height: scale(5), width: scale(5), backgroundColor: '#FF9966', borderRadius: scale(3), marginRight: moderateScale(5) }}></View>
                            <Text style={styles.text4}>IMPORTANT</Text>
                        </View>
                    </View>
                </Animated.View>

                {showAdditionalContainer && (
                    <View style={[styles.additionalContainer, { borderColor: '#FF3F00' }]}>
                        <Pressable>
                            <Text style={[styles.text, { fontSize: moderateScale(20) }]}>X</Text>
                        </Pressable>
                    </View>
                )}
            </View>

            <View style={styles.line2}></View>

            <Text style={[styles.text1, { marginTop: moderateScale(10), marginLeft: moderateScale(18) }]}>Request Accepted</Text>

            <View style={styles.container3}>
                <View style={styles.container2}>
                    <Image source={require('../Assets/Circle.png')} style={styles.img} />
                </View>
                <View style={[styles.line1, { height: moderateScale(88.3) }]}></View>
                <View style={{ flexDirection: 'column', marginLeft: moderateScale(10), marginTop: moderateScale(5) }}>
                    <Text style={styles.text2}>Headlight</Text>
                    <Text style={styles.text3}>Aftermarket Part</Text>
                    <ScrollView horizontal={true}>
                        <Text style={styles.text3}>Global X  Qt. : <Text style={{ color: '#333333' }}> 02</Text></Text>
                    </ScrollView>
                </View>
                <View style={{ flexDirection: 'column', marginTop: moderateScale(2), marginLeft: moderateScale(80) }}>
                    <Text style={styles.text3}>Price</Text>
                    <Text style={[styles.text3, { marginTop: moderateScale(2), color: '#333333' }]}>4000/-</Text>
                    <Text style={[styles.text3, { color: '#99CC33', fontWeight: '500', marginTop: moderateScale(12), right: moderateScale(25) }]}>Accepted</Text>
                </View>
            </View>

            <View style={styles.container3}>
                <View style={styles.container2}>
                    <Image source={require('../Assets/Circle.png')} style={styles.img} />
                </View>
                <View style={[styles.line1, { height: moderateScale(88.3) }]}></View>
                <View style={{ flexDirection: 'column', marginLeft: moderateScale(10), marginTop: moderateScale(5) }}>
                    <Text style={styles.text2}>Headlight</Text>
                    <Text style={styles.text3}>Aftermarket Part</Text>
                    <ScrollView horizontal={true}>
                        <Text style={styles.text3}>Global X  Qt. : <Text style={{ color: '#333333' }}> 02</Text></Text>
                    </ScrollView>
                </View>
                <View style={{ flexDirection: 'column', marginTop: moderateScale(2), marginLeft: moderateScale(80) }}>
                    <Text style={styles.text3}>Price</Text>
                    <Text style={[styles.text3, { marginTop: moderateScale(2), color: '#333333' }]}>4000/-</Text>
                    <Text style={[styles.text3, { color: '#99CC33', fontWeight: '500', marginTop: moderateScale(12), right: moderateScale(25) }]}>Accepted</Text>
                </View>
            </View>

            <View style={styles.line2}></View>

            <Text style={[styles.text1, { marginTop: moderateScale(10), marginLeft: moderateScale(18) }]}>Request Denide</Text>

            <View style={[styles.container3, { borderTopColor: '#FF9966' }]}>
                <View style={styles.container2}>
                    <Image source={require('../Assets/Circle.png')} style={styles.img} />
                </View>
                <View style={[styles.line1, { height: moderateScale(88.3) }]}></View>
                <View style={{ flexDirection: 'column', marginLeft: moderateScale(10), marginTop: moderateScale(5) }}>
                    <Text style={styles.text2}>Headlight</Text>
                    <Text style={styles.text3}>Aftermarket Part</Text>
                    <ScrollView horizontal={true}>
                        <Text style={styles.text3}>Global X  Qt. : <Text style={{ color: '#333333' }}> 02</Text></Text>
                    </ScrollView>
                </View>
                <View style={{ flexDirection: 'column', marginTop: moderateScale(2), marginLeft: moderateScale(80) }}>
                    <Text style={styles.text3}>Price</Text>
                    <Text style={[styles.text3, { marginTop: moderateScale(2), color: '#333333' }]}>4000/-</Text>
                    <Pressable style={styles.undo}><Text style={styles.text6}>Undo</Text></Pressable>
                </View>
            </View>

            <View style={[styles.container3, { borderTopColor: '#FF9966' }]}>
                <View style={styles.container2}>
                    <Image source={require('../Assets/Circle.png')} style={styles.img} />
                </View>
                <View style={[styles.line1, { height: moderateScale(88.3) }]}></View>
                <View style={{ flexDirection: 'column', marginLeft: moderateScale(10), marginTop: moderateScale(5) }}>
                    <Text style={styles.text2}>Headlight</Text>
                    <Text style={styles.text3}>Aftermarket Part</Text>
                    <ScrollView horizontal={true}>
                        <Text style={styles.text3}>Global X  Qt. : <Text style={{ color: '#333333' }}> 02</Text></Text>
                    </ScrollView>
                </View>
                <View style={{ flexDirection: 'column', marginTop: moderateScale(2), marginLeft: moderateScale(80) }}>
                    <Text style={styles.text3}>Price</Text>
                    <Text style={[styles.text3, { marginTop: moderateScale(2), color: '#333333' }]}>4000/-</Text>
                    <Pressable style={styles.undo}><Text style={styles.text6}>Undo</Text></Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

export default Requeststatus

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    header: {
        width: moderateScale(360),
        height: verticalScale(60),
        alignItems: 'center',
        flexDirection: 'row',
    },
    img1: {
        width: scale(24),
        height: scale(24)
    },
    text: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#ffffff',
        fontFamily: 'Nunito'
    },
    text1: {
        fontSize: moderateScale(16),
        fontWeight: '600',
        color: '#ffffff',
        fontFamily: 'Nunito'
    },
    container1: {
        width: moderateScale(320),
        height: verticalScale(88),
        backgroundColor: '#ffffff',
        borderRadius: moderateScale(5),
        alignSelf: 'center',
        marginTop: moderateScale(10),
        flexDirection: 'row',
        borderTopWidth: 5,
        borderColor: '#FFCC00'
    },
    newcontainer: {
        width: moderateScale(320),
        height: verticalScale(88),
        backgroundColor: '#FF3F00',
        borderRadius: moderateScale(5),
        alignSelf: 'center',
        marginTop: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    container2: {
        width: scale(60),
        height: scale(60),
        borderRadius: scale(30),
        borderWidth: 1,
        borderColor: '#cbcbcb',
        marginLeft: moderateScale(15),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    containerRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    additionalContainer: {
        width: moderateScale(75),
        height: verticalScale(88),
        backgroundColor: '#FF3F00',
        borderWidth: 5,
        right: moderateScale(54),
        marginTop: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: scale(60),
        height: scale(60),
        borderRadius: scale(30),
        borderWidth: 1
    },
    line1: {
        height: verticalScale(83),
        width: moderateScale(1),
        backgroundColor: '#999999',
        marginLeft: moderateScale(10)
    },
    text2: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#333333'
    },
    text3: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#666666',
        marginTop: moderateScale(5)
    },
    imp: {
        width: scale(67),
        height: scale(16),
        borderRadius: scale(10),
        borderWidth: 1,
        borderColor: '#FF9966',
        marginTop: moderateScale(12),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        right: moderateScale(15)
    },
    text4: {
        fontSize: moderateScale(8),
        fontWeight: '400',
        color: '#FF9966'
    },
    button1: {
        width: scale(49),
        height: scale(24),
        borderRadius: scale(12),
        borderWidth: 1,
        borderColor: '#666666',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button2: {
        width: scale(49),
        height: scale(24),
        borderRadius: scale(12),
        backgroundColor: '#99CC33',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: moderateScale(10)
    },
    text5: {
        fontSize: moderateScale(12),
        fontWeight: '500'
    },
    line2: {
        width: moderateScale(360),
        height: verticalScale(1),
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(25)
    },
    container3: {
        width: moderateScale(320),
        height: verticalScale(88),
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        borderTopWidth: 5,
        borderTopColor: '#99CC33',
        marginTop: moderateScale(10),
        flexDirection: 'row'
    },
    undo: {
        width: scale(64),
        height: scale(24),
        borderRadius: scale(16),
        borderWidth: 1,
        borderColor: '#666666',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(10),
        right: moderateScale(20)
    },
    text6: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        color: '#666666'
    },
    container4: {
        width: moderateScale(360),
        height: verticalScale(28),
        // borderWidth: 1,
        // borderColor: 'red',
    },
    line3: {
        width: moderateScale(72),
        height: verticalScale(2),
        borderRadius: moderateScale(10),
        backgroundColor: '#a8a8a8',
        alignSelf: 'center',
        marginTop: moderateScale(25)
    }
})