import React, { useState, useEffect, useContext } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import DataContext from "./UserLogin/data/data-context";
import UserUploads from "./UserUploads";

import {
  db,
  firestore,
  collection,
  getDoc,
  doc,
} from "../firebase/firebaseConfig";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Button,
  ActionSheetIOS,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [selectedCrop, setSelectedCrop] = useState("Cardamom");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Specify the document ID you want to retrieve
        const documentId = "test_id"; // Replace with the actual document ID

        // Create a reference to the document
        const documentRef = doc(db, "test", documentId);

        // Get the document
        const documentSnapshot = await getDoc(documentRef);

        // Check if the document exists
        if (documentSnapshot.exists()) {
          // Document data
          const documentData = documentSnapshot.data();
          setData(documentData);
        } else {
          console.log("Document does not exist!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log("DATA FROM FIRESTORE", db);
  console.log(
    "useContext(DataContext).userNumber from home : ",
    useContext(DataContext).userNumber
  );

  const handleCropSelection = (crop) => {
    setSelectedCrop(crop);
  };
  const [weatherData, setWeatherData] = useState(null);

  const pressHandler = (value) => {
    navigation.navigate(value);
  };
  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=da0620f67a528e9ba837c2296c9a4cd5"
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
              onPress={() => handleCropSelection("Cardamom")}
              style={[
                styles.cropSelectorButton,
                selectedCrop === "Cardamom" && styles.selectedCropButton,
              ]}
            >
              <Text
                style={[
                  styles.cropSelectorButtonText,
                  selectedCrop === "Cardamom" && styles.selectedCropButtonText,
                ]}
              >
                Cardamom
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cropScreenContainer}>
          {selectedCrop === "" && (
            <View style={styles.placeholderContainer}>
              <Text style={styles.placeholderText}>
                Please select a crop to start.
              </Text>
            </View>
          )}
          {selectedCrop === "Cardamom" && (
            <View style={[styles.cropScreenContainer]}>
              <View style={[styles.cropServiceScreen]}>
                <TouchableOpacity
                  style={styles.serviceComponents}
                  onPress={() => pressHandler("FertilizerCalulator")}
                >
                  <View>
                    <FontAwesome5
                      name="calculator"
                      size={24}
                      color="#0B3104"
                      style={styles.serviceComponentsicons}
                    />
                    <Text style={styles.serviceContainerText}>
                      Fertilizer Calculator
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.serviceComponents}
                  onPress={() => pressHandler("pest_control")}
                >
                  <View>
                    <View style={{ flex: 1, justifyContent: "center" }}>
                      <MaterialCommunityIcons
                        name="virus"
                        size={24}
                        color="#0B3104"
                        style={styles.serviceComponentsicons}
                      />
                    </View>
                    <Text style={styles.serviceContainerText}>
                      Pests & Controls
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.serviceComponents}
                  onPress={() => pressHandler("ResultScreen")}
                >
                  <View style={styles.serviceComponentsView}>
                    <Entypo
                      name="leaf"
                      size={24}
                      color="#0B3104"
                      style={styles.serviceComponentsicons}
                    />
                    <Text style={styles.serviceContainerText}>
                      Cultivation Tipss
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.HealCropContainer}>
                <View style={styles.HealCropTextContainer}>
                  <Text style={styles.HealCropText}>Heal Your Crop</Text>
                </View>

                <View style={styles.outerBox}>
                  <View style={styles.innerBox}>
                    <View style={styles.subBox}>
                      <Ionicons name="camera" size={54} color="white" />
                      <Text style={styles.subBoxtext}>Upload Image</Text>
                    </View>
                    <View style={styles.subBox}>
                      <MaterialCommunityIcons
                        name="magnify-scan"
                        size={54}
                        color="white"
                      />
                      <Text style={styles.subBoxtext}>Get Diagonis</Text>
                    </View>
                    <View style={styles.subBox}>
                      <View>
                        <MaterialCommunityIcons
                          name="leaf-circle"
                          size={54}
                          color="white"
                        />
                      </View>
                      <View>
                        <Text style={styles.subBoxtext}>Get Medicine</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.innerCameraBox}>
                    <TouchableOpacity
                      style={styles.cameraButton}
                      onPress={() => pressHandler("Imagepick")}
                    >
                      <View>
                        <Text style={styles.cameraButtonText}>
                          Take a picture
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
          <View style={styles.consultationBox}>
            <View style={styles.consultationContainer}>
              <View style={styles.consultationTextContainer}>
                <Text style={styles.consultationBoxText}>
                  Book your <Text style={styles.freeText}>FREE</Text>{" "}
                  consultation {"\n"}
                  now!
                </Text>
              </View>
              <View style={styles.bookingButtonContainer}>
                <TouchableOpacity
                  style={styles.bookingButton}
                  onPress={() => pressHandler("RoadmapPage")}
                >
                  <Text style={styles.consultationBoxButtonText}>Book</Text>
                </TouchableOpacity>
                <View>
                  <FontAwesome5
                    name="leaf"
                    size={114}
                    color="green"
                    style={styles.consultationBoxButtonIcon}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* <View style={styles.weatherSection}>
            <View style={styles.weatherContainer}>
              <Text style={styles.headerText}>{data.test}</Text>
              {weatherData ? (
                <>
                  <Text style={styles.weatherText}>
                    Current temperature: {weatherData.main.temp}
                  </Text>
                  <Text style={styles.weatherText}>
                    Humidity: {weatherData.main.humidity}
                  </Text>
                  <Text style={styles.weatherText}>
                    Wind speed: {weatherData.main.speed}
                  </Text>
                </>
              ) : (
                <Text style={styles.loadingText}>Loading...</Text>
              )}
            </View>
          </View> */}
        </View>
      </View>
      <View>
        <UserUploads navigation={navigation} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  cropSelectorContainer: {
    flexDirection: "row",
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 10,
  },

  cropsection: {
    borderRadius: 13,
    flex: 1,
    backgroundColor: "#F0F0F0",
    margin: 10,
    height: 40,
  },
  cropSelectorButton: {
    paddingVertical: 8,
    borderRadius: 13,
    width: "30%",
    height: 40,
    justifyContent: "center", // center text horizontally
    alignItems: "center", // center text vertically
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },

  pestandControl: {
    width: "100%",
    height: 140,
    backgroundColor: "red",
  },
  selectedCropButton: {
    backgroundColor: "#0B3104",
    color: "white",
  },
  selectedCropButtonText: {
    color: "white",
  },
  cropScreenContainer: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
  },
  cropSelectorButtonText: {
    fontSize: 16,
    // fontWeight: 500,
  },
  serviceContainerText: {
    fontSize: 16,
    textAlign: "center",
    // fontWeight: 500,
    color: "#333333",
  },
  DiseaseDetectionContainer: {
    width: "100%",
    height: 180,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    backgroundColor: "#90EE90",
    flexWrap: "wrap",
  },
  cropServiceScreen: {
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#0B310417",
    flexDirection: "row",
  },
  serviceComponents: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    margin: 5,
    marginTop: 25,
    marginBottom: 25,
    height: 95,
    borderWidth: 1,
    borderColor: "#CFCECE",
    padding: 10,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  serviceComponentsicons: {
    alignSelf: "center",
    justifyContent: "center",
  },
  HealCropContainer: {
    flex: 1,
  },
  HealCropTextContainer: {
    marginTop: 5,
    margin: 5,
    padding: 0,
  },
  HealCropText: {
    padding: 1,
    fontSize: 16,
    // fontWeight: "bold",
    color: "black",
    textAlign: "left",
    textTransform: "uppercase",
    letterSpacing: 1.3,
    lineHeight: 24,
  },
  outerBox: {
    backgroundColor: "#0B3104",
    borderColor: "#0B3104",
    borderRadius: 20,
    height: 201,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  innerBox: {
    padding: 10,
    flexDirection: "row",
  },
  subBox: {
    margin: 15,
    height: 83,
    borderRadius: 15,
    marginVertical: 5,
    alignItems: "center",
  },
  subBoxtext: {
    color: "white",
  },
  cameraButton: {
    height: 42,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#046AE1",
    borderRadius: 18,
    marginTop: 10,
  },
  innerCameraBox: {
    justifyContent: "center",
    alignItems: "center",
  },

  cameraButtonText: {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: 20,
    // fontWeight: 500,
  },

  consultationBox: {
    marginTop: 28,
    margin: 10,
    borderRadius: 20,
    flexDirection: "row",
    height: 170,
    backgroundColor: "#0B310417",
  },
  consultationContainer: {
    flex: 1,

    flexDirection: "column",
  },
  consultationTextContainer: {
    padding: 10,
    margin: 10,
    justifyContent: "center",
  },
  freeText: {
    color: "green",
    fontWeight: "bold",
  },
  consultationBoxText: {
    fontSize: 23,
    color: "black",
    fontWeight: "500",
  },
  bookingButton: {
    backgroundColor: "#046AE1",
    width: "50%",
    height: "48%",
    margin: 15,
    justifyContent: "center",

    borderRadius: 18,
    marginLeft: 18,
  },
  consultationBoxButtonText: {
    color: "white",
    fontSize: 18,
    // fontWeight: 700,
    padding: 5,
    textAlign: "center",
  },
  bookingButtonContainer: {
    flexDirection: "row",
  },
  consultationBoxButtonIcon: {
    position: "absolute",
    top: -45,
    left: 17,
  },

  weatherSection: {
    marginTop: 40,
    flexDirection: "row",
  },
  weatherContainer: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 10,
    marginTop: 0,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
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
    // fontWeight: "bold",
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
