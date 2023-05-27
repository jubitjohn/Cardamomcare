import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ResultScreen = ({ navigation }) => {
  const prop1 = navigation.getParam("res");

  return (
    <ScrollView style={styles.container}>
      {/* First Section */}

      <LinearGradient
        colors={["#1a961a", "white","white","white","#1a961a"]}
        start={[0, 1]} // Top-left corner
        end={[1, 0]} // Bottom-right corner
      >
        <View style={styles.firstSection}>
          <Text style={styles.sectionText}>
            Get your <Text style={{ color: 'green',fontSize:20 }}>FREE </Text>personalised consultation now!
          </Text>
          <TouchableOpacity style={styles.bookingButton}>
            <Text style={styles.bookingButtonText}>Book</Text>
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            <View style={styles.imageContainerFirst}></View>
            <View style={styles.imageContainerSecond}><Image
            source={require("../assets/consultant.png")}
            style={styles.sectionImage}
          /></View>
          </View>
          
        </View>
      </LinearGradient>

      {/* Second Section */}
      <View style={styles.secondSection}>
        <Text style={styles.cardHeading}>{prop1}</Text>
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
    padding: 10,
  
  },
  sectionText: {
    fontSize: 20,
    padding: 18,
    fontWeight: "bold",
    marginBottom: 1,
    textAlign: "left",
  },
  bookingButton: {
    backgroundColor: "#046AE1",
    width: 150,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    marginLeft:18,
    
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
    
    
   
  },
  imageContainer:{
    flexDirection:'row',
  },
  imageContainerFirst:{
    flex:1,
    
  },
  imageContainerSecond:{
    flex:2,
    
  },
  secondSection: {
    marginTop: -25,
    borderRadius:30,
    padding: 20,
    backgroundColor: "#f2f3f0",

   
   
 
   
  },
  cardHeading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign:'center',
  },
  cardSubHeading: {
    fontSize: 16,
    color: "#888",
  },
});

export default ResultScreen;
