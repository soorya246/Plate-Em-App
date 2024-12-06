// navigation/BottomTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../app/HomeScreen';
import J2MenuPage from '@/app/J2MenuPage';
import AIChatBotScreen from '@/app/AIChatBotScreen';
import ProfilePage from '@/app/ProfilePage';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'J2 Menu') iconName = 'list-outline';
          else if (route.name === 'AI Chat') iconName = 'chatbubble-outline';
          else if (route.name === 'Profile') iconName = 'person-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#7BB86F',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{
        headerShown: false,
      }}/>
      <Tab.Screen name="J2 Menu" component={J2MenuPage} 
      options={{
        headerShown: false,
      }}/>
      <Tab.Screen name="AI Chat" component={AIChatBotScreen} 
      options={{
        headerShown: false,
      }}/>
      <Tab.Screen name="Profile" component={ProfilePage} 
      options={{
        headerShown: false,
      }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;