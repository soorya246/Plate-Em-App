import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from '@/components/ProgressBar';

const AgeSelector = ({ currentStep, setCurrentStep }) => {
  const navigation = useNavigation();
  const [selectedAge, setSelectedAge] = useState(null);
  const totalSteps = 4;

  const ageList = Array.from({ length: 35 }, (_, i) => i + 16);

  const handleNext = () => {
    if (selectedAge !== null) {
      setCurrentStep(currentStep + 1);
      console.log('Selected age:', selectedAge);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>{'<'} Back</Text>
      </TouchableOpacity>

      <Text style={styles.welcomeText}>Welcome</Text>
      <ProgressBar step={currentStep} totalSteps={totalSteps} />

      <Text style={styles.title}>How old are you?</Text>

      <FlatList
        data={ageList}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedAge(item)} style={styles.ageItem}>
            <Text
              style={[
                styles.ageText,
                selectedAge === item ? styles.selectedAgeText : {},
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ageListContainer}
      />

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      <Text style={styles.skipText}>Skip for now</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  backButtonText: {
    color: '#83C61A',
    fontSize: 16,
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#83C61A',
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#83C61A',
    textAlign: 'center',
    marginBottom: 20,
  },
  ageListContainer: {
    alignItems: 'center',
    width: '100%',
  },
  ageItem: {
    width: Dimensions.get('window').width - 40,
    alignItems: 'center',
    marginVertical: 10,
  },
  ageText: {
    fontSize: 96,
    color: '#6B6B6B',
  },
  selectedAgeText: {
    fontSize: 96,
    color: '#000000',
    fontWeight: 'bold',
    backgroundColor: '#A3C48E',
    width: '100%',
    textAlign: 'center',
    borderRadius: 10,
  },
  nextButton: {
    backgroundColor: '#FF6F61',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    width: '100%', // Ensure the button matches the width of the progress bar
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  skipText: {
    color: '#FF6F61',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default AgeSelector;
