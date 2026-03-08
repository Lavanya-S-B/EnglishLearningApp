# English Learning Mobile Application

## Overview

This project is a **React Native (Expo) based English Learning Application** designed to help users improve their English skills through interactive lessons and exercises.

The application focuses on **four core language skills**:

*  Reading
*  Listening
*  Vocabulary
*  Grammar

Users can practice English using flashcards, reading comprehension tasks, listening activities, and quizzes.

---

# Features

##  Reading Module

* Paragraph-based reading lessons
* Multiple choice comprehension questions
* Swipe navigation between questions
* Lesson-based learning system
* Progress tracking

##  Listening Module

* Real audio listening tasks
* Transcript support
* Comprehension questions
* Swipe-based question navigation

##  Vocabulary Module

* Flashcard learning system
* Word meaning and example sentences
* Pronunciation audio
* Card flipping interaction
* Swipe between words

##  Grammar Module

* Grammar lessons
* Practice exercises
* Topic-based learning

---

#  Technologies Used

## Frontend Framework

* React Native
* Expo

## Navigation

* React Navigation

Navigation types used:

* Stack Navigator
* Tab Navigator

## Audio Features

* expo-av → listening exercises
* expo-speech → pronunciation audio

## UI Components

* View
* Text
* FlatList
* ScrollView
* TouchableOpacity
* Animated

---

#  Project Folder Structure

```
project src
│
├── data
│   ├── readingData.js
│   ├── listeningData.js
│   ├── grammarData.js
│   └── vocabularyData.js
│
├── navigation
│   ├── RootNavigator.js
│   ├── SkillsStack.js
│   ├── StackNavigator.js
│   ├── TabNavigator.js
│   ├── GrammarStack.js
│   └── VocabularyStack.js
│
├── screens
│   ├── Grammar
│   ├── Home
│   ├── Onboarding
│   ├── Splash
│   │
│   ├── Skills
│   │   ├── SkillsHomeScreen.js
│   │   ├── ReadingScreen.js
│   │   ├── ReadingParagraphScreen.js
│   │   ├── ListeningScreen.js
│   │   |__ ListeningTaskScreen.js
│   │  
│   │
│   └── Vocabulary
│       ├── FlashcardScreen.js
│       ├── VocabularyLessonScreen.js
│       └── VocabularyTopicsScreen.js
```

---

#  Application Architecture

Navigation structure:

RootNavigator
    
↓
    
TabNavigator
    
↓
    
Feature Stacks

Example:

SkillsStack

→ SkillsHomeScreen

→ ReadingScreen

→ ReadingParagraphScreen

This modular structure helps maintain **clean and scalable architecture**.

---

#  Audio Features

The application includes audio support for both listening exercises and pronunciation.

Libraries used:

* `expo-av` for listening tasks
* `expo-speech` for word pronunciation

Users can listen to:

* conversation audio
* word pronunciation
* listening exercises

---

#  Learning Methods Used

The application uses modern language learning techniques such as:

* Flashcard learning
* Interactive quizzes
* Micro lessons
* Audio comprehension
* Swipe-based navigation

---


 # Demo Video

Watch the application demo:

https://drive.google.com/file/d/19t_Oh4EMFln7psqTZXvc4TjuhDaV-yCv/view?usp=drive_link

---

# Running the Application

Install dependencies:

```
npm install
```

Start the project:

```
npx expo start
```

--

#  Future Improvements

Possible enhancements include:

* User authentication
* Cloud progress tracking
* Gamification (points, streaks)
* AI speaking evaluation
* Leaderboards
* Daily learning challenges

---

# Inspiration and Reference

This project was inspired by the structure and learning methodology of the **British Council LearnEnglish platform**.

Reference website:

https://learnenglish.britishcouncil.org/

The design of skill-based lessons and exercises influenced the architecture of this application.






