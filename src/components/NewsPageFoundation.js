import React from "react";
import "../stylesheets/News.css";

function NewsPageFoundation({
    BackgroundImageNews,
    nameState,
    firstfoto,
    firstimg,
    secondomg,
    thirdimg,
}) {
    return (
        <div className="ALLPage">
            <div className="divwithImage">
                <img
                    className="BackgroundImageNewsB"
                    src={BackgroundImageNews}
                />
            </div>
            <div className="techPart">
                <div className="headB">
                    <div className="fNew NewB">
                        <img className="BackgroundImageNewsN" src={firstimg} />
                        <p>mnfsojkfnseojfnseofnseojn</p>
                    </div>
                    <div>
                        <div className="sNew NewB">
                            <img
                                className="BackgroundImageNewsN"
                                src={secondomg}
                            />
                        </div>
                        <div className="tNew NewB">
                            {" "}
                            <img
                                className="BackgroundImageNewsN"
                                src={thirdimg}
                            />
                        </div>
                    </div>
                </div>
                {/* <div className='divWithInfo'></div> */}
            </div>

            <div className="contentNews">
                <div className="MainPart"></div>
            </div>
        </div>
    );
}

export default NewsPageFoundation;
