import React from "react";
import {
View,
Text,
FlatList,
TouchableOpacity,
StyleSheet
} from "react-native";
import { colors } from '../../theme/colors';


export default function VocabularyLessonScreen({ route, navigation }) {

const { topics, levelTitle } = route.params;

const renderItem = ({ item }) => {

return (

<TouchableOpacity
style={styles.card}
onPress={() =>
navigation.navigate("Flashcards", {
words: item.words,
topicTitle: item.title
})
}
>

<Text style={styles.topicTitle}>{item.title}</Text>

<Text style={styles.description}>
{item.description}
</Text>

</TouchableOpacity>

);
};

return (

<View style={styles.container}>

{/* Breadcrumb Navigation */}

<View style={styles.breadcrumbRow}>

<TouchableOpacity
activeOpacity={0.6}
onPress={() => navigation.goBack()}
>
<Text style={styles.breadcrumbLink}>
Vocabulary
</Text>
</TouchableOpacity>

<Text style={styles.breadcrumbArrow}> {" > "} </Text>

<Text style={styles.breadcrumbCurrent}>
{levelTitle}
</Text>

</View>

<Text style={styles.heading}>
Choose a vocabulary lesson
</Text>

<FlatList
data={topics}
renderItem={renderItem}
keyExtractor={(item,index)=>index.toString()}
showsVerticalScrollIndicator={false}
/>

</View>

);
}

const styles = StyleSheet.create({

container:{
flex:1,
padding:20,
backgroundColor: colors.background,
},

breadcrumbRow:{
flexDirection:"row",
alignItems:"center",
marginBottom:15
},

breadcrumbLink:{
fontSize:14,
color:"#000000ff",
fontWeight:"600"
},

breadcrumbArrow:{
fontSize:14,
color:"#888"
},

breadcrumbCurrent:{
fontSize:14,
color:"#444"
},

heading:{
fontSize:22,
fontWeight:"bold",
marginBottom:20
},

card:{
backgroundColor: colors.white,
padding:20,
borderRadius:12,
marginBottom:15,
elevation:3
},

topicTitle:{
fontSize:18,
fontWeight:"bold",
marginBottom:5
},

description:{
fontSize:14,
color:"#666"
}

});