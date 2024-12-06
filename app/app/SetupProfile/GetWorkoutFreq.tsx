import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from '@/components/ProgressBar';

const GetWorkoutFrequency = ({ currentStep, setCurrentStep }) => {
  const navigation = useNavigation();
  const totalSteps = 8;
  const [selectedFrequency, setSelectedFrequency] = useState('');

  const handleNext = () => {
    if (selectedFrequency) {
      setCurrentStep(currentStep + 1);
    }
    navigation.navigate('ConfirmationPage');
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
    navigation.goBack();
  };

  const selectFrequency = (frequency) => {
    setSelectedFrequency(frequency);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>{'<'} Back</Text>
      </TouchableOpacity>

      <Text style={styles.headerText}>Welcome</Text>
      <ProgressBar step={currentStep} totalSteps={totalSteps} />

      <Text style={styles.titleText}>How often do you workout?</Text>
      <Text style={styles.subtitleText}>
        This is used for getting personalized results & plans for you.
      </Text>

      <View style={styles.optionsContainer}>
        {[
          'Every Day',
          '4-6 times per week',
          '2-3 times per week',
          'Once a week',
          'Rarely',
          'Never',
        ].map((frequency) => (
          <TouchableOpacity
            key={frequency}
            style={[
              styles.optionButton,
              selectedFrequency === frequency ? styles.optionButtonSelected : {},
            ]}
            onPress={() => selectFrequency(frequency)}
          >
            <Text style={styles.optionButtonText}>{frequency}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.nextButton]}
          onPress={handleNext}
          
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <Text style={styles.skipText}>Skip for now</Text>
      </View>
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
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#83C61A',
    textAlign: 'center',
    marginBottom: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#83C61A',
    marginBottom: 5,
  },
  subtitleText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#6B6B6B',
    marginBottom: 10,
  },
  optionsContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
  },
  optionButton: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
  },
  optionButtonSelected: {
    backgroundColor: '#A3C48E',
  },
  optionButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#FF6F61',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  nextButtonDisabled: {
    backgroundColor: '#FFABAB', // Lighter disabled color
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  skipText: {
    color: '#FF6F61',
    fontSize: 12,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default GetWorkoutFrequency;
