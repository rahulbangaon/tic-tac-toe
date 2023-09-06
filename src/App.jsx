import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import ResetButton from "./components/ResetButton/ResetButton";

function App() {
  const win_conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));

  const [xPlaying, setXPlaying] = useState(true);

  const [xScore, setXScore] = useState("");
  const [oScore, setOScore] = useState("");

  useEffect(() => {
    // get score from local storage during mounting
    const savedOScore = localStorage.getItem("oScore");
    const savedXScore = localStorage.getItem("xScore");

    if (savedOScore && savedXScore) {
      setOScore(parseInt(savedOScore));
      setXScore(parseInt(savedXScore));
    }
  }, []);

  useEffect(() => {
    // Saving scores to local storage when  anyone win
    localStorage.setItem("oScore", oScore.toString());
    localStorage.setItem("xScore", xScore.toString());
  }, [oScore, xScore]);

  const [gameOver, setGameOver] = useState(false);

  const handleBoxClick = (boxIndex) => {
    const updatedBoard = board.map((value, index) => {
      return index == boxIndex ? (xPlaying ? "X" : "O") : value;
    });

    setBoard(updatedBoard);

    // check if someone won
    const winner = checkWin(updatedBoard);
    if (winner) {
      if (winner == "O") {
        let currentScore = oScore;
        currentScore++;
        setOScore(currentScore);
      } else {
        let currentScore = xScore;
        currentScore++;
        setXScore(currentScore);
      }
    }

    setXPlaying(!xPlaying);
  };

  const checkWin = (board) => {
    for (let i = 0; i < win_conditions.length; i++) {
      const [x, y, z] = win_conditions[i];

      if (board[x] && board[x] == board[y] && board[y] == board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <ScoreBoard xPlaying={xPlaying} oScore={oScore} xScore={xScore} />
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <ResetButton resetBoard={resetBoard} />
    </div>
  );
}

export default App;
