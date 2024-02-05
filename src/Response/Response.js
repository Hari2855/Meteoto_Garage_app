import { View, Text, StyleSheet, Pressable, Image, TextInput, ScrollView, Switch } from 'react-native'
import React, { useState, useEffect } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import { SelectList } from 'react-native-dropdown-select-list'
import { Checkbox } from 'react-native-paper';
import Responsemodel from './Responsemodel';

const Response = ({ navigation }) => {
    const [selected, setSelected] = useState([]);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const [isModalVisible, setModalVisible] = useState(false)

    const toggleModal = () => {
        setModalVisible(!isModalVisible)
    }

    const data = [
        { key: '1', value: 'Global X', },
        { key: '2', value: 'Global Y' },
        { key: '3', value: 'Axor A' },
    ]

    useEffect(() => {
        if (isModalVisible) {
            const timer = setTimeout(() => {
                setModalVisible(false)
                navigation.navigate('Dashboard')
            }, 3000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [isModalVisible]);



    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Pressable style={{ width: scale(48), height: scale(48), alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate('Dashboard')}>
                        <Image source={require('../Assets/chevron-left.png')} style={styles.img} />
                    </Pressable>
                </View>

                <Text style={[styles.text1, { fontFamily: 'Nunito Sans', marginTop: moderateScale(10), marginLeft: moderateScale(20) }]}>C A R  D E T A I L S</Text>
                <View style={styles.container1}>
                    <Image source={require('../Assets/Verna.png')} style={styles.img1} />
                    <View style={styles.container2}>
                        <Text style={[styles.text1, { fontFamily: 'Nunito Sans', color: '#333333' }]}>HYUNDAI VERNA</Text>
                        <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginTop: moderateScale(4) }]}>Verna SX Turbo DT</Text>
                        <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginTop: moderateScale(4) }]}>Petrol</Text>
                        <Text style={[styles.text1, { fontWeight: '600', color: '#666666', marginTop: moderateScale(4) }]}>2020</Text>
                    </View>
                </View>

                <View style={styles.line1}></View>

                <Text style={[styles.text1, { fontFamily: 'Nunito Sans', marginTop: moderateScale(20), marginLeft: moderateScale(20) }]}>S E N D  P A R T(S)  D E T A I L S  T O  U S E R</Text>
                <Text style={[styles.text1, { fontFamily: 'Nunito Sans', marginTop: moderateScale(5), marginLeft: moderateScale(20) }]}>Total part(s): 02</Text>

                <View style={styles.container3}>
                    <View style={styles.container4}>
                        <Image source={require('../Assets/Alternator.png')} style={styles.img2} />
                        <View style={{ width: moderateScale(84), height: verticalScale(36), marginLeft: moderateScale(10), flexDirection: 'column' }}>
                            <Text style={styles.text1}>Alternator</Text>
                            <Text style={[styles.text1, { fontWeight: '600' }]}>Quantity: 02</Text>
                        </View>
                    </View>

                    <View style={styles.container5}>
                        <View style={{ width: moderateScale(152), height: verticalScale(58), flexDirection: 'column' }}>
                            <Text style={styles.text1}>Part price <Text style={{ color: '#9a9a9a' }}>(per unit)</Text></Text>
                            <View style={styles.input}>
                                <Text style={[styles.text1, { color: '#333333', fontWeight: '600', alignSelf: 'center', left: moderateScale(10) }]}>₹</Text>
                                <TextInput placeholder='200' placeholderTextColor={'#999999'} style={styles.input2} />
                            </View>
                        </View>

                        <View style={{ width: moderateScale(152), height: verticalScale(58), flexDirection: 'column' }}>
                            <Text style={styles.text1}>Quantity</Text>
                            <View style={styles.input}>
                                <TextInput placeholder='0' placeholderTextColor={'#999999'} style={[styles.input2, { borderLeftWidth: 0, marginLeft: 0 }]} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.container6}>
                        <Text style={[styles.text1, { fontWeight: '600' }]}>OEM</Text>
                        <Switch
                            trackColor={{ false: 'gray', true: '#33CCCC' }}
                            thumbColor={isEnabled ? '#ffffff' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={{ marginRight: moderateScale(20) }}
                        />
                        <Text style={[styles.text1, { fontWeight: '600', right: moderateScale(20) }]}>AFTERMARKET</Text>
                    </View>

                    <View style={styles.container7}>
                        <Text style={[styles.text1, { fontFamily: 'Nunito Sans' }]}>Brand Name</Text>
                        <SelectList
                            setSelected={(val) => setSelected(val)}
                            data={data}
                            save="value"
                            boxStyles={{ width: moderateScale(320), height: verticalScale(48), borderRadius: moderateScale(8), backgroundColor: '#ffffff', marginTop: moderateScale(5), alignSelf: 'center' }}
                            dropdownStyles={{ width: moderateScale(320), borderRadius: moderateScale(8), backgroundColor: '#ffffff', alignSelf: 'center', bottom: moderateScale(5) }}
                            dropdownTextStyles={{ color: '#333333' }}
                            inputStyles={{ color: '#333333' }}
                        />
                    </View>

                    <View style={styles.container7}>
                        <Text style={[styles.text1, { fontFamily: 'Nunito Sans' }]}>Enter Part Weight <Text style={{ color: '#cccccc' }}>(in kilogram)</Text></Text>
                        <TextInput placeholder='0' style={[styles.input2, { backgroundColor: '#ffffff', width: moderateScale(320), marginLeft: 0, borderRadius: moderateScale(8) }]} />
                    </View>

                    <View style={styles.line2}></View>

                    <View style={styles.container8}>
                        <Text style={[styles.text1, { color: '#FF3F00' }]}>Not Available</Text>
                        <Checkbox
                            status={checked ? 'unchecked' : 'checked'}
                            onPress={() => setChecked(!checked)}
                            color='#33CCCC'
                            uncheckedColor='#cccccc'
                        />
                    </View>
                </View>

                <View style={[styles.container3, { marginTop: moderateScale(20) }]}>
                    <View style={styles.container4}>
                        <Image source={require('../Assets/Alternator.png')} style={styles.img2} />
                        <View style={{ width: moderateScale(84), height: verticalScale(36), marginLeft: moderateScale(10), flexDirection: 'column' }}>
                            <Text style={styles.text1}>Alternator</Text>
                            <Text style={[styles.text1, { fontWeight: '600' }]}>Quantity: 02</Text>
                        </View>
                    </View>

                    <View style={styles.container5}>
                        <View style={{ width: moderateScale(152), height: verticalScale(58), flexDirection: 'column' }}>
                            <Text style={styles.text1}>Part price <Text style={{ color: '#9a9a9a' }}>(per unit)</Text></Text>
                            <View style={styles.input}>
                                <Text style={[styles.text1, { color: '#333333', fontWeight: '600', alignSelf: 'center', left: moderateScale(10) }]}>₹</Text>
                                <TextInput placeholder='200' placeholderTextColor={'#999999'} style={styles.input2} />
                            </View>
                        </View>

                        <View style={{ width: moderateScale(152), height: verticalScale(58), flexDirection: 'column' }}>
                            <Text style={styles.text1}>Quantity</Text>
                            <View style={styles.input}>
                                <TextInput placeholder='0' placeholderTextColor={'#999999'} style={[styles.input2, { borderLeftWidth: 0, marginLeft: 0 }]} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.container6}>
                        <Text style={[styles.text1, { fontWeight: '600' }]}>OEM</Text>
                        <Switch
                            trackColor={{ false: 'gray', true: '#33CCCC' }}
                            thumbColor={isEnabled1 ? '#ffffff' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch1}
                            value={isEnabled1}
                            style={{ marginRight: moderateScale(20) }}
                        />
                        <Text style={[styles.text1, { fontWeight: '600', right: moderateScale(20) }]}>AFTERMARKET</Text>
                    </View>

                    <View style={styles.container7}>
                        <Text style={[styles.text1, { fontFamily: 'Nunito Sans' }]}>Brand Name</Text>
                        <SelectList
                            setSelected={(val) => setSelected(val)}
                            data={data}
                            save="value"
                            boxStyles={{ width: moderateScale(320), height: verticalScale(48), borderRadius: moderateScale(8), backgroundColor: '#ffffff', marginTop: moderateScale(5), alignSelf: 'center' }}
                            dropdownStyles={{ width: moderateScale(320), borderRadius: moderateScale(8), backgroundColor: '#ffffff', alignSelf: 'center', bottom: moderateScale(5) }}
                            dropdownTextStyles={{ color: '#333333' }}
                            inputStyles={{ color: '#333333' }}
                        />
                    </View>

                    <View style={styles.container7}>
                        <Text style={[styles.text1, { fontFamily: 'Nunito Sans' }]}>Enter Part Weight <Text style={{ color: '#cccccc' }}>(in kilogram)</Text></Text>
                        <TextInput placeholder='0' style={[styles.input2, { backgroundColor: '#ffffff', width: moderateScale(320), marginLeft: 0, borderRadius: moderateScale(8) }]} />
                    </View>

                    <View style={styles.line2}></View>

                    <View style={styles.container8}>
                        <Text style={[styles.text1, { color: '#FF3F00' }]}>Not Available</Text>
                        <Checkbox
                            status={checked1 ? 'unchecked' : 'checked'}
                            onPress={() => setChecked1(!checked1)}
                            color='#33CCCC'
                            uncheckedColor='#cccccc'
                        />
                    </View>
                </View>
            </ScrollView>

            <Pressable style={styles.button} onPress={toggleModal}>
                <Text style={styles.text1}>SEND DETAILS TO USER</Text>
                <Responsemodel isVisible={isModalVisible} onOff={toggleModal} navigation={navigation}/>
            </Pressable>
        </View>
    )
}

