import React, { useState, useTransition } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Components.css";
import imgLogo from "../images/icon.png";
import imgLogoW from "../images/iconW.png";
import MobileMenu from "../components/MobileMenu";
import FirstMenu from "../components/Function";
import ua from "../images/ukraine.png";
import en from "../images/england.png";
import ru from "../images/nrussia.png";
import { Trans, useTranslation } from "react-i18next";
import { addEvent } from "../components/Function";
import { langclick } from "../components/Function";
function Navigation() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="navigHead">
            <nav>
                <div className="buttonM" onClick={FirstMenu}>
                    <div>
                        <div className="firstDivM DivM"></div>
                        <div className="secondDivM DivM"></div>
                        <div className="thirdDivM DivM"></div>
                    </div>
                </div>
                {/* Кнопка сверху, которая вызывает меню с 992 пикселей, под ней стоит див с этой меню */}

                <div /* className={Menu? 'menuClose':'menuEscape'} */>
                    <MobileMenu />
                </div>
                <div className="mobileNav">
                    <div className="LogoM">
                        <Link to="/">
                            <img src={imgLogo} />
                        </Link>
                    </div>
                    <div className="navUlPersonM">
                        <Link to="/personal_cabinet">
                            <i class="fas fa-user-alt"></i>
                        </Link>
                    </div>
                </div>
                <ul className="navUl">
                    <li className="navUlHome">
                        <Link to="/">{t("Main")} </Link>
                    </li>
                    <li>
                        <Link to="/delivery">Доставка</Link>
                    </li>
                    <li>
                        <Link to="/news">Новости</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Контакты</Link>
                    </li>
                    <li className="navUlPerson">
                        <Link to="/personal_cabinet">
                            <i class="fas fa-user-alt"></i>{" "}
                            <span className="uCab">Личный кабинет</span>
                        </Link>
                    </li>
                    <li className="UlBurger">
                        <i class="fas fa-bars"></i>
                    </li>
                </ul>
                <div className="loubarHead">
                    <Link to="/">
                        <div className="imgHead">
                            <img src={imgLogo} />
                            <img src={imgLogoW} />
                        </div>
                    </Link>
                    <div className="MCabinet">
                        <Link to="/">
                            <i class="fas fa-user-alt"></i>
                        </Link>
                    </div>
                    <div className="searchLine">
                        <form>
                            <input type="search" placeholder="поиск" />
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </form>
                    </div>
                    <div className="locationHead">
                        <Link to="">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Киев</span>
                        </Link>
                    </div>
                    <div className="telHead">
                        <span>
                            8-800-777-49-67<i class="fas fa-chevron-down"></i>
                        </span>
                        <Link to="">
                            <span>Заказать звонок</span>
                        </Link>
                    </div>
                    <div className="heartAndCartHead">
                        <i class="far fa-heart"></i>
                        <i class="fas fa-shopping-cart"></i>
                        <div className="moneyHead">
                            <span>0 грн.</span>
                            <Link to="">
                                <span>Оформить заказ</span>
                            </Link>
                        </div>
                    </div>
                    <i class="fa-solid fa-earth-europe" onClick={langclick}></i>
                    <div className="languageMenu">
                        <button
                            className="ua"
                            onClick={() => changeLanguage("ua")}
                        >
                            <img src={ua}></img>
                        </button>
                        <button
                            className="en"
                            onClick={() => changeLanguage("en")}
                        >
                            <img src={en}></img>
                        </button>
                        <button
                            className="ru"
                            onClick={() => changeLanguage("ru")}
                        >
                            <img src={ru}></img>
                        </button>
                    </div>
                </div>
                <div className="catalogeHead">
                    <ol className="catalogeHeadOl">
                        <li className="catalogeHeadOlKnife classForLine">
                            <a href="#">Каталог ножей</a>
                            <div className="catalogeHeadDown">
                                <div className="CenterDown leftSpacing">
                                    <ol className="DownOl DownOlf">
                                        <li>Категория ножей</li>
                                        <hr className="linetop"></hr>
                                        <li>
                                            <a href="">Разделочные ножи</a>
                                        </li>
                                        <li>
                                            <a href="">Туристические ножи</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи охотничьи</a>
                                        </li>
                                        <li>
                                            <a href="">Булатные ножи</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из дамаска</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Тактического назначения
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Метательные ножи</a>
                                        </li>
                                        <li>
                                            <a href="">Мачете и кукри</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи кухонные</a>
                                        </li>
                                    </ol>
                                    <ol className="DownOl DownOls">
                                        <li>Производство ножей</li>
                                        <li>
                                            <a href="">Ножи АИР</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи ЗИК</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи ЗЗОСС</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи РОСоружие</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи Оружейник</a>
                                        </li>
                                        <li>
                                            <a href="">Булат Сергея Баранова</a>
                                        </li>
                                        <li>
                                            <a href="">Булат Андрея Умерова</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи Златко</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи Стиль-М</a>
                                        </li>
                                        <li>
                                            <a href="">Оружейная компания</a>
                                        </li>
                                    </ol>
                                    <ol className="DownOl DownOt">
                                        <li>Ножи по маркам стали</li>
                                        <li>
                                            <a href="">
                                                Ножи из стали 40х102С2М
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали 95х18</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали 100х13м</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Ножи из стали 110х18м-ШД
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Ножи из стали ЭИ-107 ТЦ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали 50х14МФ</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали AUS-8</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали К340</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали M390</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали ЭП-766</a>
                                        </li>
                                    </ol>
                                    <ol className="DownOl DownOlfourth">
                                        <li>Заточка и полировка ножей</li>
                                        <li>
                                            <a href="">Паста ГОИ</a>
                                        </li>
                                        <li>
                                            <a href="">Алмазная паста</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Бруски и камни для заточки
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Заточные системы</a>
                                        </li>
                                    </ol>
                                    <ol className="DownOl DownOlfifth">
                                        <li>Ножевая мастерская</li>
                                        <li>
                                            <a href="">Ножевые клинки</a>
                                        </li>
                                        <li>
                                            <a href="">Заготовки для ножей</a>
                                        </li>
                                        <li>
                                            <a href="">Литье для ножей</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Материалы для рукоятей
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Уход за рукоятиями ножей
                                            </a>
                                        </li>
                                    </ol>
                                </div>
                                <hr className="lineb" />
                                <div className="BottomCatalogeHeadDropDown leftSpacing">
                                    <ol className="showallCatKnife">
                                        <li>Смотреть все</li>
                                    </ol>
                                </div>
                            </div>
                        </li>
                        <li className="catalogeHeadOlKLinkKnife classForLine">
                            <a href="#">Клинковое оружие</a>
                            <div className="catalogeHeadDown">
                                <div className="CenterDown leftSpacing">
                                    <ol className="DownOl DownOlf">
                                        <li>Категория ножей</li>
                                        <hr className="linetop"></hr>
                                        <li>
                                            <a href="">Разделочные ножи</a>
                                        </li>
                                        <li>
                                            <a href="">Туристические ножи</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи охотничьи</a>
                                        </li>
                                        <li>
                                            <a href="">Булатные ножи</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из дамаска</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Тактического назначения
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Метательные ножи</a>
                                        </li>
                                        <li>
                                            <a href="">Мачете и кукри</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи кухонные</a>
                                        </li>
                                    </ol>
                                    <ol className="DownOl DownOls">
                                        <li>Производство ножей</li>
                                        <li>
                                            <a href="">Ножи АИР</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи ЗИК</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи ЗЗОСС</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи РОСоружие</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи Оружейник</a>
                                        </li>
                                        <li>
                                            <a href="">Булат Сергея Баранова</a>
                                        </li>
                                        <li>
                                            <a href="">Булат Андрея Умерова</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи Златко</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи Стиль-М</a>
                                        </li>
                                        <li>
                                            <a href="">Оружейная компания</a>
                                        </li>
                                    </ol>
                                    <ol className="DownOl DownOt">
                                        <li>Ножи по маркам стали</li>
                                        <li>
                                            <a href="">
                                                Ножи из стали 40х102С2М
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали 95х18</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали 100х13м</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Ножи из стали 110х18м-ШД
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Ножи из стали ЭИ-107 ТЦ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали 50х14МФ</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали AUS-8</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали К340</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали M390</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали ЭП-766</a>
                                        </li>
                                    </ol>
                                    <ol className="DownOl DownOlfourth">
                                        <li>Заточка и полировка ножей</li>
                                        <li>
                                            <a href="">Паста ГОИ</a>
                                        </li>
                                        <li>
                                            <a href="">Алмазная паста</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Бруски и камни для заточки
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Заточные системы</a>
                                        </li>
                                    </ol>
                                    <ol className="DownOl DownOlfifth">
                                        <li>Ножевая мастерская</li>
                                        <li>
                                            <a href="">Ножевые клинки</a>
                                        </li>
                                        <li>
                                            <a href="">Заготовки для ножей</a>
                                        </li>
                                        <li>
                                            <a href="">Литье для ножей</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Материалы для рукоятей
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Уход за рукоятиями ножей
                                            </a>
                                        </li>
                                    </ol>
                                </div>
                                <hr className="lineb" />
                                <div className="BottomCatalogeHeadDropDown leftSpacing">
                                    <ol className="showallCatKnife">
                                        <li>Смотреть все</li>
                                    </ol>
                                </div>
                            </div>
                        </li>
                        <li className="catalogeHeadOlSuvenir classForLine">
                            <a href="#">Сувенирные изделия</a>
                            <div className="catalogeHeadDown">
                                <div className="CenterDown leftSpacing">
                                    <ol className="DownOl DownOlf">
                                        <li>Категория ножей</li>
                                        <hr className="linetop"></hr>
                                        <li>
                                            <a href="">Разделочные ножи</a>
                                        </li>
                                        <li>
                                            <a href="">Туристические ножи</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи охотничьи</a>
                                        </li>
                                        <li>
                                            <a href="">Булатные ножи</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из дамаска</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Тактического назначения
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Метательные ножи</a>
                                        </li>
                                        <li>
                                            <a href="">Мачете и кукри</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи кухонные</a>
                                        </li>
                                    </ol>
                                    <ol className="DownOl DownOls">
                                        <li>Производство ножей</li>
                                        <li>
                                            <a href="">Ножи АИР</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи ЗИК</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи ЗЗОСС</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи РОСоружие</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи Оружейник</a>
                                        </li>
                                        <li>
                                            <a href="">Булат Сергея Баранова</a>
                                        </li>
                                        <li>
                                            <a href="">Булат Андрея Умерова</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи Златко</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи Стиль-М</a>
                                        </li>
                                        <li>
                                            <a href="">Оружейная компания</a>
                                        </li>
                                    </ol>
                                    <ol className="DownOl DownOt">
                                        <li>Ножи по маркам стали</li>
                                        <li>
                                            <a href="">
                                                Ножи из стали 40х102С2М
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали 95х18</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали 100х13м</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Ножи из стали 110х18м-ШД
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Ножи из стали ЭИ-107 ТЦ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали 50х14МФ</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали AUS-8</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали К340</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали M390</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали ЭП-766</a>
                                        </li>
                                    </ol>
                                    <ol className="DownOl DownOlfourth">
                                        <li>Заточка и полировка ножей</li>
                                        <li>
                                            <a href="">Паста ГОИ</a>
                                        </li>
                                        <li>
                                            <a href="">Алмазная паста</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Бруски и камни для заточки
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Заточные системы</a>
                                        </li>
                                    </ol>
                                    <ol className="DownOl DownOlfifth">
                                        <li>Ножевая мастерская</li>
                                        <li>
                                            <a href="">Ножевые клинки</a>
                                        </li>
                                        <li>
                                            <a href="">Заготовки для ножей</a>
                                        </li>
                                        <li>
                                            <a href="">Литье для ножей</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Материалы для рукоятей
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Уход за рукоятиями ножей
                                            </a>
                                        </li>
                                    </ol>
                                </div>
                                <hr className="lineb" />
                                <div className="BottomCatalogeHeadDropDown leftSpacing">
                                    <ol className="showallCatKnife">
                                        <li>Смотреть все</li>
                                    </ol>
                                </div>
                            </div>
                        </li>
                        <li className="catalogeHeadOlLight classForLine">
                            <a href="#">Фонари ARMYTEK</a>
                            <div className="catalogeHeadDown">
                                <div className="CenterDown leftSpacing">
                                    <ol className="DownOl DownOlf">
                                        <li>Категория ножей</li>
                                        <hr className="linetop"></hr>
                                        <li>
                                            <a href="">Разделочные ножи</a>
                                        </li>
                                        <li>
                                            <a href="">Туристические ножи</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи охотничьи</a>
                                        </li>
                                        <li>
                                            <a href="">Булатные ножи</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из дамаска</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Тактического назначения
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Метательные ножи</a>
                                        </li>
                                        <li>
                                            <a href="">Мачете и кукри</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи кухонные</a>
                                        </li>
                                    </ol>
                                    <ol className="DownOl DownOls">
                                        <li>Производство ножей</li>
                                        <li>
                                            <a href="">Ножи АИР</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи ЗИК</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи ЗЗОСС</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи РОСоружие</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи Оружейник</a>
                                        </li>
                                        <li>
                                            <a href="">Булат Сергея Баранова</a>
                                        </li>
                                        <li>
                                            <a href="">Булат Андрея Умерова</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи Златко</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи Стиль-М</a>
                                        </li>
                                        <li>
                                            <a href="">Оружейная компания</a>
                                        </li>
                                    </ol>
                                    <ol className="DownOl DownOt">
                                        <li>Ножи по маркам стали</li>
                                        <li>
                                            <a href="">
                                                Ножи из стали 40х102С2М
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали 95х18</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали 100х13м</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Ножи из стали 110х18м-ШД
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Ножи из стали ЭИ-107 ТЦ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали 50х14МФ</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали AUS-8</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали К340</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали M390</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали ЭП-766</a>
                                        </li>
                                    </ol>
                                    <ol className="DownOl DownOlfourth">
                                        <li>Заточка и полировка ножей</li>
                                        <li>
                                            <a href="">Паста ГОИ</a>
                                        </li>
                                        <li>
                                            <a href="">Алмазная паста</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Бруски и камни для заточки
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Заточные системы</a>
                                        </li>
                                    </ol>
                                    <ol className="DownOl DownOlfifth">
                                        <li>Ножевая мастерская</li>
                                        <li>
                                            <a href="">Ножевые клинки</a>
                                        </li>
                                        <li>
                                            <a href="">Заготовки для ножей</a>
                                        </li>
                                        <li>
                                            <a href="">Литье для ножей</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Материалы для рукоятей
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Уход за рукоятиями ножей
                                            </a>
                                        </li>
                                    </ol>
                                </div>
                                <hr className="lineb" />
                                <div className="BottomCatalogeHeadDropDown leftSpacing">
                                    <ol className="showallCatKnife">
                                        <li>Смотреть все</li>
                                    </ol>
                                </div>
                            </div>
                        </li>
                        <li className="catalogeHeadOlSoputTov classForLine">
                            <a href="#">Сопутствующие товары</a>
                            <div className="catalogeHeadDown">
                                <div className="CenterDown leftSpacing">
                                    <ol className="DownOl DownOlf">
                                        <li>Категория ножей</li>
                                        <hr className="linetop"></hr>
                                        <li>
                                            <a href="">Разделочные ножи</a>
                                        </li>
                                        <li>
                                            <a href="">Туристические ножи</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи охотничьи</a>
                                        </li>
                                        <li>
                                            <a href="">Булатные ножи</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из дамаска</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Тактического назначения
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Метательные ножи</a>
                                        </li>
                                        <li>
                                            <a href="">Мачете и кукри</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи кухонные</a>
                                        </li>
                                    </ol>
                                    <ol className="DownOl DownOls">
                                        <li>Производство ножей</li>
                                        <li>
                                            <a href="">Ножи АИР</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи ЗИК</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи ЗЗОСС</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи РОСоружие</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи Оружейник</a>
                                        </li>
                                        <li>
                                            <a href="">Булат Сергея Баранова</a>
                                        </li>
                                        <li>
                                            <a href="">Булат Андрея Умерова</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи Златко</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи Стиль-М</a>
                                        </li>
                                        <li>
                                            <a href="">Оружейная компания</a>
                                        </li>
                                    </ol>
                                    <ol className="DownOl DownOt">
                                        <li>Ножи по маркам стали</li>
                                        <li>
                                            <a href="">
                                                Ножи из стали 40х102С2М
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали 95х18</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали 100х13м</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Ножи из стали 110х18м-ШД
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Ножи из стали ЭИ-107 ТЦ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали 50х14МФ</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали AUS-8</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали К340</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали M390</a>
                                        </li>
                                        <li>
                                            <a href="">Ножи из стали ЭП-766</a>
                                        </li>
                                    </ol>
                                    <ol className="DownOl DownOlfourth">
                                        <li>Заточка и полировка ножей</li>
                                        <li>
                                            <a href="">Паста ГОИ</a>
                                        </li>
                                        <li>
                                            <a href="">Алмазная паста</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Бруски и камни для заточки
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Заточные системы</a>
                                        </li>
                                    </ol>
                                    <ol className="DownOl DownOlfifth">
                                        <li>Ножевая мастерская</li>
                                        <li>
                                            <a href="">Ножевые клинки</a>
                                        </li>
                                        <li>
                                            <a href="">Заготовки для ножей</a>
                                        </li>
                                        <li>
                                            <a href="">Литье для ножей</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Материалы для рукоятей
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Уход за рукоятиями ножей
                                            </a>
                                        </li>
                                    </ol>
                                </div>
                                <hr className="lineb" />
                                <div className="BottomCatalogeHeadDropDown leftSpacing">
                                    <ol className="showallCatKnife">
                                        <Link to="/Shop">
                                            <li>Смотреть все</li>
                                        </Link>
                                    </ol>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;
