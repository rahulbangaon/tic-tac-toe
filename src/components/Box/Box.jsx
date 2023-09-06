import "./style.css";

const Box = ({ value, onClick }) => {
  return (
    <>
      <button
        className={`${value == "X" ? "box x" : "box o"}`}
        onClick={onClick}
      >
        {value}
      </button>
    </>
  );
};

export default Box;
