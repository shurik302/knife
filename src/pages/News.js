import React from 'react';
import NewsPageFoundation from '../components/NewsPageFoundation';
import bactestknife from '../images/backtestknife.png';
import first_knife from '../images/first_knife.png';
import second_knife from '../images/second_knife.png';
import third_knife from '../images/third_knife.png'

function News() {
    return (
        <div>
            <NewsPageFoundation
            BackgroundImageNews={bactestknife}
            nameState='Всё о ножах: как правильно выбрать'
            firstimg={first_knife}
            secondomg={second_knife}
            thirdimg={third_knife}
            />
        </div>
    )
}

export default News
