import { useState, useEffect } from "react";

import { auth } from "..//..//../firebase/firebaseConfig";
import { Platform } from "react-native";

import DataContext from "./data-context";

function DataProvider(props, { navigation }) {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userNumber, setUserNumber] = useState(null);

  // useEffect(() => {
  //   console.log("Insode the DataProvider context setter");
  //   setIsAuthChecked(true);
  //   const subscribe = onAuthStateChanged(auth, async (currentUser) => {
  //     if (currentUser) {
  //       setIsAuthChecked(true);
  //       setUser(currentUser);
  //     } else {
  //       setIsAuthChecked(false);
  //       setUser(null);
  //       setUserProfile(null);
  //       navigation.navigate("Login");
  //     }
  //   });

  //   return () => subscribe();
  // }, []);
  console.log("Insode the DataProvider context setter outside useffects");

  const dataContext = {
    user: user,
    setUser: setUser,
    userProfile: userProfile,
    setUserProfile: setUserProfile,
    isAuthChecked: isAuthChecked,
    userNumber: userNumber,
    setUserNumber: setUserNumber,
    loading: loading,
    setLoading: setLoading,
  };

  return (
    <DataContext.Provider value={dataContext}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataProvider;
