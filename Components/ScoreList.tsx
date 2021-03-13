import React from 'react'
import { Score } from '../models/models'
import ScoreCard from './ScoreCard'

interface Props {
  scores: Score[]
}

export default function ScoreList({ scores }: Props) {
  return (
    <>
      {scores.map((score, index) => (
        <ScoreCard score={score.value} comment={score.comment} key={index} />
      ))}
    </>
  )
}
