import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AIChatBotScreen({ navigation }) {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([
        { message: "Hello! I'm your food recommendation assistant. What are you looking for today?", sender: 'bot' }
    ]);
    const [goal, setGoal] = useState('weightLoss');
    const [diet, setDiet] = useState('vegetarian');
    const [exerciseFrequency, setExerciseFrequency] = useState('once a week');
    const [currentRecommendationIndex, setCurrentRecommendationIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    const handleSendMessage = () => {
        if (!userInput.trim()) return;

        const userMessage = { message: userInput, sender: 'user' };
        setChatHistory((prevHistory) => [...prevHistory, userMessage]);

        setUserInput('');
    };

    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#fff" />
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>

            {/* Chat Area */}
            <View style={styles.chatContainer}>
                <ScrollView style={styles.chatBox}>
                    {chatHistory.map((chat, index) => (
                        <View
                            key={index}
                            style={[
                                styles.chatBubble,
                                chat.sender === 'user' ? styles.userBubble : styles.botBubble,
                            ]}
                        >
                            <Text style={styles.chatText}>{chat.message}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>

            {/* Input Area */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={userInput}
                    onChangeText={setUserInput}
                    placeholder="Type your message..."
                    placeholderTextColor="#888"
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
                    <Ionicons name="send" size={24} color="white" />
                </TouchableOpacity>
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
        backgroundColor: '#4caf50', // Green background for the back button
    },
    backButtonText: {
        fontSize: 16,
        marginLeft: 5,
        color: '#fff', // White text for contrast
    },
    chatContainer: {
        flex: 1,
        padding: 20,
    },
    chatBox: {
        flex: 1,
    },
    chatBubble: {
        maxWidth: '75%',
        marginVertical: 5,
        padding: 10,
        borderRadius: 15,
        marginBottom: 10,
    },
    botBubble: {
        backgroundColor: '#f78a1d',
        alignSelf: 'flex-start',
    },
    userBubble: {
        backgroundColor: '#4caf50',
        alignSelf: 'flex-end',
    },
    chatText: {
        color: 'white',
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        marginBottom: 70, // Space for the bottom navigation bar
    },
    input: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    sendButton: {
        backgroundColor: '#4caf50',
        padding: 10,
        marginLeft: 10,
        borderRadius: 25,
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
