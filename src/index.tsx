import "./index.css";
import "rc-slider/assets/index.css";
import "tippy.js/dist/tippy.css";

import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import { initializeApp, analytics } from "firebase/app";
import "firebase/analytics";

import App from "./components/App";
import { firebaseConfig } from "./firebaseConfig";

initializeApp(firebaseConfig);
analytics().logEvent("screen_view", {
  app_name: "Longwave",
  screen_name: "index",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
