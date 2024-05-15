import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { SocialIcon } from 'react-native-elements';

const Footer = ({ navigation }) => {
    const pressHandler = (value) => {
        navigation.navigate(value);
    };
    return (
        <View style={styles.main}>
            <View >
                <TouchableOpacity onPress={() => pressHandler("AboutUs")}>
                    <Ionicons name="home" size={26} color="#999999" />
                    {/* <Text>About Us</Text> */}
                </TouchableOpacity>
            </View>
            <View style={styles.circ}>
                {/* <Ionicons name="whatsapp" size={25} color="#999999" style={{ alignSelf: "center" }} /> */}
                <SocialIcon
                    type='whatsapp'
                    iconSize={48}
                    style={{ alignSelf: "center", backgroundColor: "green", width: 60, height: 60 }}
                // onPress={}
                />
            </View>
            <View >
                <TouchableOpacity onPress={() => pressHandler("Profile")}>
                    <Ionicons name="person" size={25} color="#999999" />
                    {/* <Text>Profile</Text> */}
                </TouchableOpacity>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    main: {
        height: 55,
        width: "100%",
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 15,
        paddingLeft: 50,
        paddingRight: 50,
        marginTop: 30
    },
    circ: {
        // marginLeft: 10,
        // marginRight: 20,
        alignSelf: "center",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "white",
        bottom: 24,
        borderRadius: 100,
        width: 65,
        height: 65,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 8,
    }
});

export default Footer;