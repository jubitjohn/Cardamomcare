import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { withNavigation } from "react-navigation";
import { useContext } from "react";
import HomeScreen from "../screens/HomeScreen";
import Profile from "../screens/Profile";
import FertilizerCalulator from "../screens/FertilizerCal";
import pest_control from "../screens/pest_control";
import cardamomtips from "../screens/cardamomtips";
import DiseaseScreen from "../screens/diseaseScreen";
import AppointmentScreen from "../screens/appointments";
import ImagePickerExample from "../screens/test";
import ResultScreen from "../screens/ResultScreenDetails/ResultScreen";
import PackageSelector from "../screens/ConsultationScreens/PackageSelector";
import SlotBooking from "../screens/ConsultationScreens/SlotBooking";
import PhoneSignIn from "../screens/UserLogin/phone/PhoneSignIn";
import PhoneAuth from "../screens/UserLogin/phone/PhoneAuth";
import DataProvider from "../screens/UserLogin/data/DataProvider";
import RoadmapPage from "../screens/ResultScreenDetails/StatusComponent";
import UserUploads from "../screens/userUploads";
const screens = {
  Login: {
    screen: PhoneAuth,
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "AgroLens",
      headerTitleAlign: "left",
      headerLeft: null, // Disable back arrow
      headerBackTitle: null,
    }),
  },
  RoadmapPage: {
    screen: RoadmapPage,
  },
  ReviewDetails: {
    screen: Profile,
  },
  FertilizerCalulator: {
    screen: FertilizerCalulator,
  },
  pest_control: {
    screen: pest_control,
  },
  cardamomtips: {
    screen: cardamomtips,
  },
  AppointmentScreen: {
    screen: AppointmentScreen,
  },
  UserUploads: {
    screen: UserUploads,
  },
  Imagepick: {
    screen: ImagePickerExample,
    navigationOptions: {
      headerTitle: "Scan",
      headerTitleAlign: "centre",
    },
  },
  ResultScreen: {
    screen: ResultScreen,
    navigationOptions: {
      headerTitle: "Result",
      headerTitleAlign: "centre",
    },
  },
  DiseaseScreen: {
    screen: DiseaseScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Result",
      headerTitleAlign: "left",
    }),
  },
  PackageSelector: {
    screen: PackageSelector,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Package Selector",
      headerTitleAlign: "left",
    }),
  },
  SlotBooking: {
    screen: SlotBooking,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Slot Booking",
      headerTitleAlign: "left",
    }),
  },
};

const stackNavigatorConfig = {
  initialRouteName: "Login", // Default initial route
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, stackNavigatorConfig);

export default createAppContainer(HomeStack);
