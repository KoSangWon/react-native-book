import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WeatherProject from "./WeatherProject";
import Button from "./PressDemo"
import Simple from "./src/bestsellers/SimpleList"
import BookList from "./src/bestsellers/MockBookList"
//import BookList from "./src/bestsellers/BookList"


export default function App() {
  return (
    <View style={styles.container}>
      <BookList></BookList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
