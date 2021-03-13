import React from 'react'
import { Avatar, ListItem } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Game } from '../models/models'

const AddGameButton = () => {
  const navigation = useNavigation()
  const handleClick = () => {
    navigation.navigate('Add Game')
  }
  return (
    <ListItem
      onPress={handleClick}
      containerStyle={styles.listItem}
      bottomDivider
    >
      <ListItem.Content>
        <ListItem.Title>+</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  )
}

const styles = StyleSheet.create({
  listItem: {
    width: 300,
  },
})

export default AddGameButton
