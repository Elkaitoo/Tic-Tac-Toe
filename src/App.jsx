import { useState } from "react";
import Player from "./compononet/Player";
import Gameboard from "./compononet/Gameboard";
import Log from "./compononet/Log";
import { WINING_COMBOS } from "./winning-coms.js";
import GameOver from "./compononet/GameOver.jsx";
const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(turns) {
  let currentPlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2'
  });
  const [gameTurn, setGameTurn] = useState([]);

  let gameboard = [...initialGameboard.map((array) => [...array])];
  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;
    gameboard[row][col] = player;
  }

  let winner = null;

  for (const combo of WINING_COMBOS) {
    const firstSquare = gameboard[combo[0].row][combo[0].col];
    const secondSquare = gameboard[combo[1].row][combo[1].col];
    const thirdSquare = gameboard[combo[2].row][combo[2].col];

    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = firstSquare;
    }
  }

  const hasDraw = gameTurn.length === 9 && !winner;

  const activePlayer = deriveActivePlayer(gameTurn);
  
  function handleSelectSquare(rowIndex, colIndex) {
    //setActivePlayer((prev) => (prev === "X" ? "O" : "X"));
    setGameTurn((prevTurn) => {
      const currentPlayer = deriveActivePlayer(prevTurn);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];
      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurn([]);
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={players.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onNameChange={(newName) => setPlayers(prev => ({...prev, X: newName}))}
          />
          <Player
            initialName={players.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onNameChange={(newName) => setPlayers(prev => ({...prev, O: newName}))}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner ? players[winner] : null} onRestart={handleRestart} />}
        <Gameboard
          onSelectSquare={handleSelectSquare}
          turns={gameTurn}
          board={gameboard}
        />
      </div>
      <Log turns={gameTurn} players={players} />
    </main>
  );
}

export default App;
