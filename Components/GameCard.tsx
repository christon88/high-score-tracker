import React from 'react'
import { Avatar, ListItem } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Game } from '../models/models'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  const navigation = useNavigation()
  const handleClick = () => {
    navigation.navigate('Game', { game: game })
  }
  return (
    <ListItem
      onPress={handleClick}
      containerStyle={styles.listItem}
      bottomDivider
    >
      <Avatar source={{ uri: game.image }} />
      <ListItem.Content>
        <ListItem.Title>{game.title}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  )
}

const styles = StyleSheet.create({
  listItem: {
    width: 300,
  },
})

export default GameCard
