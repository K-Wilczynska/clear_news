import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import "../style/style.scss";

import App from "./components/app";

const reduxStore = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>,
    document.querySelector("#root")
);