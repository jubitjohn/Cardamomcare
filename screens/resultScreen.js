import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const ResultScreen = ({ navigation }) => {
  const prop1 = navigation.getParam('res');

  return (
    <ScrollView style={styles.container}>
      {/* First Section */}
      <View style={styles.firstSection}>
        <Text style={styles.sectionText}>
          Get your FREE personalised consultation now!
        </Text>
        <TouchableOpacity style={styles.bookingButton}>
          <Text style={styles.bookingButtonText}>Book</Text>
        </TouchableOpacity>
        <Image
          source={require("../assets/consultant.png")}
          style={styles.sectionImage}
        />
      </View>

      {/* Second Section */}
      <View style={styles.secondSection}>
        <Text style={styles.cardHeading}>Result: {prop1}</Text>
        <Text style={styles.cardSubHeading}>Card Sub Heading</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  firstSection: {
    padding: 20,
    backgroundColor: "green",
  },
  sectionText: {
    fontSize: 18,
    padding:10,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
  },
  bookingButton: {
    backgroundColor: "#046AE1",
    width: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    marginTop: 15,
  },
  bookingButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginTop: 20,
    marginBottom: 20,
  },
  secondSection: {
    marginTop: 40,
    padding: 20,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
  },
  cardHeading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardSubHeading: {
    fontSize: 16,
    color: "#888",
  },
});

export default ResultScreen;
