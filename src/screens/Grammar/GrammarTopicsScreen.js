// ...existing code...
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { grammarTopics } from '../../data/grammarData';
import { colors } from '../../theme/colors';

export default function GrammarTopicsScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <FlatList
        data={grammarTopics}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Chapters', { topic: item })}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.meta}>{item.chapters?.length ?? 0} chapters</Text>
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

  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#ffffffff',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 12,
  },

  backText: {
    color: '#141414ff',
    fontSize: 20,
    fontWeight: '700',
  },

  card: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  meta: {
    marginTop: 6,
    fontSize: 12,
    color: colors.textLight,
  },
});