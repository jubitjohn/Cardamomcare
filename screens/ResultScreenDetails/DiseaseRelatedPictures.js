import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import PropTypes from "prop-types";

import { Foundation } from "@expo/vector-icons";

const diseasesSet = [
  {
    name: "Thrips_1",
    // images: [
    //   require("../../assets/image1.jpg"),
    //   require("../../assets/image2.jpg"),
    //   require("../../assets/image3.jpg"),
    // ],
  },
  {
    name: "Capsule Rot",
    // images: [
    //   require("../../assets/image4.jpg"),
    //   require("../../assets/image5.jpg"),
    //   require("../../assets/image6.jpg"),
    // ],
  },
  {
    name: "Root Rot",
    // images: [
    //   require("../../assets/image7.jpg"),
    //   require("../../assets/image8.jpg"),
    //   require("../../assets/image9.jpg"),
    // ],
  },
  {
    name: "Clump Rot",
    // images: [
    //   require("../../assets/image10.jpg"),
    //   require("../../assets/image11.jpg"),
    //   require("../../assets/image12.jpg"),
    // ],
  },
];

const DiseasesRelatedPictures = ({ disease }) => {
  const selectedDisease = diseasesSet.find((item) => item.name === disease);
  return (
    <View style={styles.container}>
      <View style={styles.diseasePictureBox}>
        <View style={styles.diseasePictureBoxLeft}>
          <Image
            style={styles.image}
            source={require("../../assets/capsule_borer.jpeg")}
            resizeMode="cover"
          />
        </View>
        <View style={styles.diseasePictureBoxRight}>
          <View style={styles.diseasePictureBoxRightTop}>
            <Image
             style={styles.image}
              source={require("../../assets/capsule_rot.jpeg")}
              resizeMode="cover"
            />
          </View>
          <View style={styles.diseasePictureBoxRightBottom}>
            <Image
             style={styles.image}
              source={require("../../assets/thrips.jpeg")}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>

     
    </View>
  );
};

DiseasesRelatedPictures.propTypes = {
  disease: PropTypes.string,
};

export default DiseasesRelatedPictures;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 30,
  },
  diseasePictureBox: {
    padding: 10,
    flexDirection: "row",
    height: 300,
  },
  diseasePictureBoxLeft: {
    flex: 1,
    
  },
  diseasePictureBoxRight: {
    flex: 1,
    flexDirection: "column",
  },
  diseasePictureBoxRightTop: {
    flex: 1,
   
  },
  diseasePictureBoxRightBottom: {
    flex: 1,
    
  },
  image: {
    margin:5,
    flex: 1,
    borderRadius: 10,
    width: undefined,
    height: undefined,
  },
});
