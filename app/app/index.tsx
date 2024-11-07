import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './welcomeScreen';
import LoginScreen from './loginScreen';
import OnboardingScreen from './OnboardingScreen';
import login from './Login';
import ProfileForm from './SetupProfile/ProfileForm'
import AgeSelector from './SetupProfile/AgeSelector'
import GetName from './SetupProfile/GetName';


const Stack = createNativeStackNavigator();

const [currentStep, setCurrentStep] = useState(1);

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Onboarding" component={ProfileForm} /> 
        <Stack.Screen name="ProfileForm">
          {props => <ProfileForm {...props} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
        </Stack.Screen>
        <Stack.Screen name="AgeSelector">
          {props => <AgeSelector {...props} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
