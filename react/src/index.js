import packageJSON from "../package.json";
import React from "react";
import ReactDOM from "react-dom";
import initRedux from "./redux/initRedux";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import AppShell from "./AppShell";
import "./theme/mapbox-gl.css";

console.log(
  `${packageJSON.name} ${packageJSON.version} (${process.env.REACT_APP_ENV})`
);

const disablePersitance = false;
const purgeStore = () => {
  console.log(`Persitance Disabled.`);
  localStorage.clear();
};
if (disablePersitance) {
  purgeStore();
}

const persistedRedux = initRedux();
const getStore = () => {
  return persistedRedux.store;
};
export { getStore };

ReactDOM.render(
  <Provider store={persistedRedux.store}>
    <PersistGate loading={null} persistor={persistedRedux.persistor}>
      <AppShell />
    </PersistGate>
  </Provider>,
  document.getElementById("pi")
);

serviceWorker.register();
