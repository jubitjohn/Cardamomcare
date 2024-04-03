import React, { useState, useEffect, useContext } from "react";
import DataContext from "./UserLogin/data/data-context";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
//import { Svg, Circle } from 'react-native-svg';
import { collectUserUploadedImageData } from "../utils/collectUserUploadedImages";
import { NavigationContext } from "react-navigation";

const UserUploads = ({ navigation }) => {
  const [selectedStage, setSelectedStage] = useState("RecentUploads");
  const [categorizedData, setCategorizedData] = useState({
    RecentUploads: [],
  });
  const [userNumber, setUserNumber] = useState(
    useContext(DataContext).userNumber
  );

  const [data, setData] = useState([]);
  console.log("Hello");

  useEffect(() => {
    // Fetch data when the component mounts
    console.log("Hello Before");
    collectUserUploadedImageData("users", userNumber, "images")
      .then((fetchedData) => {
        print("fetchedDatafetchedDatafetchedData", fetchedData);
        // Set the fetched data to the state
        setData(fetchedData);
      })
      .catch((error) => {
        console.log("Hello after in catch 1");
        console.error("Error fetching data useruploads:", error);
      });
    console.log("testing data inside useeffects", data);
  }, [collectUserUploadedImageData, NavigationContext]);

  useEffect(() => {
    // Categorize the fetched data based on the status value
    const categorizeData = () => {
      const newData = { ...categorizedData }; // Copy the existing state
      if (data) {
        data.forEach((item) => {
          const itemId = item.id;

          if (
            !newData.RecentUploads.some(
              (existingItem) => existingItem.id === itemId
            )
          ) {
            newData.RecentUploads.push(item);
          }
        });
      }

      // Update the state with the new categorized data
      setCategorizedData(newData);
    };

    categorizeData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <ScrollView>
      <View style={styles.diseasesSection}>
        <View style={styles.stageButtons}>
          <TouchableOpacity
            style={[styles.stageButton, styles.stageButtonSelected]}
          >
            <Text
              style={[styles.stageButtonText, styles.stageButtonTextSelected]}
            >
              Recent Uploads
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            <View style={styles.row}>
              {categorizedData[selectedStage].map((uploads, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.diseaseCard}
                  onPress={() =>
                    navigation.navigate("RoadmapPage", {
                      uploadDetails: uploads,
                      isVisible: true,
                    })
                  }
                >
                  <Image
                    style={styles.diseaseImage}
                    source={{ uri: uploads.data.downloadURL }}
                  />
                  <View style={styles.diseaseInfo}>
                    <Text style={styles.diseaseTitle}>
                      {uploads.data.status}
                    </Text>
                    <Text style={styles.diseaseType}>
                      {uploads.data.message}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={[styles.cropDiagnosisContainer, { flexDirection: "row" }]}>
          <View style={styles.cropDiagnosis}>
            <Text
              style={[styles.cropSectionTitle, { color: "#FFF", fontSize: 24 }]}
            >
              AI Crop Diagnosis
            </Text>
            <Text
              style={[
                styles.cropSectionText,
                { color: "#F2F2F2", lineHeight: 20, fontSize: 14 },
              ]}
            >
              Identify the issues affecting your crops in just a few seconds.
            </Text>
            <TouchableOpacity style={styles.DiagnoseButton}>
              <Text style={[styles.DiagnoseButtonText, { fontSize: 16 }]}>
                Diagnose
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cropImageContainer}>
            <Image
              style={styles.cropImage}
              source={require("../assets/crop.png")}
              //style={{ width: "100%" }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    marginLeft: 5,
  },
  sectionTitle: {
    //fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  sectionText: {
    fontWeight: "semibold",
    fontSize: 13,
    color: "#707070",
    marginBottom: 12,
  },
  cardamomDescription: {
    fontSize: 14,
    color: "#888",
  },
  cardamomImage: {
    width: 150,
    height: 150,
  },
  learnMoreButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: "#2B6719",
    marginBottom: 10,
  },
  learnMoreButtonText: {
    alignContent: "center",
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
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
    marginTop: 10,
  },
  stageButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    //backgroundColor: "#D9D9D9",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#0B3104",
    marginRight: 10,
    marginBottom: 10,
  },
  stageButtonSelected: {
    //backgroundColor: "#222222",
    backgroundColor: "#D9D9D9",
    borderWidth: 0,
  },
  stageButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  stageButtonTextSelected: {
    color: "#0B3104",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  diseaseCard: {
    //width: '50%',
    width: 150,
    height: 190,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginRight: 10,
    overflow: "hidden",
    marginHorizontal: 5,
    marginBottom: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  diseaseImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  diseaseInfo: {
    padding: 10,
  },
  diseaseTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  diseaseType: {
    fontSize: 14,
    color: "#888",
    marginTop: 5,
  },
  cropDiagnosisContainer: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 5,
    marginVertical: 5,
    //backgroundColor: "#57B246",
    backgroundColor: "#65BA4C",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 25,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cropDiagnosis: {
    flex: 1,
    padding: 10,
    paddingLeft: 25,

    marginTop: 10,
  },
  cropSectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  cropSectionText: {
    color: "#707070",
    fontSize: 16,
  },
  DiagnoseButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 15,
    backgroundColor: "#FFF",
    marginBottom: 20,
    marginTop: 20,
  },
  DiagnoseButtonText: {
    alignContent: "center",
    fontSize: 15,
    color: "#0B3104",
    fontWeight: "bold",
  },
  cropImageContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  cropImage: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
});

export default UserUploads;
