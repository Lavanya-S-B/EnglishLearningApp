import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SkillsHomeScreen from "../screens/Skills/SkillsHomeScreen";
import ReadingScreen from "../screens/Skills/ReadingScreen";
import ReadingParagraphScreen from "../screens/Skills/ReadingParagraphScreen";
import ListeningScreen from "../screens/Skills/ListeningScreen";
import ListeningTaskScreen from "../screens/Skills/ListeningTaskScreen";


const Stack = createNativeStackNavigator();

export default function SkillsStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="SkillsHome"
        component={SkillsHomeScreen}
        options={{ title: "Skills" }}
      />

      <Stack.Screen
        name="Reading"
        component={ReadingScreen}
      />

      <Stack.Screen
        name="ReadingParagraph"
        component={ReadingParagraphScreen}
      />

      <Stack.Screen
        name="Listening"
        component={ListeningScreen}
      />

      <Stack.Screen
        name="ListeningTask"
        component={ListeningTaskScreen}
      />

      

    </Stack.Navigator>
  );
}