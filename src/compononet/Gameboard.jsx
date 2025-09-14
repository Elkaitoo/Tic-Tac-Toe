import { useState } from "react";
const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard() {
  const [gameboard, setGameboard] = useState(initialGameboard);
  function handleCellClick(rowIndex, colIndex) {
    setGameboard((prevGameboard) => {
      const newGameboard = [...prevGameboard.map((row) => [...row])];
      newGameboard[rowIndex][colIndex] = 'X';
      return newGameboard;
    });
  }

  return (
    <ol id="game-board">
      {gameboard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleCellClick(rowIndex, colIndex)}>
                  {cell}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
