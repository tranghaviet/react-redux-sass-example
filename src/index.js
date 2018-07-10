/* global document */

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import './styles/index.css';
import App from "./App";
import store from "./store";
// File luu router va tao store
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// import {Router, Route, Switch} from 'react-router-dom';
// import { ThroughProvider } from 'react-through';
import { BrowserRouter } from 'react-router-dom';
// By using <Provider />, the store will be made available for all the components in your application.
render(
  <Provider store={store}>
   <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById("root")
);
// render((
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>), document.getElementById("root")
// );

// registerServiceWorker();
