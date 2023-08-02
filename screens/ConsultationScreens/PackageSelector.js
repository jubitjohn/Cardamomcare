import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const PackageSelector = ({ navigation }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePackageSelect = (consultationPackage) => {
    setSelectedPackage(consultationPackage);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Book your personalized consultation</Text>
        <Text style={styles.description}>
          An overview of the services that we are providing is our crop
          consultation.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.serviceTitle}>Select Service</Text>

        <TouchableOpacity
          style={[
            styles.package,
            selectedPackage === "package1" && styles.selectedPackage,
          ]}
          onPress={() => handlePackageSelect("package1")}
        >
          <Text
            style={[
              styles.packageText,
              selectedPackage === "package1" && styles.selectedPackageText,
            ]}
          >
            Package 1
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.package,
            selectedPackage === "package2" && styles.selectedPackage,
          ]}
          onPress={() => handlePackageSelect("package2")}
        >
          <Text
            style={[
              styles.packageText,
              selectedPackage === "package2" && styles.selectedPackageText,
            ]}
          >
            Package 2
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.package,
            selectedPackage === "package3" && styles.selectedPackage,
          ]}
          onPress={() => handlePackageSelect("package3")}
        >
          <Text
            style={[
              styles.packageText,
              selectedPackage === "package3" && styles.selectedPackageText,
            ]}
          >
            Package 3
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SlotBooking")}
      >
        <Text style={styles.buttonText}>Next</Text>
        <Text style={styles.buttonArrow}>➡</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#555",
  },
  serviceTitle: {
    fontSize: 18,
    color: "green",
    marginBottom: 10,
  },
  package: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  selectedPackage: {
    backgroundColor: "green",
  },
  packageText: {
    fontSize: 16,
    color: "#000",
  },
  selectedPackageText: {
    color: "#fff",
  },
  button: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    marginRight: 5,
  },
  buttonArrow: {
    fontSize: 16,
    color: "#fff",
  },
});

export default PackageSelector;
