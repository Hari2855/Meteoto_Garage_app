import { View, Text, StyleSheet, Pressable, Image, Animated, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Entypo from 'react-native-vector-icons/Entypo'
import Successmodel2 from './Successmodel2'
import Button from '../Component/Button'
import Header from '../Component/Header'

const Ingrage = ({ navigation }) => {
    const [ani1, setani1] = useState(0)
    const [ani2, setani2] = useState(0)
    const [Modelvisible, setModelvisible] = useState(false)
    

    const toggmodel = () => {
        setModelvisible(!Modelvisible)
    }

    useEffect(() => {
        if (Modelvisible) {
            const timer = setTimeout(() => {
                setModelvisible(false)
                setani1(0)
            }, 3000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [Modelvisible]);



    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Header title={'IN GARAGE'} onPress={() => navigation.navigate('Booking')} marginLeft={'26%'} />

            {ani1 == 0 ? <View>
                <Pressable onPress={() => setani1(1)}>
                    <Animated.View style={[styles.container1]}>
                        <View style={styles.container2}>
                            <Text style={[styles.text1, { fontWeight: '600', color: '#333333', marginLeft: moderateScale(10) }]}>General Service</Text>
                            <Text style={[styles.text1, { fontWeight: '400', color: '#666666', marginLeft: '36%' }]}>Status: <Text style={{ color: '#33CCCC', fontWeight: '600' }}>In Garage</Text></Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: moderateScale(10) }}>
                            <View style={styles.container3}>
                                <Text style={[styles.text1, { fontWeight: '600', color: '#666666' }]}>Car Model: <Text style={{ fontWeight: '400', color: '#333333' }}>Hyundayi i10</Text></Text>

                                <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginTop: moderateScale(3) }]}>Service Date: <Text style={{ fontWeight: '400', color: '#333333' }}>28/09/2023</Text></Text>

                                <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginTop: moderateScale(3) }]}>Service Time: <Text style={{ fontWeight: '400', color: '#333333' }}>06:00PM</Text></Text>
                            </View>

                            <Pressable style={styles.imgc} onPress={() => setani1(1)}>
                                <Entypo name='chevron-small-down' size={25} color={'#999999'} />
                            </Pressable>
                        </View>
                    </Animated.View>
                </Pressable>

            </View> :

                <Pressable onPress={() => setani1(0)}>
                    <Animated.View style={[styles.container1, { height: verticalScale(176) }]}>
                        <View style={styles.container2}>
                            <Text style={[styles.text1, { fontWeight: '600', color: '#333333', marginLeft: moderateScale(10) }]}>General Service</Text>
                            <Text style={[styles.text1, { fontWeight: '400', color: '#666666', marginLeft: '36%' }]}>Status: <Text style={{ color: '#33CCCC', fontWeight: '600' }}>In Garage</Text></Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: moderateScale(10) }}>
                            <View style={styles.container3}>
                                <Text style={[styles.text1, { fontWeight: '600', color: '#666666' }]}>Car Model: <Text style={{ fontWeight: '400', color: '#333333' }}>Hyundayi i10</Text></Text>

                                <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginTop: moderateScale(3) }]}>Service Date: <Text style={{ fontWeight: '400', color: '#333333' }}>28/09/2023</Text></Text>

                                <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginTop: moderateScale(3) }]}>Service Time: <Text style={{ fontWeight: '400', color: '#333333' }}>06:00PM</Text></Text>
                            </View>

                            <Pressable style={styles.imgc} onPress={() => setani1(0)}>
                                <Entypo name='chevron-small-up' size={25} color={'#999999'} />
                            </Pressable>
                        </View>

                        <View style={styles.container4}></View>

                        {/* <Pressable style={styles.button} onPress={toggmodel}>
                            <Text style={styles.text1}>START SERVICING</Text>
                            <Successmodel2 isVisible={Modelvisible} onOff={toggmodel}/>
                        </Pressable> */}

                        <View style={{ marginTop: '3%' }}>
                            <Button title={'START SERVICING'} bgColor={'#33CCCC'} onPress={toggmodel}/>
                        </View>
                        <Successmodel2 isVisible={Modelvisible} onOff={toggmodel} />
                    </Animated.View>
                </Pressable>}

            {ani2 == 0 ? <View>
                <Pressable onPress={() => setani2(1)}>
                    <Animated.View style={[styles.container1]}>
                        <View style={styles.container2}>
                            <Text style={[styles.text1, { fontWeight: '600', color: '#333333', marginLeft: moderateScale(10) }]}>General Service</Text>
                            <Text style={[styles.text1, { fontWeight: '400', color: '#666666', marginLeft: '36%' }]}>Status: <Text style={{ color: '#33CCCC', fontWeight: '600' }}>In Garage</Text></Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: moderateScale(10) }}>
                            <View style={styles.container3}>
                                <Text style={[styles.text1, { fontWeight: '600', color: '#666666' }]}>Car Model: <Text style={{ fontWeight: '400', color: '#333333' }}>Hyundayi i10</Text></Text>

                                <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginTop: moderateScale(3) }]}>Service Date: <Text style={{ fontWeight: '400', color: '#333333' }}>28/09/2023</Text></Text>

                                <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginTop: moderateScale(3) }]}>Service Time: <Text style={{ fontWeight: '400', color: '#333333' }}>06:00PM</Text></Text>
                            </View>

                            <Pressable style={styles.imgc} onPress={() => setani2(1)}>
                                <Entypo name='chevron-small-down' size={25} color={'#999999'} />
                            </Pressable>
                        </View>
                    </Animated.View>
                </Pressable>

            </View> :

                <Pressable onPress={() => setani2(0)}>
                    <Animated.View style={[styles.container1, { height: verticalScale(176) }]}>
                        <View style={styles.container2}>
                            <Text style={[styles.text1, { fontWeight: '600', color: '#333333', marginLeft: moderateScale(10) }]}>General Service</Text>
                            <Text style={[styles.text1, { fontWeight: '400', color: '#666666', marginLeft: '36%' }]}>Status: <Text style={{ color: '#33CCCC', fontWeight: '600' }}>In Garage</Text></Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: moderateScale(10) }}>
                            <View style={styles.container3}>
                                <Text style={[styles.text1, { fontWeight: '600', color: '#666666' }]}>Car Model: <Text style={{ fontWeight: '400', color: '#333333' }}>Hyundayi i10</Text></Text>

                                <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginTop: moderateScale(3) }]}>Service Date: <Text style={{ fontWeight: '400', color: '#333333' }}>28/09/2023</Text></Text>

                                <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginTop: moderateScale(3) }]}>Service Time: <Text style={{ fontWeight: '400', color: '#333333' }}>06:00PM</Text></Text>
                            </View>

                            <Pressable style={styles.imgc} onPress={() => setani2(0)}>
                                <Entypo name='chevron-small-up' size={25} color={'#999999'} />
                            </Pressable>
                        </View>

                        <View style={styles.container4}></View>

                        <View style={{ marginTop: '3%' }}>
                            <Button title={'START SERVICING'} bgColor={'#33CCCC'} onPress={toggmodel} />
                        </View>
                        <Successmodel2 isVisible={Modelvisible} onOff={toggmodel} />
                    </Animated.View>
                </Pressable>}
        </ScrollView>
    )
}

