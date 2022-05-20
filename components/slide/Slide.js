import React from 'react';
import { Text, View, ImageBackground} from 'react-native';
import styles from './Style.js';
import Button from '../button/Button.js';

export default function Slide(props) {
  return (
    <ImageBackground style={styles.image} source={props.image}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>
        <View style={styles.buttonContainer}>
            <Button type={"primary"} text={"Custom Order"}/>
            <Button type={"secondary"} text={"Existing Inventory"}/>
        </View>
    </ImageBackground>
  )
}
