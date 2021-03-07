import { StackScreenProps } from '@react-navigation/stack';

export const routes = {
    home: "Home",
    gamePage: "Game",
  };

export type RootStackParamList = {
  Home: undefined;
  Game: { id: number };
};

type Props = StackScreenProps<RootStackParamList, 'Game'>;