import React, { useState } from "react";
import { ListItem } from "react-native-elements";
import { StyleSheet } from "react-native";

interface Props {
  score: number;
  comment: string;
}

const ScoreCard = ({ score, comment }: Props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <ListItem
      onPress={() => setExpanded(!expanded)}
      containerStyle={styles.listItem}
      bottomDivider
    >
      <ListItem.Content>
        <ListItem.Title>{score.toString()}</ListItem.Title>
        {expanded && <ListItem.Subtitle>{comment}</ListItem.Subtitle>}
      </ListItem.Content>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: 300,
  },
});

export default ScoreCard;
