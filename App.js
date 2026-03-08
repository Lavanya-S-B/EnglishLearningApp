import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator";
import { ProgressProvider } from "./src/context/ProgressContext";

export default function App() {
  return (
    <ProgressProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ProgressProvider>
  );
}