import React from 'react';
import '../stylesheets/News.css'

function NewsPageFoundation({ BackgroundImageNews, nameState, firstfoto, firstimg, secondomg, thirdimg, }) {
  return (
    <div className='ALLPage'>
      <div className='divwithImage'>
        <img className='BackgroundImageNews' src={BackgroundImageNews} />
        <div className='techPart'>
          <div className='divWithFoto'>
            <img className='BackgroundImageNews' src={firstimg} />
            <div>
              <img className='BackgroundImageNews' src={secondomg} />
              <img className='BackgroundImageNews' src={thirdimg} />
            </div>

          </div>
          <div className='divWithInfo'></div>
        </div>
      </div>
      <div className='contentNews'>
        <div className='MainPart'></div>
      </div>
    </div>
  )
}

export default NewsPageFoundation