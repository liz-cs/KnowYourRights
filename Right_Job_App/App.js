import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigators from "./navigator/navigator";
import { BookMarkProvider } from "./BookmarkContext";

export default function App() {
  

  return (
    <BookMarkProvider>
      <NavigationContainer>
        <Navigators/>
      </NavigationContainer>
    </BookMarkProvider>
  );
}