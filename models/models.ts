export interface Score {
  value: number
  comment: string
}

export interface Game {
  title: string
  image: string
  scores: Score[]
}
