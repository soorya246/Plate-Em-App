import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from '@/components/ProgressBar';

const GetDietaryRestrictions = ({ currentStep, setCurrentStep }) => {
  const navigation = useNavigation();
  const totalSteps = 8;
  const [selectedRestrictions, setSelectedRestrictions] = useState([]);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    navigation.navigate('GetWorkoutFrequency');
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
    navigation.goBack();
  };

  const toggleRestriction = (restriction) => {
    if (selectedRestrictions.includes(restriction)) {
      setSelectedRestrictions(selectedRestrictions.filter((item) => item !== restriction));
    } else {
      setSelectedRestrictions([...selectedRestrictions, restriction]);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>{'<'} Back</Text>
      </TouchableOpacity>

      <Text style={styles.headerText}>Welcome</Text>
      <ProgressBar step={currentStep} totalSteps={totalSteps} />

      <Text style={styles.titleText}>Select Any Dietary Restrictions:</Text>
      <Text style={styles.subtitleText}>
        This will be used to promote foods best catered to you.
      </Text>

      <View style={styles.optionsContainer}>
        {['Vegetarian', 'Vegan', 'Gluten-Free', 'No Pork', 'No Beef', 'Other (customize)'].map((restriction) => (
          <TouchableOpacity
            key={restriction}
            style={[
              styles.optionButton,
              selectedRestrictions.includes(restriction) ? styles.optionButtonSelected : {},
            ]}
            onPress={() => toggleRestriction(restriction)}
          >
            <Text style={styles.optionButtonText}>{restriction}</Text>
          </TouchableOpacity>
        ))}
      </View>

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
      marginBottom: 5, // Reduced margin to reduce space
      marginTop: 10,
    },
    subtitleText: {
      fontSize: 14,
      textAlign: 'center',
      color: '#6B6B6B',
      marginBottom: 10, // Reduced margin for less spacing
    },
    optionsContainer: {
      flex: 1,
      width: '100%',
      justifyContent: 'flex-start', // Align buttons closer to the title
      marginTop: 10, // Added to create a closer alignment
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
  

export default GetDietaryRestrictions;
