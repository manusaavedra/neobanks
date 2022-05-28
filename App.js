import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Dashboard from './Dashboard';

export default function App() {
  return (
    <SafeAreaProvider>
      <Dashboard />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
