import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ConfirmationPage = () => {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate('HomeScreen'); // Replace 'Home' with your target screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Congratulations!</Text>
      <Text style={styles.subtitleText}>
        Your account has been created. {"\n"}Enjoy our service!
      </Text>

      <View style={styles.imagePlaceholder}>
        {/* Add an image component here if needed */}
      </View>

      <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#83C61A',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 16,
    color: '#6B6B6B',
    textAlign: 'center',
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  doneButton: {
    backgroundColor: '#83C61A',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    maxWidth: 300,
  },
  doneButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ConfirmationPage;
