import React from 'react'
import buttonStyles from './Style'
import { Text, Pressable } from 'react-native';

export default function Button({type, text}) {

const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
  const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

  return (
    <Pressable onPress={()=>console.warn(text)} style={[buttonStyles.button,{backgroundColor:backgroundColor}]}>
        <Text style={[buttonStyles.buttonText,{color:textColor}]}>{text}</Text>
    </Pressable>
  )
}
