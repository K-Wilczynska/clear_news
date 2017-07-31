import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducer";
import "../style/style.scss";

const reduxStore = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={reduxStore}>
    </Provider>,
    document.querySelector("#root")
);