import React, { useState } from "react";
import {
View,
Text,
ScrollView,
TouchableOpacity,
StyleSheet
} from "react-native";
import { colors } from '../../theme/colors';

export default function ReadingParagraphScreen({ route }) {

const { item } = route.params;

const [selectedAnswers, setSelectedAnswers] = useState({});

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

<Text style={styles.paragraph}>{item.paragraph}</Text>

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
backgroundColor: colors.background,
},

title:{
fontSize:24,
fontWeight:"bold",
marginBottom:15
},

paragraph:{
fontSize:16,
lineHeight:24,
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
borderColor: colors.white,
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