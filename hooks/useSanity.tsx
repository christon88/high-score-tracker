const sanityClient = require('@sanity/client')
import { Game, GameDTO, Score } from '../models/models'
import { SANITY_DATASET, SANITY_ID, SANITY_TOKEN } from '@env'
import { useContext } from 'react'
import { GameContext } from '../context/gameContext'
import { nanoid } from 'nanoid'

const client = sanityClient({
  projectId: SANITY_ID,
  dataset: SANITY_DATASET,
  token: SANITY_TOKEN,
  useCdn: false,
})

const useSanity = () => {
  const { games, setGames } = useContext(GameContext)

  async function getGames(): Promise<Game[]> {
    const query = `*[_type == "game"]`

    const games = await client.fetch(query)
    setGames(games)
    return games
  }

  async function createGame(game: GameDTO) {
    const request: Game = {
      _type: 'game',
      _id: nanoid(),
      title: game.title,
      image: game.image,
      scores: game.scores,
    }
    const newGames = [...games, request]
    setGames(newGames)
    await client.create(request)
  }

  async function deleteGame(id?: string) {
    if (id) {
      const newGames = games.filter((game) => game._id !== id)
      setGames(newGames)

      await client.delete(id)
    }
  }

  async function addScore(gameId: string, score: string, comment: string) {
    const request: Score = {
      value: score,
      comment: comment,
    }

    const index = games.findIndex((game) => game._id === gameId)
    const game = games[index]
    game.scores.push(request)
    const newGames = [...games]
    newGames[index] = game

    setGames(newGames)

    await client
      .patch(gameId)
      .setIfMissing({ scores: [] })
      .insert('after', 'scores[-1]', [request])
      .commit()
  }

  return { getGames, createGame, deleteGame, addScore }
}

export default useSanity
