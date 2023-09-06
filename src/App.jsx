import { useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  return (
    <div className="app">
      <Board board={board} onClick={null} />
    </div>
  );
}

export default App;
