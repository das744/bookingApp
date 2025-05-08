import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2025 MyApp. All rights reserved.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});
