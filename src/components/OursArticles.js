import React from 'react'
import { News } from './NewsList'
import NewsHTML from './NewsHTML'
function OursArticles() {
    return (
        <div className='OursArticles'>
            {News.map((test, key) => {
                return (
                    <NewsHTML
                        key={key}
                        imageCard={test.imageCard}
                        nameState={test.nameState}
                        dataState={test.dataState}
                    />
                )
            })}
        </div>
    )
}

export default OursArticles