import React, {Component} from 'react';

import Bar from "./common/bar/bar";
import Logo from "./logo";
import Navigation from "./common/navigation/navigation";

import {HEADER, FOOTER} from "../configuration/constants";

export default class App extends Component {
    render(){
        return(
            <div>
                <Bar type={HEADER}/>
                <Logo />
                <Navigation />
                <Bar type={FOOTER}/>
            </div>
        );
    }
}