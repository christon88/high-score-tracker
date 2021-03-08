import { RouteProp } from "@react-navigation/native";
import React from "react";
import { Card, Text } from "react-native-elements";
import { RootStackParamList } from "../router";
import { games } from "../data";
import { StyleSheet, View } from "react-native";
import ScoreList from "./ScoreList";

type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Game">;

interface Props {
  route: ProfileScreenRouteProp;
}

export default function GameList({ route }: Props) {
  const { id } = route.params;
  const game = games.find((game) => game.id === id);
  return game ? (
    <>
      <Card containerStyle={styles.titleCard}>
        <Card.Title>{game.title}</Card.Title>
        <Card.Image source={{ uri: game.img }} containerStyle={styles.image} />
        <Card.Divider />
        <ScoreList id={game.id} />
      </Card>
    </>
  ) : (
    <View>
      <Text>Can't find game</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
  },
});
