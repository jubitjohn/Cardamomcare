import * as React from "react";
import { Button, TextInput, DefaultTheme, Text } from "react-native-paper";
import { Linking } from "react-native";
import { View, Image } from "react-native-animatable";

export default function PhoneSignIn({ onPhoneNumberSubmit }) {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [displayName, setDisplayName] = React.useState("");
  const [validPhoneNumber, setValidPhoneNumber] = React.useState(false);

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#3f51b5",
      underlineColor: "transparent",
      background: "#fffffff",
      fontFamily: "Poppins",
    },
  };

  const onChangePhoneNumber = (text) => {
    let cleaned = text.replace(/\D/g, "");
    let formatted = " ";
    if (text.length < phoneNumber.length) {
      // Remove the last character
      setPhoneNumber(cleaned);
    } else {
      // Format the phone number
      if (cleaned.length >= 1) formatted += `${cleaned.slice(0, 3)}`;
      if (cleaned.length >= 4) formatted += `${cleaned.slice(3, 6)}`;
      if (cleaned.length >= 7) formatted += `${cleaned.slice(6, 10)}`;

      setPhoneNumber(formatted);
    }

    cleaned = formatted.replace(/\D/g, "");

    setValidPhoneNumber(cleaned.length === 10);
  };

  const onDisplayNameChange = (text) => {
    setDisplayName(text);
  };

  const handleOpenURL = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
      }
    });
  };

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      {/* <Image source={require("..//../../assets/mainlogo.png")} style={{
        marginLeft: 10,

      }} /> */}
      <Image
        source={require("..//../../assets/mainlogo.png")}
        style={{
          marginLeft: 20,
          marginTop: "20%",
          resizeMode: "contain",
          width: 40,
          height: 50,
        }}
      />
      <Text
        style={{
          marginTop: "0%",
          marginLeft: 20,
          marginBottom: 10,
          textAlign: "left",
          fontSize: 17,
          color: "#0B3104",
          fontFamily: "Poppins",
          fontWeight: 500,
        }}
      >
        Welcome to CardamomCare!
      </Text>
      <Text
        style={{
          marginLeft: 20,
          marginBottom: 30,
          marginRight: 80,
          textAlign: "left",
          fontSize: 14,
          fontWeight: 300,
        }}
      >
        Please sign in to your account and start your journey with us.
      </Text>
      <Text
        style={{
          marginLeft: 20,
          marginRight: 80,
          textAlign: "left",
          fontSize: 14,
        }}
      >
        Name
      </Text>
      <TextInput
        // label="Name"
        value={displayName}
        placeholder="Please enter your name"
        onChangeText={onDisplayNameChange}
        style={{
          margin: 0,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 8,
          marginBottom: 20,
          height: 40,
          borderRadius: 8,
          backgroundColor: "#DDE8DB",
        }}
        // theme={theme}
      />
      <Text
        style={{
          marginLeft: 20,
          marginRight: 80,
          marginBottom: 0,
          textAlign: "left",
          fontSize: 14,
        }}
      >
        Mobile Number
      </Text>
      <TextInput
        // label="Phone Number"
        value={phoneNumber}
        placeholder="Please enter your mobile number"
        keyboardType="phone-pad"
        onChangeText={onChangePhoneNumber}
        style={{
          margin: 0,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 8,
          marginBottom: 20,
          height: 40,
          borderRadius: 8,
          backgroundColor: "#DDE8DB",
        }}
        // theme={theme}
        left={<TextInput.Affix text="+91" style={{ color: "black" }} />}
      />
      <Button
        mode="contained"
        disabled={!validPhoneNumber}
        buttonColor="#3f51b5"
        onPress={() => {
          let submittedNumber = "+91" + phoneNumber.replace(/\D/g, "");
          onPhoneNumberSubmit(submittedNumber, displayName);
        }}
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
          padding: 5,
          borderRadius: 8,
          backgroundColor: "#0B3104",
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
          }}
        >
          Sign In
        </Text>
      </Button>
      <Text style={{ margin: 20, textAlign: "center", marginTop: 40 }}>
        By clicking Sign In you are consenting to the{" "}
        <Text
          style={{ color: "blue" }}
          onPress={() =>
            handleOpenURL(
              "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            )
          }
        >
          Terms of Conditions
        </Text>{" "}
        and the{" "}
        <Text
          style={{ color: "blue" }}
          onPress={() => handleOpenURL("https://website.com/privacy")}
        >
          Privacy Policy
        </Text>{" "}
        of Cardamomcare
      </Text>
    </View>
  );
  const Mainlogo = styled.img`
    max-width: 100%;
    max-height: 90%;
  `;
}
