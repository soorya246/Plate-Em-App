import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const GetName = ({ onNext }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>What can we call you?</Text>
      <TextInput style={styles.input} placeholder="Preferred First Name" />
      <TextInput style={styles.input} placeholder="Preferred Last Name" />
      <TextInput style={styles.input} placeholder="Preferred Name" />
      <Button title="Next" onPress={onNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5DEB3',
    flex: 1,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});

export default GetName;
