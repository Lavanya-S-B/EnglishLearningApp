import React, { useState } from "react";
import {
View,
Text,
TouchableOpacity,
ScrollView,
StyleSheet
} from "react-native";

import { Audio } from "expo-av";

export default function ListeningTaskScreen({ route }) {

const { item } = route.params;

const [sound, setSound] = useState(null);
const [playing, setPlaying] = useState(false);
const [selectedAnswers, setSelectedAnswers] = useState({});

async function playAudio() {

if (playing) {
await sound.stopAsync();
setPlaying(false);
return;
}

const { sound: newSound } = await Audio.Sound.createAsync(
{ uri: item.audio }
);

setSound(newSound);

await newSound.playAsync();

setPlaying(true);

newSound.setOnPlaybackStatusUpdate((status) => {
if (status.didJustFinish) {
setPlaying(false);
}
});
}

const handleAnswer = (qIndex, option) => {

setSelectedAnswers({
...selectedAnswers,
[qIndex]: option
});

};

const getOptionStyle = (qIndex, option, correctAnswer) => {

if (!selectedAnswers[qIndex]) return styles.option;

if (option === correctAnswer)
return [styles.option, styles.correct];

if (option === selectedAnswers[qIndex])
return [styles.option, styles.wrong];

return styles.option;
};

return (

<ScrollView style={styles.container}>

<Text style={styles.title}>{item.title}</Text>

<TouchableOpacity style={styles.audioBtn} onPress={playAudio}>

<Text style={styles.audioText}>
{playing ? "Stop Audio" : "Play Audio"}
</Text>

</TouchableOpacity>

<Text style={styles.transcriptTitle}>Transcript</Text>

<Text style={styles.transcript}>
{item.transcript}
</Text>

{item.questions.map((q, qIndex) => (

<View key={qIndex} style={styles.questionCard}>

<Text style={styles.question}>
{qIndex + 1}. {q.question}
</Text>

{q.options.map((opt, i) => (

<TouchableOpacity
key={i}
style={getOptionStyle(qIndex, opt, q.answer)}
onPress={() => handleAnswer(qIndex, opt)}
>

<Text style={styles.optionText}>{opt}</Text>

</TouchableOpacity>

))}

</View>

))}

</ScrollView>

);
}

const styles = StyleSheet.create({

container:{
flex:1,
padding:20,
backgroundColor:"#fff"
},

title:{
fontSize:24,
fontWeight:"bold",
marginBottom:15
},

audioBtn:{
backgroundColor:"#2563eb",
padding:14,
borderRadius:10,
alignItems:"center",
marginBottom:20
},

audioText:{
color:"#fff",
fontSize:16,
fontWeight:"600"
},

transcriptTitle:{
fontSize:18,
fontWeight:"bold",
marginBottom:6
},

transcript:{
fontSize:15,
lineHeight:22,
marginBottom:20
},

questionCard:{
marginBottom:20
},

question:{
fontSize:16,
fontWeight:"600",
marginBottom:10
},

option:{
padding:12,
borderRadius:8,
borderWidth:1,
borderColor:"#ddd",
marginBottom:8
},

optionText:{
fontSize:15
},

correct:{
backgroundColor:"#d4edda",
borderColor:"#28a745"
},

wrong:{
backgroundColor:"#f8d7da",
borderColor:"#dc3545"
}

});