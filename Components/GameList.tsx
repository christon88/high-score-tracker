import React, { useContext, useEffect } from 'react'
import GameCard from './GameCard'

import useSanity from '../hooks/useSanity'
import AddGameButton from './AddGameButton'
import { GameContext } from '../context/gameContext'

export default function GameList() {
  const { games, setGames } = useContext(GameContext)
  const { getGames } = useSanity()
  useEffect(() => {
    async function readGames() {
      const storedGames = await getGames()
      setGames(storedGames)
    }
    readGames()
  }, [])
  return (
    <>
      {games.map((game, index) => (
        <GameCard game={game} key={index} />
      ))}
      <AddGameButton />
    </>
  )
}
