import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GrammarTopicsScreen from '../screens/Grammar/GrammarTopicsScreen';
import GrammarChaptersScreen from '../screens/Grammar/GrammarChaptersScreen';
import GrammarContentScreen from '../screens/Grammar/GrammarContentScreen';

const Stack = createNativeStackNavigator();

export default function GrammarStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Topics" component={GrammarTopicsScreen} />
      <Stack.Screen name="Chapters" component={GrammarChaptersScreen} />
      <Stack.Screen name="Content" component={GrammarContentScreen} />
    </Stack.Navigator>
  );
}