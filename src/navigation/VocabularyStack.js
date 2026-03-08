import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import VocabularyLevelScreen from "../screens/Vocabulary/VocabularyLevelScreen";
import VocabularyLessonScreen from "../screens/Vocabulary/VocabularyLessonScreen";
import FlashcardScreen from "../screens/Vocabulary/FlashcardScreen";

const Stack = createNativeStackNavigator();

export default function VocabularyStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="VocabularyLevels"
        component={VocabularyLevelScreen}
        options={{ title: "Vocabulary" }}
      />

      <Stack.Screen
        name="VocabularyLessons"
        component={VocabularyLessonScreen}
        options={{ title: "Lessons" }}
      />

      <Stack.Screen
        name="Flashcards"
        component={FlashcardScreen}
        options={{ title: "Flashcards" }}  // back button will appear automatically
      />

    </Stack.Navigator>
  );
}