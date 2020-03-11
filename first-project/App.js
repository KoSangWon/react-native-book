import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WeatherProject from "./WeatherProject";
import Button from "./PressDemo"
import Simple from "./src/bestsellers/SimpleList"

export default function App() {
  return (
    <View style={styles.container}>
      <Simple></Simple>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
