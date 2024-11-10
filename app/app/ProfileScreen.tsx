// app/app/ProfileScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Profile Screen</Text>
    <Text style={styles.content}>Manage your profile here.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fafad2' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  content: { fontSize: 16, color: '#333' },
});

export default ProfileScreen;
