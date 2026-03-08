import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/Home/HomeScreen";
import SkillsStack from "./SkillsStack";
import VocabularyStack from "./VocabularyStack";
import GrammarStack from "./GrammarStack";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>

      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="Skills"
        component={SkillsStack}
      />

      <Tab.Screen
        name="Vocabulary"
        component={VocabularyStack}
      />

      <Tab.Screen
        name="Grammar"
        component={GrammarStack}
      />

    </Tab.Navigator>
  );
}