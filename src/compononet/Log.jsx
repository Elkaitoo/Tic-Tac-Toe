export default function Log({ turns, players }) {
  return (
   <ol id="log">
     {turns.map((turn, index) => (
       <li key={index}>
         {`${players[turn.player]} selected square ${turn.square.row}, ${turn.square.col}`}
       </li>
     ))}
   </ol>
  );
}