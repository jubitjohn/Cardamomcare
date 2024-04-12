/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import ActionSheet from "react-native-actionsheet";
import DataContext from "./screens/UserLogin/data/data-context";
import React, { useState, useContext, useEffect } from "react";
import Navigator from "./routes/HomeStack";
import DataProvider from "./screens/UserLogin/data/DataProvider";
import firebase from "firebase/app";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Image } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import Profile from "./screens/Profile";
import FertilizerCal from "./screens/FertilizerCal";
import Pests from "./screens/pest_control";
import CardamomPlantationTipsScreen from "./screens/cardamomtips";
import DiseaseScreen from "./screens/diseaseScreen";
import AppointmentScreen from "./screens/appointments";
import ImagePickerExample from "./screens/test";
import ResultScreen from "./screens/ResultScreenDetails/ResultScreen";
import PackageSelector from "./screens/ConsultationScreens/PackageSelector";
import SlotBooking from "./screens/ConsultationScreens/SlotBooking";
import PhoneSignIn from "./screens/UserLogin/phone/PhoneSignIn";
import RoadmapPage from "./screens/ResultScreenDetails/StatusComponent";
import UserUploads from "./screens/userUploads";
import AboutUs from "./screens/aboutUs";
import PhoneAuth from "./screens/UserLogin/phone/PhoneAuth";
import Footer from "./screens/footer";
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const SplitScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/mainlogo.png')} style={styles.img} />
    </View>
  );
};


const App = () => {
  // const dataCtx = useContext(DataContext);
  // const isAuthChecked = dataCtx.isAuthChecked;
  // const isDataFetched = dataCtx.isDataFetched;

  const [showSplitScreen, setShowSplitScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplitScreen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    // <DataProvider>
    //   <Navigator />
    // </DataProvider>

    <NavigationContainer>
      <Stack.Navigator>
        {showSplitScreen ? (
          <Stack.Screen name="SplitScreen" component={SplitScreen} options={{ headerShown: false }} />
        ) : (
          <>
            <Stack.Screen name="Login" component={PhoneAuth}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={({ navigation }) => ({
                title: "CardamomCare",
                headerTitleAlign: "left",
                headerLeft: null,
                headerBackTitle: null,
              })}
            />
            <Stack.Screen name="RoadmapPage" component={RoadmapPage} />
            <Stack.Screen name="ReviewDetails" component={Profile} />
            <Stack.Screen
              name="AboutUs"
              component={AboutUs}
              options={{
                title: "About Us",
                headerTitleAlign: "left",
                headerStyle: {
                  backgroundColor: "#0B3104",
                },
                headerTintColor: "#fff",
              }}
            />
            <Stack.Screen name="FertilizerCalulator" component={FertilizerCal} />
            <Stack.Screen name="pest_control" component={Pests} />
            <Stack.Screen name="cardamomtips" component={CardamomPlantationTipsScreen} />
            <Stack.Screen name="AppointmentScreen" component={AppointmentScreen} />
            <Stack.Screen name="UserUploads" component={UserUploads} />
            <Stack.Screen name="Imagepick" component={ImagePickerExample} options={{ title: "Scan", headerTitleAlign: "center" }} />
            <Stack.Screen name="ResultScreen" component={ResultScreen} options={{ title: "Result", headerTitleAlign: "center" }} />
            <Stack.Screen name="DiseaseScreen" component={DiseaseScreen} options={{ title: "Result", headerTitleAlign: "left" }} />
            <Stack.Screen name="PackageSelector" component={PackageSelector} options={{ title: "Package Selector", headerTitleAlign: "left" }} />
            <Stack.Screen name="SlotBooking" component={SlotBooking} options={{ title: "Slot Booking", headerTitleAlign: "left" }} />
            <Stack.Screen name="Footer" component={Footer} />
          </>
        )}

      </Stack.Navigator>
    </NavigationContainer>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center"
  },
  img: {
    width: 100,
    height: 150,
    alignSelf: "center"
  }
})

export default App;
