// app/app/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Home Screen</Text>
    <Text style={styles.content}>Welcome to the Home Screen!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f8ff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  content: { fontSize: 16, color: '#333' },
});

export default HomeScreen;
