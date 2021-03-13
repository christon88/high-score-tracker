import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const AddGame = () => {
  const navigation = useNavigation()
  const handleClick = () => {}
  return <Text>AddGame</Text>
}

const styles = StyleSheet.create({
  listItem: {
    width: 300,
  },
})

export default AddGame
