

export default function Gameboard({ onSelectSquare, board }) {


  // const [gameboard, setGameboard] = useState(initialGameboard);
  // function handleCellClick(rowIndex, colIndex) {
  //   setGameboard((prevGameboard) => {
  //     const newGameboard = [...prevGameboard.map((row) => [...row])];
  //     newGameboard[rowIndex][colIndex] = activePlayerSymbol;
  //     return newGameboard;
  //   });
  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
