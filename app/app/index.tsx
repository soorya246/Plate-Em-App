import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './welcomeScreen';
import LoginScreen from './loginScreen';
// import OnboardingScreen from './OnboardingScreen';
import login from './Login';
import ProfileForm from './SetupProfile/ProfileForm'
import AgeSelector from './SetupProfile/AgeSelector'
import GetName from './SetupProfile/GetName';
import GetSex from './SetupProfile/getSex';
import GetWeight from './SetupProfile/getWeight';


const Stack = createNativeStackNavigator();

export default function App() {
  
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="ProfileForm">
          {props => <ProfileForm {...props} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
        </Stack.Screen>
        <Stack.Screen name="AgeSelector">
          {props => <AgeSelector {...props} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
        </Stack.Screen>
        <Stack.Screen name="GetSex">
          {props => <GetSex {...props} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
        </Stack.Screen>
        <Stack.Screen name="GetWeight">
          {props => <GetWeight {...props} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
