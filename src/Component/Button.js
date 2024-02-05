import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Button = ({title, onPress, bgc}) => {
  return (
    <Pressable onPress={onPress} style={{width: '90%', backgroundColor: '#33CCCC', alignSelf: 'center', borderRadius: 5}}>
          <Text style={{
              paddingVertical: 13, fontSize: 15,
              fontWeight: '700',
              color: '#ffffff',
              fontFamily: 'Nunito', textAlign: 'center'}}>{title}</Text>
    </Pressable>
  )
}

export default Button