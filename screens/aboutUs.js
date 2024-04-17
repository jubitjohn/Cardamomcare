import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Footer from './footer';


const AboutUs = ({ navigation }) => {
    return (
        <View>
            <ImageBackground
                source={require('../assets/aboutPic.png')}
                style={styles.backgroundImage}
            >
                <View style={styles.overlay}>
                    <Text style={styles.text}>CardamomCare</Text>
                    <Text style={styles.p1}>Welcome to CardamomCare, your go-to app for healthier cardamom plants. With advanced technology and expert knowledge, we simplify farming challenges for you.</Text>
                    <Text style={styles.p1}>Capture plant images, get instant diagnosis, and personalized solutions—all in a few taps. From fertilizers to pest control, we've got you covered.</Text>
                    <Text style={styles.p1}>Join us in embracing a future where farming is not just a profession, but a passion nurtured by innovation and collaboration. Together, let's cultivate a world where every cardamom plant thrives, every farmer prospers, and every harvest yields bountiful rewards. Welcome to CardamomCare—where growth knows no bounds.</Text>
                    <Text style={styles.last}>Thank you for choosing CardamomCare! </Text>
                </View>
            </ImageBackground>
            <View>
                <Footer navigation={navigation} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        paddingLeft: "4.5%",
        paddingRight: "4.5%"
    },
    overlay: {
        flex: 1,
        alignSelf: "center",
        paddingTop: "12%"
    },
    text: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: "center"
    },
    p1: {
        paddingTop: 40,
        textAlign: "center",
        color: "white",
        lineHeight: 20,
        fontSize: 15
    },
    last: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center",
        paddingTop: 30,
        paddingHorizontal: "5%"
    }
});

export default AboutUs;

