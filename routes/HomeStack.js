// import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from "react-navigation";
// import { withNavigation } from "react-navigation";
// import { useContext } from "react";
// import HomeScreen from "../screens/HomeScreen";
// import Profile from "../screens/Profile";
// import FertilizerCalulator from "../screens/FertilizerCal";
// import pest_control from "../screens/pest_control";
// import cardamomtips from "../screens/cardamomtips";
// import DiseaseScreen from "../screens/diseaseScreen";
// import AppointmentScreen from "../screens/appointments";
// import ImagePickerExample from "../screens/test";
// import ResultScreen from "../screens/ResultScreenDetails/ResultScreen";
// import PackageSelector from "../screens/ConsultationScreens/PackageSelector";
// import SlotBooking from "../screens/ConsultationScreens/SlotBooking";
// import PhoneSignIn from "../screens/UserLogin/phone/PhoneSignIn";
// import PhoneAuth from "../screens/UserLogin/phone/PhoneAuth";
// import DataProvider from "../screens/UserLogin/data/DataProvider";
// import RoadmapPage from "../screens/ResultScreenDetails/StatusComponent";
// import UserUploads from "../screens/userUploads";
// import AboutUs from "../screens/aboutUs";

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// <NavigationContainer>
//     <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={PhoneAuth} />
//         <Stack.Screen
//             name="Home"
//             component={HomeScreen}
//             options={({ navigation }) => ({
//                 title: "CardamomCare",
//                 headerTitleAlign: "left",
//                 headerLeft: null,
//                 headerBackTitle: null,
//             })}
//         />
//         <Stack.Screen name="RoadmapPage" component={RoadmapPage} />
//         <Stack.Screen name="ReviewDetails" component={Profile} />
//         <Stack.Screen
//             name="AboutUs"
//             component={AboutUs}
//             options={{
//                 title: "About Us",
//                 headerTitleAlign: "left",
//                 headerStyle: {
//                     backgroundColor: "#0B3104",
//                 },
//                 headerTintColor: "#fff",
//             }}
//         />
//         <Stack.Screen name="FertilizerCalulator" component={FertilizerCalulator} />
//         <Stack.Screen name="pest_control" component={pest_control} />
//         <Stack.Screen name="cardamomtips" component={cardamomtips} />
//         <Stack.Screen name="AppointmentScreen" component={AppointmentScreen} />
//         <Stack.Screen name="UserUploads" component={UserUploads} />
//         <Stack.Screen name="Imagepick" component={ImagePickerExample} options={{ title: "Scan", headerTitleAlign: "center" }} />
//         <Stack.Screen name="ResultScreen" component={ResultScreen} options={{ title: "Result", headerTitleAlign: "center" }} />
//         <Stack.Screen name="DiseaseScreen" component={DiseaseScreen} options={{ title: "Result", headerTitleAlign: "left" }} />
//         <Stack.Screen name="PackageSelector" component={PackageSelector} options={{ title: "Package Selector", headerTitleAlign: "left" }} />
//         <Stack.Screen name="SlotBooking" component={SlotBooking} options={{ title: "Slot Booking", headerTitleAlign: "left" }} />
//     </Stack.Navigator>
// </NavigationContainer>

// const screens = {
//     Login: {
//         screen: PhoneAuth,
//     },
//     Home: {
//         screen: HomeScreen,
//         navigationOptions: ({ navigation }) => ({
//             headerTitle: "CardamomCare",
//             headerTitleAlign: "left",
//             headerLeft: null, // Disable back arrow
//             headerBackTitle: null,
//         }),
//     },
//     RoadmapPage: {
//         screen: RoadmapPage,
//     },
//     ReviewDetails: {
//         screen: Profile,
//     },
//     AboutUs: {
//         screen: AboutUs,
//         navigationOptions: ({ navigation }) => ({
//             headerTitle: "About Us",
//             headerTitleAlign: "left",
//             headerStyle: {
//                 backgroundColor: "#0B3104", // Set background color to dark green
//             },
//             headerTintColor: "#fff", // Set text color to white
//         }),
//     },
//     FertilizerCalulator: {
//         screen: FertilizerCalulator,
//     },
//     pest_control: {
//         screen: pest_control,
//     },
//     cardamomtips: {
//         screen: cardamomtips,
//     },
//     AppointmentScreen: {
//         screen: AppointmentScreen,
//     },
//     UserUploads: {
//         screen: UserUploads,
//     },
//     Imagepick: {
//         screen: ImagePickerExample,
//         navigationOptions: {
//             headerTitle: "Scan",
//             headerTitleAlign: "centre",
//         },
//     },
//     ResultScreen: {
//         screen: ResultScreen,
//         navigationOptions: {
//             headerTitle: "Result",
//             headerTitleAlign: "centre",
//         },
//     },
//     DiseaseScreen: {
//         screen: DiseaseScreen,
//         navigationOptions: ({ navigation }) => ({
//             headerTitle: "Result",
//             headerTitleAlign: "left",
//         }),
//     },
//     PackageSelector: {
//         screen: PackageSelector,
//         navigationOptions: ({ navigation }) => ({
//             headerTitle: "Package Selector",
//             headerTitleAlign: "left",
//         }),
//     },
//     SlotBooking: {
//         screen: SlotBooking,
//         navigationOptions: ({ navigation }) => ({
//             headerTitle: "Slot Booking",
//             headerTitleAlign: "left",
//         }),
//     },
// };

// const stackNavigatorConfig = {
//     initialRouteName: "Login", // Default initial route
// };

// // home stack navigator screens
// const HomeStack = createStackNavigator(screens, stackNavigatorConfig);

// export default createAppContainer(HomeStack);
