import { useState } from "react";

const Cell = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div
      id={String(Math.random())}
      className="cell"
      onDoubleClick={() => {
        setClicked((prev: boolean) => {
          return !prev;
        });
      }}
      style={clicked ? { background: "#00ffea" } : { background: "#009938" }}
    ></div>
  );
};
export default Cell;
