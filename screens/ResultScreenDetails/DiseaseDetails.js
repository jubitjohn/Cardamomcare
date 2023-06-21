import React from "react";
import { View, Text, StyleSheet } from "react-native";
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
];

const DiseaseDetails = ({ disease }) => {

  const selectedDisease = diseasesSet.find(
    (item) => item.name === disease
  );
  return (
    <View>
      <View style={styles.headingBox}>
        <View style={styles.innerHeadingBoxLeft}>
          <Foundation name="clipboard-notes" size={34} color="black" />
        </View>
        <View style={styles.innerHeadingBoxRight}>
          <Text style={styles.innerHeadingBoxRightText}>Symptoms</Text>
        </View>
      </View>
      <View>
      {selectedDisease && (
        <View style={styles.descriptionBox}>
          <Text style={styles.descriptionText}>
            {selectedDisease.description}
          </Text>
        </View>
      )}


      </View>

      <Text>diseaseDetails: {disease}</Text>
    </View>
  );
};

DiseaseDetails.propTypes = {
  disease: PropTypes.string,
};

export default DiseaseDetails;

const styles = StyleSheet.create({
  headingBox: {
    flex: 1,
    flexDirection: "row",
  },
  innerHeadingBoxLeft: {
    flex: 1,
    padding: 5,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  innerHeadingBoxRight: {
    flex: 5,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  innerHeadingBoxRightText: {
    fontSize: 16,
    fontWeight: 500,
  },
});
