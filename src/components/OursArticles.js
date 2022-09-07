import React from "react";
import { News } from "./NewsList";
import NewsHTML from "./NewsHTML";
import "../stylesheets/Components.css";

function OursArticles({ nameblock }) {
    return (
        <div className="OursArticles">
            <div className="ImageArt">{nameblock}</div>
            <div className="newsBlock">
                {News.map((test, key) => {
                    return (
                        <NewsHTML
                            key={key}
                            imageCard={test.imageCard}
                            nameState={test.nameState}
                            dataState={test.dataState}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default OursArticles;
