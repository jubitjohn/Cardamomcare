import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

const resultScreen = ({ routes }) => {
  const { res } = routes.params;

  return (
    <View style={styles.container}>
      {/* First Section */}
      <View style={styles.firstSection}>
        <Text style={styles.sectionText}>
          Get your FREE personalised consultation now!
        </Text>
        <Button title="Book" onPress={() => console.log("Button pressed")} />
        <Image
          source={require("../assets/background.jpg")}
          style={styles.sectionImage}
        />
      </View>

      {/* Second Section */}
      <View style={styles.secondSection}>
        <Text style={styles.cardHeading}>Result: {res}</Text>
        <Text style={styles.cardSubHeading}>Card Sub Heading</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  firstSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginTop: 20,
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

export default resultScreen;
