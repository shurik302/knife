import React from 'react';
import '../stylesheets/Components.css';

function NewsHTML({ imageCard, nameState, dataState }) {
  return (
    <div className='NewsR'>
      <div className='imageNews'><img src={imageCard}></img></div>
      <p>{nameState}</p>
      <p>{dataState}</p>
    </div>
  )
}

export default NewsHTML