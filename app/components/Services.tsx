import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';  // Import the Colors

const services = [
  {
    id: '1',
    icon: 'stethoscope',
    title: 'General Checkup',
    description: 'Routine exams to keep your teeth and gums healthy.',
  },
  {
    id: '2',
    icon: 'toothbrush-paste',
    title: 'Teeth Cleaning',
    description: 'Professional cleaning to remove plaque and tartar.',
  },
  {
    id: '3',
    icon: 'emoticon-outline',
    title: 'Cosmetic Dentistry',
    description: 'Whitening, veneers, and smile makeovers.',
  },
  {
    id: '4',
    icon: 'alert-circle-outline',
    title: 'Emergency Care',
    description: 'Quick relief for dental pain or injury.',
  },
  {
    id: '5',
    icon: 'tooth-outline',
    title: 'Root Canal',
    description: 'Treat infections deep inside a tooth.',
  },
  {
    id: '6',
    icon: 'toothbrush',
    title: 'Dental Implants',
    description: 'Permanent replacement for missing teeth.',
  },
];

export default function Services() {
  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <MaterialCommunityIcons name={item.icon} size={32} color="#00796b" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Our Dental Services</Text>
      <FlatList
        data={services}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.background,  // Use background color
    minHeight: 600,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.primary,  // Use primary color for heading
    textAlign: 'center',
  },
  card: {
    backgroundColor: Colors.primary_light,  // Use secondary color for card background
    padding: 15,
    borderRadius: 10,
    width: '48%',
    marginBottom: 15,
    alignItems: 'center',
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'center',
    color: Colors.primary,  // Use background color for text
  },
  desc: {
    fontSize: 13,
    textAlign: 'center',
    color: Colors.text,  // Use default text color
  },
});
