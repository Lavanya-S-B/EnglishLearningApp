import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function FlashCard({ word, meaning }) {
  const [flip, setFlip] = useState(false);

  return (
    <TouchableOpacity style={styles.card} onPress={() => setFlip(!flip)}>
      <Text style={styles.text}>
        {flip ? meaning : word}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e3a8a',
    borderRadius: 15,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});