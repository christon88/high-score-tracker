import React, { useState } from 'react'
import { ListItem } from 'react-native-elements'
import { Button, StyleSheet } from 'react-native'
import useSanity from '../hooks/useSanity'

interface Props {
  gameId: string
}

const AddScoreButton = ({ gameId }: Props) => {
  const [expanded, setExpanded] = useState(false)
  const [score, setScore] = useState('')
  const [comment, setComment] = useState('')

  const { addScore } = useSanity()

  const handlePlusClick = () => {
    setExpanded(!expanded)
  }
  const handleSubmit = () => {
    addScore(gameId, score, comment)
    setScore('')
    setComment('')
    setExpanded(false)
  }

  return (
    <ListItem containerStyle={styles.listItem} bottomDivider>
      <ListItem.Content>
        <ListItem.Title onPress={handlePlusClick}>
          {expanded ? '➖  Add score' : '➕  Add score'}
        </ListItem.Title>
        {expanded && (
          <>
            <ListItem.Subtitle>Score</ListItem.Subtitle>
            <ListItem.Input
              style={styles.inputField}
              value={score}
              onChangeText={setScore}
              keyboardType="number-pad"
            />
            <ListItem.Subtitle>Comment</ListItem.Subtitle>
            <ListItem.Input
              style={styles.inputField}
              value={comment}
              onChangeText={setComment}
            />
            <Button title="Submit" onPress={handleSubmit} />
          </>
        )}
      </ListItem.Content>
    </ListItem>
  )
}

const styles = StyleSheet.create({
  listItem: {
    width: 300,
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
})

export default AddScoreButton
