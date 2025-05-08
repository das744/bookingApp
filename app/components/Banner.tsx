import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import BookingForm from './BookingForm';

export default function Banner() {
  return (
    <ImageBackground
      source={{ uri: 'https://plus.unsplash.com/premium_photo-1719955782984-b29ff5d9add3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8/800x600' }} // Replace with your image
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.heading}>Welcome to Our Booking App</Text>
          <Text style={styles.subtext}>Book your service today!</Text>
        </View>
        <View style={styles.formWrapper}>
          <BookingForm />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '40%',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Black overlay
    justifyContent: 'space-between',
    padding: 20,
  },
  content: {
    marginTop: 40,
  },
  heading: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtext: {
    color: '#eee',
    fontSize: 18,
  },
  formWrapper: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
  },
});
