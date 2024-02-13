import { useState } from "react";
import Board from "./board";
import { Button } from "./ui/button";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);

  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;

  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: (null | "X" | "O")[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(step: number) {
    setCurrentMove(step);
  }

  const moves = history.map((_squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = `Go to game start`;
    }
    return (
      <li key={move}>
        <Button className="m-3" onClick={() => jumpTo(move)}>
          {description}
        </Button>
      </li>
    );
  });
  return (
    <div className="flex flex-row">
      <div className="table">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="ml-5">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
