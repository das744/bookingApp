import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { Colors } from '../../constants/Colors';  // Import the Colors

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to MyApp</Text>
      <Text style={styles.paragraph}>
        We specialize in delivering exceptional solutions for your business needs. Our team is dedicated to ensuring your satisfaction and success.
      </Text>
      {/* Change button text color using color prop */}
      <Button 
        title="Learn More" 
        onPress={() => {}} 
        color={Colors.primary}  // Use the primary color for the button text
      />
      <Image 
        source={{ uri: 'https://plus.unsplash.com/premium_photo-1719955781545-c60219441bfc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D/300' }} 
        style={styles.image} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: 500,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.primary,  // Change heading text color to primary color
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 20,
    color: Colors.text,  // Change paragraph text color
  },
  image: {
    marginTop: 20,
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  button: {
    backgroundColor: Colors.primary, 
  }
});
