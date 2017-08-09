import React from "react";
import BarCommonItem from "./bar_common_item";
import BarSocialMediaItem from "./bar_social_media_item";

const Bar = (props) => {

    return (
        <div className={props.type === "top" ? "bar bar-top" : "bar bar-footer"}>
            <div className="main-width bar-container">
                <BarCommonItem/>
                <BarSocialMediaItem/>
            </div>
        </div>
    );
};

export default Bar;