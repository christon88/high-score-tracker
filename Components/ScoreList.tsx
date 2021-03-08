import React from "react";
import { scores } from "../data";
import ScoreCard from "./ScoreCard";

interface Props {
  id: number;
}

export default function ScoreList({ id }: Props) {
  const gameScores = scores.filter((score) => score.gameId === id);
  return (
    <>
      {gameScores.map((score, index) => (
        <ScoreCard score={score.score} comment={score.comment} key={index} />
      ))}
    </>
  );
}
