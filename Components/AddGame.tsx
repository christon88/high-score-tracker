import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler'
import useSanity from '../hooks/useSanity'
import { GameDTO } from '../models/models'

const AddGame = () => {
  const [title, setTitle] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const { createGame } = useSanity()

  const navigation = useNavigation()
  const handleSubmit = () => {
    createGame({
      title: title,
      image: imageUrl,
      scores: [],
    } as GameDTO)
    navigation.navigate('Home')
  }
  return (
    <View style={styles.addGame}>
      <View style={styles.inputForm}>
        <Text style={styles.inputLabel}>Title</Text>
        <TextInput
          style={styles.inputField}
          value={title}
          onChangeText={setTitle}
        />
        <Text style={styles.inputLabel}>Image URL</Text>
        <TextInput
          style={styles.inputField}
          value={imageUrl}
          onChangeText={setImageUrl}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  addGame: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputForm: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '50%',
    height: 80,
  },
  inputField: {
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 4,
    borderStyle: 'solid',
    padding: 8,
    marginBottom: 16,
    width: '100%',
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#242424',
    marginLeft: 4,
    marginBottom: 4,
  },
})

export default AddGame
