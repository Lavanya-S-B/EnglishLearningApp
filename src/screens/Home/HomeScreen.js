import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.header}>Welcome For Learning English 👋</Text>
      <Text style={styles.subHeader}>Continue Learning</Text>

      <TouchableOpacity 
        style={styles.card}
        onPress={() => navigation.navigate('Grammar')}
      >
        <Text style={styles.cardTitle}>📘 Grammar</Text>
        <Text style={styles.cardSubtitle}>12 Topics Available</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.card}
        onPress={() => navigation.navigate('Skills')}
      >
        <Text style={styles.cardTitle}>🎧 Skills</Text>
        <Text style={styles.cardSubtitle}>Listening, Reading, Writing, Speaking</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.card}
        onPress={() => navigation.navigate('Vocabulary')}
      >
        <Text style={styles.cardTitle}>🧠 Vocabulary</Text>
        <Text style={styles.cardSubtitle}>Flashcards & Practice</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: spacing.sm,
  },
  subHeader: {
    fontSize: 16,
    marginBottom: spacing.lg,
    color: colors.textLight,
  },
  card: {
    backgroundColor: colors.white,
    padding: spacing.lg,
    borderRadius: 16,
    marginBottom: spacing.md,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    marginTop: 5,
    color: colors.textLight,
  },
});