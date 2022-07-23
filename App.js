import { StyleSheet, View } from 'react-native';
import Tabs from './src/Tabs';

export default function App() {

  return (
    <View style={styles.container}>
      <Tabs/>
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
});
