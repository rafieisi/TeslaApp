import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import List from './components/list/List';



export default function App() {
  return (
    <View style={styles.container}>
      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:'100%'
  }
});
