import React, { Component } from "react";
import BarCommonItem from "./bar_common_item";
import BarSocialMediaItem from "./bar_social_media_item";
import BarCopyrightItem from "./bar_copyright_item";

import { HEADER, FOOTER } from "../../../configuration/constants";

export default class Bar extends Component {

    renderDynamicItem(){

        switch(this.props.type){
            case HEADER:
                return <BarSocialMediaItem />;
            case FOOTER:
                return <BarCopyrightItem />;
            default:
                return <BarSocialMediaItem />;
        }
    }

    render () {
        return (
            <div className={this.props.type === HEADER ? "bar bar-header" : "bar bar-footer"}>
                <div className="main-width bar-container">
                    <BarCommonItem type={this.props.type}/>
                    {this.renderDynamicItem()}
                </div>
            </div>
        );
    }
};

