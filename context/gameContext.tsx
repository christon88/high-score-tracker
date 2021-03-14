import { createContext, useEffect, useState } from 'react'
import { Game } from '../models/models'
import React from 'react'
import useSanity from '../hooks/useSanity'

const defaultState: Game[] = [
  {
    _id: '',
    _type: 'game',
    title: '',
    image: '',
    scores: [],
  },
]

interface Props {
  children: React.ReactNode
}

export const GameContext: React.Context<{
  games: Game[]
  setGames: (games: Game[]) => void
}> = createContext({
  games: defaultState,
  setGames: (arg0: Game[]) => {},
})

const GameContextProvider = ({ children }: Props) => {
  const [games, setGames] = useState(defaultState)
  const { getGames } = useSanity()

  useEffect(() => {
    async function readGames() {
      const storedGames = await getGames()
      setGames(storedGames)
    }
    readGames()
  }, [])

  return (
    <GameContext.Provider value={{ games, setGames }}>
      {children}
    </GameContext.Provider>
  )
}

export default GameContextProvider
