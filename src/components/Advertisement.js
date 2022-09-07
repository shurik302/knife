import React from "react";
import "../stylesheets/Components.css";

function Advertisement({ nameBlockA, infoBlockA, imageBlockA }) {
    return (
        <div className="advertisement">
            <div className="textPartA">
                <p>{nameBlockA}</p>
                <hr className="hrBlockA" />
                <p>{infoBlockA}</p>
                <div className="buttonA">
                    <a>Подробнее</a>
                </div>
            </div>
            <div className="imgPartA">
                <img src={imageBlockA} />
            </div>
        </div>
    );
}

export default Advertisement;
