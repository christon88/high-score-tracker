import { StackScreenProps } from '@react-navigation/stack'
import { Game } from './models/models'

export const routes = {
  home: 'Home',
  gamePage: 'Game',
}

export type RootStackParamList = {
  Home: undefined
  Game: { game: Game }
}

type Props = StackScreenProps<RootStackParamList, 'Game'>
