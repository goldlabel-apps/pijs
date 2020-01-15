import packageJSON from "../package.json";
import React from "react";
import ReactDOM from "react-dom";
import initRedux from "./redux/initRedux";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import ViewSwitcher from "./ViewSwitcher";
import ClockWork from "./ClockWork";
import { CssBaseline } from "@material-ui/core/";

const disablePersitance = true;

console.log(
  `${packageJSON.name} ${packageJSON.version} (${process.env.REACT_APP_ENV})`
);

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
      <React.Fragment>
        <ClockWork />
        <CssBaseline />
        <ViewSwitcher />
      </React.Fragment>
    </PersistGate>
  </Provider>,
  document.getElementById("pijs")
);

serviceWorker.register();
