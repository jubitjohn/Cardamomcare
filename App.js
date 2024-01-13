/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import ActionSheet from "react-native-actionsheet";
import PhoneAuth from "./screens/UserLogin/phone/PhoneAuth";
import DataContext from "./screens/UserLogin/data/data-context";
import React, { useState, useContext } from "react";
import Navigator from "./routes/HomeStack";
import DataProvider from "./screens/UserLogin/data/DataProvider";
import firebase from "firebase/app";
const App = () => {
  const dataCtx = useContext(DataContext);
  const isAuthChecked = dataCtx.isAuthChecked;
  const isDataFetched = dataCtx.isDataFetched;

  return (
    <DataProvider>
      <Navigator />
    </DataProvider>
  );
};

export default App;
