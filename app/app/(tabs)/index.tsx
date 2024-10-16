import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      {/* App Title */}
      <Text style={styles.title}>kcal</Text>

      {/* Illustration */}
      {/* <Image
        source={require('@/assets/illustration.png')} // Replace with the path to your illustration image
        style={styles.image}
      /> */}

      {/* Heading */}
      <Text style={styles.heading}>Eat Healthy</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Maintaining good health should be the primary focus of everyone.
      </Text>

      {/* Page Indicator */}
      <View style={styles.indicatorContainer}>
        <View style={[styles.indicator, styles.activeIndicator]} />
        <View style={styles.indicator} />
      </View>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      {/* Login Text */}
      <Text style={styles.loginText}>
        Already Have An Account? <Text style={styles.loginLink}>Log In</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#7BB86F',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888888',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: '#FFB199',
  },
  button: {
    backgroundColor: '#FFB199',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  loginText: {
    fontSize: 14,
    color: '#888888',
  },
  loginLink: {
    color: '#7BB86F',
    fontWeight: '600',
  },
});
