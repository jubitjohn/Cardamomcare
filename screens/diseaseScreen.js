import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';


const diseases = [
  {
    name: 'Leaf Blight',
    description:
      'Leaf blight is a fungal disease that causes brown spots to appear on the leaves of the cardamom plant. The spots can grow in size and cause the leaves to wither and die. It can be controlled with fungicides and proper hygiene practices in the plantation.',
  },
  {
    name: 'Capsule Rot',
    description:
      'Capsule rot is a fungal disease that affects the developing capsules of the cardamom plant. The disease causes the capsules to rot and the seeds inside to turn black. The disease can be controlled by using fungicides and improving ventilation in the plantation.',
  },
  {
    name: 'Root Rot',
    description:
      'Root rot is a soil-borne disease caused by fungi that affects the roots of the cardamom plant. The disease causes the roots to rot, which results in stunted growth and yellowing of leaves. It can be controlled by using fungicides and improving drainage in the plantation.',
  },
];

const DiseaseScreen = ({navigation,route}) => {
  const { selectedImage } = route.params;
  const [selectedDisease, setSelectedDisease] = useState(diseases[0]);

  const handleDiseaseSelect = disease => {
    setSelectedDisease(disease);
  };
  const pressHandler = value => {
    navigation.navigate(value);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: selectedImage }} 
          style={styles.headerImage}
        />
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Disease identified:</Text>
          <Text style={styles.cardText}>{selectedDisease.name}</Text>
        </View>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionTitle}>Description:</Text>
        <Text style={styles.descriptionText}>
          {selectedDisease.description}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => pressHandler('AppointmentScreen')}>
        <Text style={styles.buttonText}>Book Free Consultation</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 16,
    marginTop: 5,
  },
  description: {
    padding: 20,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 16,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DiseaseScreen;
