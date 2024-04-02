import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import ResultScreen from "./ResultScreen";

const CalcButton = ({ name, color, onPress, backgroundColor }) => {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={[styles.buttonText, { color: color }]}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CalcButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 10,
    marginLeft: 40,
    height: 90,
  },
  button: {},
  buttonText: {
    fontSize: 20,
  },
});
