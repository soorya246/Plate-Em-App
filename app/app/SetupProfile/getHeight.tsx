import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from '@/components/ProgressBar';
import Slider from '@react-native-community/slider';

const GetHeight = ({ currentStep, setCurrentStep }) => {
  const navigation = useNavigation();
  const totalSteps = 8;
  const [height, setHeight] = useState(170);
  const [unit, setUnit] = useState('cm');

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    navigation.navigate('GetHealthGoal');
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
    navigation.goBack();
  };

  const toggleUnit = (selectedUnit) => {
    setUnit(selectedUnit);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>{'<'} Back</Text>
      </TouchableOpacity>

      <Text style={styles.headerText}>Welcome</Text>
      <ProgressBar step={currentStep} totalSteps={totalSteps} />

      <Text style={styles.titleText}>How tall are you?</Text>
      <Text style={styles.subtitleText}>
        This is used to set up recommendations just for you.
      </Text>

      <View style={styles.unitSelector}>
        <TouchableOpacity
          style={[styles.unitButton, unit === 'cm' ? styles.unitButtonSelected : {}]}
          onPress={() => toggleUnit('cm')}
        >
          <Text style={[styles.unitButtonText, unit === 'cm' ? styles.unitButtonTextSelected : {}]}>CM</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.unitButton, unit === 'ft' ? styles.unitButtonSelected : {}]}
          onPress={() => toggleUnit('ft')}
        >
          <Text style={[styles.unitButtonText, unit === 'ft' ? styles.unitButtonTextSelected : {}]}>FT</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.weightText}>{height} {unit}</Text>

      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={250}
        step={1}
        value={height}
        onValueChange={setHeight}
        minimumTrackTintColor="#83C61A"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#83C61A"
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
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
    backgroundColor: '#FFFFFF', // Match background color
    padding: 20,
    alignItems: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  backButtonText: {
    color: '#83C61A', // Match color
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#83C61A', // Match color
    textAlign: 'center',
    marginBottom: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#83C61A', // Match color
    marginVertical: 15,
  },
  subtitleText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#6B6B6B', // Keep consistent color
    marginBottom: 20,
  },
  unitSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  unitButton: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: '#A3C48E', // Match option button color
    borderColor: '#83C61A', // Match border color
    borderWidth: 1,
    alignItems: 'center',
  },
  unitButtonSelected: {
    backgroundColor: '#A3C48E',
  },
  unitButtonText: {
    color: '#000000', // Match option text color
    fontSize: 16,
    fontWeight: 'bold',
  },
  unitButtonTextSelected: {
    fontWeight: 'bold',
  },
  weightText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 40,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#FF6F61', // Match next button color
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF', // Keep consistent
    fontSize: 16,
    fontWeight: 'bold',
  },
  skipText: {
    color: '#FF6F61', // Match color
    fontSize: 12,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default GetHeight;
