import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { vocabularyData } from "../../data/vocabularyData";

export default function VocabularyTopicsScreen({ route, navigation }) {

const { level } = route.params;

const topics = vocabularyData[level].topics;

return (

<View style={styles.container}>

<Text style={styles.title}>
Vocabulary {vocabularyData[level].title}
</Text>

<FlatList
data={topics}
keyExtractor={(item, index) => index.toString()}
renderItem={({ item, index }) => (

<TouchableOpacity
style={styles.topicCard}
onPress={() =>
navigation.navigate("VocabularyLesson", {
level,
topicIndex: index
})
}
>

<Text style={styles.topic}>{item.title}</Text>
<Text style={styles.desc}>{item.description}</Text>

</TouchableOpacity>

)}
/>

</View>

);

}

const styles = StyleSheet.create({

container: {
flex: 1,
padding: 20
},

title: {
fontSize: 18,
fontWeight: "bold",
marginBottom: 15
},

topicCard: {
backgroundColor: "#fff",
padding: 20,
borderRadius: 12,
marginBottom: 12,
elevation: 3
},

topic: {
fontSize: 18,
fontWeight: "bold"
},

desc: {
marginTop: 5,
color: "#666"
}

});