import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Logo from "./components/Logo"
import styles from "./components/stySheet";

const App = () => {
  return (
    <View styles={styles.container}>
      <Text style={[styles.title]}>React Native</Text>
    </View>
  );
};

export default App;
