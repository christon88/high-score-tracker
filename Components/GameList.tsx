import React, { useEffect, useState } from 'react'
import GameCard from './GameCard'

import { getGames } from '../api/sanity'
import { Game } from '../models/models'

export default function GameList() {
  const [games, setGames] = useState([] as Game[])
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
    </>
  )
}
