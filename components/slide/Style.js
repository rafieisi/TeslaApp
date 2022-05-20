import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    image: {
      height:Dimensions.get('window').height,
      width:"100%"
    },
    buttonContainer:{
        top:330
    },
    titleContainer: {
      height:50,
      width:"100%",
      alignItems:"center",
      marginTop:100
    },
    title: {
      fontSize:38
    },
    subtitle: {
      color:"grey"
    }
  });

export default styles;