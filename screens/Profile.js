import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native';
import React, { useContext } from 'react';
import Footer from './footer';
import PhoneSignIn from './UserLogin/phone/PhoneSignIn';
// import DataProvider from "./UserLogin/data/data-context";
import DataContext from "./UserLogin/data/data-context";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Profile = ({ navigation }) => {

  const { setUserNumber, setUserProfile, userNumber, userProfile } = useContext(DataContext);

  const handleClick = async () => {
    try {
      // Clear AsyncStorage values
      await AsyncStorage.removeItem("authToken");
      await AsyncStorage.removeItem("userName");
      await AsyncStorage.removeItem("phoneNumber");

      // Set context values to null
      setUserNumber(null);
      setUserProfile(null);

      console.log("Logout successful.");
      console.log("CHECKINGGGGG!!!");
      console.log(userNumber);
      console.log("CHECKINGGGGG!!!");
      console.log(userProfile);

      // Navigate back to PhoneSignIn screen or any desired route
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }] // Navigate to PhoneSignIn as the initial screen
      });
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  return (

    <View>
      <SafeAreaView style={styles.main}>
        <View>
          <Text style={styles.heading}>Hi Anju!</Text>
          <View style={styles.subcont}>
            <View style={{ paddingLeft: "8%" }}>
              <Text style={{ color: "#999999" }}>Full Name</Text>
              <View style={styles.nameBox}>
                <Text>Anju Suresh</Text>
              </View>
              <Text style={{ color: "#999999" }}>Phone Number</Text>
              <View style={styles.nameBox}>
                <Text>7356771642</Text>
              </View>
            </View>
            <View style={styles.btnComp}>
              <Button style={styles.btn} title="Log out" onPress={handleClick} />

            </View>
          </View>
        </View>
      </SafeAreaView>
      <View>
        <Footer navigation={navigation} />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  main: {
    // backgroundColor: "green",
    height: "100 %",
    // paddingLeft: 20,
  },
  heading: {
    marginTop: 20,
    marginBottom: 25,
    fontWeight: "600",
    fontSize: 20,
    textAlign: "center",
  },
  btnComp: {
    alignSelf: "center",
    width: 200,
    marginTop: 20,
  },
  subcont: {
    backgroundColor: "white",
    height: "100 %",
    borderRadius: 30,
    paddingTop: 30,
  },
  nameBox: {
    width: "90%",
    height: 40,
    // borderWidth: 0.7,
    // borderColor: "#999999",
    backgroundColor: "#F4F4F4",
    borderRadius: 8,
    marginTop: 7,
    paddingLeft: 15,
    paddingTop: 8,
    marginBottom: 25
  }
});

export default Profile;
