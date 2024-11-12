// app/app/AIChatScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AIChatScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>AI Chat Screen</Text>
    <Text style={styles.content}>Start chatting with AI!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5dc' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  content: { fontSize: 16, color: '#333' },
});

export default AIChatScreen;
