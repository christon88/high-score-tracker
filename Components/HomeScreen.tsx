import React from "react";
import { StyleSheet, View } from "react-native";
import GameList from "./GameList";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <GameList />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
