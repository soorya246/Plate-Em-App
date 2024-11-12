import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from '@/components/ProgressBar';

const GetSex = ({ currentStep, setCurrentStep }) => {
  const navigation = useNavigation();
  const totalSteps = 8;

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    navigation.navigate('GetWeight');
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
    navigation.goBack();
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
        So we can build a better personalized plan for your body
      </Text>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>♂ Male</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>♀ Female</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>✕ Prefer not to say</Text>
        </TouchableOpacity>
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
    arrow: {
      width: 15,
      height: 15,
      borderTopWidth: 2,
      borderLeftWidth: 2,
      borderColor: '#83C61A',
      transform: [{ rotate: '-45deg' }],
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
    },
    optionButton: {
      backgroundColor: '#A3C48E',
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#83C61A',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    optionText: {
      fontSize: 16,
      color: '#000000',
      fontWeight: 'bold',
    },
    nextButton: {
      backgroundColor: '#FF6F61',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      width: '100%',
    },
    nextButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
      },
      skipText: {
        color: '#FF6F61',
        fontSize: 12,
        marginTop: 10,
        textAlign: 'center', // Ensure text is centered
      },
  });
  

export default GetSex;
