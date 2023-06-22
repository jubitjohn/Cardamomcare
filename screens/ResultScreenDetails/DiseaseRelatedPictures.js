import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import PropTypes from "prop-types";

import { Foundation } from "@expo/vector-icons";

const diseasesSet = [
  {
    name: "Thrips_1",
    description:
      "Leaf blight is a fungal disease that causes brown spots to appear on the leaves of the cardamom plant. The spots can grow in size and cause the leaves to wither and die. It can be controlled with fungicides and proper hygiene practices in the plantation.",
  },
  {
    name: "Capsule Rot",
    description:
      "Capsule rot is a fungal disease that affects the developing capsules of the cardamom plant. The disease causes the capsules to rot and the seeds inside to turn black. The disease can be controlled by using fungicides and improving ventilation in the plantation.",
  },
  {
    name: "Root Rot",
    description:
      "Root rot is a soil-borne disease caused by fungi that affects the roots of the cardamom plant. The disease causes the roots to rot, which results in stunted growth and yellowing of leaves. It can be controlled by using fungicides and improving drainage in the plantation.",
  },
  {
    name: "Clump Rot",
    description:
      "Root rot is a soil-borne disease caused by fungi that affects the roots of the cardamom plant. The disease causes the roots to rot, which results in stunted growth and yellowing of leaves. It can be controlled by using fungicides and improving drainage in the plantation.",
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