export default Ingrage

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
    img: {
        width: scale(24),
        height: scale(24)
    },
    text1: {
        fontSize: moderateScale(12),
        fontWeight: '700',
        color: '#ffffff',
        fontFamily: 'Nunito'
    },
    container1: {
        width: moderateScale(320),
        height: verticalScale(108),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        borderBottomLeftRadius: moderateScale(5),
        borderBottomRightRadius: moderateScale(5),
        borderTopWidth: moderateScale(5),
        borderTopColor: '#33CCCC',
        marginTop: moderateScale(10),
        overflow: 'hidden'
    },
    container2: {
        width: moderateScale(320),
        height: verticalScale(28),
        borderBottomWidth: 0.5,
        borderColor: '#aaaaaa',
        alignItems: 'center',
        flexDirection: 'row'
    },
    container3: {
        width: moderateScale(152),
        height: verticalScale(56),
        marginLeft: moderateScale(10)
    },
    imgc: {
        width: scale(40),
        height: scale(40),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '33%'
    },
    container4: {
        width: moderateScale(320),
        height: verticalScale(1),
        borderTopWidth: 1,
        borderTopColor: '#999999',
        borderStyle: 'dashed',
        marginTop: moderateScale(15)
    },
    button: {
        width: moderateScale(288),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: moderateScale(15)
    }
})