import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from "react-native";
//import { Svg, Circle } from 'react-native-svg';





const Pests = () => {
  const [selectedStage, setSelectedStage] = useState("seeding");

  const diseases = {
    seeding: [
      {
        id: 1,
        title: "Bacterial wilt",
        type: "Bacteria",
        image: ('https://www.researchgate.net/publication/325478417/figure/fig1/AS:713423369289729@1547104794839/Leaf-streak-symptoms-in-large-cardamom-caused-by-Pestalotiopsis-royenae.ppm'),
      },
      {
        id: 2,
        title: "Rhizome rot",
        type: "Fungus",
        image: ('https://th-i.thgim.com/public/migration_catalog/article13566783.ece/alternates/FREE_1200/09tvclump_rot'),
      },
      {
        id: 3,
        title: "Capsule rot",
        type: "Fungus",
        image: 'https://balconygardenweb.b-cdn.net/wp-content/uploads/2022/05/cardomom.jpg',
      },
    ],
    vegetative: [
      {
        id: 1,
        title: "Black rot",
        type: "Fungus",
        image: 'https://plantvillage-production-new.s3.amazonaws.com/image/3392/file/default-3969983cbaf5a67627267674d3a682a6.jpg',
      },
      {
        id: 2,
        title: "Red spider mite",
        type: "Mite",
        image: 'https://centralpestcontrol.ie/wp-content/uploads/2020/09/Red-Spider-mite-1.jpg',
      },
    ],
    flowering: [
      {
        id: 1,
        title: "Flower blight",
        type: "Fungus",
        image: 'https://www.researchgate.net/publication/339311342/figure/fig3/AS:859597120217090@1581955332952/Blight-of-large-cardamom.jpg',
      },
      {
        id: 2,
        title: "Thrips",
        type: "Insect",
        image: 'https://onlinelibrary.wiley.com/cms/asset/20ccfd21-4239-4206-bc3d-26f36fbe72ad/aab12592-fig-0001-m.jpg',
      },
      {
        id: 3,
        title: "Capsule borer",
        type: "Insect",
        image: 'https://steamindiareportscom.files.wordpress.com/2019/11/shoot-and-capsule-borer.jpg',
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
            source={require("../assets/cardomom_pests.jpeg")}
            style={{ width: "100%",  }}
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
        <View style={styles.container}>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.row}>
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
          </View>
        </ScrollView>
        </View>
        <View style={[styles.cropDiagnosisContainer, { flexDirection: 'row' }]}>
          <View style={styles.cropDiagnosis}>
            <Text style={[styles.cropSectionTitle, { color: '#FFF', fontSize: 24 }]}>
              Crop Diagnosis
            </Text>
            <Text style={[styles.cropSectionText, { color: '#F2F2F2', lineHeight: 20, fontSize: 14 }]}>
              Identify the issues affecting your crops in just a few seconds. 
            </Text>
            <TouchableOpacity style={styles.DiagnoseButton}>
              <Text style={[styles.DiagnoseButtonText, { fontSize: 16 }]}>
                Diagnose
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cropImageContainer}>
            <Image style={styles.cropImage}
              source={require("../assets/crop.png")}
               //style={{ width: "100%" }}
            />
          </View>
       </View>
       </View>
  </ScrollView> 
)};

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
    color: '#707070',
    marginBottom: 12,
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
    color: 'white',
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
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#0B3104',
    marginRight: 10,
    marginBottom: 10,
  },
  stageButtonSelected: {
    //backgroundColor: "#222222",
    backgroundColor: '#D9D9D9',
    borderWidth:0,
    
  },
  stageButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  stageButtonTextSelected: {
    color: '#0B3104',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    shadowColor: 'black',
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
    width: '80%',
    height: '80%',
    resizeMode: "contain",
  },

  
  

  });

export default Pests;
