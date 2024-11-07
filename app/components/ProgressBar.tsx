import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ step, totalSteps }) => {
  return (
    <View style={styles.progressBarContainer}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.progressStep,
            { backgroundColor: index < step ? '#81C784' : '#E0E0E0' }
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    flexDirection: 'row',
    height: 4,
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  progressStep: {
    flex: 1,
    height: '100%',
    marginHorizontal: 2,
  },
});

export default ProgressBar;
