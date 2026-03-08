import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GrammarHome from '../screens/Grammar/GrammarHome';
import SkillsScreen from '../screens/Skills/SkillsScreen';
import VocabularyScreen from '../screens/Vocabulary/VocabularyScreen';
import FlashcardScreen from '../screens/Flashcards/FlashcardScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Grammar" component={GrammarHome} />
      <Drawer.Screen name="Skills" component={SkillsScreen} />
      <Drawer.Screen name="Vocabulary" component={VocabularyScreen} />
      <Drawer.Screen name="Flashcards" component={FlashcardScreen} />
    </Drawer.Navigator>
  );
}