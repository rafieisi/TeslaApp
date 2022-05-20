import React from 'react'
import { Text, View, ImageBackground, FlatList, Dimensions} from 'react-native';
import carData from './car.js';
import Slide from '../slide/Slide.js';
import Styles from './Style.js'

export default function List() {
  return (
    <View style={Styles.container}>
        <FlatList
            data={carData}
            renderItem={({item})=><Slide {...item}/>}
            snapToAlignment="start"
            decelerationRate={"fast"}
            snapToInterval={Dimensions.get("window").height}
        />
    </View>
  )
}
