// ...existing code...
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from '../../theme/colors';


export default function SkillsHomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Skills</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Reading")}
      >
        <Text style={styles.cardText}>Reading</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Listening")}
      >
        <Text style={styles.cardText}>Listening</Text>
      </TouchableOpacity>
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
    marginBottom: 10,
    paddingVertical: 6,
    paddingHorizontal: 8,
    alignSelf: "flex-start",
  },

  backText: {
    fontSize: 22,
    color: colors.textDark,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
  },

  card: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },

  cardText: {
    fontSize: 18,
    color: colors.textDark,
    fontWeight: "600",
  },
});