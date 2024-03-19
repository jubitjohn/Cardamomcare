import * as React from "react";
import { Button, TextInput, DefaultTheme } from "react-native-paper";
import { TouchableOpacity, Text, View } from "react-native";

export default function VerifyPhone({ onVerify, onVerificationRetry }) {
  const [code, setCode] = React.useState("");

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#3f51b5",
      underlineColor: "transparent",
      background: "#00000000",
    },
  };

  return (
    <View style={{ backgroundColor: 'white', height: "100%" }}>
      <Text style={{
        marginTop: "20%",
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 19,
        color: "#0B3104",
        fontFamily: "Poppins",
        fontWeight: 600
      }}>
        Account Verification
      </Text >
      <Text
        style={{
          marginTop: 10,
          marginLeft: 65,
          marginBottom: 30,
          marginRight: 65,
          textAlign: 'center',
          fontSize: 15,
          fontWeight: 300,
          lineHeight: 22
        }}>
        Enter the 6 Digit Pin Code sent to the number ending  **78</Text>
      <TextInput
        label="Verification Code"
        value={code}
        keyboardType="number-pad"
        onChangeText={(text) => setCode(text)}
        style={{ margin: 20 }}
        theme={theme}
      />

      <Button
        mode="contained"
        buttonColor="#3f51b5"
        onPress={() => onVerify(code)}
        style={{ margin: 20 }}
      >
        Verify
      </Button>
      <View style={{ margin: 20, alignItems: "center" }}>
        <TouchableOpacity onPress={onVerificationRetry}>
          <Text style={{ color: "#3f51b5", textAlign: "center" }}>
            If you did not get a verification code or entered the wrong phone
            number, click here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
