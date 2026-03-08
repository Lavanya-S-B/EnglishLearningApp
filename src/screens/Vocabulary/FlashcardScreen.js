// ...existing code...
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  Animated
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from '../../theme/colors';

import * as Speech from "expo-speech";

const { width, height } = Dimensions.get("window");

export default function FlashcardScreen({ route, navigation }) {
  const { words } = route.params;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedIndex, setFlippedIndex] = useState(null);

  // store an Animated.Value per item index
  const flipAnimations = useRef(new Map());

  const getFlipAnim = (index) => {
    if (!flipAnimations.current.has(index)) {
      flipAnimations.current.set(index, new Animated.Value(0));
    }
    return flipAnimations.current.get(index);
  };

  const flipCard = (index) => {
    const anim = getFlipAnim(index);
    const isFlipped = flippedIndex === index;
    const toValue = isFlipped ? 0 : 180;

    Animated.spring(anim, {
      toValue,
      useNativeDriver: true,
    }).start(() => {
      setFlippedIndex(isFlipped ? null : index);
    });
  };

  const speakWord = (word) => {
    Speech.speak(word);
  };

  // reset all flips except the given index (usually the new current)
  const resetAllExcept = (keepIndex = null) => {
    flipAnimations.current.forEach((anim, i) => {
      if (i !== keepIndex) {
        Animated.timing(anim, {
          toValue: 0,
          duration: 180,
          useNativeDriver: true,
        }).start();
      }
    });
    if (keepIndex !== flippedIndex) setFlippedIndex(null);
  };

  const renderItem = ({ item, index }) => {
    const anim = getFlipAnim(index);

    const frontInterpolate = anim.interpolate({
      inputRange: [0, 180],
      outputRange: ["0deg", "180deg"],
    });

    const backInterpolate = anim.interpolate({
      inputRange: [0, 180],
      outputRange: ["180deg", "360deg"],
    });

    return (
      <View style={styles.page}>
        <TouchableOpacity activeOpacity={0.9} onPress={() => flipCard(index)}>
          <View style={styles.cardContainer}>
            {/* FRONT CARD */}
            <Animated.View
              style={[
                styles.card,
                { transform: [{ rotateY: frontInterpolate }] },
              ]}
            >
              <Image source={{ uri: item.image }} style={styles.image} />

              <Text style={styles.word}>{item.word}</Text>

              <TouchableOpacity
                style={styles.audioBtn}
                onPress={() => speakWord(item.word)}
              >
                <Text style={styles.audioText}>🔊</Text>
              </TouchableOpacity>

              <Text style={styles.tap}>Tap to flip</Text>
            </Animated.View>

            {/* BACK CARD */}
            <Animated.View
              style={[
                styles.card,
                styles.cardBack,
                { transform: [{ rotateY: backInterpolate }] },
              ]}
            >
              <Text style={styles.label}>Meaning</Text>
              <Text style={styles.text}>{item.meaning}</Text>

              <Text style={styles.label}>Synonyms</Text>
              <Text style={styles.text}>{item.synonyms.join(", ")}</Text>

              <Text style={styles.label}>Sentence</Text>
              <Text style={styles.text}>{item.sentence}</Text>
            </Animated.View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* HEADER WITH BACK BUTTON */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={26} color="#333" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Flashcards</Text>
      </View>

      
      <FlatList
        data={words}
        horizontal
        pagingEnabled
        snapToInterval={width}
        snapToAlignment="start"
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}

        // NEW: when user starts dragging, flip any flipped card back immediately
        onScrollBeginDrag={() => {
          if (flippedIndex !== null && flipAnimations.current.has(flippedIndex)) {
            const anim = flipAnimations.current.get(flippedIndex);
            Animated.timing(anim, {
              toValue: 0,
              duration: 160,
              useNativeDriver: true,
            }).start();
            setFlippedIndex(null);
          }
        }}

        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
          const prevIndex = currentIndex;
          setCurrentIndex(newIndex);

          // ensure all other cards are reset (keeps only newIndex if you want)
          resetAllExcept(newIndex);

          // make sure previous flipped card is forced to front
          if (prevIndex !== newIndex && flipAnimations.current.has(prevIndex)) {
            const prevAnim = flipAnimations.current.get(prevIndex);
            Animated.timing(prevAnim, {
              toValue: 0,
              duration: 180,
              useNativeDriver: true,
            }).start();
          }
        }}
        onScroll={(event) => {
          const idx = Math.round(event.nativeEvent.contentOffset.x / width);
          if (idx !== currentIndex) setCurrentIndex(idx);
        }}
        scrollEventThrottle={16}
        contentContainerStyle={{}}
        style={{ flex: 1 }}
      />


      {/* PAGE DOTS */}
      <View style={styles.dots}>
        {words.map((_, i) => (
          <View key={i} style={[styles.dot, currentIndex === i && styles.activeDot]} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fb",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  backButton: {
    marginRight: 10,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },

  page: {
    width: width,
    alignItems: "center",
    justifyContent: "center",
  },

  cardContainer: {
    width: width * 0.85,
    height: height * 0.6,
  },

  card: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backfaceVisibility: "hidden",
    elevation: 8,
  },

  cardBack: {
    backgroundColor: "#6c63ff",
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 15,
    marginBottom: 20,
  },

  word: {
    fontSize: 32,
    fontWeight: "bold",
  },

  audioBtn: {
    marginTop: 10,
  },

  audioText: {
    fontSize: 22,
  },

  tap: {
    marginTop: 20,
    color: "#777",
  },

  label: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
  },

  text: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    margin: 5,
  },

  activeDot: {
    backgroundColor: "#6c63ff",
    width: 12,
    height: 12,
  },
});
