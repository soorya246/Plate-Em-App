// app/app/J2MenuScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const J2MenuScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>J2 Menu Screen</Text>
    <Text style={styles.content}>Explore the J2 Menu!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffe4e1' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  content: { fontSize: 16, color: '#333' },
});

export default J2MenuScreen;
