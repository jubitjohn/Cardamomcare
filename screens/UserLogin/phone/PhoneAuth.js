import React, { useRef, useState, useContext } from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import { RecaptchaVerifierModal } from "@react-native-firebase/auth";
import auth from "@react-native-firebase/auth";

import PhoneSignIn from "./PhoneSignIn";
import VerifyPhone from "./VerifyPhone";
// import {auth} from "../../../firebase/firebaseConfig";
import ModalPopup from "../modal/ModalPopup";
import DataContext from "../data/data-context";
// import { DataProvider } from "../data/DataProvider";
import styles from "./LoginStyles";

export default function PhoneAuth({ navigation }) {
  const { isAuthChecked } = useContext(DataContext);
  const [isVerifying, setIsVerifying] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [verificationWrong, setVerificationWrong] = useState(false);
  const { setLoading, setUserNumber } = useContext(DataContext);

  const loginWithPhoneNumber = async (phoneNumber) => {
    try {
      console.log("auth", auth);
      const result = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirmationResult(result);
      setIsVerifying(true);
    } catch (error) {
      console.error("Error signing in with phone number:", error);
      // Handle error (e.g., display error message to user)
    }
  };

  const verifyCode = async (code) => {
    if (confirmationResult) {
      try {
        const userCredential = await confirmationResult.confirm(code);
        setLoading(true);
        if (userCredential) {
          setUserNumber(userCredential.user.phoneNumber);
          navigation.navigate("Home");
        }
        console.log("userCredential", userCredential.user.phoneNumber);
      } catch (error) {
        setVerificationWrong(true);
      }
    }
  };

  return isVerifying ? (
    <View>
      <ModalPopup
        isVisible={verificationWrong}
        onClose={() => setVerificationWrong(false)}
        title="Verification Failed"
        content="The verification code you entered is incorrect. Please try again."
      />
      <VerifyPhone
        onVerify={verifyCode}
        onVerificationRetry={() => {
          setConfirmationResult(null);
          setVerificationWrong(false);
          setIsVerifying(false);
        }}
      />
    </View>
  ) : (
    <View>
      <PhoneSignIn onPhoneNumberSubmit={loginWithPhoneNumber} />
    </View>
  );
}
