import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
     { /*<Text style={styles.header}>Home: Choose Your Meal</Text>*/}

      {/* Meal Options */}
      <TouchableOpacity
      style={styles.mealContainer}
      onPress={() => navigation.navigate('BreakfastScreen')} // Navigate to BreakfastScreen
    >
      <ImageBackground
        source={require('../assets/images/breakfast.png')} // Replace with the actual image path
        style={styles.imageBackground}
        imageStyle={styles.imageBorderRadius}
      >
        <Text style={styles.mealText}>Breakfast</Text>
      </ImageBackground>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.mealContainer}
      onPress={() => navigation.navigate('LunchScreen')} // Navigate to BreakfastScreen
    >
        <ImageBackground
          source={require('../assets/images/lunch.png')} // Replace with actual image paths
          style={styles.imageBackground}
          imageStyle={styles.imageBorderRadius}
        >
          <Text style={styles.mealText}>Lunch</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.mealContainer}
      onPress={() => navigation.navigate('DinnerScreen')} // Navigate to BreakfastScreen
    >
        <ImageBackground
          source={require('../assets/images/dinner.png')} // Replace with actual image paths
          style={styles.imageBackground}
          imageStyle={styles.imageBorderRadius}
        >
          <Text style={styles.mealText}>Dinner</Text>
        </ImageBackground>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    color: '#7BB86F',
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  mealContainer: {
    height: 170,
    marginBottom: 30,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#F0F9F4', // Light greenish background
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
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
    color: '#7BB86F',
    fontSize: 24,
    fontWeight: '700',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // White translucent background
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#F0F9F4', // Light greenish background
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 24,
    color: '#7BB86F',
  },
  navText: {
    fontSize: 12,
    color: '#7BB86F',
    marginTop: 4,
  },
});
