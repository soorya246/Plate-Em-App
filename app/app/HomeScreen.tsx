import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Meal Options */}
      <TouchableOpacity
        style={styles.mealContainer}
        onPress={() => navigation.navigate('BreakfastScreen')}
      >
        <ImageBackground
          source={require('../assets/images/breakfast.png')}
          style={styles.imageBackground}
          imageStyle={styles.imageBorderRadius}
        >
          <Text style={styles.mealText}>Breakfast</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.mealContainer}
        onPress={() => navigation.navigate('LunchScreen')}
      >
        <ImageBackground
          source={require('../assets/images/lunch.png')}
          style={styles.imageBackground}
          imageStyle={styles.imageBorderRadius}
        >
          <Text style={styles.mealText}>Lunch</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.mealContainer}
        onPress={() => navigation.navigate('DinnerScreen')}
      >
        <ImageBackground
          source={require('../assets/images/dinner.png')}
          style={styles.imageBackground}
          imageStyle={styles.imageBorderRadius}
        >
          <Text style={styles.mealText}>Dinner</Text>
        </ImageBackground>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('HomeScreen')}>
          <Ionicons name="home" size={24} color="#F78A1D" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('J2MenuPage')}>
          <Ionicons name="menu" size={24} color="#F78A1D" />
          <Text style={styles.navText}>J2 Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('AIChatBotScreen')}>
          <Ionicons name="chatbubble" size={24} color="#F78A1D" />
          <Text style={styles.navText}>AI Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('ProfilePage')}>
          <Ionicons name="person" size={24} color="#F78A1D" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    
  },
  mealContainer: {
    height: 170,
    marginTop: 45, // Space between boxes and top
    marginHorizontal: 20, // Space from the sides
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#F0F9F4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBorderRadius: {
    borderRadius: 10,
  },
  mealText: {
    color: '#7BB86F',
    fontSize: 24,
    fontWeight: '700',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#F0F0F0',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    position: 'absolute',
    bottom: 0,
    width: '100%',
},
  navButton: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#F78A1D',
    marginTop: 4,
  },
});
