import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const backgroundImage = require('../assets/background.jpg');

const AppointmentScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = value => {
    setPhoneNumber(value);
  };

  const handleAppointmentSubmission = () => {
    // Here you can implement the logic for submitting the appointment with the phone number to the database
    console.log(`Submitting appointment for phone number: ${phoneNumber}`);
    // You can also add a success message to be displayed to the user after the appointment is submitted
    alert('Appointment submitted successfully!');
    // And clear the phone number input field
    setPhoneNumber('');
  };

  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.backgroundImage}>
        <Text style={styles.title}>Make an Appointment</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
            keyboardType="numeric"
            placeholderTextColor="#8C8C8C"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleAppointmentSubmission}>
            <Text style={styles.buttonText}>Submit Appointment</Text>
          </TouchableOpacity>
        </View>
      </Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#8C8C8C',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 18,
    color: '#fff',
  },
  button: {
    backgroundColor: '#E50914',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AppointmentScreen;
