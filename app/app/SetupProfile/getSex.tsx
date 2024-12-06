import React, { useState } from 'react'; // Added useState here
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from '@/components/ProgressBar';

const GetSex = ({ currentStep, setCurrentStep }) => {
  const navigation = useNavigation();
  const totalSteps = 8;
  const [selectedSex, setSelectedSex] = useState(''); // useState added

  const handleNext = () => {
    if (selectedSex) {
      setCurrentStep(currentStep + 1);
      navigation.navigate('GetWeight');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
    navigation.goBack();
  };

  const selectSex = (sex) => {
    setSelectedSex(sex);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>{'<'} Back</Text>
      </TouchableOpacity>

      <Text style={styles.headerText}>Welcome</Text>
      <ProgressBar step={currentStep} totalSteps={totalSteps} />

      <Text style={styles.titleText}>What is your sex?</Text>
      <Text style={styles.subtitleText}>
        So we can build a better personalized plan for your body.
      </Text>

      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedSex === 'Male' ? styles.optionButtonSelected : {},
          ]}
          onPress={() => selectSex('Male')}
        >
          <Text style={styles.optionButtonText}>♂ Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedSex === 'Female' ? styles.optionButtonSelected : {},
          ]}
          onPress={() => selectSex('Female')}
        >
          <Text style={styles.optionButtonText}>♀ Female</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedSex === 'Prefer not to say' ? styles.optionButtonSelected : {},
          ]}
          onPress={() => selectSex('Prefer not to say')}
        >
          <Text style={styles.optionButtonText}>✕ Prefer not to say</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext} disabled={!selectedSex}>
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
    marginVertical: 15,
  },
  subtitleText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#6B6B6B',
    marginBottom: 20,
  },
  optionsContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  optionButton: {
    width: '48%',
    height: 100,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
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

export default GetSex;
