import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import DiseaseDetails from "./DiseaseDetails";
import DiseasesRelatedPictures from "./DiseaseRelatedPictures";
import ProductSuggestion from "./ProductSuggestion";
import { MaterialIcons } from "@expo/vector-icons";
import { fetchData } from "../../utils/getDataFromDb";
import DataContext from "../UserLogin/data/data-context";
import RoadmapPage from "./StatusComponent";
// import TreatmentPlan from "./TreatmentPlan";

const ResultScreen = ({ navigation }) => {
  const [status, setStatus] = useState("");
  const [instance, setInstance] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false); // New state variable
  const prop1 = navigation.getParam("res");
  const uploadId = navigation.getParam("imageId");
  const userId = useContext(DataContext).userNumber;

  console.log("userId", uploadId);

  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      const result = await fetchData("users", userId, "images", uploadId);
      const formattedInstance = {
        data: {
          downloadURL: result.downloadURL,
          message: result.message,
          status: result.status,
        },
      };
      console.log("instance", instance);
      setInstance(formattedInstance);
      console.log("result from common db pick : ", result.status);
      setDataLoaded(true);
    };

    fetchDataFromFirestore();
  }, [uploadId, userId]);
  return (
    <ScrollView style={styles.container}>
      {/* First Section */}
      <LinearGradient
        colors={["#1a961a", "white", "white", "white", "#1a961a"]}
        start={[0, 1]} // Top-left corner
        end={[1, 0]} // Bottom-right corner
      >
        <View style={styles.firstSection}>
          <Text style={styles.headingText}>
            Image successfully {"\n"}uploaded{" "}
            <MaterialIcons name="check" size={23} color="green" />
          </Text>
          <Text style={styles.sectionText}>
            Bringing expert farming advice directly to your{" "}
            <Text style={{ color: "green", fontSize: 20 }}>doorstep </Text>
          </Text>
          <TouchableOpacity style={styles.bookingButton}>
            <Text style={styles.bookingButtonText}>Book</Text>
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            <View style={styles.imageContainerFirst}></View>
            <View style={styles.imageContainerSecond}>
              <Image
                source={require("../../assets/consultant.png")}
                style={styles.sectionImage}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
      <RoadmapPage
        navigation={navigation}
        uploadDetails={instance}
        dataLoaded={dataLoaded}
      />
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
    fontSize: 15,
    padding: 18,
    marginBottom: 1,
    textAlign: "left",
  },
  headingText: {
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
    marginLeft: 18,
  },
  bookingButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  imageContainer: {
    flexDirection: "row",
  },
  imageContainerFirst: {
    flex: 1,
  },
  imageContainerSecond: {
    flex: 2,
  },
  secondSection: {
    marginTop: -25,
    borderRadius: 30,
    padding: 10,
    backgroundColor: "#ffffff",
  },
  cardHeading: {
    padding: 25,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  cardSubHeading: {
    fontSize: 16,
    color: "#888",
  },
});

export default ResultScreen;
