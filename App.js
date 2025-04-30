import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import FitnessWorld from './FitnessWorld';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Add StatusBar for notification bar handling */}
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <FitnessWorld />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Ensure background matches the StatusBar
  },
});
