// ...existing code...
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { vocabularyData } from "../../data/vocabularyData";
import { colors } from '../../theme/colors';

export default function VocabularyLevelScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Choose Vocabulary Level</Text>

      {Object.keys(vocabularyData).map((levelKey) => {

        const level = vocabularyData[levelKey];

        return (
          <TouchableOpacity
            key={levelKey}
            style={styles.card}
            onPress={() =>
              navigation.navigate("VocabularyLessons", {
                topics: level.topics,
                levelTitle: level.title
              })
            }
          >
            <Text style={styles.levelTitle}>{level.title}</Text>
            <Text style={styles.description}>{level.description}</Text>
          </TouchableOpacity>
        );
      })}

    </View>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
padding:20,
backgroundColor: colors.background,
},

backButton: {
  alignSelf: "flex-start",
  paddingVertical: 6,
  paddingHorizontal: 8,
  marginBottom: 8,
}, 

backText: {
  fontSize: 22,
  color: "#000",      // black arrow
  fontWeight: "700",
},

title:{
fontSize:24,
fontWeight:"bold",
marginBottom:20
},

card: {
backgroundColor: colors.white,
padding: 20,
borderRadius: 12,
marginBottom: 15,
elevation: 3,
},
levelTitle:{
fontSize:18,
fontWeight:"bold",
marginBottom:5
},

description:{
fontSize:14,
color:"#555"
}
});