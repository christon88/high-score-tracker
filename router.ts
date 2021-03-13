import { StackScreenProps } from '@react-navigation/stack'
import { Game } from './models/models'

export const routes = {
  home: 'Home',
  gamePage: 'Game',
  addGame: 'Add Game',
}

export type RootStackParamList = {
  Home: undefined
  Game: { game: Game }
  AddGame: undefined
}

type Props = StackScreenProps<RootStackParamList, 'Game'>
