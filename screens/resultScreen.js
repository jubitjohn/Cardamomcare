import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const ResultScreen = ({ route, res }) => {
  return (
    <ScrollView style={styles.container}>
      {/* First Section */}
      <View style={styles.firstSection}>
        <Text style={styles.sectionText}>
          Get your FREE personalized consultation now!
        </Text>
        <View style={styles.bookingButtonSection}>
          <TouchableOpacity style={styles.bookingButton}>
            <Text style={styles.consultationBoxButtonText}>Book</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionImageSection}>
          <Image
            source={require("../assets/consultant.png")}
            style={styles.sectionImage}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Second Section */}
      <View style={styles.secondSection}>
        <Text style={styles.cardHeading}>Result: {res}</Text>
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
    padding: 5,
    paddingTop: 25,
    flex: 1,
    height: 300,
    alignItems: "left",
    backgroundColor: "green",
  },
  sectionText: {
    padding: 20,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
  },
  bookingButtonSection: {
    alignSelf: "flex-start",
    margin: 0,
  },
  bookingButton: {
    backgroundColor: "#046AE1",
    margin: 15,
    width: 100,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    marginLeft: 18,
  },
  sectionImageSection: {
    width: "100%",
    marginTop: 150,
  },
  sectionImage: {
    width: "100%",
    height: 500,
    resizeMode: "contain",
    marginTop: 5,
    marginBottom: 200,
    marginLeft: 100,
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
