// import React, { useState } from "react";
// import { View, Text, Button, Image, Platform, StyleSheet, TouchableOpacity } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import Constants from "expo-constants";
// import * as Permissions from "expo-permissions";
// import { MaterialIcons } from '@expo/vector-icons';

// const ImagePickerExample = ({navigation}) => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const navigateToDifferentPage = image => {
//     navigation.navigate("DiseaseScreen", { selectedImage: image });
//   };

//   const pickImage = async () => {
//     try {
//       if (Platform.OS !== "web") {
//         const { status } =
//           await ImagePicker.requestMediaLibraryPermissionsAsync();
//         if (status !== "granted") {
//           alert("Sorry, we need media library permissions to make this work!");
//           return;
//         }
//       }

//       let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.All,
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 1,
//       });

//       if (!result.cancelled) {
//         navigateToDifferentPage(result.uri);
//         setSelectedImage(result.uri);

//       }
//     } catch (error) {
//       console.log("Error when picking image: ", error);
//     }
//   };

//   const takeImage = async () => {
//     try {
//       if (Platform.OS !== "web") {
//         const { status } = await Permissions.askAsync(
//           Permissions.CAMERA,
//           Permissions.MEDIA_LIBRARY
//         );
//         if (status !== "granted") {
//           alert(
//             "Sorry, we need camera and media library permissions to make this work!"
//           );
//           return;
//         }
//       }

//       let result = await ImagePicker.launchCameraAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.All,
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 1,
//       });

//       if (!result.cancelled) {
//         setSelectedImage(result.uri);
//       }
//     } catch (error) {
//       console.log("Error when taking image: ", error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.imageButtons}><Button  title="Pick an image from camera roll" onPress={pickImage} /></TouchableOpacity>
//       <TouchableOpacity ><Button title="Take a photo" onPress={takeImage}  /></TouchableOpacity>

//       <View>{selectedImage && (
//         <Image source={{ uri: selectedImage }} style={styles.image} />
//       )}</View>

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "rgba(11, 49, 4, 0)",

//   },
//   image: {
//     width: 200,
//     height: 200,
//     resizeMode: "contain",
//   },
//   imageButtons:{
//     backgroundColor:'#046AE1',
//     borderRadius:20,
//     padding:2,
//   },
// });

// export default ImagePickerExample;

