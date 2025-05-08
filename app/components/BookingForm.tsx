import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Calendar } from 'react-native-calendars';
import { db } from '../../firebaseConfig';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { Colors } from '../../constants/Colors';  // Import the Colors

// Constants
const SERVICES = [
  'Dental Checkup',
  'Teeth Cleaning',
  'Tooth Extraction',
  'Root Canal Treatment',
  'Braces Consultation',
  'Whitening Treatment',
  'Filling or Cavity Repair'
];

const TIME_SLOTS = Array.from({ length: 16 }, (_, i) => {
  const hour = 9 + Math.floor(i / 2);
  const min = i % 2 === 0 ? '00' : '30';
  const suffix = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour > 12 ? hour - 12 : hour;
  return `${formattedHour}:${min} ${suffix}`;
});

export default function BookingForm() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
const [error, setError] = useState('');


  const getDateTimeISO = () => {
    const dateStr = selectedDate.toISOString().split('T')[0];
    const [timeStr, period] = selectedTime.split(' ');
    let [hours, minutes] = timeStr.split(':').map(Number);
    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;

    const combined = new Date(dateStr);
    combined.setHours(hours, minutes, 0, 0);
    return combined.toISOString();
  };

  const handleBooking = async () => {
    const slot = getDateTimeISO();
    setMessage('');
    setError('');
  
    try {
      const q = query(collection(db, 'bookings'), where('slot', '==', slot));
      const snapshot = await getDocs(q);
  
      if (!snapshot.empty) {
        setError('❌ This time slot is already booked');
        return;
      }
  
      await addDoc(collection(db, 'bookings'), {
        name,
        email,
        reason: selectedService,
        slot
      });
  
      setMessage('✅ Booking successful');
      setName('');
      setEmail('');
    } catch (e) {
      setError('❌ Booking failed. Please try again.');
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Your Appointment</Text>

      <Text style={styles.label}>Select a Date</Text>
      <Calendar
        minDate={new Date().toISOString().split('T')[0]}
        onDayPress={(day) => setSelectedDate(new Date(day.dateString))}
        markedDates={{
          [selectedDate.toISOString().split('T')[0]]: {
            selected: true,
            selectedColor: '#007bff',
          },
        }}
      />

      <Text style={styles.label}>Select Time</Text>
      <Picker
        selectedValue={selectedTime}
        onValueChange={(itemValue) => setSelectedTime(itemValue)}
        style={styles.picker}
      >
        {TIME_SLOTS.map((slot) => (
          <Picker.Item key={slot} label={slot} value={slot} />
        ))}
      </Picker>

      <Text style={styles.label}>Service</Text>
      <Picker
        selectedValue={selectedService}
        onValueChange={(itemValue) => setSelectedService(itemValue)}
        style={styles.picker}
      >
        {SERVICES.map((service) => (
          <Picker.Item key={service} label={service} value={service} />
        ))}
      </Picker>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Your name"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Your email"
        keyboardType="email-address"
      />

      <Button title="Book Now" onPress={handleBooking}  color={Colors.primary}  />
      {message !== '' && <Text style={{ color: 'green', marginTop: 10 }}>{message}</Text>}
{error !== '' && <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 4,
    color: '#444',
  },
  picker: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
});
