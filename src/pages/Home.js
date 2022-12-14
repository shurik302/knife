import React from "react";
import SimpleSlider from "../components/Slider";
import "../stylesheets/Home.css";
import artage from "../images/artage-io-thumb-.png";
import verify from "../images/verify.png";
import settings from "../images/settings.png";
import procents from "../images/procents.png";
import transport from "../images/transport.png";
import fCat from "../images/fCat.png";
import sCat from "../images/sCat.png";
import tCat from "../images/tCat.png";
import frCat from "../images/frCat.png";
import fiCat from "../images/fiCat.png";
import sxCat from "../images/sxCat.png";
import SliderCards from "../components/SliderCards";
import Block from "../components/Block";
import OursArticles from "../components/OursArticles";
import AdvertisementBlock from "../components/AdvertisementBlock";
import "../stylesheets/Components.css";

function Home() {
    return (
        <div className="allTitle">
            <div className="upanddownSlider">
                <div className="slider">
                    <SimpleSlider />
                    <div className="knifeTitle">
                        <img src={artage} />
                    </div>
                    <div className="circle"></div>
                </div>
                <div className="bottomTitle">
                    <div>
                        <div className="verifyTitle">
                            <div>
                                <img src={verify} />
                            </div>
                            <span>
                                Гарантия 100% возврата <br />
                                денежных средств
                            </span>
                        </div>
                        <div className="transportTitle">
                            <div>
                                <img src={transport} />
                            </div>
                            <span>
                                Доставка по Украине, <br />
                                Казахстану и Беларуси
                            </span>
                        </div>
                    </div>

                    <div>
                        <div className="settingsTitle">
                            <div>
                                <img src={settings} />
                            </div>
                            <span>
                                Возможность оформление <br />
                                заказа без регистрации.
                            </span>
                        </div>
                        <div className="procentsTitle">
                            <div>
                                <img src={procents} />
                            </div>
                            <span>
                                Скидки постоянным <br />
                                покупателям.{" "}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* END TITLE */}

            {/* START MAIN CONTENT PAGE */}
            <div className="infoOn992">
                <span>
                    Интернет-магазин сертифицированных Златоустовских ножей
                </span>
                <span>
                    Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем
                    магазине представлен наиболее широкий выбор Златоустовских
                    ножей от Златоустовских Оружейных Фабрик и компаний, мы
                    являемся официальными поставщиками. В нашем магазине Вы
                    можете посмотреть,сравнить,оценить и купить понравившийся
                    златоустовский нож с официальной гарантией, не выходя из
                    дома, имея под рукой только устройство с выходом в интернет
                    (ПК, ноутбук, планшет, смартфон) и телефон. Оформить заказ
                    можно без лишних усилий, Вам необходимо только выбрать нож,
                    нажать кнопку «Купить» перейти в корзину и заполнить
                    предложенные поля, и Ваш заказ уже принят! Наши менеджеры
                    оперативно свяжутся с Вами по телефону и обсудят детали
                    заказа. Мы осуществляем доставку продукции в любой
                    населённый пункт по всей Украине, Казахстану и Беларуси.
                </span>
            </div>
            <div className="AllCategories">
                <div className="FCat categorie">
                    <span>Категории ножей</span>
                    <hr />
                    <ul>
                        <li>
                            <span>Разделочные</span>
                        </li>
                        <li>
                            <span>Туристические</span>
                        </li>
                        <li>
                            <span>Охотничьи</span>
                        </li>
                    </ul>
                    <img src={fCat} />
                </div>
                <div className="SCat categorie">
                    <span>Среднеклинковое оружие</span>
                    <hr />
                    <ul>
                        <li>
                            <span>Разделочные</span>
                        </li>
                        <li>
                            <span>Туристические</span>
                        </li>
                        <li>
                            <span>Охотничьи</span>
                        </li>
                    </ul>
                    <img src={sCat} />
                </div>
                <div className="TCat categorie">
                    <span>Длинноклинковое оружие</span>
                    <hr />
                    <ul>
                        <li>
                            <span>Разделочные</span>
                        </li>
                        <li>
                            <span>Туристические</span>
                        </li>
                        <li>
                            <span>Охотничьи</span>
                        </li>
                    </ul>
                    <img src={tCat} />
                </div>
                <div className="FourCat categorie">
                    <span>Сувенирные изделия</span>
                    <hr />
                    <ul>
                        <li>
                            <span>Разделочные</span>
                        </li>
                        <li>
                            <span>Туристические</span>
                        </li>
                        <li>
                            <span>Охотничьи</span>
                        </li>
                    </ul>
                    <img src={frCat} />
                </div>
                <div className="FifCat categorie">
                    <span>Сопутствующие товары</span>
                    <hr />
                    <ul>
                        <li>
                            <span>Разделочные</span>
                        </li>
                        <li>
                            <span>Туристические</span>
                        </li>
                        <li>
                            <span>Охотничьи</span>
                        </li>
                    </ul>
                    <img src={fiCat} />
                </div>
                <div className="SixCat categorie">
                    <span>Ножевая мастерская</span>
                    <hr />
                    <ul>
                        <li>
                            <span>Разделочные</span>
                        </li>
                        <li>
                            <span>Туристические</span>
                        </li>
                        <li>
                            <span>Охотничьи</span>
                        </li>
                    </ul>
                    <img src={sxCat} />
                </div>
            </div>
            <div>
                <span></span>
                <a></a>
            </div>

            <div className="sliders_div">
                <SliderCards
                    nameSlider="Хит продаж"
                    toPage="Перейти в каталог"
                />
            </div>
            <Block
                nameBlock="Новинки"
                textBlock="Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине представлен наиболее широкий выбор Златоустовских ножей от Златоустовских Оружейных Фабрик и компаний, мы являемся официальными поставщиками."
                toPageBlock="Больше новинок"
            />
            <div className="sliders_div">
                <SliderCards
                    nameSlider="Хит продаж"
                    toPage="Перейти в каталог"
                />
            </div>
            <div className="sliders_div">
                <SliderCards
                    nameSlider="Хит продаж"
                    toPage="Перейти в каталог"
                />
            </div>
            <Block
                nameBlock="Новинки"
                textBlock="Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине представлен наиболее широкий выбор Златоустовских ножей от Златоустовских Оружейных Фабрик и компаний, мы являемся официальными поставщиками."
                toPageBlock="Больше новинок"
            />
            <div className="sliders_div">
                <SliderCards
                    nameSlider="Хит продаж"
                    toPage="Перейти в каталог"
                />
            </div>
            <div className="sliders_div">
                <SliderCards
                    nameSlider="Хит продаж"
                    toPage="Перейти в каталог"
                />
            </div>
            <OursArticles nameblock="Наши статьи" />
            <AdvertisementBlock />
            <div className="sliders_div">
                <SliderCards
                    nameSlider="Хит продаж"
                    toPage="Перейти в каталог"
                />
            </div>
        </div>
    );
}

export default Home;
