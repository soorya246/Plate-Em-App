import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function DinnerScreen() {
    const navigation = useNavigation();
    const [selectedIcons, setSelectedIcons] = useState([]);
    const [totalCalories, setTotalCalories] = useState(0);

    const foodData = [
        { id: '1', name: 'Hamburger', calories: 250, protein: 20, icon: 'fast-food' },
        { id: '2', name: 'Ice Cream', calories: 232, protein: 5.5, icon: 'ice-cream' },
        { id: '3', name: 'Pepperoni Pizza', calories: 220, protein: 6.6, icon: 'pizza' },
    ];

    const addFoodToPlate = (food) => {
        const plateSize = 150; // Plate diameter
        const iconSize = 30; // Icon size
        const radius = (plateSize - iconSize) / 2;

        const angle = Math.random() * 2 * Math.PI;
        const x = radius * Math.cos(angle) + plateSize / 2 - iconSize / 2;
        const y = radius * Math.sin(angle) + plateSize / 2 - iconSize / 2;

        setSelectedIcons([...selectedIcons, { icon: food.icon, x, y }]);
        setTotalCalories((prev) => prev + food.calories);
    };

    const saveCalories = () => {
        alert(`Total Calories Saved: ${totalCalories}`);
    };

    const clearPlate = () => {
        setSelectedIcons([]);
        setTotalCalories(0);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#F78A1D" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Dinner</Text>
            </View>

            {/* Search Bar */}
            <TextInput style={styles.searchBar} placeholder="Search Food Here" placeholderTextColor="#aaa" />

            {/* Scrollable Food List */}
            <FlatList
                data={foodData}
                keyExtractor={(item) => item.id}
                style={styles.foodList}
                renderItem={({ item }) => (
                    <View style={styles.foodItem}>
                        <Text style={styles.foodName}>{item.name}</Text>
                        <Text style={styles.foodInfo}>Calories: {item.calories}</Text>
                        <Text style={styles.foodInfo}>Protein: {item.protein}g</Text>
                        <TouchableOpacity onPress={() => addFoodToPlate(item)}>
                            <Ionicons name="add-circle" size={24} color="#F78A1D" />
                        </TouchableOpacity>
                    </View>
                )}
            />

            {/* Plate with Selected Food Icons */}
            <View style={styles.circlePlate}>
                <Ionicons name="disc" size={150} color="#F0F0F0" />
                <View style={styles.iconsOnPlate}>
                    {selectedIcons.map((item, index) => (
                        <Ionicons
                            key={index}
                            name={item.icon}
                            size={30}
                            color="#F78A1D"
                            style={{
                                position: 'absolute',
                                left: item.x,
                                top: item.y,
                            }}
                        />
                    ))}
                </View>
            </View>

            {/* Save and Clear Buttons */}
            <TouchableOpacity style={styles.saveButton} onPress={saveCalories}>
                <Text style={styles.saveButtonText}>Save Calories</Text>
            </TouchableOpacity>

            {/* Clear Button */}
            <TouchableOpacity style={styles.clearButton} onPress={clearPlate}>
                <Text style={styles.clearButtonText}>Clear Plate</Text>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    headerText: {
        color: '#F78A1D',
        fontSize: 20,
        marginLeft: 10,
    },
    searchBar: {
        backgroundColor: '#F0F0F0',
        width: '90%',
        height: 40,
        borderRadius: 8,
        alignSelf: 'center',
        marginVertical: 10,
        paddingHorizontal: 10,
        color: '#333',
    },
    foodList: {
        flexGrow: 0,
        marginVertical: 10,
    },
    foodItem: {
        backgroundColor: '#F0F0F0',
        marginHorizontal: 20,
        marginVertical: 5,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    foodName: {
        fontWeight: 'bold',
        color: '#F78A1D',
    },
    foodInfo: {
        fontSize: 12,
        color: '#333',
    },
    circlePlate: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        position: 'relative',
        width: 150,
        height: 150,
    },
    iconsOnPlate: {
        position: 'absolute',
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveButton: {
        backgroundColor: '#F78A1D',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 20,
        width: '70%',
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    clearButton: {
        backgroundColor: '#FF4D4D',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 10,
        width: '70%',
    },
    clearButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
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
