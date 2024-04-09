import React, { useRef, useState, useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import { RecaptchaVerifierModal } from "@react-native-firebase/auth";
import auth from "@react-native-firebase/auth";

import PhoneSignIn from "./PhoneSignIn";
import VerifyPhone from "./VerifyPhone";
import ModalPopup from "../modal/ModalPopup";
import DataContext from "../data/data-context";
import styles from "./LoginStyles";

export default function PhoneAuth({ navigation }) {
  const { setLoading, loading, setUserNumber, setUserProfile } =
    useContext(DataContext);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isLoadingVerification, setLoadingVerification] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [verificationWrong, setVerificationWrong] = useState(false);

  // Set appVerificationDisabledForTesting to true before rendering the RecaptchaVerifierModal
  const recaptchaVerifier = useRef(null);
  const appVerificationDisabledForTesting = true;

  const loginWithPhoneNumber = async (phoneNumber, displayName) => {
    if (!displayName.trim()) {
      // Check if display name is empty or contains only whitespace
      alert("Please enter your name"); // Display alert message if display name is empty
      return;
    }
    setLoadingVerification(true);
    try {
      const result = await auth().signInWithPhoneNumber(
        phoneNumber,
        // recaptchaVerifier.current,
        appVerificationDisabledForTesting
      );
      const currentUser = auth().currentUser;
      console.log("displayName", displayName);
      await currentUser.updateProfile({
        displayName: displayName,
      });
      console.log("current user::::", currentUser);
      setConfirmationResult(result);
      setIsVerifying(true);
    } catch (error) {
      console.error("Error signing in with phone number:", error);
      // Handle error (e.g., display error message to user)
    } finally {
      setLoadingVerification(false); // Set loading state to false when the process is complete
    }
  };

  const verifyCode = async (code) => {
    if (confirmationResult) {
      try {
        const userCredential = await confirmationResult.confirm(code);
        setLoading(true);
        if (userCredential) {
          setUserNumber(userCredential.user.phoneNumber);
          setUserProfile(userCredential.user.displayName);
          navigation.navigate("Home");
        }
      } catch (error) {
        setVerificationWrong(true);
      }
    }
  };

  return (
    <View>
      {isVerifying ? (
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
          {/* <RecaptchaVerifierModal ref={recaptchaVerifier} /> */}
          <PhoneSignIn
            onPhoneNumberSubmit={loginWithPhoneNumber}
            loading={isLoadingVerification}
          />
        </View>
      )}
    </View>
  );
}
