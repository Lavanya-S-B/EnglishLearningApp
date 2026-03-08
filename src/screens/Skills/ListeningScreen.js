import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { listeningData } from "../../data/listeningData";

export default function ListeningScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <FlatList
        data={listeningData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("ListeningTask", { item })
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
    backgroundColor: "#f3f4f6",
    borderRadius: 10,
    marginBottom: 15
  },

  title: {
    fontSize: 18,
    fontWeight: "600"
  }

});