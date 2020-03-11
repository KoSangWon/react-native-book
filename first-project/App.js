import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WeatherProject from "./WeatherProject";
import Button from "./PressDemo"

export default function App() {
  return (
    <View style={styles.container}>
      <Button></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
