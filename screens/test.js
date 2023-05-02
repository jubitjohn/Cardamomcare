import React, { useState } from "react";
import { View, Text, Button, Image, Platform, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

const ImagePickerExample = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigateToDifferentPage = image => {
    navigation.navigate("DiseaseScreen", { selectedImage: image });
  };

  const pickImage = async () => {
    try {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need media library permissions to make this work!");
          return;
        }
      }

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        navigateToDifferentPage(result.uri);
        setSelectedImage(result.uri);
        
      }
    } catch (error) {
      console.log("Error when picking image: ", error);
    }
  };

  const takeImage = async () => {
    try {
      if (Platform.OS !== "web") {
        const { status } = await Permissions.askAsync(
          Permissions.CAMERA,
          Permissions.CAMERA_ROLL
        );
        if (status !== "granted") {
          alert(
            "Sorry, we need camera and media library permissions to make this work!"
          );
          return;
        }
      }

      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setSelectedImage(result.uri);
      }
    } catch (error) {
      console.log("Error when taking image: ", error);
    }
  };

  return (
    <View style={styles.container}>
      {selectedImage && <Image source={selectedImage} style={styles.image} />}
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <Button title="Take a photo" onPress={takeImage} />
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});

export default ImagePickerExample;
