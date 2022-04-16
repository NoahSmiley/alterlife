import { Fragment, useState } from "react";

import "../../css/AlterLife.css";
import "../../css/App.css";

import Grid from "./grid/Grid";

const AlterLife = () => {
  return (
    <Fragment>
      <h1>Status:</h1>
      <h2>
        alter<b>life</b>
      </h2>
      <Grid />
    </Fragment>
  );
};

export default AlterLife;
