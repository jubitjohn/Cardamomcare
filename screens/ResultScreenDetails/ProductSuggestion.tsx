import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ProductSuggestion = ({ disease }) => {
  const diseaseIdentified = disease;

  const diseases = {
    Thrips_1: [
      {
        id: 1,
        title: "Bacterial wilt",
        type: "Bacteria",
        image:
          "https://www.researchgate.net/publication/325478417/figure/fig1/AS:713423369289729@1547104794839/Leaf-streak-symptoms-in-large-cardamom-caused-by-Pestalotiopsis-royenae.ppm",
      },
      {
        id: 2,
        title: "Rhizome rot",
        type: "Fungus",
        image:
          "https://th-i.thgim.com/public/migration_catalog/article13566783.ece/alternates/FREE_1200/09tvclump_rot",
      },
      {
        id: 3,
        title: "Capsule rot",
        type: "Fungus",
        image:
          "https://balconygardenweb.b-cdn.net/wp-content/uploads/2022/05/cardomom.jpg",
      },
    ],
    vegetative: [
      {
        id: 1,
        title: "Black rot",
        type: "Fungus",
        image:
          "https://plantvillage-production-new.s3.amazonaws.com/image/3392/file/default-3969983cbaf5a67627267674d3a682a6.jpg",
      },
      {
        id: 2,
        title: "Red spider mite",
        type: "Mite",
        image:
          "https://centralpestcontrol.ie/wp-content/uploads/2020/09/Red-Spider-mite-1.jpg",
      },
    ],
    flowering: [
      {
        id: 1,
        title: "Flower blight",
        type: "Fungus",
        image:
          "https://www.researchgate.net/publication/339311342/figure/fig3/AS:859597120217090@1581955332952/Blight-of-large-cardamom.jpg",
      },
      {
        id: 2,
        title: "Thrips",
        type: "Insect",
        image:
          "https://onlinelibrary.wiley.com/cms/asset/20ccfd21-4239-4206-bc3d-26f36fbe72ad/aab12592-fig-0001-m.jpg",
      },
      {
        id: 3,
        title: "Capsule borer",
        type: "Insect",
        image:
          "https://steamindiareportscom.files.wordpress.com/2019/11/shoot-and-capsule-borer.jpg",
      },
    ],
  };

  return (
    <View>
      <View style={styles.diseasesSection}>
        <Text style={styles.sectionTitle}>Remedies</Text>
        <View style={styles.container}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.row}>
              {diseases[diseaseIdentified].map((disease, index) => (
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
      </View>
    </View>
  );
};

ProductSuggestion.propTypes = {
  disease: PropTypes.string,
};
export default ProductSuggestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },

  sectionTitle: {
    //fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
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
});
