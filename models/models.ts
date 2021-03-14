export interface Score {
  value: number
  comment: string
}

export interface Game {
  _id: string
  _type: string
  title: string
  image: string
  scores: Score[]
}
export interface GameDTO {
  title: string
  image: string
  scores: Score[]
}
