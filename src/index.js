import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Provider } from "react-router-dom";

import App from "./App";

import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
