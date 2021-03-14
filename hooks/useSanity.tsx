const sanityClient = require('@sanity/client')
import { Game, GameDTO } from '../models/models'
import { SANITY_DATASET, SANITY_ID, SANITY_TOKEN } from '@env'
import { useContext } from 'react'
import { GameContext } from '../context/gameContext'

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
    const request = {
      _type: 'game',
      title: game.title,
      image: game.image,
      scores: game.scores,
    }
    await client.create(request).then((res: Game) => {
      const newGames = [...games, res]
      setGames(newGames)
      console.log(`Question was created with id ${res._id}`, res)
    })
  }

  async function deleteGame(id?: string) {
    if (id) {
      const newGames = games.filter((game) => game._id !== id)
      setGames(newGames)
      await client.delete(id).then((res: any) => {
        console.log(`Game was deleted`, res)
      })
    }
  }

  return { getGames, createGame, deleteGame }
}

export default useSanity
