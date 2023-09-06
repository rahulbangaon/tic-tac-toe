import './style.css';

const ScoreBoard = ({oScore,xScore,xPlaying}) => {
  return (
    <div className="scoreboard">
      <span className={`score x-score ${!xPlaying && "inactive"}`}>
        X - {xScore}
      </span>
      <span className={`score o-score ${xPlaying && "inactive"}`}>
        O - {oScore}
      </span>
    </div>
  );
}

export default ScoreBoard;