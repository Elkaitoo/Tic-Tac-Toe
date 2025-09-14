import { useState } from "react";
export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  function handleEditClick() {
    setIsEditing((prev) => !prev);
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
    <li>
      <span className="player">{displayName}</span>
      <span className="player-symbol">{symbol}</span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
