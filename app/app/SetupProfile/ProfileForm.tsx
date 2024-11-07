import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ProgressBar from '../../components/ProgressBar';
import { useNavigation } from '@react-navigation/native';

const ProfileForm = ({ currentStep, setCurrentStep }) => {
  const navigation = useNavigation();
  const totalSteps = 4;

  const [form, setForm] = useState({
    preferredFirstName: '',
    preferredLastName: '',
  });

  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    navigation.navigate('AgeSelector');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <ProgressBar step={currentStep} totalSteps={totalSteps} />
      <View style={styles.spacing} />
      <Text style={styles.title}>What can we call you?</Text> 
      <ScrollView contentContainerStyle={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Preferred First Name"
          value={form.preferredFirstName}
          onChangeText={(text) => handleInputChange('preferredFirstName', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Preferred Last Name"
          value={form.preferredLastName}
          onChangeText={(text) => handleInputChange('preferredLastName', text)}
        />
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <Text style={styles.skipText}>Skip for now</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
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
  spacing: {
    height: 15,
  },
  formContainer: {
    flexGrow: 1,
  },
  input: {
    backgroundColor: '#F4F4F4',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
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

export default ProfileForm;
