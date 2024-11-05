// OnboardingScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

type OnboardingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;

export default function OnboardingScreen() {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [weight, setWeight] = useState('');
  const [heightFeet, setHeightFeet] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const [activityLevel, setActivityLevel] = useState('Select Activity Level');
  const [weightGoal, setWeightGoal] = useState('');
  const [isActivityModalVisible, setIsActivityModalVisible] = useState(false);

  const handleFinish = () => {
    const userProfile = { firstName, lastName, weight, height: `${heightFeet}' ${heightInches}"`, activityLevel, weightGoal };
    console.log('User Profile:', userProfile);
    navigation.navigate('HomeScreen');
  };

  const activityOptions = ['Light', 'Moderate', 'Active'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's set up your profile</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (lbs)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      {/* Height Inputs */}
      <View style={styles.heightContainer}>
        <TextInput
          style={[styles.input, styles.heightInput]}
          placeholder="Feet"
          keyboardType="numeric"
          value={heightFeet}
          onChangeText={setHeightFeet}
        />
        <TextInput
          style={[styles.input, styles.heightInput]}
          placeholder="Inches"
          keyboardType="numeric"
          value={heightInches}
          onChangeText={setHeightInches}
        />
      </View>

      {/* Custom Activity Level Dropdown */}
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setIsActivityModalVisible(true)}
      >
        <Text style={styles.dropdownText}>{activityLevel}</Text>
      </TouchableOpacity>

      <Modal
        visible={isActivityModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setIsActivityModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Activity Level</Text>
            <FlatList
              data={activityOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalOption}
                  onPress={() => {
                    setActivityLevel(item);
                    setIsActivityModalVisible(false);
                  }}
                >
                  <Text style={styles.modalOptionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      <TextInput
        style={styles.input}
        placeholder="Weight Goal (lbs)"
        keyboardType="numeric"
        value={weightGoal}
        onChangeText={setWeightGoal}
      />

      <TouchableOpacity style={styles.nextButton} onPress={handleFinish}>
        <Text style={styles.nextButtonText}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#8DC63F',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    fontSize: 16,
    marginVertical: 10,
  },
  heightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  heightInput: {
    width: '48%',
  },
  dropdown: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    marginVertical: 10,
    justifyContent: 'center',
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  nextButton: {
    backgroundColor: '#F2765A',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginVertical: 15,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  modalOption: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalOptionText: {
    fontSize: 18,
    color: '#333',
  },
});
