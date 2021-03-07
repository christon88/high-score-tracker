import React from "react";
import { Avatar, ListItem } from "react-native-elements";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface Props {
  id: number;
  title: string;
  image: string;
}

const GameCard = ({ id, title, image }: Props) => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate("Game", { id: id });
  };
  return (
    <ListItem
      onPress={handleClick}
      containerStyle={styles.listItem}
      bottomDivider
    >
      <Avatar source={{ uri: image }} />
      <ListItem.Content>
        <ListItem.Title>{title}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: 300,
  },
});

export default GameCard;
