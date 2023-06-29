import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { withNavigation } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import Profile from "../screens/Profile";
import FertilizerCalulator from "../screens/FertilizerCal";
import pest_control from "../screens/pest_control";
import cardamomtips from "../screens/cardamomtips";
import DiseaseScreen from "../screens/diseaseScreen";
import AppointmentScreen from "../screens/appointments";
import ImagePickerExample from "../screens/test";
import ResultScreen from "../screens/ResultScreen";

const screens = {
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Plant Doctor",
      headerTitleAlign: "left",
    }),
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
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
