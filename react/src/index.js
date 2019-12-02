import packageJSON from "../package.json";
import React from "react";
import ReactDOM from "react-dom";
import ReactRouter from "./ReactRouter";
import * as serviceWorker from "./serviceWorker";

console.log(
  `${packageJSON.name} ${packageJSON.version} (${process.env.REACT_APP_ENV})`
);

ReactDOM.render(<ReactRouter />, document.getElementById("root"));

serviceWorker.register();
