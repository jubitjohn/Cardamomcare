import { Camera, CameraType } from "expo-camera";
import { useState, useEffect, useRef } from "react";
import { Image, Animated, ActivityIndicator, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
const windowHeight = Dimensions.get("window").height;
import { FontAwesome } from "@expo/vector-icons";

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

import * as ScanImage from "expo-image-manipulator";

export default function ImagePickerExample({ navigation }) {
  const animateIconRef = useRef(null);
  const iconSize = 25;
  const iconColor = "white";
  const loadingText = "Detecting Crop";

  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [photo, setPhoto] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
    const manipulatedPhoto = await ScanImage.manipulateAsync(
      photoUri,
      [{ resize: { width: 800 } }], // Adjust the width as needed
      { compress: 0.7, format: "jpeg" } // Adjust the compression and format as needed
    );

    return manipulatedPhoto.uri;
  };

  const sendImageToApi = async (photoUri) => {
    result = "Cardamom plant not identified";
    try {
      setIsLoading(true);
      const resizedPhotoUri = await reducePhotoSize(photoUri);
      const formData = new FormData();
      formData.append("image", {
        uri: resizedPhotoUri,
        type: "application/octet-stream",
        name: "photo.jpg",
      });

      //overlay prediction for cardamom

      const responseOverlay = await fetch(
        "https://cardamomdiseaseprediction-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/3e4f1dfa-d45f-49b4-a506-76af551dbe37/classify/iterations/Iteration1/image",
        {
          method: "POST",
          headers: {
            "Prediction-Key": "1b115ee4bde443f78e946912687a8fab",
            "Content-Type": "multipart/form-data",
          },
          body: formData,
        }
      );

      // Commented out the overlay prediction for cardamom because the model is not active now

      // const dataOverlay = await responseOverlay.json();
      // resultOverlay = await dataOverlay.predictions[0].tagName;
      // console.log("Is cardamom or not :", dataOverlay.predictions[0].tagName);

      // Main model

      if (resultOverlay == "Cardamom") {
        const response = await fetch(
          "https://cardamomdiseaseprediction-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/22a1ef84-a940-4f32-99cb-a26c6a6aedf8/classify/iterations/Iteration2/image",
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
        result = (await data.predictions[0].tagName) || "Thrips_1";
        console.log(data.predictions[0].tagName);
        console.log("Result Value", result);
        console.log(data.predictions[0].probability);
      }

      animateIconRef.current?.swing(2000);

      setTimeout(() => {
        // Code to be executed after the delay

        console.log("Delayed execution of prediction results");
      }, 2000); // Delay of 2000 milliseconds (2 seconds)
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        // Code to be executed after the delay
        console.log("Delayed execution final");

        // Call your function or perform the desired actions here
        setIsLoading(false);
        if (resultOverlay !== "Cardamom") {
          setIsDrawerOpen(true);
        } else {
          navigation.navigate("ResultScreen", { res: result });
        }
      }, 2000);
      // Hide the dark overlay after API response
    }
  };

  return (
    <View style={styles.container}>
      {photo ? (
        <View style={styles.preview}>
          <Image
            source={photo}
            style={styles.previewImage}
            resizeMode="cover"
          />
          <View style={styles.previewButtonContainer}>
            <TouchableOpacity
              style={styles.captureSubmitButton}
              onPress={() => handleTakePhoto()}
            >
              <FontAwesome name="check" size={50} color="white" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.captureRetakeButton}
            onPress={() => (setPhoto(null), setIsDrawerOpen(false))}
          >
            <FontAwesome5 name="chevron-left" size={34} color="#ffffff" />
          </TouchableOpacity>
          {isLoading && (
            <View style={styles.overlay}>
              <View style={styles.overlayContent}>
                <Animatable.View ref={animateIconRef}>
                  <FontAwesome5 name="leaf" size={iconSize} color={iconColor} />
                </Animatable.View>
                <Text style={styles.loadingText}>{loadingText}</Text>
              </View>
            </View>
          )}
          {isDrawerOpen && (
            <View style={styles.drawerContainer}>
              <View style={styles.drawerContent}>
                <Text style={styles.drawerMessage}>
                  Cardamom plant not identified
                </Text>
                <Text style={styles.drawerInstruction}>
                  Please ensure that the image shows a close and clear view of
                  the diseased part of the plant.
                </Text>
                <TouchableOpacity
                  style={styles.scanAgainButton}
                  onPress={() => (setPhoto(null), setIsDrawerOpen(false))}
                >
                  <Text style={styles.scanAgainButtonText}>Scan Again</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      ) : (
        <View style={{ flex: 1, maxHeight: windowHeight }}>
          <View style={styles.cameraContainer}>
            <Camera
              style={[styles.camera, { aspectRatio: 3 / 4 }]}
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
                  <FontAwesome5
                    name="question-circle"
                    size={44}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </Camera>
          </View>
        </View>
      )}
      {/* Info screen */}
      {modalVisible && (
        <View>
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
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  cameraContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    paddingBottom: 25,
  },
  previewButtonContainer: {
    position: "absolute",
    flex: 1,
    backgroundColor: "transparent",
    paddingBottom: 0,
    bottom: 55,
  },
  cameraFrameContainer: {
    marginTop: 30,
    alignSelf: "center",
    height: "70%",
    width: "55%",
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
    flex: 1,
    alignItems: "center",
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 999,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 5,
  },
  infoButton: {
    padding: 15,
    marginRight: 25,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
  },
  captureSubmitButton: {
    flex: 1,
    width: 85,
    height: 85,
    borderRadius: 999,
    backgroundColor: "#046AE1",
    justifyContent: "center",
    alignItems: "center",
  },
  captureRetakeButton: {
    flex: 1,
    position: "absolute",
    left: 55,
    bottom: 75,
    width: 50,
    height: 50,
    borderRadius: 999,
    backgroundColor: "#046AE1",
    justifyContent: "center",
    alignItems: "center",
  },
  drawerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: "35%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  drawerContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  drawerMessage: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
  },
  drawerInstruction: {
    fontSize: 16,
    color: "#000000",
    textAlign: "center",
    marginBottom: 10,
    padding: 20,
  },
  scanAgainButton: {
    backgroundColor: "#14ad38",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  scanAgainButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
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
    width: "100%",
    height: "100%",
    resizeMode: "cover",
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
