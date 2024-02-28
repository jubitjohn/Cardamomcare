import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Svg, { Circle, Line, Text as SvgText } from "react-native-svg";
import {
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const statuses = [
  {
    name: "Pending",
    icon: "🕒",
    message: "Waiting for approval",
    color: "#FFD700",
  },
  { name: "In Progress", icon: "⏳", message: "In progress", color: "#FFA500" },
  {
    name: "Completed",
    icon: "✅",
    message: "Task completed",
    color: "#008000",
  },
];

const RoadmapPage = ({ navigation, dataLoaded, uploadDetails }) => {
  dataLoadedValue = navigation.getParam("isVisible", dataLoaded);
  if (!dataLoadedValue) {
    return null; // or a loading indicator, or any fallback
  }
  console.log("RoadmapPageRecieved2", uploadDetails);
  const prop1 = navigation.getParam("uploadDetails", uploadDetails);
  console.log("RoadmapPageRecieved", prop1);

  const getStyles = (status) => {
    const uploadedTextBackgroundColor = getUploadedTextBackgroundColor(status);

    return StyleSheet.create({
      uploadedText: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        height: 39,
        margin: 1,
        backgroundColor: uploadedTextBackgroundColor,
        borderRadius: 30,
      },
    });
  };

  const getUploadedTextBackgroundColor = (status) => {
    switch (status) {
      case "Uploaded":
        return "#bad750"; // Example background color for 'Uploaded'
      case "Under Analysis":
        return "#FFCD4C"; // Example background color for 'Under Analysis'
      case "Expert Review":
        return "#065a00"; // Example background color for 'Expert Review'
      // Add more cases if needed
      default:
        return "#FFFFFF"; // Default background color
    }
  };
  const stylescard = getStyles(prop1.data.status);

  const getStatusMessage = (status) => {
    switch (status) {
      case "Uploaded":
        return "Thank you for sharing your cardamom plant image! Our expert team is analyzing it with advanced technology for an accurate diagnosis. Stay tuned for updates!";
      case "Under Analysis":
        return "Your cardamom plant image is currently under analysis by our expert team. We're working diligently to provide you with accurate insights. Stay tuned!";
      case "Expert Review":
        return "Your cardamom plant image is now under expert review. We're utilizing cutting-edge technology to ensure precise results. Stay tuned for updates!";
      default:
        return "Thank you for sharing your cardamom plant image! Our expert team is analyzing it with advanced technology for an accurate diagnosis. Stay tuned for updates!";
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageUploadedMsg}>
        {/* Left side - Upload Successful text */}
        <View style={styles.uploadedTextOuter}>
          <View style={stylescard.uploadedText}>
            <View style={styles.dot}></View>
            <View>
              <Text>{prop1.data.status}</Text>
            </View>
          </View>
          <View style={styles.halfWidthMessageBox}>
            <Text style={styles.halfWidthMessageText}>
              {getStatusMessage(prop1.data.status)}
            </Text>
          </View>
          <View></View>
        </View>

        {/* Right side - Uploaded Image */}
        <View styles={styles.uploadedImageContainer}>
          <Image
            style={styles.diseaseImage}
            source={{ uri: prop1.data.downloadURL }}
          />
        </View>
      </View>
      <View style={styles.statusDivOuter}>
        <View style={styles.statusDiv}>
          <View style={styles.statusBox}>
            <View style={styles.statusIconBox}>
              {prop1.data.status === "Uploaded" ||
              prop1.data.status === "Under Analysis" ||
              prop1.data.status === "Expert Review" ? (
                <Entypo name="upload-to-cloud" size={64} color="#065a00" />
              ) : (
                <Entypo name="upload-to-cloud" size={64} color="#eaeae8" />
              )}
            </View>
            <View style={styles.statusIconBoxText}>
              <Text>Upoaded</Text>
            </View>
          </View>
          {prop1.data.status === "Under Analysis" ||
          prop1.data.status === "Expert Review" ? (
            <View style={styles.connector1} />
          ) : (
            <View style={styles.connector10} />
          )}

          <View style={styles.statusBox}>
            <View style={styles.statusIconBox}>
              {prop1.data.status === "Under Analysis" ||
              prop1.data.status === "Expert Review" ? (
                <MaterialCommunityIcons
                  name="leaf-circle-outline"
                  size={64}
                  color="#065a00"
                />
              ) : (
                <MaterialCommunityIcons
                  name="leaf-circle-outline"
                  size={64}
                  color="#eaeae8"
                />
              )}
            </View>
            <View style={styles.statusIconBoxText}>
              <Text>Under Analysis</Text>
            </View>
          </View>
          {prop1.data.status === "Expert Review" ? (
            <View style={styles.connector2} />
          ) : (
            <View style={styles.connector20} />
          )}
          <View style={styles.statusBox}>
            <View style={styles.statusIconBox}>
              {prop1.data.status === "Expert Review" ? (
                <MaterialIcons name="preview" size={64} color="#385600" />
              ) : (
                <MaterialIcons name="preview" size={64} color="#eaeae8" />
              )}
            </View>
            <View style={styles.statusIconBoxText}>
              <Text>Expert Review</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.fullWidthMessageBoxStatus}>
            <Text style={styles.fullWidthMessageTextStatus}>
              Status : {prop1.data.status}
            </Text>
          </View>
        </View>
        <View>
          <LinearGradient
            colors={["#1a961a", "white", "white", "white", "#1a961a"]}
            start={[1, 1]} // Top-left corner
            end={[0, 0]} // Bottom-right corner
          >
            <View style={styles.fullWidthMessageBox}>
              <View>
                <Text style={styles.fullWidthMessageText}>
                  {prop1.data.message}
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#fff", // White background
  },
  dot: {
    backgroundColor: "#ffffff",
    width: 13,
    height: 13,
    margin: 5,
    borderRadius: 50,
  },
  uploadedTextOuter: {
    flex: 1,
    marginRight: 15,
  },
  statusIconBoxText: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 7,
  },
  statusIconBox: {
    backgroundColor: "#ffffff",
    borderRadius: 50,
    padding: 15,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  statusDivOuter: {
    flexDirection: "column",
  },
  imageUploadedMsg: {
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  uploadedText: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    height: 39,
    margin: 1,
    backgroundColor: "#FFCD4C",
    borderRadius: 30,
  },
  uploadedTextContent: {
    fontSize: 16,
    fontWeight: "bold",
  },
  uploadedImageContainer: {
    padding: 10,
    marginLeft: 10,
  },
  diseaseImage: {
    width: 170,
    height: 170,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8, // Optional: Add border radius for a rounded image
  },
  statusBox: {
    padding: 20,
    flexDirection: "column",
  },
  connector1: {
    position: "absolute",
    top: 77, // Adjust this value to position the line correctly
    left: 124, // Adjust this value to position the line correctly
    height: 5,
    backgroundColor: "#065a00",
    width: 40, // Adjust the width as needed
  },
  connector10: {
    position: "absolute",
    top: 77, // Adjust this value to position the line correctly
    left: 124, // Adjust this value to position the line correctly
    height: 5,
    backgroundColor: "#b4b4b4",
    width: 40, // Adjust the width as needed
  },
  connector2: {
    position: "absolute",
    top: 77, // Adjust this value to position the line correctly
    left: 260, // Adjust this value to position the line correctly
    height: 5,
    backgroundColor: "#065a00",
    width: 40, // Adjust the width as needed
  },
  connector20: {
    position: "absolute",
    top: 77, // Adjust this value to position the line correctly
    left: 260, // Adjust this value to position the line correctly
    height: 5,
    backgroundColor: "#b4b4b4",
    width: 40, // Adjust the width as needed
  },
  diseaseImageStatus: {
    padding: 10,

    width: 90,
    height: 90,
  },
  statusDiv: {
    flexDirection: "row",
    backgroundColor: "#f4f0f0", // Light grey background
    padding: 10,
    marginTop: 30,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    borderRadius: 60,
  },
  fullWidthMessageBox: {
    padding: 30,
    marginVertical: 20,
    borderWidth: 1,
    margin: 30,
    borderColor: "#ddd",
    backgroundColor: "#ffffff",
    borderRadius: 30,
    height: 200,
  },
  fullWidthMessageText: {
    fontSize: 18,
    color: "#333",
  },
  fullWidthMessageBoxStatus: {
    padding: 10,
    marginVertical: 20,
    borderWidth: 1,
    margin: 30,
    borderColor: "#ddd",
    backgroundColor: "#f4f3f3",
    borderRadius: 10,
  },
  fullWidthMessageTextStatus: {
    fontSize: 26,
    color: "#333",
  },
  halfWidthMessageBox: {
    padding: 10,
  },
  halfWidthMessageText: {},
});

export default RoadmapPage;
