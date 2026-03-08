import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GrammarTopics from '../screens/Grammar/GrammarTopics';
import GrammarChapters from '../screens/Grammar/GrammarChapters';
import GrammarSubtopic from '../screens/Grammar/GrammarSubtopic';

const Stack = createNativeStackNavigator();

export default function GrammarStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Topics" component={GrammarTopics} />
      <Stack.Screen name="Chapters" component={GrammarChapters} />
      <Stack.Screen name="Subtopic" component={GrammarSubtopic} />
    </Stack.Navigator>
  );
}