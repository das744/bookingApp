import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';  // Import the Colors



export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = () => {
    if (name && email && message) {
      // Show success message
      Alert.alert('Success', 'Your message has been sent!', [{ text: 'OK' }]);
  
      // Delay clearing the form just a bit to ensure the alert shows
      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
      }, 500); // 500ms delay is enough
    } else {
      Alert.alert('Error', 'Please fill out all fields.', [{ text: 'OK' }]);
    }
  };
  

  return (
    <View style={styles.container}>
      {/* Top Section: Contact Info */}
      <View style={styles.topSection}>
        <Text style={styles.heading}>Contact Us</Text>
        <Text style={styles.info}>
          <FontAwesome name="envelope" size={20} color={Colors.primary} /> Email: contact@myapp.com
        </Text>
        <Text style={styles.info}>
          <FontAwesome name="phone" size={20} color={Colors.primary} /> Phone: +1 (555) 123-4567
        </Text>
        <View style={styles.socialMedia}>
          <FontAwesome name="facebook" size={30} color={Colors.primary} style={styles.icon} />
          <FontAwesome name="twitter" size={30} color={Colors.primary} style={styles.icon} />
          <FontAwesome name="instagram" size={30} color={Colors.primary} style={styles.icon} />
        </View>
      </View>

      {/* Bottom Section: Form */}
      <View style={styles.formSection}>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Your Name"
          style={styles.input}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Your Email"
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Your Message"
          style={[styles.input, { height: 100 }]}
          multiline
        />
        <Button
          title="Send Message"
          onPress={handleSubmit}
          color={Colors.primary}  // Button color from constant
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 70,
    backgroundColor: '#fff3e0',
  },
  topSection: {
    marginBottom: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.primary,  // Heading color
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
    color: Colors.text,  // Text color for info
  },
  socialMedia: {
    flexDirection: 'row',
    marginTop: 20,
  },
  icon: {
    marginRight: 15,
  },
  formSection: {
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});
