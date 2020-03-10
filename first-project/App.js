import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WeatherProject from "./WeatherProject";

export default function App() {
  return (
    <View style={styles.container}>
      <WeatherProject></WeatherProject>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
