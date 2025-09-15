import { useState } from "react";
export default function Player({ initialName, symbol, isActive, onNameChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onNameChange(playerName);
    }
  }
  function handleNameChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }
  let displayName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    displayName = <input type="text" required value={playerName} onChange={handleNameChange} />;
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">{displayName}</span>
      <span className="player-symbol">{symbol}</span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
