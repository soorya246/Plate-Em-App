// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handlePress = () => {
    // This is an example; add your own navigation or action
    alert('Button Pressed!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the Home Screen</Text>
      <Text style={styles.subtitle}>This is a basic home screen in React Native.</Text>
      
      <Button
        title="Press Me"
        onPress={handlePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
});

export default HomeScreen;