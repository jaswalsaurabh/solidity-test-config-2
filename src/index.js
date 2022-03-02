import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { MoralisProvider } from "react-moralis";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <MoralisProvider appId="3my0UGzCEzAEKQ2RE2m3zfENcYp1Vv8ObIL4LY4k" serverUrl="https://2hjddmcubhlu.usemoralis.com:2053/server" >
    <App />
  </MoralisProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
