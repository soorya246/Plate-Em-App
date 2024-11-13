import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BreakfastScreen() {

    const navigation = useNavigation(); // Access navigation
  return (
    <View style={styles.container}>
    {/* Header */}
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.headerText}>Breakfast</Text>
    </View>

      {/* List of Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} />
        <TouchableOpacity style={styles.button} />
        <TouchableOpacity style={styles.button} />
        <TouchableOpacity style={styles.button} />
      </View>

      {/* Circular Image */}
      <View style={styles.circleImageContainer}>
        <Image
          source={require('../assets/images/Plate.png')} // Replace with your image path
          style={styles.circleImage}
        />
      </View>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3E39',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A5D53',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
  },
  button: {
    backgroundColor: '#D1D5D8',
    height: 50,
    borderRadius: 10,
    marginVertical: 8,
  },
  circleImageContainer: {
    width: 100,
    height: 200,
    backgroundColor: '#D1D5D8',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  circleImage: {
    width: 200,
    height: 200,
    borderRadius: 40,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2C3E39',
    width: '100%',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    color: '#D4BBA7',
    fontSize: 12,
    marginTop: 5,
  },
});
