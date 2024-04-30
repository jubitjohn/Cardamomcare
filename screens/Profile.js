import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import Footer from './footer';

const Profile = ({ navigation }) => {
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
