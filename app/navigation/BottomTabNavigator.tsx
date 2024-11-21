// navigation/BottomTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../app/HomeScreen';
import J2MenuScreen from '../app/J2MenuScreen';
import AIChatScreen from '../app/AIChatScreen';
import ProfileScreen from '../app/ProfileScreen';
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
      <Tab.Screen name="J2 Menu" component={J2MenuScreen} 
      options={{
        headerShown: false,
      }}/>
      <Tab.Screen name="AI Chat" component={AIChatScreen} 
      options={{
        headerShown: false,
      }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} 
      options={{
        headerShown: false,
      }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;