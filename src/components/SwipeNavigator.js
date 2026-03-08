import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

export default function SwipeNavigator({ onNext, onPrev, children }) {
  const swipe = Gesture.Pan()
    .onEnd((event) => {
      if (event.translationX < -100) {
        onNext();
      }
      if (event.translationX > 100) {
        onPrev();
      }
    });

  return (
    <GestureDetector gesture={swipe}>
      <View style={styles.container}>
        {children}
      </View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});