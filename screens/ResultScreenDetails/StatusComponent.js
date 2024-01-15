import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Svg, { Line } from "react-native-svg";

const statuses = [
  { name: "Pending", icon: "🕒", message: "Waiting for approval" },
  { name: "In Progress", icon: "⏳", message: "In progress" },
  { name: "Completed", icon: "✅", message: "Task completed" },
];

const RoadmapPage = ({ navigation }) => {
  const prop1 = navigation.getParam("uploadDetails");
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.diseaseImage}
        source={{ uri: prop1.data.downloadURL }}
      />
      <View style={styles.statusRow}>
        <Text>{prop1.id}</Text>
        {statuses.map((status, index) => (
          <View key={index} style={styles.statusBox}>
            <Text
              style={[
                styles.statusText,
                { color: getStatusColor(status.name) },
              ]}
            >
              {status.icon}
            </Text>
            {console.log(
              "uri: prop1.data.downloadURL ",
              prop1.data.downloadURL
            )}
            <View></View>
          </View>
        ))}
      </View>

      <Svg height="50" width="100%">
        <Line x1="0" y1="0" x2="100%" y2="0" stroke="#000" strokeWidth="2" />
      </Svg>

      <View style={styles.messageRow}>
        <Text>{prop1.data.sta}</Text>
        {statuses.map((status, index) => (
          <View key={index} style={styles.messageBox}>
            <Text style={styles.messageText}>{status.message}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case "Pending":
      return "yellow";
    case "In Progress":
      return "orange";
    case "Completed":
      return "green";
    default:
      return "black";
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  diseaseImage: {
    width: 100, // Adjust according to your layout
    height: 100, // Adjust according to your layout
  },
  statusBox: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  statusText: {
    fontSize: 20,
  },
  messageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  messageBox: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    marginTop: 10,
  },
  messageText: {
    fontSize: 16,
  },
});

export default RoadmapPage;
