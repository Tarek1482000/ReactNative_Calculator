import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ResultScreen = ({ data, resultWord, result, mother }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data}</Text>

      <Text style={styles.text}>{mother}</Text>

      <Text style={styles.text}>{resultWord}</Text>

      <Text style={styles.text}>{result}</Text>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111",
    height: 280,
  },
  text: {
    fontSize: 20,
    margin: 10,
    marginTop: 10,
    color: "white",
  },
});
