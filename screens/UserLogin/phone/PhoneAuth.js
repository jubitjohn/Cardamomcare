import { useRef, useState, useContext } from "react";
import { View, Image } from "react-native";
import { Card } from "react-native-paper";
import { signInWithPhoneNumber } from "@firebase/auth";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";

import PhoneSignIn from "./PhoneSignIn";
import VerifyPhone from "./VerifyPhone";
import { auth, app } from "../../../firebase/firebaseConfig";
import ModalPopup from "../modal/ModalPopup";
import DataContext from "../data/data-context";
import styles from "./LoginStyles";
import { DataProvider } from "../data/DataProvider";
// import DataProvider from "../data/DataProvider";

export default function PhoneAuth({ navigation }) {
  const { isAuthChecked } = useContext(DataContext);
  const [isVerifying, setIsVerifying] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const recaptchaVerifier = useRef(null);
  const [verificationWrong, setVerificationWrong] = useState(false);
  const { loading, setLoading } = useContext(DataContext);
  const { usernumber, setUserNumber } = useContext(DataContext);
  const pressHandler = (value) => {
    navigation.navigate(value);
  };

  const loginWithPhoneNumber = async (phoneNumber) => {
    const result = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      recaptchaVerifier.current
    );

    setConfirmationResult(result);
    setIsVerifying(true);
    console.log(
      "useContext(DataContext).isAuthChecked)",
      useContext(DataContext).isAuthChecked
    );
  };

  const verifyCode = async (code) => {
    if (confirmationResult) {
      try {
        const userCredential = await confirmationResult.confirm(code);
        setLoading(true);
        if (userCredential) {
          // <DataProvider props={userCredential["user"].phoneNumber} />;
          // DataProvider(123, { navigation });
          setUserNumber(userCredential.user.phoneNumber);
          pressHandler("Home");
        }
        console.log("userCredential", userCredential["user"].phoneNumber);
      } catch (error) {
        setVerificationWrong(true);
      }
    } else {
    }
  };

  console.log(
    "useContext(DataContext).isAuthChecked)",
    useContext(DataContext).isAuthChecked
  );

  return isVerifying ? (
    <View>
      <ModalPopup
        isVisible={verificationWrong}
        onClose={() => setVerificationWrong(false)}
        title="Verification Failed"
        content="The verification code you entered is incorrect. Please try again."
      />
      <Card style={styles.loginContainer}>
        <Image
          style={styles.loginLogo}
          source={require("..//..//../assets/consultant.png")}
        />
      </Card>
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
      <Card style={styles.loginContainer}>
        <Image
          style={styles.loginLogo}
          source={require("..//../../assets/consultant.png")}
        />
      </Card>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={app.options}
      />
      <PhoneSignIn onPhoneNumberSubmit={loginWithPhoneNumber} />
    </View>
  );
}
