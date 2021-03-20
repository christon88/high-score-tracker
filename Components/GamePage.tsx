import { RouteProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Card, Text } from 'react-native-elements'
import { RootStackParamList } from '../router'
import { Button, StyleSheet, View } from 'react-native'
import ScoreList from './ScoreList'
import useSanity from '../hooks/useSanity'
import AddScoreButton from './AddScoreButton'

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Game'>

interface Props {
  route: ProfileScreenRouteProp
}

export default function GameList({ route }: Props) {
  const navigation = useNavigation()
  const { deleteGame } = useSanity()
  const { game } = route.params

  const handleDelete = (id: string) => {
    deleteGame(id)
    navigation.navigate('Home')
  }

  return game ? (
    <>
      <Card containerStyle={styles.titleCard}>
        <View style={styles.titleHeader}>
          <Card.Title style={styles.title}>{game.title}</Card.Title>
          <Button
            onPress={() => handleDelete(game._id)}
            title="Delete"
            color="red"
          />
        </View>
        <Card.Image
          source={{ uri: game.image }}
          containerStyle={styles.image}
        />
        <Card.Divider />
        <ScoreList scores={game.scores} />

        <AddScoreButton gameId={game._id} />
      </Card>
    </>
  ) : (
    <View>
      <Text>Can't find game</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginLeft: 10,
  },
  titleHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  titleCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
    marginBottom: 20,
  },
})
