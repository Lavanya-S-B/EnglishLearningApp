// ...existing code...
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export default function GrammarChaptersScreen({ route, navigation }) {
  const { topic } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{topic.title}</Text>

      <FlatList
        data={topic.chapters}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Content', { chapters: topic.chapters, index })}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.meta}>{item.subtopics ? `${item.subtopics.length} subtopics` : 'Content'}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
  },
  title: {
    fontSize: 16,
  },
  meta: {
    marginTop: 6,
    fontSize: 12,
    color: colors.textLight,
  },
});