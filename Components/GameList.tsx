import React from "react";
import { games } from "../data";
import GameCard from "./GameCard";

export default function GameList() {
  return (
    <>
      {games.map((game, index) => (
        <GameCard
          id={game.id}
          title={game.title}
          image={game.img}
          key={index}
        />
      ))}
    </>
  );
}