import { Camera, CameraType } from "expo-camera";
import { useState, useEffect, useRef } from "react";
import { Image, Animated, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  Modal,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import * as ImageManipulator from "expo-image-manipulator";


export default function ImagePickerExample({ navigation }) {
  const Stack = createStackNavigator();
  const animateIconRef = useRef(null);
  const iconSize = 25;
  const iconColor = "white";
  const loadingText = "Detecting Crop";

  
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [photo, setPhoto] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  
  const [isLoading, setIsLoading] = useState(false);
  

  let cameraRef = null;

  const Dot = ({ style }) => {
    const [opacity] = useState(new Animated.Value(0));
    const [scale] = useState(new Animated.Value(0));

    useEffect(() => {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(scale, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(scale, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
      ]).start();
    }, []);

    return (
      <Animated.View
        style={[styles.dot, style, { opacity, transform: [{ scale }] }]}
      />
    );
  };

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  async function takePicture() {
    if (cameraRef) {
      const photoData = await cameraRef.takePictureAsync();
      setPhoto(photoData);
    }
  }

  const handleTakePhoto = async () => {
    if (photo) {
      const photoUri = photo.uri; // Replace with your photo URI

      sendImageToApi(photoUri);
    }
  };

  const reducePhotoSize = async (photoUri) => {
    const manipulatedPhoto = await ImageManipulator.manipulateAsync(
      photoUri,
      [{ resize: { width: 800 } }], // Adjust the width as needed
      { compress: 0.7, format: "jpeg" } // Adjust the compression and format as needed
    );

    return manipulatedPhoto.uri;
  };

  const sendImageToApi = async (photoUri) => {
    try {
      setIsLoading(true);
      const resizedPhotoUri = await reducePhotoSize(photoUri);
      const formData = new FormData();
      formData.append("image", {
        uri: resizedPhotoUri,
        type: "application/octet-stream",
        name: "photo.jpg",
      });

      const response = await fetch(
        "https://cardamomdiseaseprediction-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/22a1ef84-a940-4f32-99cb-a26c6a6aedf8/classify/iterations/Cardamom_disease_Detection_model/image",
        {
          method: "POST",
          headers: {
            "Prediction-Key": "1b115ee4bde443f78e946912687a8fab",
            "Content-Type": "multipart/form-data",
          },
          body: formData,
        }
      );

      const data = await response.json();
      result = data.predictions[0].tagName;
      setTimeout(() => {
        // Code to be executed after the delay
        console.log("Delayed execution");

        // Call your function or perform the desired actions here
        navigation.navigate("resultScreen", {res: result});
      }, 2000); // Delay of 2000 milliseconds (2 seconds)
      animateIconRef.current?.swing(2000);

      console.log(data.predictions[0].tagName);
      console.log(data.predictions[0].probability);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        // Code to be executed after the delay
        console.log("Delayed execution");

        // Call your function or perform the desired actions here
        setIsLoading(false);
      }, 2000);
      // Hide the dark overlay after API response
    }
  };

  

  return (
    <View style={styles.container}>
      {photo && (
        <View style={styles.preview}>
          <Image source={photo} style={styles.previewImage} />
          <Button title="Retake" onPress={() => setPhoto(null)} />
          <Button title="Diagnose" onPress={() => handleTakePhoto()} />
          {isLoading && (
            <View style={styles.overlay}>
              <View style={styles.overlayContent}>
                <Animatable.View ref={animateIconRef}>
                  <FontAwesome5
                    name="leaf"
                    size={iconSize}
                    color={iconColor}
                  />
                </Animatable.View>
                
                <Text style={styles.loadingText}>{loadingText}</Text>
              </View>
            </View>
          )}
        </View>
      )}

      {!photo && (
        <Camera
          style={styles.camera}
          type={type}
          ref={(ref) => (cameraRef = ref)}
        >
          <Dot style={styles.dot1} />
          <Dot style={styles.dot2} />
          <Dot style={styles.dot3} />
          <Dot style={styles.dot4} />
          <Dot style={styles.dot5} />
          <Dot style={styles.dot6} />
          <Dot style={styles.dot7} />
          <Dot style={styles.dot8} />
          <Dot style={styles.dot9} />
          <Dot style={styles.dot10} />
          <Dot style={styles.dot11} />
          <Dot style={styles.dot12} />
          <Dot style={styles.dot13} />
          <Dot style={styles.dot14} />
          <View style={styles.cameraFrameContainer}>
            <View style={styles.cameraFrame}></View>
          </View>
          <View>
            <Text style={styles.frameInstruction}>
              Fit the crop damage within the frame
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.galleryButton}
              onPress={toggleCameraType}
            >
              <MaterialIcons
                name="flip-camera-android"
                size={44}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.captureButton}
              onPress={takePicture}
            >
              <Text style={styles.text}></Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.infoButton}
              onPress={() => setModalVisible(true)}
            >
              <FontAwesome5 name="question-circle" size={44} color="white" />
            </TouchableOpacity>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(false);
              }}
            >
              <View style={styles.popUpinfo}>
                <View style={styles.popUpinfoContent}>
                  <View>
                    <Text style={styles.popUpinfoContentTitle}>
                      Diagnose Tips
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.popUpinfoDescription}>
                      1. Get close to the crop and make sure to fit the crop
                      damage within the frame. {"\n"}
                      {"\n"}
                      2. Make sure the camera is properly focused on the crop
                      damage. {"\n"}
                      {"\n"}
                      3. Make sure the crop is clearly visible and its not too
                      dark or bright. {"\n"}
                      {"\n"}
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={styles.popUpCloseButton}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.popUpCloseButtonText}>Got it</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </Camera>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 5,
    paddingBottom: 30,
  },
  cameraFrameContainer: {
    marginTop: 30,
    alignSelf: "center",
    height: "70%",
    width: "85%",
    borderWidth: 3,
    borderRadius: 58,
    borderColor: "#ccc",
  },
  frameInstruction: {
    color: "white",
    padding: 25,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: 600,
  },

  galleryButton: {
    padding: 15,
    marginLeft: 25,
    borderRadius: 10,
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "flex-start",
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 999,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    borderColor: "#ccc",
    borderWidth: 5,
  },

  infoButton: {
    padding: 15,
    marginRight: 25,
    borderRadius: 10,
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "flex-end",
  },
  popUpinfo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  popUpinfoContent: {
    backgroundColor: "white",
    padding: 20,
    height: "50%",
    width: "75%",
    borderRadius: 20,
  },
  popUpinfoContentTitle: {
    alignSelf: "center",
    padding: 15,
    fontSize: 20,
    fontWeight: 600,
  },
  popUpinfoDescription: {
    fontSize: 17,
    marginTop: 20,
    marginHorizontal: 16,

    textAlign: "left",
  },
  popUpCloseButton: {
    backgroundColor: "#0B3104",

    borderRadius: 50,
    alignSelf: "center",
    justifyContent: "center",
    padding: 10,
    paddingHorizontal: 40,
  },
  popUpCloseButtonText: {
    color: "white",
    fontSize: 17,
  },

  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  preview: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  previewImage: {
    width: "90%",
    height: "80%",
    resizeMode: "contain",
  },
  dot: {
    position: "absolute",
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "transparent",
  },
  dot1: {
    top: "20%",
    left: "70%",
  },
  dot2: {
    top: "30%",
    left: "30%",
  },
  dot3: {
    top: "40%",
    left: "40%",
  },
  dot4: {
    top: "6%",
    left: "40%",
  },
  dot5: {
    top: "70%",
    left: "60%",
  },
  dot6: {
    top: "70%",
    left: "50%",
  },
  dot7: {
    top: "50%",
    left: "50%",
  },
  dot8: {
    top: "20%",
    left: "20%",
  },
  dot9: {
    top: "30%",
    left: "60%",
  },
  dot10: {
    top: "30%",
    left: "40%",
  },
  dot11: {
    top: "20%",
    left: "30%",
  },
  dot12: {
    top: "50%",
    left: "55%",
  },
  dot13: {
    top: "70%",
    left: "80%",
  },
  dot14: {
    top: "30%",
    left: "680%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayContent: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  loadingText: {
    color: "white",
    marginTop: 10,
  },
});
