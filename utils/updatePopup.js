import React from "react";
import { View, Text, StyleSheet, Button, Linking } from "react-native";

const UpdateScreen = ({ versionName, updateNote }) => {
  const handleUpdate = () => {
    // Redirect user to the Google Play Store page of your app
    Linking.openURL("market://details?id=your.package.name");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Available</Text>
      <Text style={styles.version}>Version {versionName}</Text>
      <Text style={styles.note}>{updateNote}</Text>
      <Button title="Update Now" onPress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff", // Change background color as needed
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  version: {
    fontSize: 18,
    marginBottom: 10,
  },
  note: {
    marginBottom: 20,
    textAlign: "center",
  },
});

export default UpdateScreen;
