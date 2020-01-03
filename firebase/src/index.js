import packageJSON from "../package.json";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

console.log(
    `${packageJSON.name} ${packageJSON.version} (${process.env.REACT_APP_ENV})`
);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
