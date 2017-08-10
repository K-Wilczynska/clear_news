import React, { Component } from "react";
import {HEADER, FOOTER} from "../../../configuration/constants";

export default class BarCommonItem extends Component {

    renderDynamicItem(){
        switch(this.props.type){
            case HEADER:
                return <li>Contact</li>;
            case FOOTER:
                return <li>Subscribe</li>;
            default:
                return <li>Contact</li>;
        }
    }

    render(){
        return (
            <div className="bar-wrap">
                <ul className="bar-list">
                    <li>About</li>
                    <li>Advertise</li>
                    <li>Privacy and Policy</li>
                    <li>Terms and Conditions</li>
                    {this.renderDynamicItem()}
                </ul>
            </div>
        );
    }
};

