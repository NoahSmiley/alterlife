import "../../../css/Grid.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import Cell from "./Cell";
import { Fragment } from "react";
const Grid = () => {
  let rows = new Array(50);
  rows.fill("");
  let cells = new Array(50);
  cells.fill("");

  const finGrid = rows.map(() => {
    return (
      <div className="row">
        {cells.map(() => {
          return <Cell />;
        })}
      </div>
    );
  });

  return (
    <Fragment>
      <TransformWrapper
        doubleClick={{ disabled: true }}
        panning={{ velocityDisabled: true }}
      >
        <TransformComponent>
          <div className="wrapper">
            <div className="grid">{finGrid}</div>
          </div>
        </TransformComponent>
      </TransformWrapper>
      <div></div>
    </Fragment>
  );
};
export default Grid;
