// ...existing code...
import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList
} from 'react-native';
import { colors } from '../../theme/colors';

const { width } = Dimensions.get('window');

export default function GrammarContentScreen({ route }) {
  const { chapters, index = 0 } = route.params;
  const scrollRef = useRef(null);

  return (
    <ScrollView
      ref={scrollRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentOffset={{ x: width * index, y: 0 }}
      style={styles.container}
    >
      {chapters.map((chapter, i) => (
        <View key={chapter.id ?? i} style={[styles.page, { width }]}>
          
          <Text style={styles.progress}>
            {i + 1} / {chapters.length}
          </Text>

          <Text style={styles.title}>{chapter.title}</Text>

          {/* If chapter has a simple content field, show it. Otherwise render subtopics list */}
          {chapter.content ? (
            <Text style={styles.content}>{chapter.content}</Text>
          ) : (
            <FlatList
              data={chapter.subtopics || []}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ paddingBottom: 40 }}
              renderItem={({ item }) => (
                <View style={styles.subtopic}>
                  <Text style={styles.subtopicTitle}>{item.title}</Text>

                  {item.definition ? <Text style={styles.definition}>{item.definition}</Text> : null}
                  {item.form ? <Text style={styles.metaLabel}>Form: <Text style={styles.metaValue}>{item.form}</Text></Text> : null}
                  {item.rule ? <Text style={styles.metaLabel}>Rule: <Text style={styles.metaValue}>{item.rule}</Text></Text> : null}
                  {item.types ? <Text style={styles.metaLabel}>Types: <Text style={styles.metaValue}>{item.types.join(', ')}</Text></Text> : null}

                  {item.examples && item.examples.length > 0 ? (
                    <View style={styles.examples}>
                      <Text style={styles.examplesLabel}>Examples:</Text>
                      {item.examples.map((ex, idx) => (
                        <Text key={idx} style={styles.exampleItem}>• {ex}</Text>
                      ))}
                    </View>
                  ) : null}
                </View>
              )}
            />
          )}

        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  page: {
    padding: 20,
    justifyContent: 'flex-start',
  },
  progress: {
    position: 'absolute',
    top: 40,
    right: 20,
    fontSize: 14,
    color: colors.textLight,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
  subtopic: {
    marginBottom: 18,
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 10,
    elevation: 1,
  },
  subtopicTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  definition: {
    fontSize: 15,
    lineHeight: 22,
    color: '#333',
    marginBottom: 6,
  },
  metaLabel: {
    fontSize: 13,
    color: colors.textLight,
    marginTop: 4,
  },
  metaValue: {
    color: '#222',
    fontWeight: '600',
  },
  examples: {
    marginTop: 8,
  },
  examplesLabel: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 4,
  },
  exampleItem: {
    fontSize: 14,
    color: '#222',
    marginLeft: 6,
    marginBottom: 2,
  },
});
