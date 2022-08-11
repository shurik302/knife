import React, { useState } from "react";
import "../stylesheets/MobileCSS.css";
import { SecMenu } from "../components/Function";
import { BackSecMenu } from "../components/Function";
import { Categ } from "../components/Function";
import { BackCateg } from "../components/Function";
import { Proizv } from "../components/Function";
import { BackProizv } from "../components/Function";
import { MarkStal } from "../components/Function";
import { BackMarkStal } from "../components/Function";
import { Zatoch } from "../components/Function";
import { BackZatoch } from "../components/Function";
import { Masterskaya } from "../components/Function";
import { BackMasterskaya } from "../components/Function";

function MobileMenu() {
  return (
    <>
      <div className="MobileMenu">
        <ol>
          <li>Личный кабинет </li>
          <li onClick={SecMenu}>
            Каталог товаров
            <i class="fa-solid fa-chevron-right"></i>
          </li>
          <li>Контакты</li>
          <li>Новости</li>
          <li>Оплата и доставка</li>
          <li>О нас</li>
        </ol>
      </div>
      <div
        className="SecondMenu" /* className={Menu? 'SecondMenuEscape':'SecondMenu'} */
      >
        <ol>
          <li onClick={BackSecMenu} className="BackFirstMenu">
            <i class="fa-solid fa-angle-left"></i>Вернуться
          </li>
          <li onClick={Categ}>
            Категория ножей<i class="fa-solid fa-chevron-right"></i>
          </li>
          <li onClick={Proizv}>
            Производство ножей<i class="fa-solid fa-chevron-right"></i>
          </li>
          <li onClick={MarkStal}>
            Ножи по маркам стали<i class="fa-solid fa-chevron-right"></i>
          </li>
          <li onClick={Zatoch}>
            Заточка и полировка ножей<i class="fa-solid fa-chevron-right"></i>
          </li>
          <li onClick={Masterskaya}>
            Ножевая мастерская<i class="fa-solid fa-chevron-right"></i>
          </li>
        </ol>
      </div>
      <div className="Categ">
        <ol>
          <li onClick={BackCateg}>
            <i class="fa-solid fa-angle-left"></i>Вернуться
          </li>
          <li>Разделочные ножи</li>
          <li>Туристические ножи</li>
          <li>Ножи охотничьи</li>
          <li>Булатные ножи</li>
          <li>Ножи из дамаска</li>
          <li>Тактического назначения</li>
          <li>Метательные ножи</li>
          <li>Мачете и кукри</li>
          <li>Ножи кухонные</li>
        </ol>
      </div>
      <div className="Proizv">
        <ol>
          <li onClick={BackProizv}>
            <i class="fa-solid fa-angle-left"></i>Вернуться
          </li>
          <li>Ножи АИР</li>
          <li>Ножи ЗИК</li>
          <li>Ножи ЗЗОСС</li>
          <li>Ножи Уоружие</li>
          <li>Ножи Оружейник</li>
          <li>Булат Сергея Баранова</li>
          <li>Булат Андрея Умерова</li>
          <li>Ножи Златко</li>
          <li>Ножи Стиль-М</li>
          <li>Оружейная компания</li>
        </ol>
      </div>
      <div className="MarkStal">
        <ol>
          <li onClick={BackMarkStal}>
            <i class="fa-solid fa-angle-left"></i>Вернуться
          </li>
          <li>Ножи из стали 40х102С2М</li>
          <li>Ножи из стали 95х18</li>
          <li>Ножи из стали 100х13м</li>
          <li>Ножи из стали 110х18м-ШД</li>
          <li>Ножи из стали ЭИ-107 ТЦ</li>
          <li>Ножи из стали 50х14МФ</li>
          <li>Ножи из стали AUS-8</li>
          <li>Ножи из стали К340</li>
          <li>Ножи из стали M390</li>
          <li>Ножи из стали ЭП-766</li>
        </ol>
      </div>
      <div className="Zatoch">
        <ol>
          <li onClick={BackZatoch}>
            <i class="fa-solid fa-angle-left"></i>Вернуться
          </li>
          <li>Паста ГОИ</li>
          <li>Алмазная паста</li>
        </ol>
      </div>
      <div className="Masterskaya">
        <ol>
          <li onClick={BackMasterskaya}>
            <i class="fa-solid fa-angle-left"></i>Вернуться
          </li>
          <li>Ножевые клинки</li>
          <li>Заготовки для ножей</li>
          <li>Литье для ножей</li>
          <li>Материалы для рукоятей</li>
          <li>Уход за рукоятиями ножей</li>
        </ol>
      </div>
    </>
  );
}

export default MobileMenu;