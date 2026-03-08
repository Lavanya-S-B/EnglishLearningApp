// ...existing code...
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function OnboardingScreen({ navigation }) {
  const backgroundUrl = 'https://kodakco.sgp1.digitaloceanspaces.com/blog/wp-content/uploads/2024/06/05123230/Image-1024x683.webp';

  return (
    <ImageBackground
      source={{ uri: backgroundUrl }}
      style={styles.background}
      imageStyle={styles.backgroundImage} // fill the screen
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to Learn English</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace('MainTabs')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
   background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    resizeMode: 'cover', 
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(8,10,20,0.35)', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 28,
  },
  button: {
    backgroundColor: '#3B5BDB',
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 12,
    minWidth: 160,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
