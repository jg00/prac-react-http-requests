import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";

/***** axios.defaults object *****/
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

/***** axios.interceptors object *****/
// Functions you can define globally and are executed for every http request/response
// You can intercept requests or responses before they are handled by then or catch.
// Useful for setting common headers like authorization, logging responses, handle errors, etc.
// axios imports all share the same configuration.

axios.interceptors.request.use(
  request => {
    // Do something before request (ie the config) is sent
    console.log("[index.js] - request", request);
    return request;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    // Do something with response data
    console.log("[index.js] - response", response);
    return response;
  },
  error => {
    // Do something with response error
    console.log("[index.js] - response error", error);
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
