import React, { Component } from "react";

export default class BarCommonItem extends Component {

    render(){
        return (
            <div className="bar-wrap">
                <ul className="bar-list">
                    <li>About</li>
                    <li>Advertise</li>
                    <li>Privacy and Policy</li>
                    <li>Terms and Conditions</li>
                    <li>Contact</li>
                </ul>
            </div>
        );
    }
};