export default Response

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
        borderRadius: moderateScale(5),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        alignItems: 'center',
        flexDirection: 'row'
    },
    img1: {
        width: scale(60),
        height: scale(60),
        borderRadius: scale(30),
        borderWidth: 2,
        borderColor: '#ED6B19',
        bottom: moderateScale(10),
        marginLeft: moderateScale(16)
    },
    container2: {
        width: moderateScale(185),
        height: verticalScale(76),
        marginLeft: moderateScale(10),
        flexDirection: 'column'
    },
    line1: {
        width: '100%',
        height: verticalScale(1),
        backgroundColor: '#4D4D4D',
        marginTop: moderateScale(15)

    },
    container3: {
        width: '100%',
        height: verticalScale(524),
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: '#ffffff',
        borderBottomColor: '#ffffff',
        marginTop: moderateScale(50)
    },
    container4: {
        width: '100%',
        height: verticalScale(76),
        borderBottomWidth: 0.5,
        borderBottomColor: '#808080',
        alignItems: 'center',
        flexDirection: 'row'
    },
    img2: {
        width: scale(36),
        height: scale(36),
        borderRadius: scale(20),
        borderWidth: 1,
        borderColor: '#a3a3a3',
        marginLeft: moderateScale(20)
    },
    container5: {
        width: moderateScale(320),
        height: verticalScale(78),
        marginTop: moderateScale(20),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        width: moderateScale(152),
        height: verticalScale(48),
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        borderRadius: moderateScale(8),
        flexDirection: 'row',
        alignItems: 'center',
    },
    input2: {
        height: verticalScale(48),
        width: moderateScale(295),
        borderLeftWidth: 1,
        borderLeftColor: '#999999',
        paddingLeft: moderateScale(20),
        marginLeft: moderateScale(25)
    },
    container6: {
        width: moderateScale(189),
        height: verticalScale(32),
        marginLeft: moderateScale(20),
        marginTop: moderateScale(15),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container7: {
        width: moderateScale(320),
        height: verticalScale(84),
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginTop: moderateScale(15)
    },
    line2: {
        width: '100%',
        height: verticalScale(1),
        borderWidth: 1,
        borderColor: '#666666',
        borderStyle: 'dashed',
        marginTop: moderateScale(15)
    },
    container8: {
        width: moderateScale(130),
        height: verticalScale(40),
        marginTop: moderateScale(30),
        alignSelf: 'flex-end',
        marginRight: moderateScale(20),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        width: moderateScale(320),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        backgroundColor: '#33CCCC',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(80),
        bottom: moderateScale(30)
    }
})