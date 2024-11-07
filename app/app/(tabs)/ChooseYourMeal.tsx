import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ChooseYourMeal() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Home: Choose Your Meal</Text>

      {/* Meal Options */}
      <TouchableOpacity style={styles.mealContainer}>
        <ImageBackground
          source={require('./assets/breakfast.jpg')} // Replace with actual image paths
          style={styles.imageBackground}
          imageStyle={styles.imageBorderRadius}
        >
          <Text style={styles.mealText}>Breakfast</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity style={styles.mealContainer}>
        <ImageBackground
          source={require('./assets/lunch.jpg')} // Replace with actual image paths
          style={styles.imageBackground}
          imageStyle={styles.imageBorderRadius}
        >
          <Text style={styles.mealText}>Lunch</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity style={styles.mealContainer}>
        <ImageBackground
          source={require('./assets/dinner.jpg')} // Replace with actual image paths
          style={styles.imageBackground}
          imageStyle={styles.imageBorderRadius}
        >
          <Text style={styles.mealText}>Dinner</Text>
        </ImageBackground>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📄</Text>
          <Text style={styles.navText}>J2 Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>💬</Text>
          <Text style={styles.navText}>AI Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D4A3E',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  mealContainer: {
    height: 150,
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBorderRadius: {
    borderRadius: 10,
  },
  mealText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#2D4A3E',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 24,
    color: '#D1A879',
  },
  navText: {
    fontSize: 12,
    color: '#D1A879',
    marginTop: 4,
  },
});
