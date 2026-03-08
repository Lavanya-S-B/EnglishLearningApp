import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { readingData } from "../../data/readingData";
import { colors } from '../../theme/colors';



export default function ReadingScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <FlatList
        data={readingData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("ReadingParagraph", { item })
            }
          >
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },

  card: {
    padding: 20,
    backgroundColor: colors.background,
    borderRadius: 10,
    marginBottom: 15
  },

  title: {
    fontSize: 18,
    fontWeight: "600"
  }
});