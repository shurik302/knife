import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About_us from "./pages/About_us";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import News from "./pages/News";
import Personal_cabinet from "./pages/Personal_cabinet";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Shop from "./pages/Shop.js";

function App() {
    return (
        <Router>
            <div className="Scroll">
                <div class="progress-container">
                    <div class="progress-bar" id="myBar"></div>
                </div>
            </div>
            <Navigation />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about_us" exact element={<About_us />} />
                <Route path="/contacts" exact element={<Contacts />} />
                <Route path="/delivery" exact element={<Delivery />} />
                <Route path="/news" exact element={<News />} />
                <Route
                    path="/personal_cabinet"
                    exact
                    element={<Personal_cabinet />}
                />
                <Route path="/Shop" exact element={<Shop />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

window.onscroll = function () {
    myFunction();
};

function myFunction() {
    var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
    var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}
