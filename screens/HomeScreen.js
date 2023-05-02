import React, {useState, useEffect} from 'react';
import {ActionSheet} from 'react-native-actionsheet';
import * as ImagePicker from 'expo-image-picker';
import ImagePickerExample from './test';


import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Button,
  ActionSheetIOS,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [selectedCrop, setSelectedCrop] = useState('');

  const handleCropSelection = crop => {
    setSelectedCrop(crop);
  };
  const [weatherData, setWeatherData] = useState(null);

  const pressHandler = value => {
    navigation.navigate(value);
  };
  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}',
    );
    const data = await response.json();
    setWeatherData(data);
  };
  

  

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.cropSelectorContainer}>
          <View style={styles.cropsection}>
            <TouchableOpacity
              onPress={() => handleCropSelection('Potato')}
              style={[
                styles.cropSelectorButton,
                selectedCrop === 'Potato' && styles.selectedCropButton,
              ]}>
              <Text
                style={[
                  styles.cropSelectorButtonText,
                  selectedCrop === 'Potato' && styles.selectedCropButtonText,
                ]}>
                Potato
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cropsection}>
            <TouchableOpacity
              onPress={() => handleCropSelection('Cucumber')}
              style={[
                styles.cropSelectorButton,
                selectedCrop === 'Cucumber' && styles.selectedCropButton,
              ]}>
              <Text
                style={[
                  styles.cropSelectorButtonText,
                  selectedCrop === 'Cucumber' && styles.selectedCropButtonText,
                ]}>
                Cucumber
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cropScreenContainer}>
          {selectedCrop === '' && (
            <View style={styles.placeholderContainer}>
              <Text style={styles.placeholderText}>
                Please select a crop to start.
              </Text>
            </View>
          )}
          {selectedCrop === 'Potato' && (
            <View style={[styles.cropScreenContainer]}>
              <View style={[styles.cropServiceScreen]}>
                <TouchableOpacity
                  style={styles.serviceComponents}
                  onPress={() => pressHandler('DiseaseScreen')}>
                  <View>
                    <Text style={styles.serviceContainerText}>
                      Fertilizer Calculator
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.serviceComponents}
                  onPress={() => pressHandler('pest_control')}>
                  <View>
                    <Text style={styles.serviceContainerText}>
                      Pet&Controls
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.serviceComponents}
                  onPress={() => pressHandler('cardamomtips')}>
                  <View>
                    <Text style={styles.serviceContainerText}>
                      Cultivation Tipss
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <View style={styles.HealCropTextContainer}>
                  <Text style={styles.HealCropText}>Heal Your Crop</Text>
                </View>

                <View style={styles.outerBox}>
                  <View style={styles.innerBox}>
                    <View style={styles.subBox}>
                      <Text>Upload Image</Text>
                    </View>
                    <View style={styles.subBox}>
                      <Text>Get Diagonis</Text>
                    </View>
                    <View style={styles.subBox}>
                      <Text>Get Medicine</Text>
                    </View>
                  </View>
                  <ImagePickerExample />
                </View>
              </View>
            </View>
          )}
          {selectedCrop === 'Cucumber' && (
            <View style={styles.cropServiceScreen}>
              <Text style={styles.cropScreenTitle}>Cucumber Screen</Text>
              <View style={styles.serviceComponents}>
                <Text style={styles.serviceContainerText}>
                  Fertilizer Calculator
                </Text>
              </View>
            </View>
          )}
          <View style={styles.weatherSection}>
            <View style={styles.weatherContainer}>
              <Text style={styles.headerText}>Weather Update</Text>
              {weatherData ? (
                <>
                  <Text style={styles.weatherText}>
                    Current temperature: {weatherData.temp}
                  </Text>
                  <Text style={styles.weatherText}>
                    Humidity: {weatherData.humidity}
                  </Text>
                  <Text style={styles.weatherText}>
                    Wind speed: {weatherData.speed}
                  </Text>
                </>
              ) : (
                <Text style={styles.loadingText}>Loading...</Text>
              )}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  cropSelectorContainer: {
    flexDirection: 'row',
    borderRadius: 50,
    marginBottom: -10,
    marginTop: 10,
  },
  cropsection: {
    borderRadius: 30,
    borderWidth: 1,
    padding: 10,
    borderBottomEndRadius: 10,
  },
  cropSelectorButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    width: 60,
    padding: 30,
    height: 60,
    borderColor: '#DDDDDD',
  },

  pestandControl: {
    width: '100%',
    height: 140,
    backgroundColor: 'red',
  },
  selectedCropButton: {
    backgroundColor: '#90EE90',
    borderBottomEndRadius: 10,
  },
  cropScreenContainer: {
    flexDirection: 'column',
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#90EE90',
    borderTopRightRadius: 30,
    alignItems: 'center',
  },
  cropSelectorButtonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  serviceContainerText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
  DiseaseDetectionContainer: {
    width: '100%',
    height: 180,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    backgroundColor: '#90EE90',
    flexWrap: 'wrap',
  },
  cropServiceScreen: {
    borderTopRightRadius: 50,

    borderWidth: 0.5,
    flexDirection: 'row',
  },
  serviceComponents: {
    flex: 1,
    marginTop: 25,
    margin: 10,
    height: 90,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  HealCropTextContainer: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
  },
  HealCropText: {
    padding: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    lineHeight: 24,
  },
  outerBox: {
    alignItems: 'center',
    borderWidth: 1,
    margin: 10,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderColor: '#000',
    borderRadius: 15,
    height: 190,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  innerBox: {
    borderWidth: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subBox: {
    margin: 10,
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    borderColor: 'black',
    borderRadius: 15,
    marginVertical: 5,
    backgroundColor: '#ddd',
  },
  weatherSection: {
    marginTop: 40,
    flexDirection: 'row',
  },
  weatherContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 10,
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  weatherText: {
    fontSize: 16,
    marginBottom: 4,
  },
  loadingText: {
    fontSize: 16,
  },
});

export default HomeScreen;
