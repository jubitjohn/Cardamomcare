import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

const CardamomPlantationTipsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cardamom Plantation Tips</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={require('../assets/background.jpg')}
          style={styles.image}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Plantation Tips</Text>
          <Text style={styles.cardText}>
          ടിപ്പ് 1: 6.0 മുതല്‍ 6.8 നിറത്തിലുള്ള പിച്ചിനെ വഴിയുള്ള നല്ല ചെരുത്തിയില്‍ കര്‍ദമോം സംരക്ഷിക്കുക.
          </Text>
          <Text style={styles.cardText}>
            - Tip 2: Water the plants regularly, but don't overwater them.
          </Text>
          <Text style={styles.cardText}>
            - Tip 3: Fertilize the plants every 6 months with a balanced
            fertilizer.
          </Text>
          <Text style={styles.cardText}>
            - Tip 4: Control pests and diseases with natural methods or approved
            chemicals.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Learn More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  },
  header: {
    height: 70,
    backgroundColor: '#28a745',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
  },
  card: {
    margin: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#28a745',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginRight: 10,
  },
});

export default CardamomPlantationTipsScreen;
