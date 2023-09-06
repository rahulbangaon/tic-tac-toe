import './style.css';
import Box from '../Box/Box';


const Board = ({board,onClick}) => {
  return (
    <div className="board">
      {
        board.map((value, index) => {
          return <Box key={index} value={value} onClick={() => value === null && onClick(index)} />;
        })
      }
    </div>
  )
}

export default Board;