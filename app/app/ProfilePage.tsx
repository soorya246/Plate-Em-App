import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfilePage({ navigation }) {
    // User details
    const user = {
        name: 'Sarah Garcia',
        age: 20,
        sex: 'Female',
        weight: '80kg',
        height: '5ft',
        healthGoal: 'Weight Loss',
        dietaryRestrictions: ['Vegetarian', 'No Beef'],
        workoutFrequency: 'Once a Week',
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#fff" />
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Profile</Text>

            {/* User Details */}
            <View style={styles.infoContainer}>
                <Text style={styles.infoTitle}>Name:</Text>
                <Text style={styles.infoText}>{user.name}</Text>

                <Text style={styles.infoTitle}>Age:</Text>
                <Text style={styles.infoText}>{user.age}</Text>

                <Text style={styles.infoTitle}>Sex:</Text>
                <Text style={styles.infoText}>{user.sex}</Text>

                <Text style={styles.infoTitle}>Weight:</Text>
                <Text style={styles.infoText}>{user.weight}</Text>

                <Text style={styles.infoTitle}>Height:</Text>
                <Text style={styles.infoText}>{user.height}</Text>

                <Text style={styles.infoTitle}>Health Goal:</Text>
                <Text style={styles.infoText}>{user.healthGoal}</Text>

                <Text style={styles.infoTitle}>Dietary Restrictions:</Text>
                <Text style={styles.infoText}>{user.dietaryRestrictions.join(', ')}</Text>

                <Text style={styles.infoTitle}>Workout Frequency:</Text>
                <Text style={styles.infoText}>{user.workoutFrequency}</Text>
            </View>

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
        backgroundColor: '#f0f0f0',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#4caf50', // Green background for the back button
    },
    backButtonText: {
        fontSize: 16,
        marginLeft: 5,
        color: '#fff', // White text for contrast
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        alignSelf: 'center',
        color: '#f78a1d', // Orange color for the title
    },
    infoContainer: {
        backgroundColor: '#fff',
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        marginBottom: 100, // Adjust to make space for the bottom navigation
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#4caf50', // Green text for the labels
    },
    infoText: {
        fontSize: 16,
        marginBottom: 10,
        color: '#555', // Neutral color for the values
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 70,
        backgroundColor: '#F0F0F0',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        width: '100%',
        position: 'absolute',
        bottom: 0,
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
