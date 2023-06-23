import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { Foundation } from "@expo/vector-icons";

const diseasesSet = [
  {
    name: "Thrips_1",
    description:
      "• The panicles (flower clusters) become stunted\n\n• Shedding of flowers and immature capsules thus reducing the total number of capsules formed.\n\n• Infestation causes formation of corky encrustations on pods resulting in their malformed and shriveled condition. \n\n• Such pods lack their fine aroma and the seeds within are also poorly developed.",
  },
  {
    name: "Capsule Rot",
    description:
    "• The disease appears during the rainy season.\n\n• On the infected leaves, water soaked lesions appear fi rst followed by rotting and shredding of leaves along the veins.\n\n• The infected capsules become dull greenish brown and decay. This emits a foul smell and subsequently shed. \n\n• Infection spreads to the panicles and tillers resulting in their decay.",
  },
  {
    name: "Fuzarium_2",
    description:
      "Root rot is a soil-borne disease caused by fungi that affects the roots of the cardamom plant. The disease causes the roots to rot, which results in stunted growth and yellowing of leaves. It can be controlled by using fungicides and improving drainage in the plantation.",
  },
  {
    name: "Clump Rot",
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
    </View>
  );
};

DiseaseDetails.propTypes = {
  disease: PropTypes.string,
};

export default DiseaseDetails;

const styles = StyleSheet.create({
  headingBox: {
    paddingTop: 10,
    flex: 1,
    flexDirection: "row",
  },
  innerHeadingBoxLeft: {
    flex: 1,
    padding: 0,
    alignItems: "center",
  },
  innerHeadingBoxRight: {
    flex: 5,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  innerHeadingBoxRightText: {
    fontSize: 16,
    fontWeight: 700,
  },
  descriptionBox :{
    padding:10,
    paddingTop:15,

  },
  descriptionText:{

    fontSize:15,

  },
});
