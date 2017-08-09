import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import Bar from "./components/common/bar/bar";
import Logo from "./components/logo";
import Navigation from "./components/common/navigation/navigation";

import reducers from "./reducers";
import "../style/style.scss";

const reduxStore = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={reduxStore}>
        <div>
            <Bar type="top"/>
            <Logo />
            <Navigation />
            <Bar type="footer"/>
        </div>
    </Provider>,
    document.querySelector("#root")
);