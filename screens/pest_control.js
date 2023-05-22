import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from "react-native";

const Pests = () => {
  const [selectedStage, setSelectedStage] = useState("seeding");

  const diseases = {
    seeding: [
      {
        id: 1,
        title: "Bacterial wilt",
        type: "Bacteria",
        image: 'https://dummyimage.com/100x100/000/fff',
      },
      {
        id: 2,
        title: "Rhizome rot",
        type: "Fungus",
        image: 'https://dummyimage.com/100x100/000/fff',
      },
      {
        id: 3,
        title: "Capsule rot",
        type: "Fungus",
        image: 'https://dummyimage.com/100x100/000/fff',
      },
    ],
    vegetative: [
      {
        id: 1,
        title: "Black rot",
        type: "Fungus",
        image: 'https://dummyimage.com/100x100/000/fff',
      },
      {
        id: 2,
        title: "Red spider mite",
        type: "Mite",
        image: 'https://dummyimage.com/100x100/000/fff',
      },
    ],
    flowering: [
      {
        id: 1,
        title: "Flower blight",
        type: "Fungus",
        image: 'https://dummyimage.com/100x100/000/fff',
      },
      {
        id: 2,
        title: "Thrips",
        type: "Insect",
        image: 'https://dummyimage.com/100x100/000/fff',
      },
      {
        id: 3,
        title: "Capsule borer",
        type: "Insect",
        image: 'https://dummyimage.com/100x100/000/fff',
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardamomSection}>
        <View style={styles.fieldMonitoring}>
          <Text style={styles.sectionTitle}>Field Monitoring</Text>
          <Text style={styles.sectionText}>
            Cardamom plants normally start bearing capsules from the third year
            of planting. The fruit matures in 120 days after flowering. On
            maturity, seeds turn dark brown to black in colour.
          </Text>
          <TouchableOpacity style={styles.learnMoreButton}>
            <Text style={styles.learnMoreButtonText}>Learn More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardamomImage}>
          <Image
            source={require("../assets/5.3.jpg")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </View>
      <View style={styles.diseasesSection}>
        <Text style={styles.sectionTitle}>Diseases By Stage</Text>
        <View style={styles.stageButtons}>
          <TouchableOpacity
            style={[
              styles.stageButton,
              selectedStage === "seeding" && styles.stageButtonSelected,
            ]}
            onPress={() => setSelectedStage("seeding")}
          >
            <Text
              style={[
                styles.stageButtonText,
                selectedStage === "seeding" && styles.stageButtonTextSelected,
              ]}
            >
              Seeding
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.stageButton,
              selectedStage === "vegetative" && styles.stageButtonSelected,
            ]}
            onPress={() => setSelectedStage("vegetative")}
          >
            <Text
              style={[
                styles.stageButtonText,
                selectedStage === "vegetative" &&
                  styles.stageButtonTextSelected,
              ]}
            >
              Vegetative
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.stageButton,
              selectedStage === "flowering" && styles.stageButtonSelected,
            ]}
            onPress={() => setSelectedStage("flowering")}
          >
            <Text
              style={[
                styles.stageButtonText,
                selectedStage === "flowering" && styles.stageButtonTextSelected,
              ]}
            >
              Flowering
            </Text>
          </TouchableOpacity>
          
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {diseases[selectedStage].map((disease, index) => (
              <TouchableOpacity key={index} style={styles.diseaseCard}>
                <Image
                  style={styles.diseaseImage}
                  source={{ uri: disease.image }}
                />
                <View style={styles.diseaseInfo}>
                  <Text style={styles.diseaseTitle}>{disease.title}</Text>
                  <Text style={styles.diseaseType}>{disease.type}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },
  cardamomSection: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
  },
  fieldMonitoring: {
    flex: 1,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardamomDescription: {
    fontSize: 14,
    color: "#888",
  },
  cardamomImage:{
    width:150,
    height:150,
  },
  learnMoreButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: "#FFC107",
  },
  learnMoreText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  imageContainer: {
    flex: 1,
    height: "100%",
    aspectRatio: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  diseasesSection: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 40,
  },
  stageButtons: {
    flexDirection: "row",
    marginBottom: 20,
  },
  stageButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: "#eee",
    marginRight: 10,
  },
  stageButtonSelected: {
    backgroundColor: "#222222",
  },
  stageButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  stageButtonTextSelected: {
    color: "#fff",
  },
  diseaseCard: {
    width: 150,
    height: 150,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginRight: 10,
    overflow: "hidden",
  },
  diseaseImage: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },
  diseaseInfo: {
    padding: 10,
  },
  diseaseTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  diseaseType: {
    fontSize: 12,
    color: "#888",
  },
});

export default Pests;
