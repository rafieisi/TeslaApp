import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Image from './assets/images/ModelX.jpeg'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <ImageBackground style={styles.image} source={Image}>
          <Text style={styles.title}>Model 3</Text>
          <Text style={styles.subtitle}>Starting at $39,999.</Text>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height:"100%",
    width:"100%"
  },
  titleContainer: {
    height:"100%",
    width:"100%",
    alignItems:"center",
    marginTop:200
  },
  title: {
    fontSize:38
  },
  subtitle: {
    color:"grey"
  }
});
