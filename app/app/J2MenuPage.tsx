import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function J2MenuPage({ navigation }) {
    const [selectedMeal, setSelectedMeal] = useState('Lunch'); // Default to Lunch menu

    const menuData = {
        Breakfast: [
            '-- Breakfast Bakery --',
            'Assorted Danish',
            'Raspberry Coffee Cake',
            '-- Breakfast Offerings --',
            'Country Potatoes',
            'French Style Waffles',
            'Hard Boiled Egg',
            'Pancake Syrup',
            'Peppered Cream Gravy',
            'Plant-based Breakfast Patty',
            'Refried Beans',
            'Roasted Italian Vegetables',
            'Sausage Link',
            'Scrambled Eggs',
            'Southern Buttermilk Biscuit',
            '-- Fresh Fruit --',
            'Banana',
            'Fresh Orange',
            'Gala Apple',
            '-- Soups --',
            'Hot Hearty Oatmeal',
            '-- Breakfast Offerings --',
            'Blueberries',
            'Cantaloupe',
            'Fresh Red Grapes',
            'Plain Greek Yogurt',
            'Sliced Canned Pears',
            '-- Salad Bar Standard Toppings --',
            'Vanilla Yogurt',
            'Breakfast Topping Bar',
            'Build to Order Breakfast Sandwich Bases',
            'Build to Order Breakfast Sandwich Proteins',
            'Build to Order Breakfast Sandwich Toppings',
            'Oatmeal',
            'Seasonal Fresh Fruit',
            'Shredded Hash Browns',
        ],

    Lunch: [
        '-- Soups --',
        'Cream of Mushroom Soup',
        'Dinner Roll',
        'Turkey & Ruby Wild Rice Soup',
        'Whipped Butter',
        '-- Salad Bar Standard Vegetables --',
        'Cherry Tomatoes',
        'Chopped Romaine Lettuce',
        'Cucumber Slices',
        'Fresh Spinach',
        'Raw Broccoli Florets',
        'Shredded Carrots',
        'Sliced Red Onion',
        '-- Salad Bar Standard Toppings --',
        'Blueberries',
        'Cantaloupe',
        'Chopped Hard Boiled Egg',
        'Diced Ham',
        'Fresh Red Grapes',
        'Herbed Vinaigrette Dressing',
        'Hidden Valley Ranch Dressing',
        'Kidney Beans',
        'Plain Greek Yogurt',
        'Shredded Cheddar Cheese',
        'Sliced Canned Pears',
        'Sliced Green Pepper',
        'Sliced Ripe Olives',
        'Tofu',
        'Vanilla Yogurt',
        '-- Yogurt Bar --',
        'Chocolate Ice Cream',
        'Chocolate Sprinkles',
        'Chocolate Syrup',
        'Maraschino Cherries',
        'Pineapple Topping',
        'Strawberry Topping',
        'Vanilla Ice Cream',
        '-- Sweet Sensations --',
        'Chocolate Chip Bar',
        'Sugar Cookies',
        '-- GRILL SPECIAL --',
        'Bratwurst Sandwich',
        'Sauerkraut',
        'Wiesn German Potato Salad',
        '-- Comfort Line --',
        'Cornbread Stuffing',
        'Peas & Carrots',
        'Sauteed Cabbage and Carrots',
        'Sweet & Spicy BBQ Chicken',
        '-- Vegan Line --',
        'Farfalle Pasta',
        'Lentil Puttanesca Pasta Sauce',
        'Roasted Baby Carrots w/ Thyme',
        'Spinach and Kale Saute',
    ],
    Dinner: [
       '-- Baked Potato Bar --',
            'Baked Potato',
            'Baked Sweet Potato',
            'Crispy Chopped Bacon Filling',
            'Roasted Italian Broccoli',
            'Shredded Cheddar Cheese',
            'Sliced Green Onion',
            'Sour Cream',
            'Whipped Butter',
            '-- Soups --',
            'Cream of Mushroom Soup',
            'Dinner Roll',
            'Turkey & Ruby Wild Rice Soup',
            '-- Salad Bar Standard Vegetables --',
            'Cherry Tomatoes',
            'Chopped Romaine Lettuce',
            'Cucumber Slices',
            'Fresh Spinach',
            'Raw Broccoli Florets',
            'Shredded Carrots',
            'Sliced Red Onion',
            '-- Salad Bar Standard Toppings --',
            'Blueberries',
            'Cantaloupe',
            'Chopped Hard Boiled Egg',
            'Diced Ham',
            'Fresh Red Grapes',
            'Herbed Vinaigrette Dressing',
            'Hidden Valley Ranch Dressing',
            'Kidney Beans',
            'Plain Greek Yogurt',
            'Shredded Cheddar Cheese',
            'Sliced Canned Pears',
            'Sliced Green Pepper',
            'Sliced Ripe Olives',
            'Tofu',
            'Vanilla Yogurt',
            '-- Yogurt Bar --',
            'Chocolate Ice Cream',
            'Chocolate Sprinkles',
            'Chocolate Syrup',
            'Maraschino Cherries',
            'Pineapple Topping',
            'Strawberry Topping',
            'Vanilla Ice Cream',
            '-- Sweet Sensations --',
            'Blackberry Cobbler',
            'Chocolate Chip Bar',
            'Dutch Chocolate Brownies with Icing',
            '-- GRILL SPECIAL --',
            'Bratwurst Sandwich',
            'Sauerkraut',
            'Wiesn German Potato Salad',
            '-- Comfort Line --',
            'Chicken Fried Steak',
            'Creamed Corn w/ Jalapeno',
            'Homestyle Mashed Potatoes',
            'Peppered Cream Gravy',
            'Southwestern Green Beans',
            '-- Pasta Bar --',
            'Basil Pesto Sauce',
            'Grilled Italian Chicken',
            'Marinara Sauce',
            'Penne Pasta',
            '-- Pasta Bar: Veggie Mix-in\'s --',
            'Breadstick',
            'Grated Parmesan Cheese',
            'Sauteed Peppers and Onions',
            '-- TexMex Favorites --',
            '6" Corn Tortilla',
            'Beef Taco Filling',
            'Fresh Homemade Salsa',
            'Pico de Gallo',
            'Refried Beans',
            'Sliced Jalapeno Pepper',
            'Tortilla Chips',
            '-- Vegan Line --',
            'Dijon Roasted Brussels Sprouts',
            'German Style Plant-based Bratwurst',
            'Roasted Baby Carrots w/ Thyme',
            'Zesty Garlic & Herb Potatoes',
            '-- The Texas Grill --',
            'American Cheese Slices',
            'California Veggie Patty',
            'Cheeseburger',
            'Fresh Tomato Slices',
            'Shredded Romaine',
            'Spicy Curly Fries',
            'Swiss Cheese Slices',
            '-- Pizza Station --',
            'Breadstick',
            'Cheese Pizza',
            'Hawaiian Pizza',
            'Marinara Sauce',
            'Pepperoni Pizza',
            'Plant-based "Cheese" Pizza',
            '-- FAST Line --',
            'Garlic Roasted New Potatoes',
            'Guacamole',
            'Mexican Rice Pilaf',
            'Refried Pinto Beans',
            'Salsa Verde Chicken Tostada',
            'Sauteed Peppers and Onions',
        ],
    };

    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#fff" />
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>

            <Text style={styles.title}>J2 Menu</Text>

            {/* Meal Selection Buttons */}
            <View style={styles.buttonContainer}>
                {['Breakfast', 'Lunch', 'Dinner'].map((meal) => (
                    <TouchableOpacity
                        key={meal}
                        style={[
                            styles.mealButton,
                            selectedMeal === meal ? styles.activeButton : styles.inactiveButton,
                        ]}
                        onPress={() => setSelectedMeal(meal)}
                    >
                        <Text
                            style={[
                                styles.mealButtonText,
                                selectedMeal === meal ? styles.activeButtonText : styles.inactiveButtonText,
                            ]}
                        >
                            {meal}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Menu Content */}
            <ScrollView style={styles.menuContainer}>
                <View style={styles.menuSection}>
                    <Text style={styles.mealTitle}>{selectedMeal}</Text>
                    {menuData[selectedMeal].map((item, index) => (
                        <Text key={index} style={styles.menuItem}>
                            {item}
                        </Text>
                    ))}
                </View>
            </ScrollView>

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
        backgroundColor: '#f0f0f0',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#4caf50',
    },
    backButtonText: {
        fontSize: 16,
        marginLeft: 5,
        color: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        alignSelf: 'center',
        color: '#f78a1d',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    mealButton: {
        marginHorizontal: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
    },
    activeButton: {
        backgroundColor: '#4caf50',
    },
    inactiveButton: {
        backgroundColor: '#ddd',
    },
    mealButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    activeButtonText: {
        color: '#fff',
    },
    inactiveButtonText: {
        color: '#555',
    },
    menuContainer: {
        flex: 1,
        padding: 20,
    },
    menuSection: {
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    mealTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4caf50',
        marginBottom: 10,
    },
    menuItem: {
        fontSize: 16,
        marginBottom: 5,
        color: '#555',
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
