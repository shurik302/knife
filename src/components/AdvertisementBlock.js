import React from "react";
import "../stylesheets/Components.css";
import Advertisement from "./Advertisement";
import lightning from "../images/adLightning.png";

function AdvertisementBlock() {
    return (
        <div className="AdvertisementBlock">
            <Advertisement
                nameBlockA="Тактические фонари"
                infoBlockA="Новые фонарики для повседневных задач и тактического назначения "
                imageBlockA={lightning}
            />
            <Advertisement
                nameBlockA="Тактические фонари"
                infoBlockA="Новые фонарики для повседневных задач и тактического назначения "
                imageBlockA={lightning}
            />
        </div>
    );
}

export default AdvertisementBlock;
