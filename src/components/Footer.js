import React from 'react';


/* Перенести из футер в компонент css */

import '../stylesheets/Footer.css';

/* Перенести из футер в компонент css */



import './CheckBox'
import { check } from "../components/CheckBox";
import { checkBtn } from "../components/CheckBox";
import facebook from '../images/facebook.png';
import viber from '../images/viber.png';
import whatsapp from '../images/whatsapp.png';
import telegram from '../images/telegram.png';



function Footer() {
    return (
        <div className='Footer'>
            <div className='FDescription'>
                <p>Златоустовские ножи интернет-магазин "ЗЛАТМАКС"</p>
                <p>Наш интернет-магазин "ЗЛАТМАКС" предлагает Вам ножи очень высокого качества из   города оружейников - Златоуста. Златоустовские ножи известны и популярны среди потребителей как на внутреннем рынке, так и за рубежом: ножи охотничьи, хозяйственные, туристические, рыбацкие, складные и метательные. Нож Златоуста - это идеальный друг и товарищ в повседневной жизни и в экстремальных ситуациях. На многую продукцию распространяется гарантия до 10 лет - это один из главных показателей качества. Для Вас на нашем сайте "zlatmax" предложен огромный ассортимент Златоустовских ножей. Наши менеджеры помогут определиться и подобрать самый лучший Златоустовский нож, ориентируясь на Ваши пожелания.
                </p>
            </div>
            <div className='FInfo'>
                <div>
                    <ol>
                        <li>ИНФОРМАЦИЯ</li>
                        <li><a href=''>Златоустовские ножи <br /> в Москве и Московской <br /> области</a></li>
                        <li><a href=''>Ножевые стали</a></li>
                        <li><a href=''>О нас</a></li>
                        <li><a href=''>Условия оплаты <br /> и доставки</a></li>
                        <li><a href=''>Политика <br /> конфиденциальности</a></li>
                    </ol>
                    <ol>
                        <li>СЛУЖБА ПОДДЕРЖКИ</li>
                        <li><a href=''>Контактная информация</a></li>
                        <li><a href=''>Возврат товара</a></li>
                        <li><a href=''>Карта сайта</a></li>
                    </ol>
                </div>
                <div>
                    <ol>
                        <li>ДОПОЛНИТЕЛЬНО</li>
                        <li><a href=''>Подарочные сертификаты</a></li>
                        <li><a href=''>Партнеры</a></li>
                        <li><a href=''>Товары со скидкой</a></li>
                    </ol>
                    <ol>
                        <li>ЛИЧНЫЙ КАБИНЕТ</li>
                        <li><a href=''>Личный кабинет</a></li>
                        <li><a href=''>История заказов</a></li>
                        <li><a href=''>Мои закладки</a></li>
                        <li><a href=''>Рассылка новостей</a></li>
                    </ol>
                </div>
            </div>
            <hr className='FirstHR'/>
            <div className='FContacts'>
                <div>
                    <ol>
                        <li>КОНТАКТЫ</li>
                        <li><i class="fa-solid fa-phone Con"></i><a href="tel:+88007774967">8 (800) 777-49-67</a></li>
                        <li>
                            <i class="fa-solid fa-clock Con"></i>
                            <span className='ClockSpa'>Пн-Пт <br /> 7:00 - 16:00 (МСК)</span>
                        </li>
                        <li><i class="fa-solid fa-location-dot Con"></i><a target="_blank" href='https://www.google.com/maps/place/Victorinox+Poland+Sp.+z+o.o./@52.2398727,20.9982136,17z/data=!3m1!4b1!4m5!3m4!1s0x471ecc795d83b53b:0x7f863911973584ac!8m2!3d52.2398439!4d21.0004207'> Victorinox Poland Salon Firmowy<br />ul. Ptasia 6</a></li>
                        <li><i class="fa-solid fa-envelope Con"></i>Условия оплаты <br /> и доставки</li>
                    </ol>
                    <ol>
                        <li>ПОЛЕЗНЫЕ ССЫЛКИ</li>
                        <li><a className='Pay' href='#'>Способы оплаты и доставки</a></li>
                    </ol>
                </div>
                <div>
                    <ol>
                        <li>НАША ГАРАНТИЯ</li>
                        <li>Недовольны своей покупкой?
                            Вы можете вернуть ее в течении
                            30 дней с даты получения,
                            согласно <a className='OurRules' href='#'>нашим правилам</a>
                        </li>
                    </ol>
                    <ol>
                        <li>НОВОСТНАЯ РАССЫЛКА</li>
                        <li>Подпишитесь прямо сейчас!</li>
                        <li className='InputL'>
                            <form className='Input'>
                                <input type='text' placeholder='example@gmail.com' />
                                <button className='BtnF' type='button' onClick={checkBtn}>
                                    {/* <i class="fa-solid fa-chevron-right"></i> */}

                                </button>
                            </form>
                        </li>
                        <li className='CheckBOX'>
                            <input className='InputCheck' onClick={check} type='checkbox' /><span>Я прочитал Условия соглашения <br />и согласен с условиями </span>
                        </li>
                    </ol>
                </div>
            </div>
            <div className='MedaiSoc'>
                <img src={facebook}/>
                <img src={viber}/>
                <img src={telegram}/>
                <img src={whatsapp}/>
                
                
            </div>
            <hr />
            <div className='FDetails'>
                <p>Все материалы, размещенные на сайте, носят справочный характер и не являются публичной офертой, определяемойположениями Статьи 437 . При копировании материалов гиперссылка на www.zlatmax.com обязательна!</p>
                <p>Златоустовские ножи www.zlatmax.com ©</p>
            </div>
        </div>
    )
}

export default Footer